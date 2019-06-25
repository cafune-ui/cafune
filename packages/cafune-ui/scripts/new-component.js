#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { getComponentName, sortByModulePath } = require('./util/comp');
const styleRoot = path.resolve(process.cwd(), './style');
const compRoot = path.resolve(process.cwd(), './components');
const storiesRoot = path.resolve(process.cwd(), './stories');
const testRoot = path.resolve(process.cwd(), './__test__/components');
console.clear();
const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'name',
    message: `What is the component's name (in CamelCase or kebab-case)`,
    validate(value) {
      if (value === '') {
        return 'Component name is required';
      }
      const compDir = `${compRoot}/${value}`;
      if (fs.existsSync(compDir)) {
        return `${value} already exists, please choose another name.`;
      }
      return true;
    }
  },
  {
    type: 'confirm',
    name: 'isHasStyle',
    message: 'Would this component have a style.scss? ',
    default: true
  },
  {
    type: 'confirm',
    name: 'isHasStories',
    message: 'Would this component have a stories.js? ',
    default: true
  }
];

inquirer.prompt(questions).then(answers => {
  const { name, isHasStyle, isHasStories } = answers;
  const compName = getComponentName(name);
  writeMapping(compName, name);
  writeEntry(compName, name);
  writeComp(compName, name, isHasStyle);
  if (isHasStories) {
    writeStories(compName, name);
  }
  writeTestSuit(compName, name);
});

function writeTestSuit(compName, name) {
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
}

function writeStories(compName, name) {
  fs.writeFileSync(
    `${storiesRoot}/${name}.stories.js`,
    `
  import { storiesOf } from '@storybook/preact';
  import { ${compName} } from 'components';
  import './style.css';
  import 'style/${name}.css';
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

function writeMapping(compName, name) {
  // add to mapping, for code splitting;
  console.log(`Adding new components: ${compName} to mapping.json`);
  const mappingJsonPath = path.resolve(compRoot, 'mapping.json');
  if (!fs.existsSync(mappingJsonPath)) {
    fs.writeFileSync(mappingJsonPath, '{}');
  }
  const mappingJsonFile = fs.readFileSync(mappingJsonPath, 'utf-8');
  const mappingJson = JSON.parse(mappingJsonFile);
  mappingJson[compName] = {
    js: `components/${name}`,
    css: [name]
  };
  fs.writeFileSync(mappingJsonPath, JSON.stringify(mappingJson, null, 2));
}

function writeEntry(compName, name) {
  const entryPath = path.resolve(compRoot, 'index.js');
  if (!fs.existsSync(entryPath)) {
    fs.writeFileSync(entryPath, '');
  }
  const entryFile = fs.readFileSync(entryPath, 'utf-8');
  const modExports = entryFile.trim().split('\n') || [];
  const compDir = `${compRoot}/${name}`;
  fs.mkdirSync(compDir);
  // add to entry, in order to use component by tying 'import { comp } from 'components';
  console.log(`Adding new components: ${compName} to index.js`);
  modExports.push(`export * from './${name}';`);
  sortByModulePath(modExports);
  fs.writeFileSync(entryPath, `${modExports.join('\n')}\n`);
}

function writeComp(compName, name, isHasStyle) {
  const compDir = `${compRoot}/${name}`;
  // create js & css to component folder
  fs.writeFileSync(
    `${compDir}/index.js`,
    `import { Component } from 'preact';\n\nexport class ${compName} extends Component {\n  render() {\n    return <div />;\n  }\n}\nexport default ${compName};\n`
  );
  if (isHasStyle) {
    fs.writeFileSync(`${styleRoot}/${name}.scss`, '')
    const entryCssPath = `${styleRoot}/index.scss`;
    if (!fs.existsSync(entryCssPath)) {
      fs.writeFileSync(entryCssPath, '');
    }
    const entryCss = fs.readFileSync(entryCssPath, 'utf-8');
    const styleImports = entryCss.trim().split('\n') || [];
    styleImports.push(`@import './${name}';`);
    fs.writeFileSync(entryCssPath, `${styleImports.join('\n')}\n`);
  }
}
