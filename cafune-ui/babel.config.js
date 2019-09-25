module.exports = function(api) {
  const { BABEL_MODULE } = process.env;
  const useESModules = BABEL_MODULE !== 'commonjs';

  api && api.cache(false);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs',
          exclude: ['transform-regenerator', 'transform-async-to-generator']
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules
        }
      ],
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
