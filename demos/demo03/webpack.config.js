/**
 * Created by Administrator on 2016/11/10.
 *
 * 参考地址：http://www.jianshu.com/p/42e11515c10f#
 */
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry: './js/entry.js',//指定的入口文件
    output: {//输出
        path: __dirname+'/js',//输出路径
        filename: 'bundle.js'//输出文件名
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
}

