/**
 * Created by Administrator on 2016/11/12.
 */

//require('./main.css');
//var greeter=require('./greeter.js');
//document.getElementById('app').appendChild(greeter());
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css'
render(<Greeter />, document.getElementById('app'));