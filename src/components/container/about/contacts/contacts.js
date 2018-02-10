import React, { Component } from 'react';
import {
    IMAGE_ABOUT_RIGHT_5
} from "./../../../../style/image.js";

export default class Contacts extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Контакты</h2>
                            <article>
                                +7-911-239-01-73
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_RIGHT_5}}/>
                </div>

            </section>
        )
    }
}