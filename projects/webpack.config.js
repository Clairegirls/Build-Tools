/**
 * Created by Administrator on 2017/2/20.
 */
    //导入webpack
const webpack=require('webpack');
//webpack的html模板插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//把css单独打包到一个单独文件以及编译sass或者less
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//压缩js的插件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//css自动添加浏览器前缀的
//const autoprefixer = require('autoprefixer');
const path=require("path");
module.exports={
    //2.1 入口文件配置
    entry:__dirname+'/app/js/main.js',
    //2.2 打包后的输出路径
    output:{
        path:__dirname+'/public/build',
        //输出hash名字压缩的js
        //filename:"[chunkhash:8].[name].js"
        filename:"build.js"
    },
    //3配置loader
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test:/\.css$/,
                use:['css-loader', "postcss-loader"]
            },
            {
                test:/\.json$/,
                loader:"json-loader"
            }
        ]
    },
    //5 插件
    plugins:[
        //把css重新命名的插件包含hash
        //new ExtractTextPlugin("[name]-[hash:3].css"),
        new ExtractTextPlugin("style.css"),
        //内置热更新
        new webpack.HotModuleReplacementPlugin(),
        //压缩css
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        }),
        //压缩js
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            //9、1此时会在build下自动创建一个index.html自动引入webpack编译后对应的JS，执行：webpack-dev-server
            //启动服务器默认就是public下刚刚自动生成的index.html
            //template:__dirname+'/app/index.temp.html'
            template:path.join(__dirname, "/app/index.temp.html")
        })
    ],
    //4 服务器配置
    devServer:{
        //contentBase: path.join(__dirname, "public"),
        port: 8080
    }
}