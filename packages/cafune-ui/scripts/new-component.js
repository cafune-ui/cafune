#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const styleRoot = path.resolve(process.cwd(), './style');
const compRoot = path.resolve(process.cwd(), './components');
const storiesRoot = path.resolve(process.cwd(), './stories');
const testRoot = path.resolve(process.cwd(), './__test__/components');
function main() {
  const args = process.argv;
  const compName = args[2];
  if (compName === undefined) {
    console.error('Component name is required');
    process.exit();
  }

  addFiles(compName);
}

main();

function sortByModulePath(lines) {
  lines.sort((a, b) => {
    const modPathRegexp = /'.+'/;
    const modA = modPathRegexp.exec(a)[0];
    const modB = modPathRegexp.exec(b)[0];

    return modA.localeCompare(modB);
  });

  return lines;
}

function firstAlphabetUpper(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function getComponentName(name) {
  let componentName;
  if (name.includes('-')) {
    componentName = name
      .split('-')
      .map(item => {
        return firstAlphabetUpper(item);
      })
      .join('');
  } else {
    componentName = firstAlphabetUpper(name);
  }
  return componentName;
}

function addFiles(name) {
  const entryPath = path.resolve(compRoot, 'index.js');
  let escapePush = false;
  if (!fs.existsSync(entryPath)) {
    fs.writeFileSync(entryPath, `export * from './${name}';`);
    escapePush = true;
  }
  const entryFile = fs.readFileSync(entryPath, 'utf-8');
  const modExports = entryFile.trim().split('\n') || [];
  const compDir = `${compRoot}/${name}`;
  const compName = getComponentName(name);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir);
    // add to entry, in order to use component by tying 'import { comp } from 'components';
    console.log(`Adding new components: ${compName} to index.js`);
    !escapePush && modExports.push(`export * from './${name}';`);
    sortByModulePath(modExports);
    fs.writeFileSync(entryPath, `${modExports.join('\n')}\n`);
    // add to mapping, for code splitting;
    console.log(`Adding new components: ${compName} to mapping.json`);
    const mappingJsonPath = path.resolve(compRoot, 'mapping.json');
    if (!fs.existsSync(mappingJsonPath)) {
      fs.writeFileSync(mappingJsonPath, '{}');
    }
    const mappingJsonFile = fs.readFileSync(mappingJsonPath, 'utf-8');
    const mappingJson = JSON.parse(mappingJsonFile);
    mappingJson[compName] = {
      js: `components/${name}`
    };
    fs.writeFileSync(mappingJsonPath, JSON.stringify(mappingJson, null, 2));
  } else {
    console.log(`${compName} already exists, please choose another name.`);
    process.exit(2);
  }
  // create js & css to component folder
  fs.writeFileSync(
    `${compDir}/index.js`,
    `import { Component } from 'preact';\n\nexport class ${compName} extends Component {\n  render() {\n    return <div />;\n  }\n}\nexport default ${compName};\n`
  );
  fs.writeFileSync(`${styleRoot}/${name}.scss`, '')
  const entryCssPath = `${styleRoot}/index.scss`;
  escapePush = false;
  if (!fs.existsSync(entryCssPath)) {
    fs.writeFileSync(entryCssPath, `@import './${name}';`);
    escapePush = true;
  }
  const entryCss = fs.readFileSync(entryCssPath, 'utf-8');
  const styleImports = entryCss.trim().split('\n') || [];
  !escapePush && styleImports.push(`@import './${name}'`);
  fs.writeFileSync(entryCssPath, `${styleImports.join('\n')}\n`);

  const testCompDir = `${testRoot}/${name}`;
  if (!fs.existsSync(testCompDir)) {
    fs.mkdirSync(testCompDir);
  } else {
    console.log(`${compName} already exists, please choose another name.`);
    process.exit(2);
  }
  fs.writeFileSync(
    `${testCompDir}/index.test.js`,
    `
import { ${compName} } from 'components';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';
  `
  );
  // create stories to write components doc
  fs.writeFileSync(
    `${storiesRoot}/${name}.stories.js`,
    `
import { storiesOf } from '@storybook/preact';
import { ${compName} } from 'components';
import './style.css';
import notes from './markdown/${name}.md';

storiesOf('Component|${compName}', module).add(
  '${compName}',
  () => (),
  {
    notes
  }
);
    `
  );
  fs.writeFileSync(
    `${storiesRoot}/markdown/${name}.md`,
    `
## 引入
import { ${compName} } from 'components';
## 使用

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
    `
  );
}
