import React, { Component } from 'react';
import {
    IMAGE_ABOUT_ABOUT
} from "./../../../../style/image.js";

export default class Experince extends Component{
    render(){
        return(
            <section className="landing_section">

                <div className="about_content grid">
                    <div className="about_content_left grid">
                        <div className="contacts ">
                            <h2>О нас</h2>
                            <article>
                                Мы лучшие специалисты! Огромный опыт работы со многими электротехническими
                                устройствами подарили нам богатейший набор знаний, которые мы
                                умело используем при диагностике и ремонте ноутбуков. Полное представление
                                работы всех узлов ноутбука позволяют нам очень точно диагностировать
                                и в короткие сроки устранять неисправность. Аккуратность и педантичность
                                поднимают качество нашей работы на совершенно новый уровень. <br/>
                                Мы всегда готовы к сотрудничеству, поэтому с нами всегда можно найти общий язык,
                                чтобы подобрать идеальный вариант развития собыйтий.
                            </article>
                        </div>
                    </div>
                    <div className="about_content_right grid" style={{backgroundImage: IMAGE_ABOUT_ABOUT}}/>
                </div>

            </section>
        )
    }
}