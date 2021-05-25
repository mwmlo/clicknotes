import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import * as notesCSS from "./notes.module.css"

export default class Navigation extends Component {
    render() {
        return (
            <Navbar className="navbar-dark bg-default" className={notesCSS.navbarHorizontal} expand="lg">
                <a class="navbar-brand" href="/">Click Notes</a>
            </Navbar>
        )
    }
}
