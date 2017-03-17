//1定义模块
var Student={
    name:'马云测试',
    speak:function(){
        return this.name;
    }
};
//2 暴露接口
module.exports=Student;