###Webpack(<a href="http://www.cnblogs.com/-walker/p/6056529.html" target="_blank">案例使用介绍</a>)
####一、什么是webpack
webpack可以看做是**模块打包机**，它做的事情是，分析你的项目结构，找到Javascript模块以及其它的一些浏览器不能直接运行的扩展语言(Scss、TypeScript)，并将其打包为合适的格式以供浏览器使用。
###二、为何要使用webpak
+ 如今很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的javascript代码和一大堆依赖包，为了简化开发的复杂度，前端社区涌现了很多好的实践方法。
+ 模块化，让我们可以把复杂的程序化为小的文件
+ 类似于TypeScript这种在Javascript基础上扩展的开发语言，使我们能够实现目前版本的Javascript不能直接使用的特性，并且之后还能转换为Javascript文件使浏览器可以识别
+ SCSS、LESS等CSS预处理器......
+ 这些改进确实大大提高了我们的开发效率，但是利用他们开发的文件往往需要进行额外的处理才能让浏览器识别，而手动处理又是非常繁琐的，这就为webpack类工具的出现提供了需求

###三、Webpack和Grunt、Gulp相比有什么特性
+ 其实webpack和它们并没有太多的可比性，Grunt、Gulp是一种能够优化前端的开发流程工具，而webpack是一种模块化的解决方案，不过webpack的优点使webpack可以代替Grunt、Gulp类的工具
+ Grunt、Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译、组合、压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务
+ webpack的工作方式是：把你的项目当做一个整体，通过一个指定的入口文件如(entry.js)，webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理他们，最后打包为一个浏览器可以识别的Javascript脚本。

###四、webpack的优点以及简单使用
####A：模块化
在webpack看来一切都是模块，这就是不可不说的优点，包括你的Javascript代码，也包括CSS以及图片等等，只要通过合适的loaders，它们都可以被当做模块被处理。
######1、CSS
+ webpack提供两个工具处理样式表，css-loader和style-loader，二者处理的任务不同，css-loader让你能够使用类似@import和url(..)的方式实现require()的功能，style-loader将所有计算后的样式加入页面中，二者组合在一起，让你能够把样式表嵌入webpack打包后的JS文件中，最终以style的形式写入head中。
+ 使用：需要分别安装 
	+ <p><code>npm install --save-dev css-loader</code></p>
	+ <p><code>npm install --save-dev style-loader</code></p>

