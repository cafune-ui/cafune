const fs = require('fs');
const path = require('path');

module.exports = function getRouteMap() {
  const routeJs = fs.readFileSync(
    path.resolve(process.cwd(), './src/route.js'),
    'utf-8'
  );

  let fileList = fs.readdirSync(path.resolve(process.cwd(), './build'));

  const routeReg = '<(\\w+) (path=".+?")?.+?\\/>';
  const importReg = name =>
    `import ${name || '(\\w+)'} from '.\\/routes\\/(.+?)\\/?'`;

  const routeList = routeJs.match(new RegExp(routeReg, 'g'));
  const importList = routeJs.match(new RegExp(importReg(), 'g'));

  function transformReg(url) {
    let result = '^\\/';
    const routeArr = url.split('/');
    result += routeArr
      .map((ele, ind) => {
        if (ele.substr(0, 1) === ':') {
          if (/:(.+)\?/.test(ele))
            return `(.+)?${routeArr[ind + 1] ? '\\/' : ''}`;
          return `.+${routeArr[ind + 1] ? '\\/' : ''}`;
        }
        const nextItem = routeArr[ind + 1];
        if (nextItem) {
          return ele ? `${ele}\\/${/:(.+)\?/.test(nextItem) ? '?' : ''}` : '';
        } else {
          return ele;
        }
      })
      .join('');
    result += '$';
    return result;
  }
  const routeMap = routeList.map(ele => {
    const matches = ele.match(new RegExp(routeReg));
    let [, RouteName, pathDir] = matches;
    const imReg = new RegExp(importReg(RouteName));
    const importMatch = importList.find(ele => imReg.test(ele));
    const route = importMatch.match(imReg)[1];

    let result = {};
    const matchCss = fileList.find(item =>
      new RegExp(`route-${route}.+\\.css`).test(item)
    );
    if (pathDir) {
      pathDir = pathDir.match(/path="(.+?)"/)[1];
      let urlReg = transformReg(pathDir);
      result = {
        urlReg,
        routeName: route,
        pathDir
      };
      if (matchCss) {
        result.css = matchCss;
      }
    } else {
      result = {
        urlReg: '.+',
        routeName: 'error',
        pathDir
      };
      if (matchCss) {
        result.css = matchCss;
      }
    }
    return result;
  });
  fs.writeFileSync(
    path.resolve(process.cwd(), './build/route-map.json'),
    JSON.stringify(routeMap, null, 2)
  );
};
