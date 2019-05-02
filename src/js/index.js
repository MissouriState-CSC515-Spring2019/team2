'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import Home from './Home';

import {Route, BrowserRouter} from 'react-router-dom';

const routing = (
    <BrowserRouter>
			<Route path="/" component={Home}/>
			<Route path="/randomCat/:cat" component={Image}/>
			<Route path="/randomDog/:dog" component={Image}/>
			<Route path="/randomFox/:fox" component={Image}/>
    </BrowserRouter>
)

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(routing, domContainer);