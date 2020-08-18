const path = require('path'); //path的一个node包
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口
    entry: './src/main.js',
    //出口
    output: {
        //动态获取路径，dist就是项目打包的文件夹
        path: path.resolve(__dirname, '../dist'),
        //文件名字
        filename: '[name].js',
        //给处理后的图片添加路径
        // publicPath: 'dist/'
    },
    // 配置规则
    module: {
        rules: [{
                test: /\.css|less$/,
                // css-loader  只负责将css文件进行加载
                // style-loader 负责将样式添加到dom中
                // 使用多个loader时，从右往左读取，所以不能换位置
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                        // 大于limit时，需要使用file-loader模块进行加载，并且需要在上面出口output添加属性publickPath: 'dist/'
                        //默认8192
                        limit: 15000,
                        //给处理后的图片添加命名规则和指定文件夹
                        name: 'img/[name].[hash:8].[ext]'
                    },
                }]
            },
            {
                test: /\.js$/,
                // exclude：排除  include包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    // resolve:解决
    resolve: {
        //解决文件类型简写
        extensions: ['.js', '.css', '.vue', '.html', '.json'],
        // alias：别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // 插件
    plugins: [
        // 版权插件
        new webpack.BannerPlugin('最终版权归小培所有'),
        // 管理html文档的插件，自动添加js到文件中
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // 引入jquery框架
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}