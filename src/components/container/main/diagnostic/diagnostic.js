import React, { Component } from 'react';
import {
    IMAGE_MAIN_DIAGNOSTIC_MODAL
} from "./../../../../style/image.js";

export default class Diagnostic extends Component {
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Оплата только за результат!</h2>

                            <article>
                                Бесплатная диагностика позволяет максимально объективно оценивать состояние ноутбука,
                                ведь мы заинтересованы в качественном ремонте точно так-же как и вы!
                                Поэтому Вам не придется переживать и сомневаться в качестве проведенной диагностики.
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_MAIN_DIAGNOSTIC_MODAL}}/>
                </div>

            </section>
        )
    }
}