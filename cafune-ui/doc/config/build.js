const rimraf = require('rimraf');
const { resolve } = require('path');
const { promisify } = require('util');
const { isDir, error } = require('./util');
const runWebpack = require('./lib/webpack/run-webpack');
// const getRouteMap = require('./get-route-map');
async function build() {
  const argv = {
    production: true,
    prerender: false,
    src: 'src',
    cwd: '.',
    dest: 'build',
    sw: false,
    esm: false,
    rhl: false,
    json: false,
    port: 8080,
    template: './template.html',
    config: 'preact.config.js',
    'inline-css': true
  };

  let cwd = resolve(argv.cwd);
  let modules = resolve(cwd, 'node_modules');

  if (!isDir(modules)) {
    return error(
      'No `node_modules` found! Please run `npm install` before continuing.',
      1
    );
  }

  if (argv.clean === void 0) {
    let dest = resolve(cwd, argv.dest);
    await promisify(rimraf)(dest);
  }

  let stats = await runWebpack(argv, false);
  // await getRouteMap();
  if (argv.json) {
    await runWebpack.writeJsonStats(stats);
  }
}

build();
