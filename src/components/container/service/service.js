import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import CreateRequest from "./createRequest/createRequest";
import Status from "./status/status";
import Information from "./information/information";

export default class Service extends  Component{
    render(){
        return(
            <div className="service">
                <section>
                    <Link className="button" to="/service/create_request">Создать заявку</Link>
                    <Link className="button" to="/service/status">Статус</Link>
                </section>

                <Switch>
                    <Route exact path="/service" component={Information}/>
                    <Route path="/service/create_request" component={CreateRequest}/>
                    <Route path="/service/status" component={Status}/>
                </Switch>
            </div>
        )
    }
}