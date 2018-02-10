import React, { Component } from 'react';
import {
    IMAGE_ABOUT_RIGHT_2
} from "./../../../../style/image.js";

export default class Politics extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Моя политика работы</h2>
                            <article>
                                Работаю понедельник, среда, пятница, суббота
                                с 18.00 до 23.00
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_RIGHT_2}}/>
                </div>

            </section>
        )
    }
}