import React, { Component } from 'react';
import NavLink from "./navLink/navLink";
import { IMAGE_HEADER } from "./../../style/image.js";

export default class Header extends Component{
    render(){
        return(
            <header className="main_header grid " style={{backgroundImage: IMAGE_HEADER}}>
                <div className="header_content grid">
                    <h1>Ремонт ноутбуков напрямую</h1>
                    <NavLink/>
                </div>
            </header>
        )
    }
}