import React, { Component } from 'react'

import * as landingCSS from "./landing.module.css"
import About from './About';
import Tabs from './Tabs';

class Landing extends Component {

    state = {
        tabs: 1
    };
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    render() {
        return (
            <div className={landingCSS.landing}>
                <div className={landingCSS.cover}>
                    <h1 className={landingCSS.title}>IB Click Notes 📝</h1>
                    <About />
                </div>
                <div className={landingCSS.menu}>
                    <Tabs />
                </div>
            </div>
        )
    }
}

export default Landing