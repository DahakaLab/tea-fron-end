import React, { Component } from 'react';
import {
    IMAGE_ABOUT_POLITICS
} from "./../../../../style/image.js";

export default class Politics extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Как мы работаем</h2>
                            <article>
                                Из-за большой загруженности осуществлять логистические операции
                                мы можем только в определнные дни в определенном временном диапазоне: <br/>
                                <b>Понедельник:</b> с 18.00 до 23.00<br/>
                                <b>Среда:</b> с 18.00 до 23.00<br/>
                                <b>Пятница:</b> с 18.00 до 23.00<br/>
                                <b>Суббота:</b> с 12.00 до 23.00
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_POLITICS}}/>
                </div>

            </section>
        )
    }
}