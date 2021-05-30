import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'

import SHMAnswers from './SHM'

import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"
import Travelling from './Travelling'

class WavesSL extends Component {
    render() {
        const SHM = [
            ["Define oscillation, period, frequency, amplitude and displacement.", SHMAnswers(1)],
            ["Define simple harmonic motion.", SHMAnswers(2)],
            ["Draw the graphs for displacement, velocity and acceleration during SHM.", SHMAnswers(3)],
            ["Explain changes in energy and velocity during SHM.", SHMAnswers(4)]
        ]
        const travelling = [
            ["Distinguish between transverse & longitudinal waves.", Travelling(1)],
            ["Define wave speed, wavelength and their relationship.", Travelling(2)],
            ["Read displacement-distance graphs and displacement-time graphs for SHM.", Travelling(3)],
            ["Describe the electromagnetic spectrum.", Travelling(4)],
            ["Describe sound waves.", Travelling(5)]
        ]

        return (
            <div>
                <Navigation />

                <Container>
                    <h1 className={notesCSS.display1}>Waves SL 🌊</h1>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Simple Harmonic Motion</h3>
                                <Accordion questionAnswer={SHM} topic="SHM" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Travelling Waves</h3>
                                <Accordion questionAnswer={travelling} topic="travelling" />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default WavesSL
