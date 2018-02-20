import React, { Component } from 'react';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
} from 'react-scroll';

export default class AllPrice extends Component{
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
            <section className="price_item">

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

                            <tr><td id="subtitle">Узловая замена</td></tr>
                            <tr><td/><td>Замена матрицы</td><td>От 500 руб.</td></tr>
                            <tr><td/><td>Замена петель матрицы</td><td>От 500 руб.</td></tr>
                            <tr><td/><td>Замена плат</td><td>От 500 руб.</td></tr>
                            <tr><td/><td>Замена клавиатуры</td><td>От 100 руб.</td></tr>
                            <tr><td/><td>Замена верхней части корпуса</td><td>От 800 руб.</td></tr>
                            <tr><td/><td>Замена нижней части корпуса</td><td>От 800 руб.</td></tr>
                            <tr><td/><td>Замена аккумулятора</td><td>От 100 руб.</td></tr>
                            <tr><td/><td>Замена блока питания</td><td>От 0 руб.</td></tr>
                            <tr><td/><td>Замена термоинтерфейсов (чистка)</td><td>От 500 руб.</td></tr>

                            <tr><td id="subtitle">Компонентная замена</td></tr>
                            <tr><td/><td>Замена разъема USB 2.0</td><td>От 800 руб.</td></tr>
                            <tr><td/><td>Замена разъема USB 3.0</td><td>От 1000 руб.</td></tr>
                            <tr><td/><td>Замена разъема питания</td><td>От 800 руб.</td></tr>
                            <tr><td/><td>Замена прочих компонентов</td><td>От 500 руб.</td></tr>

                            <tr><td id="subtitle">Замена поверхностного монтажа<br/>(SMD)</td></tr>
                            <tr><td/><td>Замена мультиконтроллера</td><td>От 1500 руб.</td></tr>
                            <tr><td/><td>Замена QFN, SOP, SOT микросхем</td><td>От 1200 руб.</td></tr>
                            <tr><td/><td>Замена разъема клавиатуры</td><td>От 1200 руб.</td></tr>
                            <tr><td/><td>Замена разъема матрицы</td><td>От 1800 руб.</td></tr>
                            <tr><td/><td>Замена кнопок</td><td>От 1200 руб.</td></tr>

                            <tr><td id="subtitle">Замена компонентов <br/> на массиве шариков (BGA)</td></tr>
                            <tr><td/><td>Замена мостов</td><td>От 2000 руб.</td></tr>
                            <tr><td/><td>Замена видеочипов</td><td>От 2000 руб.</td></tr>
                            <tr><td/><td>Замена контроллеров</td><td>От 1800 руб.</td></tr>

                            <tr><td id="subtitle">Ремонт цепей питания</td></tr>
                            <tr><td/><td>Первичная цепь питания</td><td>От 1500 руб.</td></tr>
                            <tr><td/><td>Вторичная цепь питания</td><td>От 2000 руб.</td></tr>
                            <tr><td/><td>Ремонт сигнальных линий</td><td>От 2500 руб.</td></tr>
                            <tr><td/><td>Замена фильтрующих конденсаторов</td><td>От 1500 руб.</td></tr>

                            <tr><td id="subtitle">Корпусной ремонт</td></tr>
                            <tr><td/><td>Ремонт крепления петель матрицы</td><td>От 1000 руб.</td></tr>
                            <tr><td/><td>Ремонт ребер жесткости</td><td>От 1000 руб.</td></tr>
                            <tr><td/><td>Ремонт креплений различных узлов</td><td>От 500 руб.</td></tr>
                            <tr><td/><td>Ремонт декоративных элементов</td><td>От 500 руб.</td></tr>

                            <tr><td id="subtitle">Прошивка</td></tr>
                            <tr><td/><td>Прошивка BIOS</td><td>От 500 руб.</td></tr>
                            <tr><td/><td>Прошивка ME-региона</td><td>От 800 руб.</td></tr>
                            <tr><td/><td>Прошивка мультиконтроллера</td><td>От 1500 руб.</td></tr>
                            <tr><td/><td>Прошивка матрицы</td><td>От 500 руб.</td></tr>
                            <tr><td/><td>Создание дампа</td><td>От 1000 руб.</td></tr>

                            <tr><td id="subtitle">Работа с программным <br/> обеспечением</td></tr>
                            <tr><td/><td>Установка ОС</td><td>От 1000 руб.</td></tr>
                            <tr><td/><td>Установка антивируса</td><td>От 300 руб.</td></tr>
                            <tr><td/><td>Установка оффисных программ</td><td>От 500 руб.</td></tr>
                            <tr><td/><td>Восстановление работоспособности ОС с сохранением данных</td><td>От 1500 руб.</td></tr>
                            <tr><td/><td>Установка драйверов</td><td>От 300 руб.</td></tr>
                        </tbody>

                    </table>

                </div>

                <a className="button up_button" onClick={this.scrollToTop}>Наверх</a>

            </section>
        )
    }
}