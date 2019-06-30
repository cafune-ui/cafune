
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry:'./components/index.js',
  output:{
    path: path.join(__dirname ,'./dist/'),
    filename: 'preact-cafuneui.js',
    library: 'cafuneui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  browserlist: [
    'defaults',
    'not ie < 11',
    'last 2 versions',
    '> 1%',
    'iOS 7',
    'last 3 iOS versions'
  ],
  externals:{
    'preact': 'preact',
    'noop':'noop',
    'object-assign':'object-assign',
    'classnames':'classnames',
  },
  module:{
    rules: [
      {
        test:/\.jsx?$/i,
        loader:'babel-loader',
        options: {
          presets:['@babel/env'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-transform-object-assign',
            '@babel/plugin-proposal-class-properties',
            'transform-export-extensions',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-transform-react-constant-elements',
            ['@babel/transform-react-jsx', { pragma: 'h' }],
          ]
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.scss/i,
        use: [{
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // defaults to production
    }),
  ],
  resolve: {
    alias: {
      util: path.resolve(__dirname, './util'),
      components: path.resolve(__dirname, './components')
    }
  },
  optimization: {
    minimize: false,
  },
};