module.exports = function(api) {
  const { BABEL_MODULE, NODE_ENV } = process.env;
  const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test';

  api && api.cache(false);

  return {
    compact: false,
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs',
          exclude: ['transform-regenerator', 'transform-async-to-generator']
        }
      ]
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-object-assign',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      [
        '@babel/plugin-transform-react-jsx',
        { pragma: 'h', pragmaFrag: 'Fragment' }
      ],
      'babel-plugin-macros'
    ]
  };
};