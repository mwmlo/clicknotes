import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import ElectricFields from './ElectricFields'
import GraphFields from './GraphFields'
import PlanetFields from './PlanetFields'

export default class Fields extends Component {
    render() {
        const electricFields = [
            ["Define electric field strength and electric force.", ElectricFields(1)],
            ["Explain electric field potential.", ElectricFields(2)]
        ]
        const graphFields = [
            ["Describe fields in electric parallel plates.", GraphFields(1)],
            ["Describe graphs of fields in point sources.", GraphFields(2)],
            ["Describe fields in hollow charged conducting spheres.", GraphFields(3)]
        ]
        const planetFields = [
            ["Describe different types of energy.", PlanetFields(1)],
            ["Describe potential inside a planet.", PlanetFields(2)],
            ["Define orbital velocity, orbital period and different types of orbits.", PlanetFields(3)],
            ["Describe escape velocity.", PlanetFields(4)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Fields 🪐</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Electric Fields</h3>
                                <Accordion questionAnswer={electricFields} topic="electricFields" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Graphing Fields</h3>
                                <Accordion questionAnswer={graphFields} topic="graphFields" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Planetary Fields</h3>
                                <Accordion questionAnswer={planetFields} topic="planetFields" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
