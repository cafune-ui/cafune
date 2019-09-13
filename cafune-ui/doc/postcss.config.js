module.exports = {
  plugins: {
    precss: {},
    autoprefixer: {
      remove: false,
      browsers: [
        'defaults',
        'not ie < 11',
        'last 2 versions',
        '> 1%',
        'iOS 7',
        'last 3 iOS versions'
      ]
    },
    'postcss-px2rem': { remUnit: 14 }
  }
};
