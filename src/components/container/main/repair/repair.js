import React, { Component } from 'react';
import {
    IMAGE_MAIN_REPAIR_MODAL
} from "./../../../../style/image.js";

export default class Repair extends Component {
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="modal">
                            <h2>Качество - залог успеха!</h2>
                            <article>
                                Мы фанаты своего дела, поэтому бережно обращаемся с техникой и стараемся
                                сделать так, чтобы после ремонта ноутбук вновь заставил Вас улыбаться!
                                Многолетний опыт работы позволяет нам выполнять все виды ремонтов
                                на высочайшем уровне, а проверенные поставщики нам в этом помагают.
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_MAIN_REPAIR_MODAL}}/>
                </div>

            </section>
        )
    }
}