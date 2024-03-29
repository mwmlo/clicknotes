import React, { Component } from 'react'
import { Link } from "react-router-dom";
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

import demo from '../images/misc/demo.gif'
import * as landingCSS from "./landing.module.css"

export class Tabs extends Component {

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
            <>
                <Nav className="nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    pills
                    role="tablist">

                    <NavItem>
                        <NavLink aria-selected={this.state.tabs === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleNavs(e, "tabs", 1)}
                            href="#"
                            role="tab">
                                <i className="ni ni-atom mr-2" />
                                Physics
                            </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink aria-selected={this.state.tabs === 2}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleNavs(e, "tabs", 2)}
                            href="#"
                            role="tab">
                                <i className="fa fa-flask mr-2" />
                                Chemistry
                            </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink aria-selected={this.state.tabs === 3}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleNavs(e, "tabs", 3)}
                            href="#"
                            role="tab">
                                <i className="fa fa-users mr-2" />
                                Psychology
                            </NavLink>
                    </NavItem>

                </Nav>

                {/* Card descriptions for each subject */}

                <Card className="shadow">
                    <CardBody className={landingCSS.cardBody}>
                        <TabContent activeTab={"tabs" + this.state.tabs}>

                            <TabPane tabId="tabs1">
                                <Link to="/mechanics">
                                    <Button color="success" outline type="button">
                                        ⚙️ Mechanics
                                    </Button>
                                </Link>
                                <Link to="/thermal">
                                    <Button color="success" outline type="button">
                                        🔥 Thermal Physics
                                    </Button>
                                </Link>
                                <Link to="/wavesSL">
                                    <Button color="success" outline type="button">
                                        🌊 Waves (SL)
                                    </Button>
                                </Link>
                                <Link to="/electroSL">
                                    <Button color="success" outline type="button">
                                        💡 Electricity
                                    </Button>
                                </Link>
                                <Link to="/circmotion">
                                    <Button color="success" outline type="button">
                                        🎡 Circular Motion
                                    </Button>
                                </Link>
                                <Link to="/nuclearSL">
                                    <Button color="success" outline type="button">
                                        ⚛️ Nuclear Physics (SL)
                                    </Button>
                                </Link>
                                <Link to="/energy">
                                    <Button color="success" outline type="button">
                                        🏭 Energy Production
                                    </Button>
                                </Link>
                                <Link to="/fields">
                                    <Button color="success" outline type="button">
                                        🪐 Fields
                                    </Button>
                                </Link>
                                <Link to="/electroHL">
                                    <Button color="success" outline type="button">
                                        🧲 Electromagnetism (HL)
                                    </Button>
                                </Link>
                                <Link to="/nuclearHL">
                                    <Button color="success" outline type="button">
                                        🌠 Nuclear Physics (HL)
                                    </Button>
                                </Link>

                            </TabPane>

                            <TabPane tabId="tabs2">
                                <Link to="/atomic">
                                    <Button color="success" outline type="button">
                                        ⚛️ Atomic Structure
                                    </Button>
                                </Link>
                                <Link to="/periodicity">
                                    <Button color="success" outline type="button">
                                        📈 Periodicity
                                    </Button>
                                </Link>
                                <Link to="/bonding">
                                    <Button color="success" outline type="button">
                                        🔗 Bonding
                                    </Button>
                                </Link>
                                <Link to="/energetics">
                                    <Button color="success" outline type="button">
                                        ⚡ Energetics
                                    </Button>
                                </Link>
                                <Link to="/energetics">
                                    <Button color="success" outline type="button">
                                        🏃 Kinetics
                                    </Button>
                                </Link>
                                <Link to="/equilibrium">
                                    <Button color="success" outline type="button">
                                        ⚖️ Equilibrium
                                    </Button>
                                </Link>
                            </TabPane>

                            <TabPane tabId="tabs3">
                                <Button color="success" outline type="button">
                                    Coming soon!
                                </Button>
                            </TabPane>
                            
                        </TabContent>
                    </CardBody>
                </Card>

                <img src={demo} className={landingCSS.demo} alt="Demo of click note" />
                <p className={landingCSS.caption}>Demo of how Click Notes work</p>

            </>
        )
    }
}

export default Tabs
