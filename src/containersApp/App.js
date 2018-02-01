import React, { Component } from 'react';
import Container from "../components/container/container";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default class App extends Component{
    render(){
        return(
            <div className="container_app ">
                <Header/>
                <Container/>
                <Footer/>
            </div>
        )
    }
}