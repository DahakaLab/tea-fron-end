import React, { Component } from 'react';
import {
    IMAGE_MAIN_DELIVERY_MODAL
} from "./../../../../style/image.js";

export default class Delivery extends Component {
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="modal">
                            <h2>Время - деньги!</h2>
                            <article>
                                Мы прексрано понимаем важность времени в современном мире, поэтому мы сами к вам приедем
                                все расскажем и заберем ноутбук на диагностику. Когда ноутбук будет готов, мы так-же бесплатно привезем его к вам.
                                И все это бесплатно!
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_MAIN_DELIVERY_MODAL}}/>
                </div>

            </section>
        )
    }
}