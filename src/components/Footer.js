import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import * as notesCSS from "./notes.module.css"

export default class Footer extends Component {
    render() {
        return (
            <Navbar className={notesCSS.footer} expand="lg">
                <p><strong>Click Notes</strong> | Copyright © 2021 Michelle Lo.</p>
            </Navbar>
        )
    }
}