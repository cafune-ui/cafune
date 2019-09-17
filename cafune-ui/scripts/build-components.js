const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');

const srcDir = path.join(__dirname, '../components');
const esDir = path.join(__dirname, '../es');
// const libDir = path.join(__dirname, '../lib');

const babelConfig = {
  configFile: path.join(__dirname, '../babel.config.js')
};

const scriptRegExp = /\.(js|ts|tsx)$/;
const isDir = dir => fs.lstatSync(dir).isDirectory();
const isCode = file => !/(test)$/.test(file);
const isScript = file => scriptRegExp.test(file);

function compile(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }

    if (isDir(filePath)) {
      return compile(filePath);
    }

    if (isScript(file)) {
      const { code } = babel.transformFileSync(filePath, babelConfig);
      fs.removeSync(filePath);
      fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code);
    }
  });
}

fs.emptyDirSync(esDir);

fs.copySync(srcDir, esDir);
compile(esDir);
