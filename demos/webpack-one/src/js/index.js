//3 通过require导入模块
//var app=require('./app');
//8.1 es6导入
import { arr } from './app'
//5 引入css
require('../css/main.css');
require('../css/test.scss');
var students=require('./student');
//4 、使用模块
//console.log(app);

console.log(students.speak());
