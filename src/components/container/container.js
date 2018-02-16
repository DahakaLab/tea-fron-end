import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Price from './price/price';
import About from './about/about';
import NotFound from './notFound/notFound';
import MainRoute from "./main/main";

export default class Container extends Component {
    render() {
        return(
            <div className="container">

                <Switch>
                    <Route exact path="/" component={MainRoute}/>
                    <Route path="/price" component={Price}/>
                    <Route path="/about" component={About}/>
                    <Route path="*" component={NotFound}/>
                </Switch>

            </div>

        )
    }
}