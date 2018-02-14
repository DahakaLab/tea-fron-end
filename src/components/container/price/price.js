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
import ModalBlock from "./components/modal";

export default class Price extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpenDelivery: false,
            modalIsOpenNodalReplacement: false,
            modalIsOpenComponentReplacement: false,
            modalIsOpenSMDReplacement: false,
            modalIsOpenBGAReplacement: false,
            modalIsOpenPowerSupplyRepair: false,
            modalIsOpenCaseRepair: false,
            modalIsOpenFirmware: false,
            modalIsOpenSoftware: false
        };

        this.handleOpenModalDelivery = this.handleOpenModalDelivery.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModalDelivery () {
        this.setState({ modalIsOpenDelivery: true });
    }

    handleCloseModal () {
        this.setState({
            modalIsOpenDelivery: false,
            modalIsOpenNodalReplacement: false,
            modalIsOpenComponentReplacement: false,
            modalIsOpenSMDReplacement: false,
            modalIsOpenBGAReplacement: false,
            modalIsOpenPowerSupplyRepair: false,
            modalIsOpenCaseRepair: false,
            modalIsOpenFirmware: false,
            modalIsOpenSoftware: false
        });
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
                        onClick={this.handleOpenModalDelivery}>

                        <span>Доставка и диагностика</span>

                    </a>
                    <a
                        className="portfolio_item  close_btn grid"
                        style={{backgroundImage: IMAGE_GRID_1}}
                        onClick={() => this.setState({modalIsOpenNodalReplacement: true})}>

                        <span>Узловая замена</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_2}}
                        onClick={() => this.setState({modalIsOpenComponentReplacement: true})}>

                        <span>Компонентная замена</span>

                    </a>
                    <a className="portfolio_item grid"
                          style={{backgroundImage: IMAGE_GRID_3}}
                          onClick={() => this.setState({modalIsOpenSMDReplacement: true})}>

                        <span>Замена компонентов поверхностного монтажа (SMD)</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_4}}
                        onClick={() => this.setState({modalIsOpenBGAReplacement: true})}>

                        <span>Замена компонентов на массиве шариков (BGA)</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_6}}
                        onClick={() => this.setState({modalIsOpenPowerSupplyRepair: true})}>

                        <span>Ремонт по цепям питания</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_7}}
                        onClick={() => this.setState({modalIsOpenCaseRepair: true})}>

                        <span>Корпусной ремонт</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_8}}
                        onClick={() => this.setState({modalIsOpenFirmware: true})}>

                        <span>Прошивка</span>

                    </a>
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_9}}
                        onClick={() => this.setState({modalIsOpenSoftware: true})}>

                        <span>Работа с программным обеспечением</span>

                    </a>
                </section>

                <ModalBlock data={this.state} action={this.handleCloseModal}/>

            </div>
        )
    }
}