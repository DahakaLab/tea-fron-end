import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavLink extends Component{
    render(){
        return(
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/price">Стоимость</Link>
                    <Link to="/about">Обо мне</Link>
                </nav>
        )
    }
}