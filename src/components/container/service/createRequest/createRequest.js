import React, { Component } from 'react';
import FormCreateRequest from "./formCreateRequest";

export default class CreateRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            fio: "",
            phone: "",
            password: "",
            eMail: "",
            model: "",
            comment: ""
        };
        this.handlerForm = this.handlerForm.bind(this);
    }

    handlerForm(formDataUser){
        this.setState({
            fio: formDataUser.fio,
            phone: formDataUser.phone,
            password: 123,
            eMail: formDataUser.eMail,
            model: formDataUser.model,
            comment: formDataUser.comment
        });
    }

    render(){
        return(
            <div className="create_request">
                <h1>CreateRequest</h1>

                <FormCreateRequest
                    dataUserObj={this.state}
                    handlerForm={this.handlerForm}
                />
            </div>
        )
    }
}