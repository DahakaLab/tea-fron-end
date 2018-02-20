import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class ComponentReplacement extends Component{
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
                        <tr><td id="first_child">Компонентная замена</td></tr>
                        <tr><td/><td>Замена разъема USB 2.0</td><td>От 800 руб.</td></tr>
                        <tr><td/><td>Замена разъема USB 3.0</td><td>От 1000 руб.</td></tr>
                        <tr><td/><td>Замена разъема питания</td><td>От 800 руб.</td></tr>
                        <tr><td/><td>Замена прочих компонентов</td><td>От 500 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </div>
        )
    }
}