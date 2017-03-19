/**
 * Created by jian on 2017/3/19.
 */
// 1 引入rem.js自适应

require('./rem');
//2 引入css样式

require('../css/movie.scss');

//2 导入move模块
var move=require('./movie');

//move.creatDom();
move.init();
