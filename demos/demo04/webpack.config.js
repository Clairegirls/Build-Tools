/**
 * Created by Administrator on 2016/11/10.
 *http://www.jianshu.com/p/7d0e1eaab50a
 * 参考地址：http://www.jianshu.com/p/42e11515c10f#
 */
var webpack = require('webpack');
//9、引入插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //1、
    //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    //2、进出口文件配置
    //entry:__dirname+'/src/entry.js',//指定的入口文件,“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry:__dirname+'/app/main.js',
    output: {//输出
        //path: __dirname+'/public',//入口为entry.js时候输出路径
        path: __dirname+'/build',//main.js时候输出路径
        filename: 'bundle.js'//输出文件名
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {//6、编译es6配置
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel',//在webpack的module部分的loaders里进行配置即可
                query:{
                    presets:['es2015','react']
                }
            },
            {//3、CSS-loader
                test:/\.css$/,
                loader:'style!css?modules!postcss'//7、跟前面相比就在后面加上了?modules，8、
            }
        ]
    },
    //8、使用postcss-loader autoprefixer自动给css添加前缀
    postcss:[
        require('autoprefixer')//调用autoprefixer插件
    ],
    //9、插件使用
    plugins:[
        new webpack.BannerPlugin("Copyright jiucheng!->Email:jiucheng0605@sina.com"),//在这个数组里面new一个就可以了
        new HtmlWebpackPlugin({
            //9、1此时会在build下自动创建一个index.html自动引入webpack编译后对应的JS，执行：webpack-dev-server
            //启动服务器默认就是build下刚刚自动生成的index.html
            template:__dirname+'/app/index.tmpl.html'
        })
    ],
    //4、服务器依赖包配置
    devServer: {
        //9、2使用HtmlWebpackPlugin时候把下面的注视掉才可以
            //contentBase: "./public",//entry.js本地服务器所加载的页面所在的目录
            //contentBase: "./app",//main.js本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}

