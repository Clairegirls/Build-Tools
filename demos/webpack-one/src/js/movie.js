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
        var _self=this;
        $.ajax({
            type : "GET",
            url : "https://api.douban.com/v2/movie/in_theaters",
            dataType : "jsonp",
            success : function(data) {
                var movedata=data;
                // console.log(movedata);
                _self.printData(movedata);
            }
        });
    },
    printData:function(moveList){
        var moveTitle=moveList.title;
        var moveCount=moveList.count;
        var $h1=$("<h1></h1>").html(moveTitle+"共有"+moveCount+"部");
        // 列表
        var $ul=$("<ul class='movelist clear'></ul>");
        var movelists=moveList.subjects;
        var len=movelists.length;
        var str_html="";
        for(var i=0;i<len;i++){
            // 1、影片名字
            var move_title=movelists[i].title;
            // 2、影片海报
            var head_img=movelists[i].images.large;
            // 3、影片类型
            var move_style=movelists[i].genres.join('、')||"不详";
            // 4、影片导演
            var move_anchor=movelists[i].directors[0].name||"暂无";
            // 5、影片主演movelists[i].casts[0].name||
            if(movelists[i].casts.length!=0){
                var move_actor=movelists[i].casts[0].name;
            }else{
                var move_actor="不详";
            }
            // 6、影片评分
            var move_stars=movelists[i].rating.average||"暂无";
            // 7、上映年份
            var move_year=movelists[i].year||"不详";
            // 8、评价人数
            var evaluation=movelists[i].collect_count||"不详";
            // 9、影片详情
            var detial_link=movelists[i].alt||"https://movie.douban.com/";
            str_html+="<li><img class='left' src='"+head_img+"'><div class='right message'>";
            str_html+="<h3>"+move_title+"</h3>";
            str_html+="<p>类型：<span>"+move_style+"</span></p>";
            str_html+="<p>导演：<span>"+move_anchor+"</span></p>";
            str_html+="<p>领衔主演：<br><span>"+move_actor+"</span></p>";
            str_html+="<p>豆瓣评分：<span>"+move_stars+"分</span></p>";
            str_html+="<p>上映年份：<span>"+move_year+"年</span></p>";
            str_html+="<p>评价人数<span>"+evaluation+"人评价</span></p>";
            str_html+="<p><a href='"+detial_link+"'>影片详情</a></p>";
            str_html+="</div></li>";
        }
        console.log(movelists);
        $ul.append(str_html);
        $("#content").append($h1,$ul);
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