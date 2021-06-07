import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import * as notesCSS from "./notes.module.css"

export default class Navigation extends Component {
    render() {
        return (
            <Navbar className={notesCSS.navbarHorizontal} expand="lg">
                <a id={notesCSS.navbarLink} href="/">⬅ | Back to Home</a>
            </Navbar>
        )
    }
}
