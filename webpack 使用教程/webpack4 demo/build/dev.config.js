const configkMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = configkMerge(baseConfig, {
    devServer: {
        contentBase: './dist'
    }
})