import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import EnergyChanges from './EnergyChanges'
import EnergyCycles from './EnergyCycles'

export default class Energetics extends Component {
    render() {
        const energyChanges = [
            ["Define energetics.", EnergyChanges(1)],
            ["Describe energy level diagrams for exothermic and endothermic reactions.", EnergyChanges(2)],
            ["Define bond enthalpy and average bond enthalpy.", EnergyChanges(3)],
            ["Define specific heat capacity.", EnergyChanges(4)],
            ["Describe the Chapman cycle.", EnergyChanges(5)]
        ]
        const energyCycles = [
            ["Describe how Hess' Law is used to determine standard enthalpy change.", EnergyCycles(1)],
            ["Describe the different types of enthalpy.", EnergyCycles(2)],
            ["Describe a Born Haber cycle.", EnergyCycles(3)],
            ["Define entropy, its factors and its equation.", EnergyCycles(4)],
            ["Define spontaneity and Gibbs' free energy.", EnergyCycles(5)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Energetics ⚡</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Energy Changes</h3>
                                <Accordion questionAnswer={energyChanges} topic="energyChanges" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Energy Cycles</h3>
                                <Accordion questionAnswer={energyCycles} topic="energyCycles" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
