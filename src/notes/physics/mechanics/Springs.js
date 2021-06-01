import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import mech9 from "../../../images/mechanicsImg/mech9.png"

function Motion(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Greater mass</strong> on spring causes <strong>greater force to be exerted</strong><ul>
                    <li>Greater <strong>displacement</strong> from original position caused from stronger downward force</li>
                    <li>Greater displacement causes greater force upwards from <strong>spring reaction force</strong></li>
                </ul>
                </li>
                <li><strong>Independent</strong> variable: <strong>displacement</strong><ul>
                    <li>Changing the mass changes the weight and thus changes the displacement</li>
                </ul>
                </li>
                <li><strong>Dependent</strong> variable: <strong>force upwards exerted by spring</strong><ul>
                    <li>Changing the displacement will make the spring exert a greater force</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Hooke&#39;s Law</strong>: <TeX math="F=kx"/><ul>
                    <li><TeX>k</TeX>: spring constant</li>
                    <li>Smaller spring constant: greater displacement</li>
                </ul>
                </li>
                <li><strong>Limit of proportionality</strong>: beyond a certain point, Hooke&#39;s law cannot apply<ul>
                    <li><strong>Elastic limit:</strong> point beyond which spring becomes permanently stretched and cannot bounce back to original length</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <div>
            <ul>
                <li><strong>Friction:</strong> force that opposes motion</li>
                <li><strong>Static friction</strong>: increases until maximum, stops objects from <strong>beginning to move</strong><ul>
                    <li><TeX math="F_s=\mu N"/>, coefficient of static friction times normal force</li>
                </ul>
                </li>
                <li><strong>Dynamic friction</strong>: stays constant as force applied stays constant, <strong>slows objects down</strong><ul>
                    <li><TeX math="F_d=\mu N"/>, coefficient of dynamic friction times normal force</li>
                </ul>
                </li>
                <li>Static friction <strong>&gt;</strong> dynamic friction<ul>
                    <li>Coefficients depend on <strong>surface adhesion</strong></li>
                </ul>
                </li>
            </ul>
            <img src={mech9} alt="Friction and force applied"/>
            </div>
        )
    }
}

export default Motion
