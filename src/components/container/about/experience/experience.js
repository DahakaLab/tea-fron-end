import React, { Component } from 'react';
import {
    IMAGE_ABOUT_RIGHT_1
} from "./../../../../style/image.js";

export default class Experince extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Мой опыт</h2>
                            <article>
                                У меня большой опыт работы/
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_RIGHT_1}}/>
                </div>

            </section>
        )
    }
}