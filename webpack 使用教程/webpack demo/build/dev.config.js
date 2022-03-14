const webpackMerg = require('webpack-merge');
const baseConfig=require('./base.config');

const webpackConfig = webpackMerg.merge(baseConfig, {
  devServer: {
    contentBase: './dist',
    headers: {
      'X-LeeNeo': 'xingzhihen.com'
    },
    port: '8164',
    inline: true
  }
});

module.exports = webpackConfig;