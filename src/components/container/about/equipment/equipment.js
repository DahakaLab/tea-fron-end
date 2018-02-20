import React, { Component } from 'react';
import {
    IMAGE_ABOUT_EQUIPMENT
} from "./../../../../style/image.js";

export default class Equipment extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Наше оборудование</h2>
                            <article>
                                Когда заходит речь об оборудовании наших инженеров,
                                в первую очередь вспоминается ничем не примечательный набор отверток
                                и мультиметр. Затем уже идет термовоздушная паяльная станция Lukey 702.
                                Для прошивки всех видов микросхем - программатор RT809h.
                                Для пайки BGA - инфрокрасная паяльная станция с верхним и нижним
                                подогревом ТЕРМОПРО. Для работы с микроскопическими элементами -
                                микроскоп Альтами. И наконец для исследования сигналов мы
                                используем самый обыкновенный советский осциллограф с1-68.<br/>
                                В качестве расходных материалов мы используем FLUX-OFF, DEGREASER и FREEZER
                                фирмы CRAMOLIN. Термопаста высокого качества MX-2, MX-4.<br/>
                                Соединяя наше оборудование с нашим опытом и знаниями, мы получаем на
                                выходе отремонтированный лучшим способом ноутбук. И поэтому Вы можете быть уверены
                                в долгой и счастливой работе Вашего ноутбука после ремонта.
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_EQUIPMENT}}/>
                </div>

            </section>
        )
    }
}