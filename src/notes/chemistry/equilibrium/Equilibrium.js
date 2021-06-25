import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import Reversible from './Reversible'
import Calculations from './Calculations'

export default class Equilibrium extends Component {
    render() {
        const reversible = [
            ["Define a reversible reaction and equilibrium.", Reversible(1)],
            ["Explain Le Chatelier's Principle.", Reversible(2)],
            ["Describe the equilibrium constant.", Reversible(3)]
        ]
        const calculations = [
            ["Describe the reaction quotient.", Calculations(1)],
            ["Describe the process of calculating equilibrium using changing concentrations.", Calculations(2)],
            ["Explain how free energy relates to equilibrium.", Calculations(3)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Equilibrium ⚖️</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Reversible reactions</h3>
                                <Accordion questionAnswer={reversible} topic="reversible" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Equilibrium calculations</h3>
                                <Accordion questionAnswer={calculations} topic="calculations" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
