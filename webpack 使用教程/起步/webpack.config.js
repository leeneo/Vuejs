// 请求 path 包，用变量 __dirname 替换当前绝对路径
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 打包文件入口
  entry: './src/main.js',
  // 打包文件出口
  output: {
    // 2.修改output对象的path属性
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  plugins: [
    // 功能已更新，与官网文档不同
    // new CleanWebpackPlugin(), 
    // 入口文件名称管理
    // new HtmlWebpackPlugin({ 
    //   title: 'Output Management ok'
    // })
    // vue-loader 15.x 以上版本 需要配合此插件使用
    new VueLoaderPlugin(),
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
    extensions:['.js','.css','.vue']
  },
};