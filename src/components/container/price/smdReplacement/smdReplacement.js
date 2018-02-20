import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class SMDReplacement extends Component{
    componentDidMount() {

        scrollSpy.update();

    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop() {
        scroll.scrollToTop();
    }
    render(){
        return(
            <div className="price_item grid">

                <div className="price_table">

                    <table id="price" cellSpacing="1">

                        <caption>Общий прейскурант цен</caption>

                        <thead>
                        <tr><th>Тип</th><th>Наименование</th><th>Стоимость</th></tr>
                        </thead>

                        <tbody>
                        <tr><td id="first_child">Замена поверхностного монтажа<br/>(SMD)</td></tr>
                        <tr><td/><td>Замена мультиконтроллера</td><td>От 1500 руб.</td></tr>
                        <tr><td/><td>Замена QFN, SOP, SOT микросхем</td><td>От 1200 руб.</td></tr>
                        <tr><td/><td>Замена разъема клавиатуры</td><td>От 1200 руб.</td></tr>
                        <tr><td/><td>Замена разъема матрицы</td><td>От 1800 руб.</td></tr>
                        <tr><td/><td>Замена кнопок</td><td>От 1200 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}