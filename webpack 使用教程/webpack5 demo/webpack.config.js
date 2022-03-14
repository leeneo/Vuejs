const path = require('path');

// 配合 vue-loader@15.x 以上版本使用
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
      // bable loader 配置项
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //     },
      //   }
      // },
      // 使用vue 组件，安装 vue-loader 方可配置
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  plugins: [
    // vue-loader 15.x 以上版本 需要配合此件使用
    new VueLoaderPlugin(),
    // new HtmlWebpackPlugin(),
  ],
  resolve: {
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 导入文件简写 
    extensions: ['.js', '.css', '.vue']
  },
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  mode: 'development',
  // mode: 'production',
  stats: {
    preset: 'minimal',
    errorDetails: true,
  }
};