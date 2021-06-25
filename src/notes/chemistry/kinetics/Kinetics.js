import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import Rates from "./Rates"
import Order from "./Order"

export default class Kinetics extends Component {
    render() {
        const rates = [
            ["Define rate of reaction.", Rates(1)],
            ["Describe different ways of measuring rate of reaction.", Rates(2)],
            ["Describe collision theory and factors affecting the rate of reaction.", Rates(3)],
            ["Describe catalysts.", Rates(4)],
            ["Describe the Maxwell-Boltzmann distribution.", Rates(5)]
        ]
        const order = [
            ["Describe the rate law and rate order.", Order(1)],
            ["Explain how to determine rate order from initial rates.", Order(2)],
            ["Explain reaction mechanisms.", Order(3)],
            ["Define the Arrhenius equation.", Order(4)],
            ["Describe half life for first order reactions.", Order(5)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Kinetics 🏃</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Rates of reaction</h3>
                                <Accordion questionAnswer={rates} topic="rates" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>(Rate) Law and Order</h3>
                                <Accordion questionAnswer={order} topic="order" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
