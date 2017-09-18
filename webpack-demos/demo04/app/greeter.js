/**
 * Created by Administrator on 2016/11/12.
 */
//var config = require('./config.json');
//module.exports = function() {
//    var greet = document.createElement('div');
//    greet.textContent = config.greetText;
//    return greet;
//};
import React, {Component} from 'react'
import config from './config.json';
//7、css modules
import styles from './greeter.css';
class Greeter extends Component{
    render() {
        return (
            <div className={styles.app}>
                <span>{config.title}</span>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter
