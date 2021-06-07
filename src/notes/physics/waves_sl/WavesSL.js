import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'

import SHMAnswers from './SHM'
import Travelling from './Travelling'
import WaveChar from './WaveChar'
import WaveBeh from './WaveBeh'
import Standing from './Standing'

import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"
import Footer from '../../../components/Footer'

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
        const waveChar = [
            ["Describe the relationship between intensity and amplitude.", WaveChar(1)],
            ["Explain the principle of superposition.", WaveChar(2)],
            ["Explain the concept of path difference.", WaveChar(3)],
            ["Describe polarisation.", WaveChar(4)],
            ["Explain Brewster's Law.", WaveChar(5)],
            ["Explain Malus' Law.", WaveChar(6)]
        ]
        const waveBeh = [
            ["Describe reflection.", WaveBeh(1)],
            ["Describe refraction.", WaveBeh(2)],
            ["Describe dispersion and total internal reflection.", WaveBeh(3)],
            ["Describe diffraction.", WaveBeh(4)],
            ["Describe single slit diffraction.", WaveBeh(5)]
        ]
        const standing = [
            ["Define standing wave properties.", Standing(1)],
            ["Distinguish between standing waves and traveling waves.", Standing(2)],
            ["Describe standing waves on a string, in open pipes, and in a pipe with one closed end.", Standing(3)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
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
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Wave Characteristics</h3>
                                <Accordion questionAnswer={waveChar} topic="waveChar" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Wave Behaviour</h3>
                                <Accordion questionAnswer={waveBeh} topic="waveBeh" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Standing Waves</h3>
                                <Accordion questionAnswer={standing} topic="standing" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                        </Col>
                    </Row>
                </Container>

                <Footer/>

            </div>
        )
    }
}

export default WavesSL
