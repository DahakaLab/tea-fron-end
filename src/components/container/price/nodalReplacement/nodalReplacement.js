import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class NodalReplacement extends Component{
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
                        <tr><td id="first_child">Узловая замена</td></tr>
                        <tr><td/><td>Замена матрицы</td><td>От 500 руб.</td></tr>
                        <tr><td/><td>Замена петель матрицы</td><td>От 500 руб.</td></tr>
                        <tr><td/><td>Замена плат</td><td>От 500 руб.</td></tr>
                        <tr><td/><td>Замена клавиатуры</td><td>От 100 руб.</td></tr>
                        <tr><td/><td>Замена верхней части корпуса</td><td>От 800 руб.</td></tr>
                        <tr><td/><td>Замена нижней части корпуса</td><td>От 800 руб.</td></tr>
                        <tr><td/><td>Замена аккумулятора</td><td>От 100 руб.</td></tr>
                        <tr><td/><td>Замена блока питания</td><td>От 0 руб.</td></tr>
                        <tr><td/><td>Замена термоинтерфейсов (чистка)</td><td>От 500 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}