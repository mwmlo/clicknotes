import React, { Component } from 'react'
import greenNotes from "../images/misc/greenNotes.svg"
import * as homeCSS from "./home.module.css"
import { Button, Modal, UncontrolledTooltip } from "reactstrap";
import { Link } from 'react-router-dom';

class About extends Component {
    state = {
        defaultModal: false
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    render() {
        return (
            <>
                <Link className={homeCSS.info} onClick={() => this.toggleModal("notificationModal")} >
                    <h3>Interactive notes, built for <strong>active revision.</strong></h3>
                </Link>

                <Modal
                    className="modal-dialog-centered modal-success"
                    contentClassName="bg-gradient-success"
                    isOpen={this.state.notificationModal}
                    toggle={() => this.toggleModal("notificationModal")}
                >
                    <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-notification">
                            What is active revision?
                  </h6>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="py-3 text-center">
                            <i className="ni ni-book-bookmark ni-3x" />
                            <h4 className="heading mt-4">Boost your study strategy.</h4>
                            <p>
                                Active revision is one of the most effective studying techniques. By testing yourself throughout your revision with clickable notes, you engage with information more effectively.
                            </p><p>
                                Use Click Notes to review material quickly, test your recall and check your understanding.
                            </p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button
                            className="btn-white"
                            color="default"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                        >
                            OK, got it!
                        </Button>
                    </div>
                </Modal>

            </>
        );
    }
}

export default About;