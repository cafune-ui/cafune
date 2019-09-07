#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const styleRoot = path.resolve(process.cwd(), './style');
const compRoot = path.resolve(process.cwd(), './components');
// const storiesRoot = path.resolve(process.cwd(), './stories');
const docRoot = path.resolve(process.cwd(), './doc');
const testRoot = path.resolve(process.cwd(), './__test__/components');
const compMapPath = `${docRoot}/comp-type.json`;
const { getComponentName } = require('./util/comp');

function main() {
  const args = process.argv;
  const name = args[2];
  if (name === undefined) {
    console.error('Component name is required');
    process.exit();
  }
  const compName = getComponentName(name);
  // remove(compName);
  // deleteMapping(compName);
  deleteEnty(name);
  deleteComp(name);
  deleteTestSuit(name);
  // deleteStories(name);
  deleteDoc(name);
  // deleteScss(name);
  console.log('delete completed');
}

main();

// 删除mapping 中的项目
// function deleteMapping(compName) {
//   const mappingJsonPath = path.resolve(compRoot, 'mapping.json');
//   if (fs.existsSync(mappingJsonPath)) {
//     const mappingJsonFile = fs.readFileSync(mappingJsonPath, 'utf-8');
//     const mappingJson = JSON.parse(mappingJsonFile);
//     if (mappingJson[compName]) {
//       delete mappingJson[compName];
//       fs.writeFileSync(mappingJsonPath, JSON.stringify(mappingJson, null, 2));
//     }
//   }
// }
// 删除入口文件
function deleteEnty(name) {
  const entryPath = path.resolve(compRoot, 'index.js');
  if (fs.existsSync(entryPath)) {
    const entryFile = fs.readFileSync(entryPath, 'utf-8');
    const modExports = entryFile.trim().split('\n') || [];
    const exportIndex = modExports.indexOf(`export * from './${name}';`);
    if (exportIndex !== -1) {
      modExports.splice(exportIndex, 1);
      fs.writeFileSync(entryPath, `${modExports.join('\n')}\n`);
    }
  }
}

// 递归删除文件，如果是文件夹，因其包含文件无法直接unlink，需要递归删除
function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    if (fs.lstatSync(path).isDirectory()) {
      fs.readdirSync(path).forEach(file => {
        var curPath = path + '/' + file;
        if (fs.lstatSync(curPath).isDirectory()) {
          // recurse
          deleteFolderRecursive(curPath);
        } else {
          // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }
}

// 删除组件的目录
function deleteComp(name) {
  const compDir = `${compRoot}/${name}`;
  deleteFolderRecursive(compDir);
}

// 删除组件的css
// function deleteScss(name) {
//   deleteFolderRecursive(`${compRoot}/${name}/style.scss`);
//   const entryPath = `${styleRoot}/index.scss`;
//   if (fs.existsSync(entryPath)) {
//     const entryFile = fs.readFileSync(entryPath, 'utf-8');
//     const modExports = entryFile.trim().split('\n') || [];
//     const exportIndex = modExports.indexOf(`@import './${name}';`);
//     if (exportIndex !== -1) {
//       modExports.splice(exportIndex, 1);
//       fs.writeFileSync(entryPath, `${modExports.join('\n')}\n`);
//     }
//   }
// }

// 删除stories 下的js 和md
// function deleteStories(name) {
//   const stories = `${storiesRoot}/${name}.stories.js`;
//   deleteFolderRecursive(stories);
//   const storiesMd = `${storiesRoot}/markdown/${name}.md`;
//   deleteFolderRecursive(storiesMd);
// }

// 删除文档
function deleteDoc(name) {
  const doc = `${docRoot}/pages/components/${name}`;
  deleteFolderRecursive(doc);
  // const compMap = JSON.parse(fs.readFileSync(compMapPath, 'utf-8'));
  // const compList = compMap.components.list;
  // compList.
}


// 删除测试用例
function deleteTestSuit(name) {
  const testCompDir = `${testRoot}/${name}`;
  deleteFolderRecursive(testCompDir);
}
