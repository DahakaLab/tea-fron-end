import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class PowerSupplyRepair extends Component{
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
                        <tr><td id="first_child">Ремонт цепей питания</td></tr>
                        <tr><td/><td>Первичная цепь питания</td><td>От 1500 руб.</td></tr>
                        <tr><td/><td>Вторичная цепь питания</td><td>От 2000 руб.</td></tr>
                        <tr><td/><td>Ремонт сигнальных линий</td><td>От 2500 руб.</td></tr>
                        <tr><td/><td>Замена фильтрующих конденсаторов</td><td>От 1500 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}