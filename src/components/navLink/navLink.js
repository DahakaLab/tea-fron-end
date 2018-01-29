import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavLink extends Component{
    render(){
        return(
            <nav className="active">
                <li className="nav_link"><Link className="article" to="/">Главная</Link></li>
                <li className="nav_link"><Link className="article" to="/price">Стоимость</Link></li>
                <li className="nav_link"><Link className="article" to="/about">Обо мне</Link></li>
            </nav>
        )
    }
}