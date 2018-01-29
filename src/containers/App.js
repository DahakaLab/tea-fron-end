import React, { Component } from 'react';
import NavLink from "../components/navLink/navLink";
import RouteComponent from "../components/routeComponent/route";

export default class App extends Component{
    render(){
        return(
            <div className="container_app">
                <NavLink/>
                <RouteComponent/>
            </div>
        )
    }
}