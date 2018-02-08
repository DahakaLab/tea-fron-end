import React, { Component } from 'react';
import NavLink from "./navLink/navLink";

export default class Header extends Component{
    render(){
        return(
            <header className="main_header grid " style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/657ad/uQttm6-8d5E.jpg)`}}>
                <div className="header_content grid">
                    <h1>Ремонт ноутбуков напрямую</h1>
                    <NavLink/>
                </div>
            </header>
        )
    }
}