/**
 * Created by Administrator on 2016/11/12.
 */
//var message=require('./message.json');
//module.exports = function() {
//    var greet=document.createElement('h1');
//    greet.innerHTML="<span>"+message.name+"</span>"+"<span>"+message.do+"</span>"+"<span>"+message.what+"</span>";
//    return greet;
//};

//5、--------编译es6配置后跟新greeter.js如下--------------
import React,{Component} from 'react';
import config from './message.json';
class Greeter extends Component{
    render(){
        return(
            <div>
                <h1>
                    <span>{config.name}</span>
                    <span>{config.do}</span>
                    <span>{config.what}</span>
                </h1>
            </div>
        );
    }
}
export default Greeter