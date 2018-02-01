import React, { Component } from 'react';
import NavLink from "./navLink/navLink";

export default class Header extends Component{
    render(){
        return(
            <div className="header ">
                <NavLink/>
            </div>
        )
    }
}