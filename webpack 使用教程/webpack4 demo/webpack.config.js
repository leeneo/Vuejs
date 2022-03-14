const path = require('path');

// 配合 vue-loader@15.x 以上版本使用
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      // css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // less
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      // url-loader for img
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 当图片资源小于 limit 限定值时，可以成功加载，会将图片编译成 base64 格式（一种可表示二进制数据的编码格式）
            // 当图片资源大于 limit 限定值时，需要使用 file-loader 会将图片打包到 dist 文件夹中
            limit: 14000,
            // 给打包的文件设定命名规则：name--取原文件的 name,hash:8--取8位的 hash 值，ext--取原文件的扩展名
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      // 使用vue 组件，安装 vue-loader 方可配置
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }

    ],
  },
  plugins: [
    // everything under <PROJECT_DIR>/dist/ will be removed
    // new CleanWebpackPlugin(),
    // 入口文件名称管理
    // new HtmlWebpackPlugin({
    //   title: 'Output Management ok',
    //   template: 'index.html'
    // }),
    // vue-loader 15.x 以上版本 需要配合此插件使用
    new VueLoaderPlugin(),
    // 会在 bundle.js.LICENSE.TXT 中添加相关版权信息
    // new webpack.BannerPlugin({
    //   banner: '这里是添加的版权信息，by Leeneo！',
    // }),
    // new UglifyjsWebpackPlugin(),
  ],
  resolve: {
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 导入文件简写 import "Cpn.vue" ==> import "Cpn"
    extensions: ['.js', '.css', '.vue']
  },
  mode: 'development',
  // mode: 'production',

};