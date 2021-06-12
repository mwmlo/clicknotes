import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import PeriodicTable from './PeriodicTable'
import PeriodicGroup from './PeriodicGroup'
import DBlock from './DBlock'
import Catalysts from './Catalysts'

export default class Periodicity extends Component {
    render() {
        const periodicTable = [
            ["Define groups, periods and metalloids.", PeriodicTable(1)],
            ["Describe effective nuclear charge.", PeriodicTable(2)],
            ["Explain the periodic trend for atomic radius.", PeriodicTable(3)],
            ["Describe the periodic trends for cations and anions.", PeriodicTable(4)],
            ["Define electron affinity.", PeriodicTable(5)],
            ["Describe how electron affinity changes in the periodic table.", PeriodicTable(6)],
            ["Describe electronegativity trends.", PeriodicTable(7)],
            ["Describe how melting point changes down Group 1 and Group 17.", PeriodicTable(8)]
        ]

        const periodicGroup = [
            ["Describe the properties of alkali metals.", PeriodicGroup(1)],
            ["Describe the properties of halogens.", PeriodicGroup(2)],
            ["Explain how electronegativity affects the bonding of period 3 oxides.", PeriodicGroup(3)],
            ["Describe the reactions of oxides with bases and acids.", PeriodicGroup(4)]
        ]

        const dBlock = [
            ["Define the d-block elements and transition metals.", DBlock(1)],
            ["Describe trends in atomic radius in transition metals.", DBlock(2)],
            ["Explain transition metals' variable oxidation states.", DBlock(3)],
            ["Define the type of bonding in coordinate complexes.", DBlock(4)],
            ["Describe coordination compounds.", DBlock(5)]
        ]

        const catalysts = [
            ["Explain the principles behind magnetic properties.", Catalysts(1)],
            ["Define diamagnetic, paramagnetic and ferromagnetic materials.", Catalysts(2)],
            ["Explain the formation of coloured compounds.", Catalysts(3)],
            ["Explain factors affecting the type of colour shown.", Catalysts(4)],
            ["Distinguish between heterogenous and homogenous catalysts.", Catalysts(5)]
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Periodicity 📈</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>The Periodic Table</h3>
                                <Accordion questionAnswer={periodicTable} topic="periodicTable" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Periodic Groups</h3>
                                <Accordion questionAnswer={periodicGroup} topic="periodicGroup" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>d-block Elements</h3>
                                <Accordion questionAnswer={dBlock} topic="dBlock" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Magnets, Colours and Catalysts</h3>
                                <Accordion questionAnswer={catalysts} topic="catalysts" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer/>

            </div>
        )
    }
}
