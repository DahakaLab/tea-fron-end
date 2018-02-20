import React, { Component } from 'react';
import {
    IMAGE_404
} from "./../../../style/image.js";

export default class NotFound extends Component {
    render() {
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>404</h2>
                            <article>
                                Такой страницы не существует.
                                Если вы абсолютно уверены что делаете все правильно,
                                значит адрес был изменен или страница удалена вовсе.
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_404}}/>
                </div>

            </section>
        )
    }
}