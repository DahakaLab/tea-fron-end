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
        let componentRender;

        const modalIsOpen = this.props.data.modalIsOpen,
            modalItem = this.props.data.modalItem;

        switch (modalItem) {
            case 'DeliveryAndDiagnostic':
                componentRender = <DeliveryAndDiagnostic/>;
                break;
            case 'NodalReplacement':
                componentRender = <NodalReplacement/>;
                break;
            case 'ComponentReplacement':
                componentRender = <ComponentReplacement/>;
                break;
            case 'SMDReplacement':
                componentRender = <SMDReplacement/>;
                break;
            case 'BGAReplacement':
                componentRender = <BGAReplacement/>;
                break;
            case 'PowerSupplyRepair':
                componentRender = <PowerSupplyRepair/>;
                break;
            case 'CaseRepair':
                componentRender = <CaseRapair/>;
                break;
            case 'Firmware':
                componentRender = <Firmware/>;
                break;
            case 'Software':
                componentRender = <Software/>;
                break;
            default:
                componentRender = null;
        }

        return(
            <a onClick={this.props.action} className="modal_block">

                <ReactModal
                    isOpen={modalIsOpen}
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

                    {componentRender}

                </ReactModal>


            </a>
        )
    }
}