import React, { Component } from 'react'
import { Link } from "react-router-dom";
import greenNotes from "../images/misc/greenNotes.svg"
import classnames from "classnames";
import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Button
} from "reactstrap";

import * as homeCSS from "./home.module.css"
import About from './About';

class Home extends Component {

    state = {
        tabs: 1
    };
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    render() {
        return (
            <div className={homeCSS.AppHeader}>

                <h1 className="display-1">IB Click Notes</h1>

                <div className={homeCSS.flexRow}>
                    <div className={homeCSS.home}>

                        {/* Link to information about active revision*/}
                        <About />
                        
                        {/* Navigation menu for subjects */}
                        <div className={homeCSS.navWrapper}>
                            <Nav
                                className="nav-fill flex-column flex-md-row"
                                id="tabs-icons-text"
                                pills
                                role="tablist"
                            >
                                <NavItem>
                                    <NavLink
                                        aria-selected={this.state.tabs === 1}
                                        className={classnames("mb-sm-3 mb-md-0", {
                                            active: this.state.tabs === 1
                                        })}
                                        onClick={e => this.toggleNavs(e, "tabs", 1)}
                                        href="#"
                                        role="tab"
                                    >
                                        <p className={homeCSS.navTitle}>
                                            <i className="ni ni-atom mr-2" />
                                            Physics
                                        </p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        aria-selected={this.state.tabs === 2}
                                        className={classnames("mb-sm-3 mb-md-0", {
                                            active: this.state.tabs === 2
                                        })}
                                        onClick={e => this.toggleNavs(e, "tabs", 2)}
                                        href="#"
                                        role="tab"
                                    >
                                        <p className={homeCSS.navTitle}>
                                            <i className="fa fa-flask mr-2" />
                                            Chemistry
                                        </p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        aria-selected={this.state.tabs === 3}
                                        className={classnames("mb-sm-3 mb-md-0", {
                                            active: this.state.tabs === 3
                                        })}
                                        onClick={e => this.toggleNavs(e, "tabs", 3)}
                                        href="#"
                                        role="tab"
                                    >
                                        <p className={homeCSS.navTitle}>
                                            <i className="fa fa-users mr-2" />
                                            Psychology
                                        </p>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>

                        {/* Card descriptions for each subject */}

                        <Card className="shadow" className={homeCSS.headerCard}>
                            <CardBody className={homeCSS.cardBody}>
                                <TabContent activeTab={"tabs" + this.state.tabs}>
                                    <TabPane tabId="tabs1">
                                        <p className={homeCSS.cardDesc}>
                                            Access interactive notes for IB Physics (SL and HL).
                                </p>
                                        <Link to="/mechanics">
                                            <Button color="success" outline type="button">
                                                Mechanics
                                            </Button>
                                        </Link>
                                        <Link to="/thermal">
                                            <Button color="success" outline type="button">
                                                Thermal Physics
                                            </Button>
                                        </Link>
                                        <Link to="/wavesSL">
                                            <Button color="success" outline type="button">
                                                Waves (SL)
                                            </Button>
                                        </Link>

                                    </TabPane>
                                    <TabPane tabId="tabs2">
                                        <p className={homeCSS.cardDesc}>
                                            Access interactive notes for IB Chemistry (SL and HL).
                                        </p>
                                        <Button color="success" outline type="button">
                                            Coming soon!
                                        </Button>
                                    </TabPane>
                                    <TabPane tabId="tabs3">
                                        <p className={homeCSS.cardDesc}>
                                            Access interactive notes for IB Psychology (SL).
                                        </p>
                                        <Button color="success" outline type="button">
                                            Coming soon!
                                        </Button>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Green notes floating image */}
                    <div className={homeCSS.greenNotesBg}>
                    <img src={greenNotes} alt="green notes" id={homeCSS.greenNotes} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home