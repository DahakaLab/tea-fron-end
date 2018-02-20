import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Contacts from "./contacts/contacts";
import Equipment from "./equipment/equipment";
import Experince from "./experience/experience";
import Politics from "./politics/politics";
import Principle from "./principle/principle";

export default class About extends Component{
    render(){
        return(
            <div className="about">

                <section className="about_section grid">
                    <Link className="button" to="/about">
                        <span>О нас</span>
                    </Link>
                    <Link className="button" to="/about/politics">
                        <span>Как мы работаем</span>
                    </Link>
                    <Link className="button" to="/about/principle">
                        <span>Наши принципы работы</span>
                    </Link>
                    <Link className="button" to="/about/equipment">
                        <span>Наше оборудование</span>
                    </Link>
                    <Link className="button" to="/about/contacts">
                        <span>Контакты</span>
                    </Link>
                </section>

                <Switch>
                    <Route exact path="/about" component={Experince}/>
                    <Route path="/about/politics" component={Politics}/>
                    <Route path="/about/principle" component={Principle}/>
                    <Route path="/about/equipment" component={Equipment}/>
                    <Route path="/about/contacts" component={Contacts}/>
                </Switch>

            </div>
        )
    }
}