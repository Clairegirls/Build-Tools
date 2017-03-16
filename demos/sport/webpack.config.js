/**
 * Created by wangjianfei on 2017/3/16.
 */
var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname+'/src/entry.js',
    output: {
        //webpack2 输出路径配置
        path: path.resolve(__dirname, 'build'),
        filename: 'first-build.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {//6、编译es6配置
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
    plugins: [
        //1追加作者信息插件
        new webpack.BannerPlugin("Copyright jiucheng!->Email:jiucheng0605@sina.com"),
        //2 使用htnl模板插件
        new HtmlWebpackPlugin({
            //2、1此时会在build下自动创建一个index.html自动引入webpack编译后对应的JS，执行：webpack-dev-server
            //启动服务器默认就是build下刚刚自动生成的index.html
            template:__dirname+'/build/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    //contentBase:__dirname+"/build", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        })
    ]
};