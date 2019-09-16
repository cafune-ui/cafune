import path from 'path';
export default (config, env, helpers) => {
  if (env.isProd) {
    config.output.publicPath = '/cafune/';
  }
  // const babelLoader = helpers.getLoadersByName(config, 'babel-loader');
  // if (babelLoader) {
  //   babelLoader.forEach(({ rule }) =>
  //     rule.options.plugins.push([
  //       path.resolve(process.cwd(), './node_modules/babel-plugin-import'),
  //       {
  //         libraryName: 'cafune',
  //         style: true
  //       },
  //       'cafune'
  //     ])
  //   );
  // }
  // config.resolveLoader.alias['caf-md-loader'] = require.resolve(
  //   './util/md-loader'
  // );
  // config.resolveLoader.alias['caf-code-loader'] = require.resolve(
  //   './util/code-loader'
  // );
  const postLoader = helpers.getLoadersByName(config, 'postcss-loader');
  if (postLoader) {
    postLoader.forEach(({ loader }) => delete loader.options);
  }
  // helpers.getLoadersByName(config, 'css-loader').forEach(({ loader }) => {
  //   // loader.loader = 'typings-for-css-modules-loader';
  //   loader.options = Object.assign(loader.options, {
  //     camelCase: true,
  //     banner:
  //       '// This file is automatically generated from your CSS. Any edits will be overwritten.',
  //     namedExport: true,
  //     silent: true
  //   });
  // });
  config.resolveLoader.alias = Object.assign({}, config.resolveLoader.alias, {
    'caf-md-loader': require.resolve('./util/md-loader'),
    'caf-code-loader': require.resolve('./util/code-loader')
  });
  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader'
      },
      {
        loader: 'caf-md-loader'
      }
    ]
  });
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    cafune: path.resolve(__dirname, '../'),
    '@docmd': path.resolve(__dirname, './markdown'),
    util: path.resolve(__dirname, './util')
  });
};