import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import UniformCirc from './UniformCirc'
import VerticalCirc from './VerticalCirc'
import DescribingFields from './DescribingFields'
import GravFields from './GravFields'

export default class CircMotion extends Component {
    render() {
        const uniformCirc = [
            ["Define period, frequency and uniform circular motion.", UniformCirc(1)],
            ["Describe circular motion in conical pendulums, curved roads and banked curves.", UniformCirc(2)]
        ]
        const verticalCirc = [
            ["Describe circular motion in a vertical circle.", VerticalCirc(1)],
            ["Describe tension, speed and energy in a vertical circle.", VerticalCirc(2)],
            ["Describe the critical speed in vehicles moving over a circle.", VerticalCirc(3)]
        ]
        const describingFields = [
            ["Define fields, field strength, potential and field lines.", DescribingFields(1)],
            ["Describe equipotential surfaces.", DescribingFields(2)]
        ]
        const gravFields = [
            ["Define gravitational field strength and gravitational force.", GravFields(1)],
            ["Explain gravitational field potential.", GravFields(2)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Circular Motion 🎡</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Uniform Circular Motion</h3>
                                <Accordion questionAnswer={uniformCirc} topic="uniformCirc" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Vertical Circular Motion</h3>
                                <Accordion questionAnswer={verticalCirc} topic="verticalCirc" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Describing Fields</h3>
                                <Accordion questionAnswer={describingFields} topic="describingFields" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Gravitational Fields</h3>
                                <Accordion questionAnswer={gravFields} topic="gravFields" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
