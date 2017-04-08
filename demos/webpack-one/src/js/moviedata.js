//9.3 使用jquery
//var $=require('./jquery.min.js');
var $=require('jquery');


//1定义模块
var movedata={
    name:'马云测试',
    speak:function(){
        return this.name;
    },
    //9.0 定义函数获取数据
    // 使用fetch 发送Ajax
    getData:function(){
        var url='/api/in_theaters';
        fetch(url).then(function(response) {
           return response.json();
        }).then(function(data) {
           console.log(data);
        }).catch(function(e) {
           console.log("Oops, error");
        });

        //9.31 使用JQ
        //$.ajax({
        //    url:'http://localhost:9000/in_theaters',
        //    success:function(res){
        //        console.log(res);
        //    }
        //});
        // //11 使用jq的跨域请求
        // $.ajax({
        //     type : "GET",
        //     url : "https://api.douban.com/v2/movie/in_theaters",
        //     dataType : "jsonp",
        //     success : function(json) {
        //         console.log(json);
        //     }
        // });
    }
};
//2 暴露接口
module.exports=movedata;