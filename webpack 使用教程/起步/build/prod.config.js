const webpackMerg = require('webpack-merge');
const baseConfig=require('./base.config');

// 第三方 js 压缩插件
// 因为 webpack 5 与 webpack-dev-server 现有版本不兼容，我才回退到 webpack 4
// 注意：
// webpack 5 需要移除此项，webpack 5 （内置压缩功能）打包的 js 是已经压缩的了
// webpack 5 打包时，如设置有 BannerPlugin ，会单独生成一个 bundle.js.LICENSE.txt 文件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = webpackMerg.merge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin(),
  ],
});

module.exports = webpackConfig;