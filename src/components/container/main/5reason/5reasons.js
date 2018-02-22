import React, { Component } from 'react';
import {
    IMAGE_MAIN_5REASON_MODAL
} from "./../../../../style/image.js";

export default class FiveReasons extends Component {
    render(){
        return(
            <section className="landing_section modal_window">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="modal">
                            <h2>Простая арифметика делает нас лучшими!</h2>
                            <article>
                                Ненадо выводить сложные формулы чтобы понять что
                                мы это то что Вам нужно. Судите сами: <br/>
                                1. К Вам приедут, осмотрят ноутбук, скажут примерную стоимость и сроки <br/>
                                2. Полностью проверят ноутбук на наличие деффектов <br/>
                                3. Используя все наши возможности произведут ремонт на высочайшем уровне <br/>
                                4. Проведут повторную диагностику чтобы убедить что ноутбук себя превосходно чувствует <br/>
                                5. Привезут ноутбук обратно к Вам
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_MAIN_5REASON_MODAL}}/>
                </div>

            </section>
        )
    }
}