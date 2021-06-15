import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import AtomicModels from './AtomicModels'
import AtomicStructure from './AtomicStructure'
import Radioactivity from './Radioactivity'
import MassEnergy from './MassEnergy'
import Particles from './Particles'

export default class NuclearSL extends Component {
    render() {
        const atomicModels = [
            ["Describe the results and conclusions of Rutherford's gold foil experiment.", AtomicModels(1)],
            ["Describe Rutherford's atomic model and its limitations.", AtomicModels(2)],
            ["Explain Bohr's model of the atom and electron transitions.", AtomicModels(3)]
        ]
        const atomicStructure = [
            ["Identify the different types of line spectrums, and what they tell us about atomic structure.", AtomicStructure(1)],
            ["Define atomic number, mass number, and isotopes.", AtomicStructure(2)],
            ["Describe the strong nuclear force.", AtomicStructure(3)]
        ]
        const radioactivity = [
            ["Explain what radioactivity and transmutation refer to.", Radioactivity(1)],
            ["Explain alpha radiation and alpha decay.", Radioactivity(2)],
            ["Explain beta radiation, beta-minus decay and beta-plus decay.", Radioactivity(3)],
            ["Explain gamma radiation.", Radioactivity(4)],
            ["Explain the graph of atomic number versus mass number in terms of stability.", Radioactivity(5)],
            ["Describe what half-life refers to.", Radioactivity(6)]
        ]
        const massEnergy = [
            ["Define units for mass-energy.", MassEnergy(1)],
            ["Explain mass defect and binding energy.", MassEnergy(2)],
            ["Describe nuclear fission.", MassEnergy(3)],
            ["Describe nuclear fusion.", MassEnergy(4)],
            ["Explain pair production and annihilation.", MassEnergy(5)]
        ]
        const particles = [
            ["Describe the Standard Model of particle physics.", Particles(1)],
            ["Explain the different types of quarks.", Particles(2)],
            ["Explain concept of quark confinement and the Higgs Boson.", Particles(3)],
            ["Explain the different types of leptons. ", Particles(4)],
            ["Describe the exchange particles.", Particles(5)],
            ["Explain the rules for drawing Feynman diagrams.", Particles(6)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Nuclear Physics (SL) ⚛️</h1>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Atomic Models</h3>
                                <Accordion questionAnswer={atomicModels} topic="atomicModels" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Atomic Structure</h3>
                                <Accordion questionAnswer={atomicStructure} topic="atomicStructure" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Radioactivity</h3>
                                <Accordion questionAnswer={radioactivity} topic="radioactivity" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Mass and Energy</h3>
                                <Accordion questionAnswer={massEnergy} topic="massEnergy" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Fundamental particles</h3>
                                <Accordion questionAnswer={particles} topic="particles" />
                            </div>
                        </Col>
                    </Row>

                </Container>

                <Footer />

            </div>
        )
    }
}
