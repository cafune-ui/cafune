#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// const styleRoot = path.resolve(process.cwd(), './style');
const compRoot = path.resolve(process.cwd(), './components');
// const storiesRoot = path.resolve(process.cwd(), './stories');
const docRoot = path.resolve(process.cwd(), './doc');
// const testRoot = path.resolve(process.cwd(), './__test__/components');
const compMapPath = `${docRoot}/comp-type.json`;
// const { getComponentName } = require('./util/comp');

function main() {
  const args = process.argv;
  const name = args[2];
  if (name === undefined) {
    console.error('Component name is required');
    process.exit();
  }
  deleteEnty(name);
  deleteComp(name);
  deleteDoc(name);
  console.log('delete completed');
}

main();

// 删除入口文件
function deleteEnty(name) {
  const entryJsPath = path.resolve(compRoot, 'index.js');
  if (fs.existsSync(entryJsPath)) {
    const entryFile = fs.readFileSync(entryJsPath, 'utf-8');
    const modExports = entryFile.trim().split('\n') || [];
    const exportIndex = modExports.indexOf(`export * from './${name}';`);
    if (exportIndex !== -1) {
      modExports.splice(exportIndex, 1);
      fs.writeFileSync(entryJsPath, `${modExports.join('\n')}\n`);
    }
  }
  const entryStylePath = path.resolve(compRoot, 'index.scss');
  if (fs.existsSync(entryStylePath)) {
    const entryFile = fs.readFileSync(entryStylePath, 'utf-8');
    const modExports = entryFile.trim().split('\n') || [];
    const exportIndex = modExports.indexOf(`@import './${name}';`);
    if (exportIndex !== -1) {
      modExports.splice(exportIndex, 1);
      fs.writeFileSync(entryStylePath, `${modExports.join('\n')}\n`);
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

// 删除文档
function deleteDoc(name) {
  const doc = `${docRoot}/src/routes/comp/${name}`;
  deleteFolderRecursive(doc);
}