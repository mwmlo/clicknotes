import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import mech2 from "../../../images/mechanicsImg/mech2.png"
import mech3 from "../../../images/mechanicsImg/mech3.png"
import mech4 from "../../../images/mechanicsImg/mech4.png"
import mech5 from "../../../images/mechanicsImg/mech5.png"
import mech6 from "../../../images/mechanicsImg/mech6.png"
import mech7 from "../../../images/mechanicsImg/mech7.png"
import mech8 from "../../../images/mechanicsImg/mech8.png"

function Forces(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Force</strong>: physical quantity that characterises the <strong>interaction</strong> between two objects<ul>
                    <li><strong>System</strong>: object of interest, represented as labeled dot and modelled as a point particle</li>
                    <li><strong>Environment</strong>: other objects that may exert forces on the system</li>
                </ul>
                </li>
                <li><strong>Net force <TeX>\Sigma F</TeX></strong>: sum of all forces in a system<ul>
                    <li>0 net force: no movement or constant movement</li>
                </ul>
                </li>
                <li><strong>Force diagrams</strong><ul>
                    <li>Shows forces acting on the system only</li>
                    <li>Forces are represented as <strong>arrows</strong></li>
                    <li>Compare <TeX math="\Delta v"/> on a motion diagram and <TeX>\Sigma F</TeX> on a force diagram: determine <strong>acceleration</strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Gravitational force:</strong> exerted by objects with mass</li>
                <li><strong>Gravitational mass</strong>: mass in terms of force experienced in gravitational field</li>
                <li><strong>Inertial mass</strong>: mass in terms of acceleration experienced when force applied</li>
            </ul>

        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Inertia</strong>: tendency to resist change in motion</li>
                <li><strong>Newton&#39;s Second Law</strong>: <TeX math="\Sigma F = ma" /><ul>
                    <li>Magnitude of force affects acceleration</li>
                </ul>
                </li>
                <li><strong>Weight</strong>: gravitational force with which object is attracted to Earth<ul>
                    <li>Vector quantity: different from mass</li>
                    <li><TeX>W=mg</TeX>: mass times acceleration due to gravity</li>
                </ul>
                </li>
            </ul>

        )
    } else if (props === 4) {
        return (
            <div>
                <ul>
                    <li>Object with <strong>weight</strong> is pulled downwards by <strong>gravity</strong></li>
                    <li><strong>Air resistance</strong> acts upwards<ul>
                        <li>Increases over time until equal to gravitation force: <strong>terminal velocity</strong></li>
                        <li><strong>Net force</strong> is proportional to <strong>acceleration</strong></li>
                        <li>Acceleration gradually <strong>decreases</strong>: forces cancel each other out more, slope flattens out</li>
                    </ul>
                    </li>
                </ul>
                <img src={mech2} />
                <img src={mech3} />
                <img src={mech4} />
                <img src={mech5} />
            </div>
        )
    } else if (props === 5) {
        return (
            <div>
                <ul>
                    <li><strong>Projectile motion:</strong> unpowered object is launched from the surface at an angle<ul>
                        <li>Motion in x-direction: <strong>constant velocity</strong> to the right</li>
                        <li>Motion in y-direction: <strong>acceleration downwards</strong> due to Earth, <TeX math="a=9.81 \ ms^{-2}"/></li>
                    </ul>
                    </li>
                    <li>Projectile motion is the <strong>sum of component vectors</strong> in the x and y directions<ul>
                        <li><strong>Conservation of energy</strong>: potential energy + kinetic energy is constant in projectile motion</li>
                    </ul>
                    </li>
                    <li>If a force is not along the X or y axis, deconstruct it into components in a force diagram</li>
                </ul>
                <img src={mech6} />
                <img src={mech7} />
            </div>
        )
    } else if (props === 6) {
        return (
            <div>
                <ul>
                    <li><strong>Reading on a scale</strong> represents normal force<ul>
                        <li><strong>Normal force</strong>: reaction force pushing <strong>upwards</strong> in response to object pushing downwards</li>
                    </ul>
                    </li>
                    <li>Normal force and weight must <strong>balance</strong> out to provide the <strong>net force</strong><ul>
                        <li>Recall that net force = direction of <strong>acceleration</strong></li>
                        <li>Recall that true weight is <strong>constant</strong></li>
                        <li>Elevator <strong>accelerates upwards</strong>: greater upwards reaction force, <strong>greater apparent weight</strong></li>
                        <li>Elevator <strong>accelerates downwards</strong>: smaller upwards reaction force, <strong>smaller apparent weight</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={mech8} />
            </div>
        )
    }
}

export default Forces
