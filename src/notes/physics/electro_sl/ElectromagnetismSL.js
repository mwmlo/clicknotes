import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import ElectricQuantities from './ElectricQuantities'
import Resistors from './Resistors'
import Circuits from './Circuits'
import MagneticFields from './MagneticFields'

export default class ElectromagnetismSL extends Component {
    render() {
        const electricQuantities = [
            ["Describe Coulomb's Law.", ElectricQuantities(1)],
            ["Describe electric fields.", ElectricQuantities(2)],
            ["Describe electric potential and potential difference.", ElectricQuantities(3)],
            ["Define current, voltage and resistance.", ElectricQuantities(4)],
            ["Define drift velocity.", ElectricQuantities(5)]
        ]
        const resistors = [
            ["Define Ohm's Law.", Resistors(1)],
            ["Describe factors affecting resistance.", Resistors(2)],
            ["Explain resistance in series and parallel circuits.", Resistors(3)],
            ["Explain potential dividers and potentiometers.", Resistors(4)]
        ]
        const circuits = [
            ["Define power.", Circuits(1)],
            ["Describe Kirchoff's Laws.", Circuits(2)],
            ["Define e.m.f. and internal resistance.", Circuits(3)],
            ["Describe types of battery cells.", Circuits(4)],
            ["Explain cell capacity.", Circuits(5)]
        ]
        const magneticFields = [
            ["Describe the magnetic force created by a moving charge in a wire.", MagneticFields(1)],
            ["Describe the force created by a moving charge in a magnetic field.", MagneticFields(2)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Electromagnetism (SL) 💡</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Electric Quantities</h3>
                                <Accordion questionAnswer={electricQuantities} topic="electricQuantities" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Resistors</h3>
                                <Accordion questionAnswer={resistors} topic="resistors" />
                            </div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Circuits</h3>
                                <Accordion questionAnswer={circuits} topic="circuits" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Magnetic Fields</h3>
                                <Accordion questionAnswer={magneticFields} topic="magneticFields" />
                            </div>
                        </Col>
                    </Row>

                </Container>

                <Footer/>

            </div>
        )
    }
}
