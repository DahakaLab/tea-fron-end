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
                <section className="portfolio_section grid">
                    <Link className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/65785/0b5wcHN5lsk.jpg)`}} to="/about">
                        <span>Мой опыт работы</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/657b7/r5AUiYTfOe4.jpg)`}} to="/about/politics">
                        <span>Моя политика работы</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/65799/TfGFPLnQZuA.jpg)`}} to="/about/principle">
                        <span>Мой принцип работы</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/6578f/wDoQIyVJakw.jpg)`}} to="/about/equipment">
                        <span>Мое оборудование</span>
                    </Link>
                    <Link className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/657a3/nfYwNIFGu5c.jpg)`}} to="/about/contacts">
                        <span>Контакты</span>
                    </Link>
                    <div className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/6577b/SztrIB5gUq8.jpg)`}}>
                        <span>div 6</span>
                    </div>
                    <div className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/65771/0DnshkM7bKA.jpg)`}}>
                        <span>div 7</span>
                    </div>
                    <div className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/65767/T4k02okfjGE.jpg)`}}>
                        <span>div 8</span>
                    </div>
                    <div className="portfolio_item grid" style={{backgroundImage: `url(https://pp.userapi.com/c841534/v841534079/6575d/CWUeZZRag_0.jpg)`}}>
                        <span>div 9</span>
                    </div>
                </section>
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