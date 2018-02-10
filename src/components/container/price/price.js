import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import {
    IMAGE_GRID_1,
    IMAGE_GRID_2,
    IMAGE_GRID_3,
    IMAGE_GRID_4,
    IMAGE_GRID_5,
    IMAGE_GRID_6,
    IMAGE_GRID_7,
    IMAGE_GRID_8,
    IMAGE_GRID_9
} from "./../../../style/image.js";

export default class Price extends Component{
    render(){
        return(
            <div className="price">
                <section className="portfolio_section grid">
                    <Link className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_1}} to="/about">
                        <span>Мой опыт работы</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_2}} to="/about/politics">
                        <span>Моя политика работы</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_3}} to="/about/principle">
                        <span>Мой принцип работы</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_4}} to="/about/equipment">
                        <span>Мое оборудование</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_5}} to="/about/contacts">
                        <span>Контакты</span>
                    </Link>
                    <div className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_6}}>
                        <span>div 6</span>
                    </div>
                    <div className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_7}}>
                        <span>div 7</span>
                    </div>
                    <div className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_8}}>
                        <span>div 8</span>
                    </div>
                    <div className="portfolio_item grid" style={{backgroundImage: IMAGE_GRID_9}}>
                        <span>div 9</span>
                    </div>
                </section>
            </div>

        )
    }
}