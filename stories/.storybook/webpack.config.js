const path = require('path');
module.exports = async ({ config }) => {
  config.module.rules = config.module.rules.concat([
    {
      enforce: 'pre',
      test: /\.s[ac]ss$/,
      use: [{
        loader: 'sass-loader',
        options: {
          cwd: path.resolve(__dirname, '../src/components'),
          sourceMap: true,
          includePaths: [ path.resolve(__dirname , '../node_modules') ]
        }
      }]
    },
    { test: /\.(css|less|s[ac]ss|styl)$/,
      include: [ path.resolve(__dirname, '../src/components'), path.resolve(__dirname, '../src/routes') ],
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
      exclude: [ path.resolve(__dirname, '../src/components'), path.resolve(__dirname, '../src/routes'), path.resolve(__dirname, '../stories') ],
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
    util: path.resolve(__dirname, '../src/util'),
    components: path.resolve(__dirname, '../src/components'),
    style: path.resolve(__dirname, '../src/style')
  });

  // console.log(config);
  return config;
}