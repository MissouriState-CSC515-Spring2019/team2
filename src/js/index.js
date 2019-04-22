'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import RandomFox from './RandomFox';
import RandomCat from './RandomCat';
import RandomDog from './RandomDog';

import {Route, Link, BrowserRouter} from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/randomFox">Fox</Link>
                </li>
                <li>
                    <Link to="/randomCat">Cat</Link>
                </li>
                <li>
                    <Link to="/randomDog">Dog</Link>
                </li>
            </ul>
            <Route path="/randomFox" component={RandomFox}/>
            <Route path="/randomCat" component={RandomCat}/>
            <Route path="/randomDog" component={RandomDog}/>
        </div>
    </BrowserRouter>
)

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(routing, domContainer);