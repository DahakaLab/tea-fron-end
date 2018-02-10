import React, { Component } from 'react';
import {
    IMAGE_ABOUT_RIGHT_4
} from "./../../../../style/image.js";

export default class Equipment extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Мое оборудование</h2>
                            <article>
                                Паялка и мультиметр.
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_RIGHT_4}}/>
                </div>

            </section>
        )
    }
}