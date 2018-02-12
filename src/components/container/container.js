import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Price from './price/price';
import About from './about/about';
import NotFound from './notFound/notFound';
import MainRoute from "./main/main";
import Delivery from "./main/delivery/delivery";
import Diagnostic from "./main/diagnostic/diagnostic";
import Repair from "./main/repair/repair";
import FiveReason from "./main/5reason/5reasons";

export default class Container extends Component {
    render() {
        return(
            <div className="container">

                <Switch>
                    <Route exact path="/" component={MainRoute}/>
                    <Route path="/main/delivery" component={Delivery}/>
                    <Route path="/main/diagnostic" component={Diagnostic}/>
                    <Route path="/main/repair" component={Repair}/>
                    <Route path="/main/5reasons" component={FiveReason}/>
                    <Route path="/price" component={Price}/>
                    <Route path="/about" component={About}/>
                    <Route path="*" component={NotFound}/>
                </Switch>

            </div>

        )
    }
}