const runWebpack = require('./lib/webpack/run-webpack');

const argv = {
  production: false,
  src: 'src',
  cwd: '.',
  esm: false,
  sw: false,
  rhl: false,
  json: true,
  port: 2333,
  template: './src/template.html',
  config: 'preact.config.js'
};
runWebpack(argv, true);
