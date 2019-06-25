import path from 'path';
export default (config, env, helpers) => {
  const babelLoader = helpers.getLoadersByName(config, 'babel-loader');
  if (babelLoader) {
    babelLoader.forEach(({ rule }) =>
      rule.options.plugins.push(
        path.resolve(__dirname, '../../babel-plugin-components')
      )
    );
  }
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    cafune: path.resolve(__dirname, '../')
  });
};
