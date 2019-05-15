const path = require('path');
module.exports = async ({ config }) => {
  config.module.rules = config.module.rules.concat([
    {
      enforce: 'pre',
      test: /\.s[ac]ss$/,
      use: [{
        loader: 'sass-loader',
        options: {
          cwd: path.resolve(process.cwd(), 'components'),
          sourceMap: true,
          includePaths: [ path.resolve(process.cwd() , 'node_modules') ]
        }
      }]
    },
    { test: /\.(css|less|s[ac]ss|styl)$/,
      include: [ path.resolve(process.cwd(), 'components') ],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]__[hash:base64:5]',
            importLoaders: 1,
            sourceMap: false
          }
        }, {
          loader: 'postcss-loader',
        }
      ]
    },
    { test: /\.(css|less|s[ac]ss|styl)$/,
      exclude: [ path.resolve(process.cwd(), 'components'), path.resolve(process.cwd(), 'stories') ],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]__[hash:base64:5]',
            importLoaders: 1,
            sourceMap: false
          }
        }, {
          loader: 'postcss-loader',
        }
      ]
    }
  ]);
  config.resolve.extensions = config.resolve.extensions.concat(['.scss', '.css']);
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    util: path.resolve(process.cwd(), 'util'),
    components: path.resolve(process.cwd(), 'components'),
    style: path.resolve(process.cwd(), 'style')
  });
  return config;
}