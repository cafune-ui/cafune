#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { getComponentName, sortByModulePath } = require('./util/comp');
// const styleRoot = path.resolve(process.cwd(), './style');
const compRoot = path.resolve(process.cwd(), './src');
// const testRoot = path.resolve(process.cwd(), './__test__/components');
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
  }
];

inquirer.prompt(questions).then(answers => {
  const { name, isHasStyle } = answers;
  const compName = getComponentName(name);
  // writeMapping(compName, name);
  writeEntry(compName, name);
  console.log('writing component');
  writeComp(compName, name, isHasStyle);
  // if (isHasStories) {
  //   writeStories(compName, name);
  // }
  console.log('writing doc');
  writeDoc(compName, name);
  console.log('writing test');
  writeTestSuit(compName, name);
});

function writeEntry(compName, name) {
  const entryPath = path.resolve(compRoot, 'index.ts');
  if (!fs.existsSync(entryPath)) {
    fs.writeFileSync(entryPath, '');
  }
  const entryFile = fs.readFileSync(entryPath, 'utf-8');
  const modExports = entryFile.trim().split('\n') || [];
  const compDir = `${compRoot}/${name}`;
  fs.mkdirSync(compDir);
  // add to entry, in order to use component by tying 'import { comp } from 'components';
  console.log(`Adding new components: ${compName} to entry`);
  const exportName = `export { default as ${compName} } from './${name}';`;
  if (modExports.indexOf(exportName) === -1) {
    modExports.push(exportName);
  }
  sortByModulePath(modExports);
  fs.writeFileSync(entryPath, `${modExports.join('\n')}\n`);
}

function writeTestSuit(compName, name) {
  const testCompDir = `${compRoot}/${name}/test`;
  if (!fs.existsSync(testCompDir)) {
    fs.mkdirSync(testCompDir);
  }
  fs.writeFileSync(
    `${testCompDir}/index.test.js`,
    `
import ${compName} from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';
describe('${compName}', () => {
  it('should render properly', () => {
    const wrapper = shallow(<${compName} />);
    expect(wrapper).toMatchSnapshot();
  });
});
    `
  );
}

function writeDoc(compName, name) {
  const docCompDir = `${docRoot}/src/routes/comp/${name}`;
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
  }
  // create js & css to component folder
  fs.writeFileSync(
    `${compDir}/index.tsx`,
    `import { Component, h } from 'preact';\nimport cx from 'classnames';\n\nclass ${compName} extends Component {\n  static defaultProps = {\n    prefix: 'caf-'\n  };\n  render({ prefix, className, ...restProps }) {\n    return <div className={cx(prefix, className)} {...restProps}>${compName}</div>;\n  }\n}\nexport default ${compName};\n`
  );
  if (isHasStyle) {
    fs.writeFileSync(`${compDir}/index.scss`, '');
    const entryCssPath = `${compRoot}/index.scss`;
    if (!fs.existsSync(entryCssPath)) {
      fs.writeFileSync(entryCssPath, '');
    }
    const entryCss = fs.readFileSync(entryCssPath, 'utf-8');
    const styleImports = entryCss.trim().split('\n') || [];
    const importName = `@import './${name}/index.scss';`;
    if (styleImports.indexOf(importName) === -1) {
      styleImports.push(importName);
    }
    fs.writeFileSync(entryCssPath, `${styleImports.join('\n')}\n`);
  }
}
