const fs = require('fs');
const del = require('del');
const path = require('path');
const glob = require('glob');
const docgen = require('react-docgen');

const mdRoot = path.resolve(process.cwd(), './doc/markdown/components');

/**
 * 获取复杂类型属性
 * @param {obj} props 属性对象
 * @param {any} raw 原始数据
 */
function getSignature(props, raw = '') {
  if (props) {
    const result = props.map(item => {
      const { key, value } = item;
      let desc = '-';
      if (raw) {
        const pat = new RegExp(`\\* (\\S+)\\n\\s+\\*\\/\\n\\s+${key}`, 'g');
        let patExec = pat.exec(raw);
        if (patExec) desc = patExec[1];
      }
      const { typeName, backupOption } = getTypeName(value, value.required);
      return {
        key,
        name: Array.isArray(typeName) ? typeName.join(' / ') : typeName,
        desc,
        backupOption,
        required: value.required
      };
    });
    return result;
  }
  return [];
}

function getTypeName(type, required) {
  let typeName = type.name;
  let backupOption = '-';
  const shape = type.value || type.elements;
  let val;
  switch (typeName) {
    case 'enum':
      if (shape && shape.every(ele => /'.+?'/.test(ele.value)))
        typeName = 'string';
      backupOption = shape.map(ele => ele.value);
      break;
    case 'Array':
      typeName = type.raw;
      break;
    case 'union':
      typeName = shape.map(item => {
        if (item.name === 'enum') {
          return `[${item.value.map(ele => ele.value).join(',')}]`;
        }
        if (item.name === 'literal') {
          return `\`${item.value}\``;
        }
        return item.name;
      });
      if (shape && shape.every(ele => ele.name === 'literal')) {
        typeName = 'string';
        backupOption = shape.map(ele => ele.value);
      }
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
      typeName =
        type.signature && type.signature.properties
          ? getSignature(type.signature.properties, type.raw)
          : type.raw;

      break;
  }
  return { typeName, backupOption };
}
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
      defaultValue = defaultValue ? defaultValue.value || defaultValue : '-';

      const type = item.type || item.tsType;
      if (type) {
        const { typeName, backupOption } = getTypeName(type, required);
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
  const pat = new RegExp(`@(.+?)\\n([\\s\\S]+?)\\n---`, 'g');
  let desc = description;
  const addition = [];
  let patMatch = pat.exec(desc);
  while (patMatch) {
    addition.push(`\n ## ${patMatch[1]}\n${patMatch[2]}`);
    patMatch = pat.exec(desc);
  }
  if (pat.test(description)) {
    desc = description.replace(pat, '').replace(/\n/g, '');
  }
  const result = {
    displayName,
    desc,
    addition,
    props: getProps(props)
  };
  // if (example) result.example = example;
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
  const typeArr = [];
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
        defaultValue = `\`${defaultValue.replace(/\n/g, '')}\``;
      }
      if (typeof typeName !== 'string') {
        if (Array.isArray(typeName)) {
          const isStrList = typeName.every(item => typeof item === 'string');
          // typeName = typeName.map(item => {
          //   if (typeof item !== 'string')
          //     return `${item.key}: ${item.name} ${
          //       item.required ? '✅ ' : '❌'
          //     }`;
          //   return item;
          // });
          if (isStrList) {
            typeName = typeName.join(' / ');
          } else {
            const nTypeName = `${name}-options`;
            typeArr.push({
              name: nTypeName,
              list: typeName
            });
            typeName = nTypeName;
          }
        } else {
          typeName = `\`${JSON.stringify(typeName)}\``;
        }
      }
      md += `| ${name} | ${description} | ${typeName.replace(
        /\|/g,
        '&#124;'
      )} | ${defaultValue} | ${backupOption} | ${requireTxt} |\n`;
    });
  }
  if (typeArr.length) {
    typeArr.forEach(item => {
      const { name, list } = item;
      md += `\n\n ### ${name} 说明\n| 参数 | 说明 | 类型 | 备选项 | 是否必须 |\n| --- | --- | --- | --- | --- |\n`;
      list.forEach(prop => {
        const { key, desc, name, required, backupOption } = prop;
        const requireTxt = required ? '✅ ' : '❌';
        md += `| ${key} | ${desc} | ${name.replace(
          /\|/g,
          '&#124;'
        )}} | ${backupOption} | ${requireTxt} |\n`;
      });
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
      const { displayName, desc, addition, props } = info;
      md += `# ${displayName} - ${desc}\n\n## 引入\n\`\`\`jsx\nimport { ${displayName} } from 'cafune';\n\`\`\`\n`;
      if (addition && addition.length) {
        md += addition.join('\n');
        md += '\n';
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

const compRoot = path.resolve(process.cwd(), './src/');
function generateDoc(comp = '*') {
  glob(`${compRoot}/${comp}/*.?(jsx|tsx)`, (err, files) => {
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
      };
    }
    fs.writeFileSync(
      './doc/src/comp-info.json',
      JSON.stringify(newCompInfo, null, 2)
    );
  });
}

function main() {
  const args = process.argv;
  const name = args[2];
  if (name === undefined) {
    if (fs.existsSync(mdRoot)) {
      del.sync(mdRoot);
    }
    fs.mkdirSync(mdRoot);
    generateDoc();
  } else {
    if (!fs.existsSync(mdRoot)) {
      fs.mkdirSync(mdRoot);
    }
    generateDoc(name);
  }
  // process.exit();
}

main();
