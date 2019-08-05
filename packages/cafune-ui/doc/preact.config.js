import path from 'path';
export default (config, env, helpers) => {
  const babelLoader = helpers.getLoadersByName(config, 'babel-loader');
  if (babelLoader) {
    babelLoader.forEach(({ rule }) =>
      rule.options.plugins.push([
        path.resolve(process.cwd(), './node_modules/babel-plugin-import'),
        {
          libraryName: 'cafune',
          libraryDirectory: 'components'
        },
        'cafune'
      ])
    );
  }
  config.resolveLoader.alias['caf-md-loader'] = require.resolve(
    './util/md-loader'
  );
  config.module.loaders.push({
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
    docmd: path.resolve(__dirname, './markdown'),
    util: path.resolve(__dirname, './util')
  });
};
