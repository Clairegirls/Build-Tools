// commonjs
//2.0
//var arr=['张无忌','周芷若','郭靖'];
//4个步骤
//1 定义一个模块
const arr=['张无忌','周芷若','郭靖'];
setTimeout(()=>{
    console.log(arr[0]);
},500);
//2 module.exports 暴露接口
//module.exports=arr;

//8.0 es6的 暴露接口（多种方法）
//export arr;
//export default arr
//export {arr as default}

export { arr }