// 请求 path 包，用变量 __dirname 替换当前绝对路径
const path = require('path');

// 自动打包 index.html，并引入打包好的 js
const HtmlWebpackPlugin = require('html-webpack-plugin');

// to remove/clean your build folder(s).
// By default, this plugin will remove all files inside webpack's output.path directory, 
// as well as all unused webpack assets after every successful rebuild.
// clean-webpack-plugin 3.0之前版本使用方式略有不同
// const CleanWebpackPlugin = require('clean-webpack-plugin'); //旧版本使用方式，使用时需要传参
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

// 配合 vue-loader@15.x 以上版本使用
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 使用 BannerPlugin ，需要引入 webapck
const webpack = require('webpack');

// 第三方 js 压缩插件
// 因为 webpack 5 与 webpack-dev-server 现有版本不兼容，我才回退到 webpack 4
// 注意：
// webpack 5 需要移除此项，webpack 5 （内置压缩功能）打包的 js 是已经压缩的了
// webpack 5 打包时，如设置有 BannerPlugin ，会单独生成一个 bundle.js.LICENSE.txt 文件
// webpack4 中UglifyjsPlugin 的压缩功能，被optimization.minimize
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
  mode: 'development',
  // 打包文件入口
  entry: './src/main.js',
  // 打包文件出口
  output: {

    // 2.修改output对象的path属性
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

    // 引入 HtmlWebpackPlugin 后，就不需要设置 publicPath 了
    // publicPath: 'dist/'

  },
  plugins: [
    // everything under <PROJECT_DIR>/dist/ will be removed
    new CleanWebpackPlugin(),

    // 入口文件名称管理
    // 此 plugin 通过设置 title 可以动态设置 html 页面的 title
    // 模板页的 title不会正确显示，但 dist 中的html title 确实会变
    new HtmlWebpackPlugin({
      title: 'webpack demo HtmlWebpackPlugin title',
      template: 'webpack 使用帮助.html'
    }),
    // vue-loader 15.x 以上版本 需要配合此插件使用
    new VueLoaderPlugin(),
    // 会在 bundle.js.LICENSE.TXT 中添加相关版权信息
    new webpack.BannerPlugin({
      banner: '这里是添加的版权信息，by Leeneo！',
    }),

    // webpack4 中UglifyjsPlugin 的压缩功能，被optimization.minimize
    // new UglifyjsWebpackPlugin(),
  ],
  module: {
    rules: [
      // css配置    
      // 安装了style-loader css-loader方可配置    
      {
        test: /\.css$/,
        // css-loader 只负责将 css 文件进行加载
        // style-loader 负责将样式加载到 DOM 中
        // 使用多个 loader时 ,webpack 读取的顺序是从右向左，所以 style-loader 要放在 css-loader 前面
        use: ['style-loader', 'css-loader']
      },
      // 链式调用 css-loader,style-loader,less-loader 
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }, ]
      },
      // 图片和字体文件配置
      // 安装了url-loader 或者 file-loader 方可配置
      // url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL
      // 超过限定大小，需要使用 file-loader
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
      // 将 ES6 语法转为浏览器更为兼容的 ES5 语法
      {
        test: /\.js$/,
        // 排除 node_modules 等目录下的 js 文件
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 开启此项配置需要额外配置 .bablerc 文件
            // presets: ['@babel/preset-env'],
            presets: ['es2015']
          }
        }
      },
      // 使用.vue 组件，安装 vue-loader 方可配置
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: ['file-loader']
      // },
      //xml文件配置
      //安装了csv-loader xml-loader方可配置
      // {
      //   test: /\.(csv|tsv)$/,
      //   use: ['csv-loader']
      // },
      // {
      //   test: /\.xml$/,
      //   use: ['xml-loader']
      // }
    ]
  },
  resolve: {
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 导入文件简写 
    extensions: ['.js', '.css', '.vue']
  },
  devServer: {
    contentBase: './dist',
    headers: {
      'X-LeeNeo': 'xingzhihen.com'
    },
    port: '8164',
    inline: true
  }
};

module.exports = webpackConfig;