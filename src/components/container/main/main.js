import React, { Component } from 'react';
import {
    IMAGE_MAIN_DELIVERY,
    IMAGE_MAIN_DIAGNOSTIC,
    IMAGE_MAIN_REPAIR,
    IMAGE_MAIN_5REASON
} from "../../../style/image.js";
import FiveReasons from "./5reason/5reasons";
import Delivery from "./delivery/delivery";
import Diagnostic from "./diagnostic/diagnostic";
import Repair from "./repair/repair";
import ModalMain from "./componentsMain/modalMain";

export default class MainRoute extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            modalItem: null
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (x) {
        this.setState({ modalIsOpen: true });
        this.setState({ modalItem: x });
    }

    handleCloseModal () {
        this.setState({
            modalIsOpen: false,
            modalItem: null
        });
    }

    render(){
        return(
            <div className="main_route">

                <section className="section_blog">
                    <div className="container">
                        <h1>Ремонт ноутбуков напрямую от практикующих сервисных инженеров</h1>

                        <div className="blog_main grid">

                            <a
                                className="blog_item grid"
                                onClick={() => this.handleOpenModal(<Delivery/>)}
                            >
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_DELIVERY}}/>
                                <span className="blog_item_content grid">
                                    <h4>Бесплатная доставка</h4>
                                    <p>Бесплатный доставка техники на диагностику и обратно</p>
                                </span>
                            </a>
                            <a
                                className="blog_item grid"
                                onClick={() => this.handleOpenModal(<Diagnostic/>)}
                            >
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_DIAGNOSTIC}}/>
                                <span className="blog_item_content grid">
                                    <h4>Бесплатная диагностика</h4>
                                    <p>Даже в случае отказа от ремонта платить не придется</p>
                                </span>
                            </a>
                            <a
                                className="blog_item grid"
                                onClick={() => this.handleOpenModal(<Repair/>)}
                            >
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_REPAIR}}/>
                                <span className="blog_item_content grid">
                                    <h4>Качественный ремонт ноутбука любой сложности</h4>
                                    <p>
                                        Лучшие специалисты используя качественные расходные материалы и первоклассное
                                        оборудование вернут ваш ноутбук к жизни лучшим образом</p>
                                </span>
                            </a>
                            <a
                                className="blog_item grid"
                                onClick={() => this.handleOpenModal(<FiveReasons/>)}
                            >
                                <span className="blog_item_img" style={{backgroundImage: IMAGE_MAIN_5REASON}}/>
                                <span className="blog_item_content grid">
                                    <h4>Наши приемущества</h4>
                                    <p>Чайный сервис - это лучшее предложение по ремонту ноутбуков в Санкт-Петербурге</p>
                                </span>
                            </a>

                        </div>
                    </div>
                </section>

                <ModalMain data={this.state} action={this.handleCloseModal}/>

            </div>
        )
    }
}