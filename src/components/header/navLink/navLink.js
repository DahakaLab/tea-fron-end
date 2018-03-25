import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavLink extends Component{
    render(){
        return(
                <nav className="nav_content">
                    <Link className="button" to="/">Главная</Link>
                    <Link className="button" to="/price">Стоимость</Link>
                    <Link className="button" to="/about">О нас</Link>
                    <Link className="button" to="/service">Сервис</Link>
                </nav>
        )
    }
}