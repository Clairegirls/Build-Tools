/**
 * Created by wangrq on 2017/3/19.
 */
//1 使用JQ 跨域请求
var $=require('jquery');

//2 定义模块
var Move={
    btn:null,
    init:function(){
        var _self=this;
        _self.getData();
        _self.btn=document.getElementById("gotop");
        _self.btn.onclick=_self.backTop;
    },
    getData:function(){
        $.ajax({
            type : "GET",
            url : "https://api.douban.com/v2/movie/in_theaters",
            dataType : "jsonp",
            success : function(data) {
                var movedata=data;
                //console.log(movedata);
                //1 title
                var $h1=$("<h1></h1>").html(movedata.title+"共有"+movedata.count+"部");
                // 2电影列表
                var movelists=movedata.subjects;
                var len=movelists.length;
                var $ul=$("<ul class='movelist clear'></ul>");
                for(var i=0;i<len;i++){
                    $ul.append("<li><img class='left' src='"+movelists[i].images.large+"'><div class='right message'>" +
                            '<h3>'+movelists[i].title+'</h3>'+
                            '<p>类型：'+'<span>'+movelists[i].genres.join('、')+'</span>'+'</p>'+
                            '<p>导演：'+'<span>'+movelists[i].directors[0].name+'</span>'+'</p>'+
                            // '<p>领衔主演：<br>'+'<span>'+movelists[i].casts[0].name+'、'+movelists[i].casts[1].name+'</span>'+'</p>'+
                            '<p>领衔主演：<br>'+'<span>'+movelists[i].casts[0].name+'</span>'+'</p>'+
                            '<p>豆瓣评分：'+'<span>'+movelists[i].rating.average+'分</span>'+'</p>'+
                            '<p>上映年份：'+'<span>'+movelists[i].year+'年</span>'+'</p>'+
                            '<p>评价人数：'+'<span>'+movelists[i].collect_count+'人评价</span>'+'</p>'+
                            "<p><a href='"+movelists[i].alt+"'>影片详情</a>"+'</p>'+
                        "</div></li>");
                }
                //console.log(movelists.length);
                $("#content").append($h1,$ul);
            }
        });
    },
    backTop:function(){
        window.onscroll = gotop;
        var d = document.documentElement;
        var b = document.body;
        var self=this;
        self.style.display = "none";
        self.timer = setInterval(function() {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            if ((d.scrollTop + b.scrollTop) == 0) clearInterval(self.timer, window.onscroll = gotop);
        }, 10);
        function gotop() {
            self.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block': "none"
        }
    }
};

//2.1 导出模块
module.exports=Move;