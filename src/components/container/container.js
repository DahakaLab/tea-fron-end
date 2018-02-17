import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import About from './about/about';
import NotFound from './notFound/notFound';
import MainRoute from "./main/main";
import DeliveryAndDiagnostic from "./price/deliveryAndDiagnostic/deliveryAndDiagnostic";
import Price from "./price/price";
import BGAReplacement from "./price/bgaRaplacement/bgaReplacement";
import CaseRepair from "./price/caseRepair/caseRepair";
import ComponentReplacement from "./price/componentReplacement/componentReplacement";
import Firmware from "./price/firmware/firmware";
import NodalReplacement from "./price/nodalReplacement/nodalReplacement";
import PowerSupplyRepair from "./price/powerSupplyRepair/powerSypplyRepair";
import SMDReplacement from "./price/smdReplacement/smdReplacement";
import Software from "./price/software/software";
import AllPrice from "./price/allPrice/allPrice";

export default class Container extends Component {
    render() {
        return(
            <div className="container">

                <Switch>
                    <Route exact path="/" component={MainRoute}/>
                    <Route exact path="/price" component={Price}/>
                    <Route path="/price/all_price" component={AllPrice}/>
                    <Route path="/price/delivery_and_diagnostic" component={DeliveryAndDiagnostic}/>
                    <Route path="/price/nodal_replacement" component={NodalReplacement}/>
                    <Route path="/price/component_replacement" component={ComponentReplacement}/>
                    <Route path="/price/smd_replacement" component={SMDReplacement}/>
                    <Route path="/price/bga_replacement" component={BGAReplacement}/>
                    <Route path="/price/PowerSupplyRepair" component={PowerSupplyRepair}/>
                    <Route path="/price/case_repair" component={CaseRepair}/>
                    <Route path="/price/firmware" component={Firmware}/>
                    <Route path="/price/software" component={Software}/>
                    <Route path="/about" component={About}/>
                    <Route path="*" component={NotFound}/>
                </Switch>

            </div>

        )
    }
}