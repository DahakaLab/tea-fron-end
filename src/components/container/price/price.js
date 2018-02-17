import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    IMAGE_GRID_1,
    IMAGE_GRID_2,
    IMAGE_GRID_3,
    IMAGE_GRID_4,
    IMAGE_GRID_5,
    IMAGE_GRID_6,
    IMAGE_GRID_7,
    IMAGE_GRID_8,
    IMAGE_GRID_9,
    IMAGE_GRID_10
} from "./../../../style/image.js";

export default class Price extends Component{
    render(){
        return(
            <div className="price">

                <section className="portfolio_section grid">
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_10}}
                        to="/price/all_price">

                        <span>Весь прейскурант цен</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_5}}
                        to="/price/delivery_and_diagnostic">

                        <span>Доставка и диагностика</span>

                    </Link>
                    <Link
                        className="portfolio_item  close_btn grid"
                        style={{backgroundImage: IMAGE_GRID_1}}
                        to="/price/nodal_replacement">

                        <span>Узловая замена</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_2}}
                        to="/price/component_replacement">

                        <span>Компонентная замена</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_3}}
                        to="/price/smd_replacement">

                        <span>Замена компонентов поверхностного монтажа (SMD)</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_4}}
                        to="/price/bga_replacement">

                        <span>Замена компонентов на массиве шариков (BGA)</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_6}}
                        to="/price/power_supply_repair">

                        <span>Ремонт по цепям питания</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_7}}
                        to="/price/case_repair">

                        <span>Корпусной ремонт</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_8}}
                        to="/price/firmware">

                        <span>Прошивка</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_9}}
                        to="/price/software">

                        <span>Работа с программным обеспечением</span>

                    </Link>
                </section>

            </div>
        )
    }
}