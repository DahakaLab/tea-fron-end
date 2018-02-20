import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class Firmware extends Component{
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
                        <tr><td id="first_child">Прошивка</td></tr>
                        <tr><td/><td>Прошивка BIOS</td><td>От 500 руб.</td></tr>
                        <tr><td/><td>Прошивка ME-региона</td><td>От 800 руб.</td></tr>
                        <tr><td/><td>Прошивка мультиконтроллера</td><td>От 1500 руб.</td></tr>
                        <tr><td/><td>Прошивка матрицы</td><td>От 500 руб.</td></tr>
                        <tr><td/><td>Создание дампа</td><td>От 1000 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}