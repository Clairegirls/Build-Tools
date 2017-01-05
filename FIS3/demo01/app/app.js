alert("Hello, World");
var obj={
    a:10,
    b:20,
    init:function(){
        console.log(this.a+this.b);
        return this.a+this.b;
    }
}
var index=500;
console.log(index);
window.onload=function(){
    obj.init();
}