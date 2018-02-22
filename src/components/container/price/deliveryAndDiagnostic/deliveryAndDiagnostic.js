import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class DeliveryAndDiagnostic extends Component{
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
                        <tr><td id="first_child">Логистика</td></tr>
                        <tr><td/><td>Выезд инженера</td><td>0 руб.</td></tr>
                        <tr><td/><td>Доставка ноутбука до СЦ</td><td>0 руб.</td></tr>
                        <tr><td/><td>Доставка ноутбука до клиента</td><td>0 руб.</td></tr>
                        <tr><td/><td>Доставка комплектующих</td><td>От 0 руб.</td></tr>

                        <tr><td id="subtitle">Диагностика</td></tr>
                        <tr><td/><td>Диагностика ноутбука в сборе</td><td>0 руб.</td></tr>
                        <tr><td/><td>Диагностика комплектующих</td><td>От 0 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}