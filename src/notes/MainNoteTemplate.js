import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Accordion from '../../../components/Accordion'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import * as notesCSS from "../../../components/notes.module.css"

/* Import Note Components */


export default class MainNote extends Component {
    render() {
        const NoteComponentName = [
            [/* Question, Answer*/],
        ]

        return (
            <div>
                <Navigation />

                <Container className={notesCSS.notesContainer}>
                    <h1 className={notesCSS.display1}>Topic Name</h1>
                    
                    <Row>
                        <Col className="col-sm">
                            <div className={notesCSS.subtopic}>
                                <h3>Note Component</h3>
                                <Accordion questionAnswer={ } topic=" " />
                            </div>
                        </Col>
                        
                    </Row>
                    
                </Container>

                <Footer/>

            </div>
        )
    }
}
