const postcssPresetEnv = require("postcss-preset-env")

module.exports = {
  ident: 'postcss',
  plugins: () => [
    postcssPresetEnv({
      stage: 0,
      browsers: ['last 2 versions', 'ie >= 8', 'iOS >= 7', 'Android >= 4.0']
    })
  ]
};
