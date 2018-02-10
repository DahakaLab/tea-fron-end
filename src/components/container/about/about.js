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
                        <span>Мой опыт работы</span>
                    </Link>
                    <Link className="button" to="/about/politics">
                        <span>Моя политика работы</span>
                    </Link>
                    <Link className="button" to="/about/principle">
                        <span>Мой принцип работы</span>
                    </Link>
                    <Link className="button" to="/about/equipment">
                        <span>Мое оборудование</span>
                    </Link>
                    <Link className="button" to="/about/contacts">
                        <span>Контакты</span>
                    </Link>
                </section>

                <Switch>
                    <Route exact path="/about" component={Experince}/>
                    <Route path="/about/politics" component={Politics}/>
                    <Route exact path="/about/principle" component={Principle}/>
                    <Route exact path="/about/equipment" component={Equipment}/>
                    <Route exact path="/about/contacts" component={Contacts}/>
                </Switch>

            </div>
        )
    }
}