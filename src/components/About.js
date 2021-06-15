import React, { Component } from 'react'
import * as landingCSS from "./landing.module.css"

class About extends Component {
    render() {
        return (
            <div className={landingCSS.desc}>
                <h3> Interactive notes for <strong>active revision.</strong></h3>
                <p>
                    ☝️ <strong>Review content quicky!</strong> Each Click Note contains a summary of essential content in the IB syllabus topic.
                </p>
                <p>
                    ☝️ <strong>Check your understanding!</strong> Click on the note heading to hide the content and test yourself.
                </p>
                <p>
                    ☝️ <strong>Organise your knowledge!</strong> Notes are organised by topic according to the IB syllabus.
                </p>
            </div>
        );
    }
}

export default About;