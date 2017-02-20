###全局安装webpack之后分别安装,2.0+有很大变化
```javascript

	npm install --save-dev webpack
	npm install --save-dev css-loader
	npm install --save-dev style-loader
	npm install --save-dev json-loader
	npm install --save-dev webpack-dev-server

```

###配置webpack.config.js
+ 突破性更新：loader配置不支持简写了：用到哪个必须xxx-loader;
+ 如：loader:"json"必须:loader:"json-loader"

```javascript

	BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.
	You need to specify 'json-loader' instead of 'json'.

```
