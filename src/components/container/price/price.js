import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    IMAGE_GRID_DELIVARY_AND_DIAG,
    IMAGE_GRID_NODAL_REPLACE,
    IMAGE_GRID_COMPONENT_REPLACE,
    IMAGE_GRID_SMD_REPLACE,
    IMAGE_GRID_BGA_REPLACE,
    IMAGE_GRID_POWER_SUPPLY_REPAIR,
    IMAGE_GRID_CASE_REPAIR,
    IMAGE_GRID_FIRMWARE,
    IMAGE_GRID_SOFTWARE,
    IMAGE_GRID_ALL_PRICE
} from "./../../../style/image.js";

export default class Price extends Component{
    render(){
        return(
            <div className="price">

                <section className="portfolio_section grid">
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_ALL_PRICE}}
                        to="/price/all_price">

                        <span>Весь прейскурант цен</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_DELIVARY_AND_DIAG}}
                        to="/price/delivery_and_diagnostic">

                        <span>Доставка и диагностика</span>

                    </Link>
                    <Link
                        className="portfolio_item  close_btn grid"
                        style={{backgroundImage: IMAGE_GRID_NODAL_REPLACE}}
                        to="/price/nodal_replacement">

                        <span>Узловая замена</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_COMPONENT_REPLACE}}
                        to="/price/component_replacement">

                        <span>Компонентная замена</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_SMD_REPLACE}}
                        to="/price/smd_replacement">

                        <span>Замена компонентов поверхностного монтажа (SMD)</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_BGA_REPLACE}}
                        to="/price/bga_replacement">

                        <span>Замена компонентов на массиве шариков (BGA)</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_POWER_SUPPLY_REPAIR}}
                        to="/price/power_supply_repair">

                        <span>Ремонт цепей питания</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_CASE_REPAIR}}
                        to="/price/case_repair">

                        <span>Корпусной ремонт</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_FIRMWARE}}
                        to="/price/firmware">

                        <span>Прошивка</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_SOFTWARE}}
                        to="/price/software">

                        <span>Работа с программным обеспечением</span>

                    </Link>
                </section>

            </div>
        )
    }
}