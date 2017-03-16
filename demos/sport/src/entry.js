/**
 * Created by wangjianfei on 2017/3/16.
 */

    //測試 es6
    let a=20;
    const obj={
        name:'馬雲',
        age:50,
        said:function(){
            console.log(this.name);
        }
    };
    obj.said();
    setTimeout(()=>{
        console.log(a);
    },500);

    require("./css/style.css");