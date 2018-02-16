import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class ModalBlock extends Component{
    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render(){
        const modalIsOpen = this.props.data.modalIsOpen,
            modalItem = this.props.data.modalItem;

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

                    {modalItem}

                </ReactModal>

            </a>
        )
    }
}