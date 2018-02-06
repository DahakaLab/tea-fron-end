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
            <div className="about ">
                <aside className="aside ">
                    <nav className="nav_link_aside ">
                        <Link className="article" to="/about">Мой опыт работы</Link>
                        <Link className="article" to="/about/politics">Моя политика работы</Link>
                        <Link className="article" to="/about/principle">Мой принцип работы</Link>
                        <Link className="article" to="/about/equipment">Мое оборудование</Link>
                        <Link className="article" to="/about/contacts">Контакты</Link>
                    </nav>
                </aside>
                <div className="articles_about ">
                    <Switch>
                        <Route exact path="/about" component={Experince}/>
                        <Route path="/about/politics" component={Politics}/>
                        <Route exact path="/about/principle" component={Principle}/>
                        <Route exact path="/about/equipment" component={Equipment}/>
                        <Route exact path="/about/contacts" component={Contacts}/>
                    </Switch>
                </div>
            </div>
        )
    }
}