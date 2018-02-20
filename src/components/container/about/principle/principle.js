import React, { Component } from 'react';
import {
    IMAGE_ABOUT_PRINCIPLE
} from "./../../../../style/image.js";

export default class Principle extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Наши принципы ремонта</h2>
                            <article>
                                Мы фанаты своего дела! Поэтому мы постоянно учимся чему то новому,
                                изучаем новые технологии, обновляем наше оборудование.<br/>
                                Для того,чтобы снизить паразитные расходы мы сами оптимизируем рабочий процесс.
                                Своими силами создаем информационное пространство, поэтому у нас нет
                                менеджеров, закупщиков, директоров, курьеров, промоутеров и тд.
                                Есть только мы - инженеры! Именно такие люди создают Чайный сервис.<br/>
                                Вам больше не придется переживать в надежные ли руки попал Ваш любимый ноутбук,
                                просто заварите себе чаю, и отдохните...
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_PRINCIPLE}}/>
                </div>

            </section>
        )
    }
}