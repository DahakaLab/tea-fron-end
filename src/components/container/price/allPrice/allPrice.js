import React, { Component } from 'react';
import {
    IMAGE_ABOUT_RIGHT_3
} from "./../../../../style/image.js";

export default class AllPrice extends Component{
    render(){
        return(
            <section className="landing_section price_item">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>Весь прейскурант цен</h2>
                            <article>
                                Это весь прайс
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_RIGHT_3}}/>
                </div>

            </section>
        )
    }
}