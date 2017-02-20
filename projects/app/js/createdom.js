/**
 * Created by Administrator on 2017/2/20.
 */
var message=require('../data/data.json');
module.exports = function() {
    var greet=document.createElement('h1');
    greet.innerHTML="<span>"+message.name+"</span>"+"<span>"+message.do+"</span>"+"<span>"+message.what+"</span>";
    return greet;
};