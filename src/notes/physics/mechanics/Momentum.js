import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import mech10 from "../../../images/mechanicsImg/mech10.png"

function Momentum(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Momentum:</strong> mass times velocity<ul>
                    <li><TeX math="p=mv"/></li>
                    <li>change in momentum: <TeX math="∆p=mu-mv"/></li>
                </ul>
                </li>
                <li><strong>Law of conservation of momentum</strong><ul>
                    <li><strong>Total</strong> momentum in system is <strong>constant</strong>, assuming <strong>no external interactions</strong> occur</li>
                    <li>Momentum is always conserved, but it will not always be constant</li>
                </ul>
                </li>
                <li>System neither gains nor loses momentum: <strong>no net force</strong> exerted<ul>
                    <li>Rearrange Newton&#39;s Second Law: <TeX math="mu+F∆t=mv"/></li>
                    <li><strong>Net force</strong> is <strong>rate of change in momentum</strong>: <TeX math="\Sigma F={∆p \over ∆t}"/></li>
                </ul>
                </li>
                <li><strong>Impulse</strong>: force is exerted on system and <strong>changes momentum</strong><ul>
                    <li>Impulse <strong><TeX math="I=\Sigma F \Delta t"/></strong>, same direction as net force</li>
                    <li>Change in momentum: <TeX math="∆p=I=p_f-p_i"/></li>
                </ul>
                </li>
            </ul>

        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Newton&#39;s Third Law</strong>: every reaction has an <strong>equal and opposite reaction</strong><ul>
                    <li>Only one interaction exists!</li>
                    <li><strong>Two body interactions</strong>: draw force diagrams for every system, <strong>separately</strong></li>
                    <li>Whole systems can accelerate together</li>
                    <li><strong>Pulley system</strong>: the upwards force on one block is the weight of the other block</li>
                </ul>
                </li>
            </ul>

        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>When two bodies A and B collide, the force exerted by B on A may not be constant<ul>
                        <li><TeX math="\Sigma F"/>: <strong>average force,</strong> not the maximum force</li>
                    </ul>
                    </li>
                    <li><strong>Area</strong> under <strong>force-time graph</strong> represents <strong>impulse</strong><ul>
                        <li><TeX math="I={1 \over 2}∆tF_{max} = \Sigma F ∆t"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={mech10} alt="Force time diagram" />
            </>

        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Elastic collision</strong>: momentum and <strong>kinetic energy</strong> are <strong>conserved</strong><ul>
                    <li>No deformation of colliding objects</li>
                    <li>Kinetic energy is not transferred or lost</li>
                </ul>
                </li>
                <li><strong>Inelastic collision</strong>: momentum is conserved but <strong>kinetic energy is lost</strong><ul>
                    <li>Explosions: kinetic energy transferred into heat, sound, light, etc.</li>
                </ul>
                </li>
                <li><strong>Totally inelastic</strong>: objects stick together<ul>
                    <li><TeX math="\Sigma KE"/> before <strong>&gt;</strong> <TeX math="\Sigma KE"/> after</li>
                </ul>
                </li>
            </ul>
        )
    } 
}

export default Momentum