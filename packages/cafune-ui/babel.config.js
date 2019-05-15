module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/syntax-dynamic-import',
    '@babel/transform-object-assign',
    '@babel/plugin-proposal-class-properties',
    'transform-export-extensions',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/transform-react-constant-elements',
    ['@babel/transform-react-jsx', { pragma: 'h' }],
    [
      'babel-plugin-jsx-pragmatic',
      {
        module: 'preact',
        export: 'h',
        import: 'h'
      }
    ]
  ]
};
