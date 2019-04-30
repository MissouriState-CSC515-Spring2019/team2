'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import RandomFox from './RandomFox';
import RandomCat from './RandomCat';
import RandomDog from './RandomDog';

import {Route, Link, BrowserRouter} from 'react-router-dom';

const routing = (
    <BrowserRouter>
		<div className="container text-center">
			<div className="row mb-2">
				<h1 className="col">
					Cute Animal Finder 5000
				</h1>
			</div>
			<div className="container text-center">
				<div className="row mb-2">
					<h3 className="col">
						<Link to="/">Home</Link>
					</h3>
				</div>
			</div>
			<div className="row">
				<h3 className="col">
					<Link to="/randomFox">Fox</Link>
				</h3>
				<h3 className="col">
					<Link to="/randomCat">Cat</Link>
				</h3>
				<h3 className="col">
					<Link to="/randomDog">Dog</Link>
				</h3>
			</div>
			<Route path="/randomFox" component={RandomFox}/>
      <Route path="/randomCat" component={RandomCat}/>
      <Route path="/randomDog" component={RandomDog}/>
		</div>
    </BrowserRouter>
)

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(routing, domContainer);