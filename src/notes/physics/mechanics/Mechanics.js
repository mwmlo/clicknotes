import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Motion from './Motion'
import Forces from './Forces'
import Springs from './Springs'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

class Mechanics extends Component {
    render() {
        const motion = [
            ["Define the quantities of motion.", Motion(1)],
            ["Distinguish between velocity, speed and acceleration.", Motion(2)],
            ["Describe position time graphs and velocity time graphs.", Motion(3)]
        ]
        const forces = [
            ["Define the quantities on a force diagram.", Forces(1)],
            ["Describe gravitational force and mass.", Forces(2)],
            ["Describe Newton's second law.", Forces(3)],
            ["Explain the forces interacting in a falling object.", Forces(4)],
            ["Explain the forces present during projectile motion.", Forces(5)],
            ["Explain the forces present in elevators.", Forces(6)]
        ]
        const springs = [
            ["Explain the forces present when a spring stretches.", Springs(1)],
            ["Define Hooke's Law.", Springs(2)],
            ["Distinguish between different types of friction.", Springs(3)]
        ]

        return (
            <div>
                <Navigation />

                <Container>
                    <h1 className={notesCSS.display1}>Mechanics ⚙️</h1>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Motion</h3>
                                <Accordion questionAnswer={motion} topic="motion" />
                            </div>
                            <div className={notesCSS.subtopic}>
                                <h3>Forces</h3>
                                <Accordion questionAnswer={forces} topic="forces" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Springs</h3>
                                <Accordion questionAnswer={springs} topic="springs" />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Mechanics
