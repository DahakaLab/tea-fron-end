import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Repair extends Component {
    render(){
        return(
            <section className="landing_section">

                <div>Repair</div>

                <Link className="button" to="/">На главную</Link>

            </section>
        )
    }
}