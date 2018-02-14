import React, { Component } from 'react';
import ReactModal from 'react-modal';
import BGAReplacement from "../bgaRaplacement/bgaReplacement";
import CaseRapair from "../caseRepair/caseRepair";
import ComponentReplacement from "../componentReplacement/componentReplacement";
import Firmware from "../firmware/firmware";
import NodalReplacement from "../nodalReplacement/nodalReplacement";
import PowerSupplyRepair from "../powerSupplyRepair/powerSypplyRepair";
import SMDReplacement from "../smdReplacement/smdReplacement";
import Software from "../software/software";
import DeliveryAndDiagnostic from "../deliveryAndDiagnostic/deliveryAndDiagnostic";

export default class ModalBlock extends Component{
    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render(){
        const modalIsOpenDelivery = this.props.data.modalIsOpenDelivery,
            modalIsOpenNodalReplacement = this.props.data.modalIsOpenNodalReplacement,
            modalIsOpenComponentReplacement = this.props.data.modalIsOpenComponentReplacement,
            modalIsOpenSMDReplacement = this.props.data.modalIsOpenSMDReplacement,
            modalIsOpenBGAReplacement = this.props.data.modalIsOpenBGAReplacement,
            modalIsOpenPowerSupplyRepair = this.props.data.modalIsOpenPowerSupplyRepair,
            modalIsOpenCaseRepair = this.props.data.modalIsOpenCaseRepair,
            modalIsOpenFirmware = this.props.data.modalIsOpenFirmware,
            modalIsOpenSoftware = this.props.data.modalIsOpenSoftware;

        return(
            <div className="modal_block">

                <ReactModal
                    isOpen={modalIsOpenDelivery}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <DeliveryAndDiagnostic/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenNodalReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <NodalReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenComponentReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <ComponentReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenSMDReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <SMDReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenBGAReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <BGAReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenPowerSupplyRepair}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <PowerSupplyRepair/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenCaseRepair}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <CaseRapair/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenFirmware}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <Firmware/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenSoftware}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>

                    <Software/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>

            </div>
        )
    }
}