//模块化思想
//1启动server webpack-dev-server
//2模块化开发commonjs
//3版本号控制 hash  chunkhash
//4 css，sass引入
// 5html自定义模板
// 6抽离css
//7 压缩合并JS
//8 用babel编译es6,需要创建.babelrc文件
var webpack=require('webpack');
//4 配置HTML 模板 ,插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//6 把css抽离
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    //1 配置入口
    entry:'./src/js/index.js',
    // 1.1 如果有多个入口
    //entry: ['./src/js/serch.js','./src/index.js'],
    //1.2 入口以对象的话，称为chunks，
    // 对象行形式 filename不能是一个了
    //entry:{
    //    app:'./src/js/index.js',
    //    serch:'./src/js/serch.js'
    //},
    //output:{
    //    path:__dirname+'/build',
    //    //3.1 如何配置版本号，清除缓存
    //    //filename:'[name]_[hash].js'
    //    filename:'[name]_[chunkhash].js'
    //},
    //2 配置出口（打包的输出路径）
    output:{
        path:__dirname+'/build',
        //filename:'bundle.js',
        filename:'app_[hash].js'
    },
    //3 配置服务器
    devServer:{
        contentBase:'./build',
        inline: true,
        port:8000
    },
    //5 引入loaders
    module:{
        loaders:[
            //5.1 解析css,css-loader
            {
                test:/\.css$/,
                //loader:'style-loader!css-loader'
                // 6.2 想抽离出来得
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            { //5.2.SASS的.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                test: /\.scss$/,
                //loader: 'style-loader!css-loader!sass-loader'
                // 6.2 想抽离出来得
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader!sass-loader'
                })
            },
            //8 编译es6
            {
                test:'/\.js$/',
                exclude:/node_modules/,
                loader:'babel-loader'
                //8.2在根目录创建.babelrc文件，并输入配置
            }
        ]
    },
    //4 配置HTML模板插件
    // 这样 webpack 编译的时候回自动在output目录下生成index.html
    plugins:[
        new HtmlWebpackPlugin({
            //4.1配置参数,html的title
            title:'webpack的配置',
            abc:'自定义输出',
            // 4.2 输出后html的名字，可以自定义
            filename:'index.html',
            //4.3 html的模板
            template:'webpack.tem.ejs'
        }),
        //7 代码优化：合并以及压缩代码
        // 开发环境暂时不需要
        //new webpack.optimize.UglifyJsPlugin({
        //    //7.1输出不显示警告
        //    compress:{
        //        warnings:false
        //    },
        //    //7.2 输出去掉注释
        //    output:{
        //        comments:false
        //    }
        //}),
        //6.1 css抽离
        new ExtractTextPlugin({
            filename:'app_[hash].css',
            disable:false,
            allChunks:true
        })
    ]
};