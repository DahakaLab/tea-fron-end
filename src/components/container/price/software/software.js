import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class Software extends Component{
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
                        <tr><td id="first_child">Работа с программным <br/> обеспечением</td></tr>
                        <tr><td/><td>Установка ОС</td><td>От 1000 руб.</td></tr>
                        <tr><td/><td>Установка антивируса</td><td>От 300 руб.</td></tr>
                        <tr><td/><td>Установка оффисных программ</td><td>От 500 руб.</td></tr>
                        <tr><td/><td>Восстановление работоспособности ОС с сохранением данных</td><td>От 1500 руб.</td></tr>
                        <tr><td/><td>Установка драйверов</td><td>От 300 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}