import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */
import BondForces from './BondForces'
import Structure from './Structure'
import Metals from './Metals'
import Hybridisation from './Hybridisation'

export default class Bonding extends Component {
    render() {
        const bondForces = [
            ["Describe ionic bonds and ionic crystal lattices.", BondForces(1)],
            ["Explain factors in ionic bond strength.", BondForces(2)],
            ["Describe covalent bonding.", BondForces(3)],
            ["Explain the concept of polarity.", BondForces(4)],
            ["Describe London dispersion forces.", BondForces(5)],
            ["Describe permanent dipole-dipole forces and hydrogen bonds.", BondForces(6)]
        ]
        const structure = [
            ["Describe a Lewis structure diagram.", Structure(1)],
            ["Explain VSEPR theory, molecular geometry and electron domain geometry.", Structure(2)],
            ["Describe linear, bent, trigonal planar, tetrahedral and trigonal pyramidal shapes.", Structure(3)],
            ["Explain expanded octets.", Structure(4)],
            ["Describe shapes of expanded octet species with 5 electron domains.", Structure(5)],
            ["Describe shapes of expanded octet species with 6 electron domains.", Structure(6)],
            ["Explain resonance structures.", Structure(7)],
            ["Describe formal charges.", Structure(8)]
        ]
        const metals = [
            ["Describe metallic bonding.", Metals(1)],
            ["Explain factors affecting the solubility of polar molecules.", Metals(2)],
            ["Describe the allotropes of carbon.", Metals(3)],
            ["Describe the structure of silicon dioxide.", Metals(4)]
        ]

        const hybridisation = [
            ["Explain what causes hybridisation.", Hybridisation(1)],
            ["Distinguish between sigma and pi bonds.", Hybridisation(2)],
            ["Explain hybridised single, double and triple bonds.", Hybridisation(3)],
            ["Describe how hybridisation determines electron domain geometry.", Hybridisation(4)]
        ]

        return (
            <div>

                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Chemical Bonding 🔗</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Molecular Bonding and Forces</h3>
                                <Accordion questionAnswer={bondForces} topic="bondForces" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Molecular Structure</h3>
                                <Accordion questionAnswer={structure} topic="structure" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Metals, Solubility and Variations</h3>
                                <Accordion questionAnswer={metals} topic="metals" />
                            </div>
                        </Col>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Hybridisation</h3>
                                <Accordion questionAnswer={hybridisation} topic="hybridisation" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
