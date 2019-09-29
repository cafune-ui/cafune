const fs = require('fs');
const glob = require('fast-glob');
const fse = require('fs-extra');
const path = require('path');
const dependencyTree = require('dependency-tree');

const sass = require('node-sass');
const csso = require('csso');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

const dir = path.join(__dirname, '../src');

const excludes = [
  'index.ts',
  'index.js',
  'index.scss',
  'index.css',
  'style',
  'util',
  '.DS_Store'
];

function getComponents() {
  const dirs = fs.readdirSync(dir);
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1);
}
const components = getComponents();

function destEntryFile(component, filename, ext = '') {
  const compdep = analyzeDependencies(component);
  const deps = compdep.map(dep => getStyleRelativePath(component, dep, ext));

  const srcEntry = path.join(dir, component, `style/${filename}`);
  const esEntry = path.join(
    __dirname,
    '../es',
    component,
    `style/${filename.replace(/ts/, 'js')}`
  );
  const libEntry = path.join(
    __dirname,
    '../lib',
    component,
    `style/${filename.replace(/ts/, 'js')}`
  );
  const esContent = deps.map(dep => `import '${dep}';\n`).join('');
  const libContent = deps.map(dep => `require('${dep}');\n`).join('');
  try {
    fse.outputFileSync(srcEntry, esContent);
    fse.outputFileSync(esEntry, esContent);
    fse.outputFileSync(libEntry, libContent);
  } catch (e) {
    console.error(e);
  }
}

// analyze component dependencies
function analyzeDependencies(component) {
  const checkList = ['index'];
  search(
    dependencyTree({
      directory: dir,
      filename: path.join(dir, component, 'index.tsx'),
      filter: path => !~path.indexOf('node_modules'),
      tsConfig: './tsconfig.json'
    }),
    component,
    checkList
  );
  checkList.push(component);
  // try {
  //   if (fse.pathExistsSync(getAssetsStylePath(component))) {
  //     fse.copySync(getAssetsStylePath(component), getStylePath(component))
  //     fse.copySync(getAssetsStylePath(component), getLibStylePath(component))
  //   }
  // } catch (err) {
  //   console.error(err)
  // }
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
        if (!checkList.includes(item) && item !== component) {
          checkList.push(item);
        }
      });
  });
}

function getStylePath(component, ext = '.scss') {
  return path.join(__dirname, `../es/${component}/index${ext}`);
}

function replaceSeq(path) {
  return path.split(path.sep).join('/');
}

function getStyleRelativePath(component, style, ext) {
  return replaceSeq(
    path.relative(
      path.join(__dirname, `../es/${component}/style`),
      getStylePath(style, ext)
    )
  );
}

function checkComponentHasStyle(component) {
  return fse.existsSync(getStylePath(component));
}

components.forEach(component => {
  // css entry
  destEntryFile(component, 'index.ts', '.css');
  destEntryFile(component, 'scss.ts', '.scss');
});

async function compileSass(sassCodes, paths) {
  const outputs = await Promise.all(
    sassCodes.map(
      (source, index) =>
        new Promise((resolve, reject) => {
          sass.render(
            {
              file: paths[index]
            },
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        })
    )
  );
  return outputs.map(item => item.css);
}

async function compilePostcss(cssCodes, paths) {
  const postcssConfig = await postcssrc();
  const outputs = await Promise.all(
    cssCodes.map((css, index) =>
      postcss(postcssConfig.plugins).process(css, { from: paths[index] })
    )
  );

  return outputs.map(item => item.css);
}

async function compileCsso(cssCodes) {
  return cssCodes.map(css => csso.minify(css).css);
}

async function dest(output, paths) {
  await Promise.all(
    output.map((css, index) =>
      fse.writeFile(paths[index].replace('.scss', '.css'), css)
    )
  );
}

// compile component css
async function compile() {
  let codes;
  const paths = await glob(
    ['./src/**/*.scss', './es/**/*.scss', './lib/**/*.scss'],
    {
      absolute: true
    }
  );

  codes = await Promise.all(paths.map(path => fse.readFile(path, 'utf-8')));
  codes = await compileSass(codes, paths);
  codes = await compilePostcss(codes, paths);
  codes = await compileCsso(codes);

  await dest(codes, paths);
}

compile();
