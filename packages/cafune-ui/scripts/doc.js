const fs = require('fs');
const del = require('del');
const path = require('path');
const glob = require('glob');
const docgen = require('react-docgen');

const mdRoot = path.resolve(process.cwd(), './stories/markdown');
if (fs.existsSync(mdRoot)) {
  del.sync(mdRoot);
}
fs.mkdirSync(mdRoot);
function generatePropTab(props, showTitle = true) {
  let md = '';
  if (props && Object.keys(props).length) {
    md += `${
      showTitle ? '\n## 配置项\n' : ''
    }| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |\n| --- | --- | --- | --- | --- | --- |\n`;
    for (const i in props) {
      const item = props[i];
      const desc = item.description;
      const defaultVal = item.defaultValue
        ? `\`${item.defaultValue.value}\``
        : '-';
      const requireTxt = item.required ? '✅ ' : '❌';
      if (item.type) {
        let typeName = item.type.name;
        let backupOption = '-';
        if (typeName === 'enum') {
          backupOption = item.type.value
            .map(ele => `\`${ele.value}\``)
            .join(',');
        } else if (typeName === 'shape') {
          const shape = item.type.value;
          let val = '';
          for (const i in shape) {
            const item = shape[i];
            val += `${i} - ${item.name}(${item.required ? '✅ ' : '❌'})<br>`;
          }
          typeName = val;
        }
        md += `| ${i} | ${desc} | ${typeName} | ${defaultVal} | ${backupOption} | ${requireTxt} |\n`;
      }
    }
  }
  return md;
}
const compTasks = {};
function generateCompMd(compPath, name, isAppend = false) {
  const content = fs.readFileSync(compPath, 'utf-8');
  try {
    const doc = docgen.parse(content);
    let md = '';
    const { displayName, description, props } = doc;
    const descs = description.split('@example');
    let example;
    let desc = description;
    if (descs[1]) {
      example = descs[1];
      desc = descs[0].replace(/\n/g, '');
    }
    const mainMdPath = `${mdRoot}/${name}.md`;
    compTasks[name] = compTasks[name] || {};
    if (!isAppend) {
      if (!fs.existsSync(mainMdPath)) {
        md += `# ${displayName} - ${desc}\n\n## 引入\n\`\`\`jsx\nimport { ${displayName} } from 'components';\n\`\`\`\n`;
        if (example) {
          md += `## 使用\n${example}\n`;
        }
        md += generatePropTab(props);
      } else {
        md = fs.readFileSync(mainMdPath, 'utf-8');
      }
      for (const i in compTasks[name].comp) {
        const item = compTasks[name].comp[i];
        if (!item.isWritten) {
          md += item.text;
          item.isWritten = true;
        }
      }
      fs.writeFileSync(mainMdPath, md);
    } else {
      compTasks[name].comp = compTasks[name].comp || {};
      if (!compTasks[name].comp[displayName]) {
        compTasks[name].comp[displayName] = {
          text: `\n\n---\n\n### ${displayName} 配置项\n\n${generatePropTab(
            props,
            false
          )}`
        };
      }
      generateCompMd(compPath.replace(/\/(\w|-)+\.jsx/, '/index.jsx'), name);
    }
  } catch (e) {
    console.log(name);
    console.error(e);
  }
}

const compRoot = path.resolve(process.cwd(), './components/');
glob(`${compRoot}/*/*.jsx`, (err, files) => {
  files.forEach(async item => {
    const dirName = path.dirname(item);
    generateCompMd(
      item,
      dirName.replace(compRoot, '').replace('/', ''),
      !/index\.jsx?/.test(item)
    );
  });
});
