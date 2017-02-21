/**
 * Created by Administrator on 2016/5/20.
 */
require.config({
    paths:{
        "jQuery":["http://cdn.bootcss.com/jquery/1.11.3/jquery.min","jquery-1.11.3"],
        "changeDom":"list/changeDom"
    },
    map: {
        '*': {
            'css': 'css'//必须先引入加载require_css.js用以加载css
        }
    },
    shim:{
        "sty":['css!../css/index.css'],
        "changeDom":["jQuery"]
    }
});
require(['sty',"jQuery","changeDom"]);