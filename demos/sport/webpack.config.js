/**
 * Created by wangjianfei on 2017/3/16.
 */
const webpack = require('webpack');
const path = require('path');
//1导入HtmlWebpackPlugin插件,作用按需求生成html页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
//2 导入ExtractTextPlugin插件,作用提取代码中的css生成独立的CSS文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: __dirname+'/src/entry.js',
    output: {
        //webpack2 输出路径配置
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[id].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { //3.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            },
            {//6、编译es6配置
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query:{
                    presets:['es2015']
                }
            },
            {
                //url-loader处理图片URL,如果图片小于limit值直接生成`base64` 格式的`dataUrl`,否则输出图片,name参数指定输出目录和图片名
                //url-loader依赖file-loader
                //image-webpack-loader是用来压缩图片的,主要是透明PNG
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=8192&name=img/[name].[hash].[ext]',
                    'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
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