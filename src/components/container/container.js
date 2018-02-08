import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './main/main';
import Price from './price/price';
import About from './about/about';
import NotFound from './notFound/notFound';

export default class Container extends Component {
    render() {
        return(
            <div className="container">

                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/price" component={Price}/>
                    <Route path="/about" component={About}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>

        )
    }
}