import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';
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
            modalIsOpen: false
        };
    }

    render(){
        return(
            <div className="price">


                <section className="portfolio_section grid">
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_5}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/Delivery">

                        <span>Доставка и диагностика</span>

                    </Link>
                    <Link
                        className="portfolio_item  close_btn grid"
                        style={{backgroundImage: IMAGE_GRID_1}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/NodalReplacement">

                        <span>Узловая замена</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_2}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/ComponentReplacement">

                        <span>Компонентная замена</span>

                    </Link>
                    <Link className="portfolio_item grid"
                          style={{backgroundImage: IMAGE_GRID_3}}
                          onClick={() => this.setState({modalIsOpen: true})}
                          to="/price/SMDReplacement">

                        <span>Замена компонентов поверхностного монтажа (SMD)</span>

                    </Link>
                    <Link
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_4}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/BGAReplacement">

                        <span>Замена компонентов на массиве шариков (BGA)</span>

                    </Link>
                    <div
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_6}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/PowerSupplyRepair">

                        <span>Ремонт по цепям питания</span>

                    </div>
                    <div
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_7}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/CaseRapair">

                        <span>Корпусной ремонт</span>

                    </div>
                    <div
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_8}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/Firmware">

                        <span>Прошивка</span>

                    </div>
                    <div
                        className="portfolio_item grid"
                        style={{backgroundImage: IMAGE_GRID_9}}
                        onClick={() => this.setState({modalIsOpen: true})}
                        to="/price/Software">

                        <span>Работа с программным обеспечением</span>

                    </div>
                </section>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>
                    <Switch>
                        <Route path="/price/Delivery" component={Delivery}/>
                        <Route path="/price/NodalReplacement" component={NodalReplacement}/>
                        <Route path="/price/ComponentReplacement" component={ComponentReplacement}/>
                        <Route path="/price/SMDReplacement" component={SMDReplacement}/>
                        <Route path="/price/BGAReplacement" component={BGAReplacement}/>
                        <Route path="/price/PowerSupplyRepair" component={PowerSupplyRepair}/>
                        <Route path="/price/CaseRapair" component={CaseRapair}/>
                        <Route path="/price/Firmware" component={Firmware}/>
                        <Route path="/price/Software" component={Software}/>
                    </Switch>
                </Modal>

            </div>
        )
    }
}