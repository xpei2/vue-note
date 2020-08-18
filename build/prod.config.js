const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
    // 插件
    plugins: [
        // 压缩功能
        new uglifyJsPlugin()
    ]
})