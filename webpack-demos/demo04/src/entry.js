/**
 * Created by Administrator on 2016/11/12.
 */

//require('./style.css');
//var createdom=require('./createdom.js');
//document.getElementById('app').appendChild(createdom());

//5、编译es6配置后跟新main.js如下
import React from 'react';
import {render} from 'react-dom';
import Greeter from './createdom';
import './style.css';
render(<Greeter />,document.getElementById('app'));