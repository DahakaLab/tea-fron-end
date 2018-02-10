import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <footer className="main_footer">

                <div className="container">
                    <div className="footer_logo">
                        Сайт разработан
                        <span>
                            <a href="https://vk.com/id439849777">DahakaLab</a>
                        </span>
                    </div>
                    <div className="footer_copy">
                        ~©~
                    </div>
                </div>

            </footer>
        )
    }
}