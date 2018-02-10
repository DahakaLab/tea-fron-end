import React, { Component } from 'react';
import {
    IMAGE_ABOUT_RIGHT_3
} from "./../../../../style/image.js";

export default class Principle extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Мои принципы ремонта</h2>
                            <article>
                                Делаю быстро, качественно и дорого/
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_RIGHT_3}}/>
                </div>

            </section>
        )
    }
}