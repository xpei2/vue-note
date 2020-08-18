const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
    devServer: {
        // 指定为哪一个文件夹提供本地服务，默认是根文件夹，这里填写的是./dist
        contentBase: './dist',
        // 实时监听
        inline: true
    }
})