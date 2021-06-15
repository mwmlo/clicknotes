import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import Generating from './Generating'
import Renewable from './Renewable'
import BlackBody from './BlackBody'
import Greenhouse from './Greenhouse'

export default class Energy extends Component {
    render() {
        const generating = [
            ["Define fuel, specific energy, energy density, renewable resources and non-renewable resources.", Generating(1)],
            ["Explain Sankey Diagrams and why electricity is useful.", Generating(2)],
            ["Describe how electrical AC generators work.", Generating(3)],
            ["Explain how fossil fuel power stations generate electricity.", Generating(4)],
            ["Explain how nuclear power stations generate electricity.", Generating(5)],
            ["Describe the problems surrounding nuclear energy.", Generating(6)]
        ]
        const renewable = [
            ["Explain how solar cells and solar water heating works.", Renewable(1)],
            ["Describe wind power generators.", Renewable(2)],
            ["Describe hydroelectric dams work.", Renewable(3)],
            ["Describe how tidal power and wave power works.", Renewable(4)]
        ]
        const blackBody = [
            ["Define conduction, convection and radiation.", BlackBody(1)],
            ["Define a black body and emissivity.", BlackBody(2)],
            ["Describe Wien's displacement law.", BlackBody(3)],
            ["Describe the Stefan-Boltzmann Law.", BlackBody(4)]
        ]
        const greenhouse = [
            ["Define the solar constant and albedo.", Greenhouse(1)],
            ["Explain the greenhouse effect and global warming.", Greenhouse(2)],
            ["Explain the molecular properties of greenhouse gases.", Greenhouse(3)],
            ["Explain how to calculate the temperature of the Earth.", Greenhouse(4)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Energy Production 🏭</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Generating Energy</h3>
                                <Accordion questionAnswer={generating} topic="generating" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Renewable Resources</h3>
                                <Accordion questionAnswer={renewable} topic="renewable" />
                            </div>
                        </Col>                        
                    </Row>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Black Body Radiation</h3>
                                <Accordion questionAnswer={blackBody} topic="blackBody" />
                            </div>
                        </Col>   
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Greenhouse Effect</h3>
                                <Accordion questionAnswer={greenhouse} topic="greenhouse" />
                            </div>
                        </Col>                     
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
