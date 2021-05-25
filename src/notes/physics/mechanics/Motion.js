import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import mech0 from "../../../images/mechanicsImg/mech0.png"
import mech1 from "../../../images/mechanicsImg/mech1.png"

function Motion(props) {
    if (props === 1) {
        return (
            <div>
                <ul>
                    <li><strong>Motion</strong>: an object&#39;s position is changing relative to the reference object</li>
                    <li><strong>Reference frames</strong> include:<ul>
                        <li>Object of reference: real object in physical world</li>
                        <li><strong>Coordinate system</strong>: directions, scale and zero point</li>
                        <li><strong>Zero clock reading</strong>: reference for future clock readings</li>
                    </ul>
                    </li>
                    <li><TeX>x</TeX> represents <strong>position</strong>: location of object relative to chosen zero<ul>
                        <li><strong>Displacement</strong> <TeX>\Delta x</TeX>: change in position</li>
                        <li><strong>Distance</strong> <TeX>|\Delta x|</TeX> :length of path</li>
                    </ul>
                    </li>
                    <li>Clock reading t: reading on time measuring instrument<ul>
                        <li><strong>Time interval</strong> <TeX>\Delta t</TeX>: difference between two clock readings</li>
                    </ul>
                    </li>
                </ul>

            </div>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><p><strong>Velocity</strong>: displacement over time, slope of position time graph</p>
                    <p><TeX math="v={\Delta d \over \Delta t}" /></p>
                </li>
                <li><p><strong>Speed</strong>: magnitude of velocity <TeX>|v|</TeX></p>
                    <ul>
                        <li><strong>Average speed</strong> = <TeX math="total \ distance \over total \ time" /></li>
                        <li>Instantaneous speed: speed at any instant in time</li>
                    </ul>
                </li>
                <li><p><strong>Acceleration</strong>: change in velocity per second</p>
                    <p><TeX math="a = {(v - u) \over t} = {\Delta v \over \Delta t}" /></p>
                </li>
            </ul>

        )
    } else if (props === 3) {
        return (
            <div>
                <ul>
                    <li><p><strong>Position time graph</strong></p>
                        <ul>
                            <li><p>Constant velocity: straight slope</p>
                                <p><TeX math="x_f=vt+x_i" /></p>
                            </li>
                            <li><p>Steepness represents <strong>speed</strong></p>
                            </li>
                            <li>Slope represents <strong>velocity</strong></li>
                            <li>Positive/negative value represents <strong>direction</strong></li>
                        </ul>
                    </li>
                </ul>
                <img src={mech0} alt="Img: constant velocity and constant acceleration."/>
                <ul>
                    <li><p><strong>Velocity time graph</strong></p>
                        <ul>
                            <li>Steepness represents <strong>rate of change in velocity</strong></li>
                            <li>Slope represents <strong>acceleration</strong></li>
                            <li><p>Positive/negative value represents the <strong>direction of acceleration</strong></p>
                                <p><TeX math="v_f=at+v_i" /></p>
                            </li>
                            <li><p><strong>Area</strong> under the slope on a velocity-time graph: <strong>displacement</strong></p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <img src={mech1} alt="Img: position, velocity, acceleration"/>
                <ul>
                    <li>When velocity and acceleration are in the <strong>same</strong> direction: <strong>increasing velocity</strong></li>
                    <li><p>Finding <strong>displacement</strong> with <strong>constant acceleration</strong></p>
                        <p><TeX math="\Delta x=v_i\Delta t + {{\Delta t \times \Delta v} \over 2}" /></p>
                        <ul>
                            <li><TeX math="s=ut+0.5at^2"/>, where <TeX>s</TeX> represents displacement and <TeX>u</TeX> represents initial velocity</li>
                            <li><TeX math="v^2=u^2+2as" /></li>
                            <li><TeX math="s={(v - u)t \over 2}" /></li>
                        </ul>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Motion
