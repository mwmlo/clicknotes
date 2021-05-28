import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'

import Heat from './Heat'

import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

class Mechanics extends Component {
    render() {
        const heat = [
            ["Define heat and temperature.", Heat(1)],
            ["Describe internal kinetic and internal potential energy.", Heat(2)],
            ["Describe the kinetic theory of molecules.", Heat(3)],
            ["Define thermal capacity and specific heat capacity.", Heat(4)],
            ["Define specific latent heat.", Heat(5)]
        ]

        return (
            <div>
                <Navigation />

                <Container>
                    <h1 className={notesCSS.display1}>Thermal 🔥</h1>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Heat, temperature and energy</h3>
                                <Accordion questionAnswer={heat} topic="heat" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            {/*...*/}

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Mechanics