+ 如<br>
<pre><code>
var webpack = require('webpack')；
module.exports = {
    entry: './js/entry.js',//指定入口文件
    output: {
        path: './js/',//输出的路径
        filename: 'bundle.js'//输出的文件名
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
</code></pre>

######2、css modules
+ 在过去的一些年里，JavaScript通过一些新的语言特性，更好的工具以及更好的实践方法（比如说模块化）发展得非常迅速。模块使得开发者把复杂的代码转化为小的，干净的，依赖声明明确的单元，且基于优化工具，依赖管理和加载管理可以自动完成。
+ 不过前端的另外一部分，CSS发展就相对慢一些，大多的样式表却依旧是巨大且充满了全局类名，这使得维护和修改都非常困难和复杂。
+ 最近有一个叫做 CSS modules 的技术就意在把JS的模块化思想带入CSS中来，通过CSS模块，所有的类名，动画名默认都只作用于当前模块。Webpack从一开始就对CSS模块化提供了支持，在CSS loader中进行配置后，你所需要做的一切就是把”modules“传递都所需要的地方，然后就可以直接把CSS的类名传递到组件的代码中，且这样做只对当前组件有效，不必担心在不同的模块中具有相同的类名可能会造成的问题。具体的代码如下：
+ <pre><code>
{//3、CSS-loader
		test:/\.css$/,
		//跟上面的相比就在后面加上了?modules
		loader:'style!css?modules'
}
</code></pre>
+ 这样相同的类名也不会互相污染

######3、CSS预编译
+ Sass 和 Less之类的预处理器是对原生CSS的拓展，它们允许你使用类似于variables, nesting, mixins, inheritance等不存在于CSS中的特性来写CSS，CSS预处理器可以这些特殊类型的语句转化为浏览器可识别的CSS语句，你现在可能都已经熟悉了，在webpack里使用相关loaders进行配置就可以使用了，以下是常用的CSS处理loaders
	+ <p><code>less-loader</code></p>
	+ <p><code>sass-loader</code></p>
	+ <p><code>stylus-loader</code></p>
+ 还有一个CSS处理平台-PostCSS，可以让你用CSS事先更多功能，比如如何使用PostCSS，我们使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀。首先安装postcss-loader 和 autoprefixer（自动添加前缀的插件）：
	+ <p><code>npm install --save-dev postcss-loader</code></p>
	+ <p><code>npm install --save-dev autoprefixer</code></p>

+ 并在webpack配置文件中进行设置，只需要新建一个postcss关键字，并在里面申明依赖的插件，如下，现在你写的css会自动根据Can i use里的数据添加不同前缀了。
<pre><code>
var webpack = require('webpack');
module.exports = {
//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry:__dirname+'./js/entry.js',
    output: {//输出
        path: __dirname+'/js',
        filename: 'bundle.js'//输出文件名
    },
    module: {
        loaders: [
            {//3、CSS-loader
                test:/\.css$/,
		//跟前面相比就在后面加上了?modules!postcss
                loader:'style!css?modules!postcss'
            }
        ]
    },
    //使用postcss-loader autoprefixer自动给css添加前缀
    postcss:[
        require('autoprefixer')//调用autoprefixer插件
    ]
}
</code></pre>

######4、webpack-pulgins，插件的使用
+ 插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西，可以这么来说，loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。
+ Webpack有很多内置插件，同时也有很多第三方插件，可以让我们完成更加丰富的功能。
+ 要使用某个插件，我们需要通过npm安装它，然后要做的就是在webpack配置中的plugins关键字部分添加该插件的一个实例（plugins是一个数组），我们添加了一个实现版权声明的插件。如HtmlWebpackPugin插件，该插件的作用是依据一个简单的模板，帮你生成最终的Html5文件，这个文件中自动引用了你打包后的JS文件。每次编译都在文件名中插入一个不同的哈希值。
+ <pre><code>
var webpack = require('webpack');
//1、引入插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:__dirname+'/js/entry.js',
    output: {
        path: __dirname+'/js',
        filename: 'bundle.js'//输出文件名
    },
    module: {
        loaders: [
            {//3、CSS-loader
                test:/\.css$/,
                loader:'style!css?modules!postcss'
            }
        ]
    },
    //3、使用postcss-loader autoprefixer自动给css添加前缀
    postcss:[
        require('autoprefixer')//调用autoprefixer插件
    ],
    //2、插件使用
    plugins:[
        new webpack.BannerPlugin("Copyright jiucheng!->Email:jiucheng0605@sina.com"),//在这个数组里面new一个就可以了
        new HtmlWebpackPlugin({
            template:__dirname+'/app/index.tmpl.html'
        })
    ]
}
</code></pre>

######5、优化插件（产品上线阶段）
+ webpack提供了一些在发布阶段非常有用的优化插件，它们大多来自于webpack社区，可以通过npm安装，通过以下插件可以完成产品发布阶段所需的功能。
+ OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
+ UglifyJsPlugin：压缩JS代码；
+ ExtractTextPlugin：分离CSS和JS文件

###B、Loaders
+ Loaders是webpack中最让人激动人心的功能之一了。通过使用不同的loader，webpack通过调用外部的脚本或工具可以对各种各样的格式的文件进行处理，比如说分析JSON文件并把它转换为JavaScript文件，或者说把下一代的JS文件（ES6，ES7)转换为现代浏览器可以识别的JS文件。或者说对React的开发而言，合适的Loaders可以把React的JSX文件转换为JS文件，Loaders需要单独安装并且需要在webpack.config.js下的modules关键字下进行配置，Loaders的配置选项包括以下几方面：
	+ test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
	+ loader：loader的名称（必须）
	+ include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
	+ query：为loaders提供额外的设置选项（可选）
	+ Loaders很好，不过有的Loaders使用起来比较复杂，比如说Babel。

###C、Babel
+ Babel和webpack是独立的工具,二者可以一起工作
+ Babel其实是一个编译JavaScript的平台，它的强大之处表现在可以通过编译帮你达到以下目的：
	+ 下一代的JavaScript标准（ES6，ES7），这些标准目前并未被当前的浏览器完全的支持；
	+ 使用基于JavaScript进行了拓展的语言，比如React的JSX
+ Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，不过webpack把它们整合在一起使用，但是对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包）。
+ Babel的安装
	+ <p><code>npm install --save-dev babel-core</code></p>
	+ <p><code>npm install --save-dev babel-loader</code></p>
	+ <p><code>npm install --save-dev babel-preset-es2015</code></p>
	+<p><code>npm install --save-dev babel-preset-react</code></p>
+ Babel的配置
<pre><code>
loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      }
    ]
	</code></pre>
+ 现在你的webpack的配置已经允许你使用ES6以及JSX的语法了

###D、缓存
+ 缓存无处不在，使用缓存的最好方法是保证你的文件名和文件内容是匹配的（内容改变，名称相应改变）
+ webpack可以把一个哈希值添加到打包的文件名中，使用方法如下,添加特殊的字符串混合体（[name], [id] and [hash]）到输出文件名前
<pre><code>
    plugins: [
	.....
    new ExtractTextPlugin("[name]-[hash].css")
  ]
</code></pre>

