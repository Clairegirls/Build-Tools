/**
 * Created by Administrator on 2016/11/10.
 */
var webpack = require('webpack')
module.exports = {
    entry: './js/entry.js',
    output: {
        path: './js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/, 
                loader: 'style!css'
            }
        ]
    }
}

