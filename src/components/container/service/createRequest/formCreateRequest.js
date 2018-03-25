import React, { Component } from 'react';

export default class FormCreateRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            fio: this.props.dataUserObj.fio,
            phone: this.props.dataUserObj.phone,
            eMail: this.props.dataUserObj.eMail,
            model: this.props.dataUserObj.model,
            comment: this.props.dataUserObj.comment,
            formCheckBox: false
        };
        this.handleOnClickPolicyForm = this.handleOnClickPolicyForm.bind(this);
        this.handleOnClickEnter = this.handleOnClickEnter.bind(this);
        this.fioTextChange = this.fioTextChange.bind(this);
        this.phoneTextChange = this.phoneTextChange.bind(this);
        this.eMailTextChange = this.eMailTextChange.bind(this);
        this.modelTextChange = this.modelTextChange.bind(this);
        this.commentTextChange = this.commentTextChange.bind(this);

    }

    handleOnClickPolicyForm(){
        console.log("Click policy form!");

        this.setState({formCheckBox: !this.state.formCheckBox});
    }
    handleOnClickEnter(){
        console.log("Click Enter form!");

        this.props.handlerForm(this.state);
    }

    fioTextChange(event){
        this.setState({fio: event.target.value});
    }
    phoneTextChange(event){
        this.setState({phone: event.target.value});
    }
    eMailTextChange(event){
        this.setState({eMail: event.target.value});
    }
    modelTextChange(event){
        this.setState({model: event.target.value});
    }
    commentTextChange(event){
        this.setState({comment: event.target.value});
    }

    render(){
        return(
            <form className="form_create_request">
                <fieldset>
                    <legend>Создание запроса:</legend>

                    <p><label htmlFor="fio"/><input
                        placeholder="ФИО"
                        type="text"
                        value={ this.state.fio }
                        onChange={this.fioTextChange}
                    /></p>

                    <p><label htmlFor="phone"/><input
                        placeholder="Телефон"
                        type="text"
                        value={ this.state.phone }
                        onChange={this.phoneTextChange}
                    /></p>

                    <input
                        placeholder="Email"
                        type="text"
                        value={ this.state.eMail }
                        onChange={this.eMailTextChange}
                    />

                    <input
                        placeholder="Модель ноутбука"
                        type="text"
                        value={ this.state.model }
                        onChange={this.modelTextChange}
                    />

                    <textarea
                        rows="6"
                        cols="70"
                        maxLength="300"
                        placeholder="Комментарий"
                        onChange={this.commentTextChange}
                    />

                    <label className="policy">
                        <input
                            type="checkbox"
                            onClick={this.handleOnClickPolicyForm}
                            defaultChecked={this.state.formCheckBox}
                        />
                        Политика конфиденциальности
                    </label>
                </fieldset>
                <input
                    className="form_create_request"
                    type="button"
                    value="Ввод"
                    id="button_enter"
                    disabled={!this.state.formCheckBox}
                    onClick={this.handleOnClickEnter}
                />
            </form>
        )
    }
}