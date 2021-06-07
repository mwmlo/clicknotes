import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'

import Heat from './Heat'
import Gases from './Gases'

import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

class Thermal extends Component {
    render() {
        const heat = [
            ["Define heat and temperature.", Heat(1)],
            ["Describe internal kinetic and potential energy.", Heat(2)],
            ["Describe the kinetic theory of molecules.", Heat(3)],
            ["Define thermal capacity & specific heat capacity.", Heat(4)],
            ["Define specific latent heat.", Heat(5)]
        ]
        const gases = [
            ["Describe the relationship between moles and particles.", Gases(1)],
            ["Describe the assumptions for ideal gases.", Gases(2)],
            ["Explain gas pressure.", Gases(3)],
            ["Define Boyle's law, Charles' law and Gay-Lussac's law.", Gases(4)],
            ["Explain how real gases deviate from ideal gas behaviour.", Gases(5)],
            ["Describe the ideal gas law using kinetic theory.", Gases(6)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Thermal 🔥</h1>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Heat, temperature and energy</h3>
                                <Accordion questionAnswer={heat} topic="heat" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Ideal gases</h3>
                                <Accordion questionAnswer={gases} topic="gases" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer/>

            </div>
        )
    }
}

export default Thermal
