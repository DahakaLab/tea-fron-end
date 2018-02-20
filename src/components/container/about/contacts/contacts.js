import React, { Component } from 'react';
import {
    IMAGE_ABOUT_CONTACTS
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
                                <b>Телефон:</b> +7-911-239-01-73<br/>
                                <b>Почта</b> dahakalab@gmail.com<br/>
                                <b>Telegram:</b> +7-911-239-01-73<br/>
                                <br/>
                                <b>VK:</b> <a className="link" href="https://vk.com/id439849777">Каманин Никита</a><br/>
                                Находимся мы по адресу:<br/>
                                Россия, Ленинградская область, деревня Канисты, ул. Музыкальная<br/>
                                Ближайшая станция метро: Улица дыбенко
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_CONTACTS}}/>
                </div>

            </section>
        )
    }
}