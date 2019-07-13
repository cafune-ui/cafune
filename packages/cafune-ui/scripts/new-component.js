#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { getComponentName, sortByModulePath } = require('./util/comp');
const styleRoot = path.resolve(process.cwd(), './style');
const compRoot = path.resolve(process.cwd(), './components');
const testRoot = path.resolve(process.cwd(), './__test__/components');
const docRoot = path.resolve(process.cwd(), './doc');
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
];

inquirer.prompt(questions).then(answers => {
  const { name, isHasStyle, isHasStories } = answers;
  const compName = getComponentName(name);
  // writeMapping(compName, name);
  // writeEntry(compName, name);
  writeComp(compName, name, isHasStyle);
  // if (isHasStories) {
  //   writeStories(compName, name);
  // }
  writeDoc(compName, name);
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

function writeDoc(compName, name) {
  const docCompDir = `${docRoot}/pages/components/${name}`;
  if (!fs.existsSync(docCompDir)) {
    fs.mkdirSync(docCompDir);
  } else {
    console.log(`${compName} already exists, please choose another name.`);
    process.exit(2);
  }
  fs.writeFileSync(
    `${docCompDir}/index.js`,
    `
  import { ${compName} } from 'cafune';
  import { Component } from 'preact';
  export default class ${compName}Comp extends Component {
    render() {
      return <div />
    }
  }
    `
  );
}
function writeComp(compName, name, isHasStyle) {
  const compDir = `${compRoot}/${name}`;
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir);
  } else {
    console.log(`${compName} already exists, please choose another name.`);
    process.exit(2);
  }
  // create js & css to component folder
  fs.writeFileSync(
    `${compDir}/index.jsx`,
    `import { Component } from 'preact';\nimport PropTypes from 'prop-types';\n\nclass ${compName} extends Component {\n  static defaultProps = {\n    prefix: 'caf-'\n  };\n  render() {\n    return <div />;\n  }\n}\nexport default ${compName};\n`
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
