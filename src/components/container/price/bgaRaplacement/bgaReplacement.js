import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class BGAReplacement extends Component{
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
                        <tr><td id="first_child">Замена компонентов <br/> на массиве шариков (BGA)</td></tr>
                        <tr><td/><td>Замена мостов</td><td>От 2000 руб.</td></tr>
                        <tr><td/><td>Замена видеочипов</td><td>От 2000 руб.</td></tr>
                        <tr><td/><td>Замена контроллеров</td><td>От 1800 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}