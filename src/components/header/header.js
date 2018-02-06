import React, { Component } from 'react';
import NavLink from "./navLink/navLink";

export default class Header extends Component{
    render(){
        return(
            <header className="main_header grid ">
                <div className="header_content grid">
                    <h1>Ремонт ноутбуков напрямую</h1>
                    <NavLink/>
                </div>
            </header>
        )
    }
}