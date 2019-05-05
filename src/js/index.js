'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import Menu from './Menu';

import {Route, BrowserRouter} from 'react-router-dom';

const routing = (
    <BrowserRouter>
		<div className="container text-center">
			<Route path="/" component={Menu}/>
			<Route path="/randomCat" component={Image}/>
			<Route path="/randomDog" component={Image}/>
			<Route path="/randomFox" component={Image}/>
		</div>
    </BrowserRouter>
)

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(routing, domContainer);