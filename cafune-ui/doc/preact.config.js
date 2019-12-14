import path from 'path';
export default (config, env, helpers) => {
  if (env.isProd) {
    config.output.publicPath = '/cafune/';
  }
  const postLoader = helpers.getLoadersByName(config, 'postcss-loader');
  if (postLoader) {
    postLoader.forEach(({ loader }) => delete loader.options);
  }
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
    // cafune: path.resolve(__dirname, '../'),
    '@docmd': path.resolve(__dirname, './markdown'),
    util: path.resolve(__dirname, './util')
  });
};
