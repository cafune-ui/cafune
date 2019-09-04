const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const dependencyTree = require('dependency-tree');

const dir = path.join(__dirname, '../components');

const excludes = [
  'index.ts',
  'index.less',
  'utils',
  '.DS_Store'
];

function getComponents() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../components'));
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1);
};
const components = getComponents();


function destEntryFile(component, filename, ext = '') {
  const compdep = analyzeDependencies(component);


  deps = compdep.map(dep =>
    getStyleRelativePath(component, dep, ext)
  );

  // const esEntry = path.join(dir, component, `style/${filename}`);
  const libEntry = path.join(
    __dirname,
    '../lib',
    component,
    `style/${filename}`
  );
  // const esContent = deps.map(dep => `import '${dep}';`).join('\n');
  const libContent = deps.map(dep => `require('${dep}');`).join('\n');
  try {
    // fs.outputFileSync(esEntry, esContent);
    fse.outputFileSync(libEntry, libContent);
  } catch(e) {
    console.error(e)
  }
}

// analyze component dependencies
function analyzeDependencies(component) {
  const checkList = ['index'];
  search(
    dependencyTree({
      directory: dir,
      filename: path.join(dir, component, 'index.jsx'),
      filter: path => !~path.indexOf('node_modules')
    }),
    component,
    checkList
  );
  checkList.push(component);
  try {
    if (fse.pathExistsSync(getAssetsStylePath(component))) {
      fse.copySync(getAssetsStylePath(component), getStylePath(component))
      fse.copySync(getAssetsStylePath(component), getLibStylePath(component))
    }
  } catch (err) {
    console.error(err)
  }
  return checkList.filter(item => checkComponentHasStyle(item));
}

function search(tree, component, checkList) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList);
    components
      .filter(item =>
        key
          .replace(dir, '')
          .split('/')
          .includes(item)
      )
      .forEach(item => {
        if (
          !checkList.includes(item) &&
          item !== component
        ) {
          checkList.push(item);
        }
      });
  });
}

function getAssetsStylePath(component, ext = '.scss') {
  return path.join(__dirname, `../style/${component}${ext}`);
 }

function getStylePath(component, ext = '.scss') {
 return path.join(__dirname, `../components/${component}/style${ext}`);
}

function getLibStylePath(component, ext = '.scss') {
  return path.join(__dirname, `../lib/${component}/style${ext}`);
 }

function replaceSeq(path) {
  return path.split(path.sep).join('/');
}

function getStyleRelativePath(component, style, ext) {
  return replaceSeq(
    path.relative(
      path.join(__dirname, `../components/${component}/style`),
      getStylePath(style, ext)
    )
  );
}

function checkComponentHasStyle(component) {
  return fs.existsSync(getAssetsStylePath(component));
}

components.forEach(component => {
  // css entry
  destEntryFile(component, 'index.js', '.css');
});