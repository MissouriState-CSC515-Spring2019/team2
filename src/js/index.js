'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import Home from './Home';
import Settings from './Settings'
import MadeBy from './MadeBy';

import {Route, BrowserRouter} from 'react-router-dom';

const routing = (
    <BrowserRouter>
		<div className="container text-center">
			<Route exact path="/" component={Home}/>
			<Route path="/randomCat" component={Image}/>
			<Route path="/randomDog" component={Image}/>
			<Route path="/randomFox" component={Image}/>
			<Route path="/MadeBy" component={MadeBy}/>
		</div>
    </BrowserRouter>
)

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(routing, domContainer);
