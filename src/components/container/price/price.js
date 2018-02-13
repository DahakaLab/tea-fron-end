import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
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
import BGAReplacement from "./bgaRaplacement/bgaReplacement";
import CaseRapair from "./caseRepair/caseRepair";
import ComponentReplacement from "./componentReplacement/componentReplacement";
import Delivery from "../main/delivery/delivery";
import Firmware from "./firmware/firmware";
import NodalReplacement from "./nodalReplacement/nodalReplacement";
import PowerSupplyRepair from "./powerSupplyRepair/powerSypplyRepair";
import SMDReplacement from "./smdReplacement/smdReplacement";
import Software from "./software/software";

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
    }

    handleOpenModal2 () {
        this.setState({ modalIsOpenDelivery: true });
    }

    handleCloseModal () {
        this.setState({ modalIsOpenDelivery: false });
    }

    render(){
        return(
            <div className="price">


                <section className="portfolio_section grid">
                    <a
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_5}}
                        onClick={() => this.setState({modalIsOpenDelivery: true})}>

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

                <div className="modal_block">

                    <ReactModal
                        isOpen={this.state.modalIsOpenDelivery}
                        contentLabel="Modal #1 Global Style Override Example"
                        onRequestClose={this.handleCloseModal}
                        className="modal_item"
                    >
                        <div className="test grid">
                        <p>Modal text!</p>
                        <button onClick={this.handleCloseModal}>Close Modal</button>
                        </div>
                    </ReactModal>

                    {/*<ReactModal*/}
                        {/*isOpen={this.state.modalIsOpenDelivery}*/}
                        {/*aria={{*/}
                            {/*labelledby: "heading",*/}
                            {/*describedby: "full_description"*/}
                        {/*}}>*/}
                            {/*<Delivery/>*/}
                        {/*<button className="button" onClick={() => console.log('click')}>lolololl</button>*/}
                    {/*</ReactModal>*/}
                    <ReactModal
                        isOpen={this.state.modalIsOpenNodalReplacement}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <NodalReplacement/>
                    </ReactModal>
                    <ReactModal
                        isOpen={this.state.modalIsOpenComponentReplacement}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <ComponentReplacement/>
                    </ReactModal>
                    <ReactModal
                        isOpen={this.state.modalIsOpenSMDReplacement}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <SMDReplacement/>
                    </ReactModal>
                    <ReactModal
                        isOpen={this.state.modalIsOpenBGAReplacement}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <BGAReplacement/>
                    </ReactModal>
                    <ReactModal
                        isOpen={this.state.modalIsOpenPowerSupplyRepair}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <PowerSupplyRepair/>
                    </ReactModal>
                    <ReactModal
                        isOpen={this.state.modalIsOpenCaseRapair}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <CaseRapair/>
                    </ReactModal>
                    <ReactModal
                        isOpen={this.state.modalIsOpenFirmware}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <Firmware/>
                    </ReactModal>
                    <ReactModal
                        isOpen={this.state.modalIsOpenSoftware}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                        }}>
                        <Software/>
                    </ReactModal>

                </div>

            </div>
        )
    }
}