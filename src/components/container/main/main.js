import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import {
    IMAGE_MAIN_DELIVERY,
    IMAGE_MAIN_DIAGNOSTIC,
    IMAGE_MAIN_REPAIR,
    IMAGE_MAIN_5REASON
} from "./../../../style/image.js";

export default class Main extends Component{
    render(){
        return(
            <div className="main ">

                <section className="section_blog">
                    <div className="container">
                        <h1>Ремонт ноутбука напрямую от практикующего сервисного инженера</h1>

                        <div className="blog_main grid">

                            <Link className="blog_item grid" to="/main/delivery">
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_DELIVERY}}/>
                                <span className="blog_item_content grid">
                                    <h4>Бесплатная доставка</h4>
                                    <p>Мы бесплатно доставим</p>
                                </span>
                            </Link>
                            <Link className="blog_item grid" to="/main/diagnostic">
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_DIAGNOSTIC}}/>
                                <span className="blog_item_content grid">
                                    <h4>Бесплатная диагностика</h4>
                                    <p>Мы бесплатно отдиагностируем</p>
                                </span>
                            </Link>
                            <Link className="blog_item grid" to="/main/repair">
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_REPAIR}}/>
                                <span className="blog_item_content grid">
                                    <h4>Качественный ремонт ноутбука любой сложности</h4>
                                    <p>Мы клево починим</p>
                                </span>
                            </Link>
                            <Link className="blog_item grid" to="/main/why">
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_5REASON}}/>
                                <span className="blog_item_content grid">
                                    <h4>5 причин почему стоит обращаться напрямую к опытным инженерам</h4>
                                    <p>Мы все четко объясним</p>
                                </span>
                            </Link>

                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}