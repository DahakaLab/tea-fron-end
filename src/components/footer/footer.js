import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer ">
                <p>
                    <small>
                        <time>2017</time> © <a href="https://vk.com/id439849777">DahakaLab VK</a>
                    </small>
                </p>
                <address>
                    <a href="dahakalab@gmail.com/">DahakaLab mail</a>
                </address>
            </footer>
        )
    }
}