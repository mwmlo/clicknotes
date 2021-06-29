import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import Induction from './Induction'
import Alternating from './Alternating'
import Capacitance from './Capacitance'

export default class ElectroHL extends Component {
    render() {
        const induction = [
            ["Describe the motor effect and generator effect.", Induction(1)],
            ["Define magnetic flux and magnetic flux linkage.", Induction(2)],
            ["Explain Lenz's Law.", Induction(3)],
            ["Explain Faraday's Law.", Induction(4)]
        ]
        const alternating = [
            ["Describe how e.m.f. varies with time in an AC generator.", Alternating(1)],
            ["Describe how power varies with time in an AC generator.", Alternating(2)],
            ["Explain root mean square values.", Alternating(3)],
            ["Explain how transformers work and their applications.", Alternating(4)],
            ["Describe what causes power loss in transformers and power lines.", Alternating(5)],
            ["Describe half-wave rectification and full-wave rectification.", Alternating(6)],
            ["Explain smoothing circuits in rectification.", Alternating(7)]
        ]
        const capacitance = [
            ["Describe how a capacitor works.", Capacitance(1)],
            ["Define capacitance.", Capacitance(2)],
            ["Explain factors affecting capacitance.", Capacitance(3)],
            ["Describe capacitors in parallel and in series.", Capacitance(4)],
            ["Describe how capacitors discharge.", Capacitance(5)],
            ["Describe how capacitors charge.", Capacitance(6)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Electromagnetism (HL) 🧲</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Electromagnetic Induction</h3>
                                <Accordion questionAnswer={induction} topic="induction" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Alternating Currents</h3>
                                <Accordion questionAnswer={alternating} topic="alternating" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Capacitance</h3>
                                <Accordion questionAnswer={capacitance} topic="capacitance" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
