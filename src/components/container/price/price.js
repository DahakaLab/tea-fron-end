import React, { Component } from 'react';
import ReactModal from 'react-modal';
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
import ModalBlock from "./componentsPrice/modal";

export default class Price extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            modalItem: ''
        };

        this.handleOpenModalDelivery = this.handleOpenModalDelivery.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModalDelivery (x) {
        this.setState({ modalIsOpen: true });
        this.setState({ modalItem: x });
    }

    handleCloseModal () {
        this.setState({
            modalIsOpen: false,
            modalItem: ''
        });
        console.log('reset props')
    }

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render(){
        return(
            <div className="price">

                <section className="portfolio_section grid">
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_5}}
                        onClick={() => this.handleOpenModalDelivery('DeliveryAndDiagnostic')}>

                        <span>Доставка и диагностика</span>

                    </a>
                    <a
                        className="portfolio_item  close_btn grid"
                        style={{backgroundImage: IMAGE_GRID_1}}
                        onClick={() => this.handleOpenModalDelivery('NodalReplacement')}>

                        <span>Узловая замена</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_2}}
                        onClick={() => this.handleOpenModalDelivery('ComponentReplacement')}>

                        <span>Компонентная замена</span>

                    </a>
                    <a className="portfolio_item grid"
                       style={{backgroundImage: IMAGE_GRID_3}}
                       onClick={() => this.handleOpenModalDelivery('SMDReplacement')}>

                        <span>Замена компонентов поверхностного монтажа (SMD)</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_4}}
                        onClick={() => this.handleOpenModalDelivery('BGAReplacement')}>

                        <span>Замена компонентов на массиве шариков (BGA)</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_6}}
                        onClick={() => this.handleOpenModalDelivery('PowerSupplyRepair')}>

                        <span>Ремонт по цепям питания</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_7}}
                        onClick={() => this.handleOpenModalDelivery('CaseRepair')}>

                        <span>Корпусной ремонт</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_8}}
                        onClick={() => this.handleOpenModalDelivery('Firmware')}>

                        <span>Прошивка</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_9}}
                        onClick={() => this.handleOpenModalDelivery('Software')}>

                        <span>Работа с программным обеспечением</span>

                    </a>
                </section>

                <ModalBlock data={this.state} action={this.handleCloseModal}/>

            </div>
        )
    }
}