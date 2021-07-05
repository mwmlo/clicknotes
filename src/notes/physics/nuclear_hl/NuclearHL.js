import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import Photoelectric from './Photoelectric'
import Matter from './Matter'
import QuantumModels from './QuantumModels'
import Tunnelling from './Tunnelling'
import NuclearRadii from './NuclearRadii'

export default class NuclearHL extends Component {
    render() {
        const photoelectric = [
            ["Describe the photoelectric effect and its key factors.", Photoelectric(1)],
            ["Describe how the photoelectric effect supports wave-particle duality.", Photoelectric(2)],
            ["Explain the work function and how it relates to kinetic energy.", Photoelectric(3)],
            ["Describe stopping potential and the apparatus used to determine stopping potential.", Photoelectric(4)],
            ["Describe the graphs of potential against frequency and potential against intensity.", Photoelectric(5)]
        ]

        const matter = [
            ["Explain the de Broglie hypothesis.", Matter(1)],
            ["Describe the electron diffraction experiment.", Matter(2)],
            ["Describe the Davisson and Germer experiment.", Matter(3)],
            ["Describe pair production and annihilation.", Matter(4)]
        ]

        const quantumModels = [
            ["Explain Bohr's model of the atom and the associated equation for hydrogen radii.", QuantumModels(1)],
            ["Describe Schrödinger's model of the atom.", QuantumModels(2)],
            ["Explain Heisenberg's Uncertainty Principle.", QuantumModels(3)]
        ]

        const tunnelling = [
            ["Explain the concept of the potential well barrier.", Tunnelling(1)],
            ["Describe how the probability function supports quantum tunnelling.", Tunnelling(2)],
            ["Explain electron diffraction through the nuclear barrier.", Tunnelling(3)]
        ]

        const nuclearRadii = [
            ["Explain the method of closest approach for estimating nuclear radii.", NuclearRadii(1)],
            ["Explain the Fermi radius approach for estimating nuclear radii.", NuclearRadii(2)],
            ["Explain how radioactive decay provides evidence for discrete energy levels in the nucleus.", NuclearRadii(3)],
            ["Describe the law of radioactive decay.", NuclearRadii(4)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Nuclear Physics (HL) 🌠</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Photoelectric Effect</h3>
                                <Accordion questionAnswer={photoelectric} topic="photoelectric" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Matter Waves</h3>
                                <Accordion questionAnswer={matter} topic="matter" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Quantum models</h3>
                                <Accordion questionAnswer={quantumModels} topic="quantumModels" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Quantum tunnelling</h3>
                                <Accordion questionAnswer={tunnelling} topic="tunnelling" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Nuclear radii, energy levels and radioactivity</h3>
                                <Accordion questionAnswer={nuclearRadii} topic="nuclearRadii" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
