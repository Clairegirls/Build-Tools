####一、关于配置
+ css-loader读取CSS文件
+ style-loader把读取的css文件嵌入在html内

####二、scss中mixin的用法
+ 有没有参数都是如下使用


```javascript
	
	//定位上下左右居中
	@mixin center {  
		position: absolute;
		top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	}
	//圆角
	@mixin borderRadius($radius) {
	    -webkit-border-radius: $radius;
	    -moz-border-radius: $radius;
	    -ms-border-radius: $radius;
	    -o-border-radius: $radius;
	    border-radius: $radius;
	}

	//字体大小，颜色
	@mixin sc($size, $color){
		font-size: $size;
		color: $color;
	}
	--------------------------------
	.content{
	  width: 80%;
	  height: 300px;
	  background: #999;
	  @include center;
	  @include borderRadius(15px);
	}

	.content h1{
	  text-align: center;
	  @include sc(20px,$blue);
	}

	
```