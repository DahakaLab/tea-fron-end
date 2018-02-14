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
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'react_modal_overlay_before_close'
                    }}>

                    <DeliveryAndDiagnostic/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenNodalReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'react_modal_overlay_before_close'
                    }}>

                    <NodalReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenComponentReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'myClass_before-close'
                    }}>

                    <ComponentReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenSMDReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'myClass_before-close'
                    }}>

                    <SMDReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenBGAReplacement}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                    base: 'react_modal',
                    afterOpen: 'grid',
                    beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'myClass_before-close'
                    }}>

                    <BGAReplacement/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenPowerSupplyRepair}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'myClass_before-close'
                    }}>

                    <PowerSupplyRepair/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenCaseRepair}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'myClass_before-close'
                    }}>

                    <CaseRapair/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenFirmware}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'myClass_before-close'
                    }}>

                    <Firmware/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>
                <ReactModal
                    isOpen={modalIsOpenSoftware}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                    className={{
                        base: 'react_modal',
                        afterOpen: 'grid',
                        beforeClose: 'react_modal_before_close'
                    }}
                    overlayClassName={{
                        base: 'react_modal_overlay',
                        afterOpen: 'react_modal_overlay_after_open',
                        beforeClose: 'myClass_before-close'
                    }}>

                    <Software/>
                    <button className="button" onClick={this.props.action}>Close Modal</button>

                </ReactModal>

            </div>
        )
    }
}