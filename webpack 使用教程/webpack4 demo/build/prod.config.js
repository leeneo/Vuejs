// 通过 (compiler)=>函数引入，可以省略头部声明
// const terserPlugin = require('terser-webpack-plugin');

const configkMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = configkMerge(baseConfig,{
    optimization: {
        // 是否开启压缩
        minimize: true,

        // 允许你通过提供一个或多个定制过的 TerserPlugin 实例，覆盖默认压缩工具(minimizer)。
        // 因为uglifyjs不支持es6语法，所以用terser-webpack-plugin替代uglifyjs-webpack-plugin
        // terser-webpack-plugin安装：yarn add terser-webpack-plugin -D
        minimizer: [
            // 添加 minimizer 的方式 new Minimizer() 或者 (compiler)=>{}
            // new terserPlugin({}),

            (compiler) => {
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                    terserOptions: {
                        mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
                        output: {
                            comments: false
                        },
                        compress: {
                            drop_debugger: true, //清理debugger
                            drop_console: true, //清理所有的log函数.
                            pure_funcs: ['console.log'] // 如果要清理特定的函数比如console.info，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
                        }
                    }
                }).apply(compiler);
            },
        ]

    }
})