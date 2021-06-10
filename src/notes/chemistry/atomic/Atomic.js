import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'

import AtomicProp from "./AtomicProp"
import Energy from './Energy'
import Emission from './Emission'
import Ionisation from './Ionisation'

import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

class Thermal extends Component {
    render() {
        const properties = [
            ["Define the components of an atom.", AtomicProp(1)],
            ["Distinguish between isotopes, atomic number, mass number and relative atomic mass.", AtomicProp(2)],
            ["Explain mass spectroscopy.", AtomicProp(3)]
        ]
        const energy = [
            ["Describe atomic energy levels and transitions.", Energy(1)],
            ["Describe Bohr's model of hydrogen.", Energy(2)],
            ["Explain orbital notation and orbital diagrams.", Energy(3)],
            ["Define the three orbital principles.", Energy(4)]
        ]
        const emission = [
            ["Explain why metal ions show colours in flame.", Emission(1)],
            ["Describe the line spectrum and absorption spectrum.", Emission(2)]
        ]
        const ionisation = [
            ["Describe trends in first ionisation energy.", Ionisation(1)],
            ["Describe trends in successive ionisation energy.", Ionisation(2)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Atomic Structure ⚛️</h1>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Atomic properties</h3>
                                <Accordion questionAnswer={properties} topic="properties" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Energy Levels and Orbitals</h3>
                                <Accordion questionAnswer={energy} topic="energy" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Emission Spectrum</h3>
                                <Accordion questionAnswer={emission} topic="emission" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Ionisation Energy</h3>
                                <Accordion questionAnswer={ionisation} topic="ionisation" />
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
