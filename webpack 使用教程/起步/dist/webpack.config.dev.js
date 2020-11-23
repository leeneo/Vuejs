"use strict";

var path = require('path'); //1.引入path包
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  //打包文件入口
  output: {
    //打包文件出口
    path: path.resolve(__dirname, 'dist'),
    //2.修改output对象的path属性
    filename: 'bundle.js'
  },
  plugins: [// new CleanWebpackPlugin(), //功能已更新，与官网文档不同
    // new HtmlWebpackPlugin({ //入口文件名称管理
    //   title: 'Output Management ok'
    // })
  ],
  module: {
    rules: [//css配置    
      //安装了style-loader css-loader方可配置    
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      //图片和字体文件配置
      //安装了file-loader方可配置
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader']
      // },
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
  }
};