const fs = require('fs');
const del = require('del');
const path = require('path');
const glob = require('glob');
const docgen = require('react-docgen');

const mdRoot = path.resolve(process.cwd(), './doc/markdown');
if (fs.existsSync(mdRoot)) {
  del.sync(mdRoot);
}
fs.mkdirSync(mdRoot);

/**
 * 格式化属性列表
 * @param {obj} props 属性对象
 */
function getProps(props) {
  const propsList = [];
  if (props && Object.keys(props).length) {
    for (const name in props) {
      const item = props[name];
      let { description, defaultValue, required } = item;
      defaultValue = defaultValue ? defaultValue.value || '-' : '-';

      const type = item.type || item.tsType;
      if (type) {
        let typeName = type.name;
        let backupOption = '-';
        const shape = type.value;
        let val;
        switch (typeName) {
          case 'enum':
            if (item.type.value.every(ele => /'.+?'/.test(ele.value))) typeName = 'string';
            backupOption = item.type.value.map(ele => ele.value);
            break;
          case 'union':
            typeName = type.value.map(item => {
              if (item.name === 'enum') {
                return `[${item.value.map(ele => ele.value).join(',')}]`
              }
              return item.name;
            });
            // typeName = type.raw.split('|');
            // if (typeName.every(ele => /'.+?'/.test(ele))) typeName = 'string';
            // if (type.elements) {
            //   const options = type.elements
            //     .map(ele => ele.value)
            //     .filter(ele => !!ele);
            //   backupOption = options && options.length ? options : '-';
            // }
            break;
          case 'shape':
            val = [];
            for (const i in shape) {
              const item = shape[i];
              val.push({
                key: i,
                name: item.name,
                required
              });
            }
            typeName = val;
            break;
          case 'signature':
            typeName = type.raw;
            try {
              // formate to json string first;
              let typeJson = typeName
                .replace(/(\\n|\s)/g, '')
                .replace(/:(.+?)(?=[,}])/g, `:"$1"`)
                .replace(/['"]?([\w-]+)['"]?(?=:)/g, `"$1"`);
              typeJson = JSON.parse(typeJson);
              typeName = typeJson;
            } catch (e) {
              // do nothing when the type is unvalid
            }
            break;
        }
        propsList.push({
          name,
          description,
          typeName,
          defaultValue,
          backupOption,
          required
        });
      }
    }
  }
  return propsList;
}
/**
 * 格式化docgen 生成的数据
 * @param {object} doc docgen生成的数据
 */
function getInfo(doc) {
  const { displayName, description, props } = doc;
  const descs = description.split('@example');
  let example;
  let desc = description;
  if (descs[1]) {
    example = descs[1];
    desc = descs[0].replace(/\n/g, '');
  }
  const result = {
    displayName,
    desc,
    props: getProps(props)
  };
  if (example) result.example = example;
  return result;
}

const compInfo = {};
/**
 * 生成并格式化组件信息
 * @param {string} compPath 组件路径
 * @param {string} name 组件名
 * @param {boolean} isAppend 是否需要附加到主组件
 */
function formateCompDoc(compPath, name, isAppend = false) {
  const content = fs.readFileSync(compPath, 'utf-8');
  try {
    const doc = docgen.parse(content, null, null, { filename: compPath });
    const docInfo = getInfo(doc);
    compInfo[name] = compInfo[name] || {};
    if (!isAppend) {
      compInfo[name].info = docInfo;
      compInfo[name].desc = docInfo.desc;
    } else {
      compInfo[name].chidlren = (compInfo[name].chidlren || []).concat(docInfo);
    }
  } catch (e) {
    console.log(name);
    console.error(e);
  }
}

function generatePropTab(props, showTitle = true) {
  let md = '';
  if (props && props.length) {
    md += `${
      showTitle ? '\n## 配置项\n' : ''
    }| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |\n| --- | --- | --- | --- | --- | --- |\n`;
    props.forEach(item => {
      let { name, description, typeName, defaultValue, backupOption } = item;
      const requireTxt = item.required ? '✅ ' : '❌';
      if (Array.isArray(backupOption)) {
        backupOption = backupOption.map(item => `\`${item}\``).join(',');
      }
      if (defaultValue !== '-' && typeof defaultValue === 'string') {
        defaultValue = `\`${defaultValue}\``;
      }
      if (typeof typeName !== 'string') {
        if (Array.isArray(typeName)) {
          typeName = typeName.map(item => `\`${item}\``).join('/');
        } else {
          typeName = `\`${JSON.stringify(typeName)}\``;
        }
      }
      md += `| ${name} | ${description} | ${typeName} | ${defaultValue} | ${backupOption} | ${requireTxt} |\n`;
    });
  }
  return md;
}
function generateCompMd(compInfo) {
  if (compInfo && Object.keys(compInfo).length) {
    for (const name in compInfo) {
      let md = '';
      const comp = compInfo[name];
      const { info, chidlren = [] } = comp;
      const { displayName, desc, props, example } = info;
      md += `# ${displayName} - ${desc}\n\n## 引入\n\`\`\`jsx\nimport { ${displayName} } from 'components';\n\`\`\`\n`;
      if (example) {
        md += `## 使用\n${example}\n`;
      }
      md += generatePropTab(props);
      if (chidlren.length) {
        chidlren.forEach(item => {
          md += `\n### ${item.displayName} 配置项\n`;
          md += generatePropTab(item.props, false);
        });
      }
      const mainMdPath = `${mdRoot}/${name}.md`;
      fs.writeFileSync(mainMdPath, md);
    }
  }
}

const compRoot = path.resolve(process.cwd(), './components/');
glob(`${compRoot}/*/*.jsx`, (err, files) => {
  files.forEach(item => {
    const dirName = path.dirname(item);
    formateCompDoc(
      item,
      dirName.replace(compRoot, '').replace('/', ''),
      !/index\.(t|j)sx?/.test(item)
    );
  });
  generateCompMd(compInfo);
  const newCompInfo = {};
  for (const i in compInfo) {
    const item = compInfo[i];
    newCompInfo[i] = {
      desc: item.desc,
      displayName: item.info.displayName
    }
  }
  fs.writeFileSync('./doc/comp-info.json', JSON.stringify(newCompInfo, null, 2));
});
