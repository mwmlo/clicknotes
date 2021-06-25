import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import kinetics1 from "../../../images/kineticsImg/kinetics1.png"

export default function Rates(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Rate of reaction</strong>: change in <strong>concentration</strong> of product per unit <strong>time</strong><ul>
                    <li>Amount of reactant used up or product made over time needed for reaction</li>
                    <li><TeX math="mol \ dm^{-3} \ s^{-1}"/></li>
                    <li><strong>Intermediate</strong>: species produced in one step and consumed in the next step</li>
                </ul>
                </li>
                <li>Represented by <strong>steepness</strong> of slope<ul>
                    <li>Slope <strong>plateaus</strong> as reaction finishes</li>
                    <li><strong>Average</strong> rate of reaction: total amount ÷ total time</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Light absorption</strong>: how long it takes for precipitate to form and obscure the view of a mark under the vessel<ul>
                    <li>Measured via spectrophotometer or colorimeter</li>
                </ul>
                </li>
                <li><strong>Collecting gas</strong>: amount of gas produced<ul>
                    <li>Gas syringe or inverted measuring cylinder in water</li>
                </ul>
                </li>
                <li><strong>Mass loss</strong>: weigh difference as gaseous product escaped through cotton wool plug</li>
                <li><strong>Titration</strong>: take small samples throughout the experiment and test for concentration</li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Collision theory</strong>: chemical reactions occur when particles collide in the <strong>correct orientation</strong> with <strong>sufficient energy</strong><ul>
                    <li><strong>Activation energy</strong>: minimum energy needed for reaction to occur</li>
                </ul>
                </li>
                <li><strong>Surface area</strong>: smaller particles have greater surface areas exposed for reactions to occur</li>
                <li><strong>Concentration</strong>: more particles per volume increases the number of collisions per second</li>
                <li><strong>Gas pressure</strong>: changes volume and the likelihood of collisions</li>
                <li><strong>Temperature</strong>: affects kinetic energy and frequency of collisions in particles</li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Catalyst</strong>: speeds up rate of reaction<ul>
                    <li>Chemically <strong>unchanged</strong>: regenerated at end</li>
                    <li><strong>Lowers activation energy</strong>: provides <strong>alternative</strong> pathway for reactants</li>
                </ul>
                </li>
                <li><strong>Industrial</strong> uses: iron in Haber process, vanadium oxide in contact process</li>
                <li><strong>Catalytic converter</strong>: turns <TeX math="CO"/> and <TeX math="NO"/> into <TeX math="CO_2"/> and <TeX math="N_2"/> using platinum</li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Maxwell-Boltzmann distribution</strong> curve: how energy is spread out over different molecules<ul>
                        <li><strong>Proportion</strong> of particles against <strong>kinetic energy</strong></li>
                        <li><strong>Constant</strong> area under curve: total number of particles</li>
                    </ul>
                    </li>
                    <li>Few molecules have high kinetic energy<ul>
                        <li><strong>Positive skew</strong>: most particles near average speed, shown by peak</li>
                    </ul>
                    </li>
                </ul>
                <img src={kinetics1} alt="Maxwell Boltzmann distribution"/>
                <ul>
                    <li><strong>Increase</strong> in temperature<ul>
                        <li>Curve <strong>stretches</strong> out: <strong>lower</strong> peak, same area</li>
                        <li>Peak shifts <strong>right</strong>: more average kinetic energy</li>
                    </ul>
                    </li>
                    <li><strong>Decrease</strong> in temperature<ul>
                        <li>Curve <strong>narrows</strong>: higher peak, same area</li>
                    </ul>
                    </li>
                    <li>Activation energy represented as <strong>dotted line</strong><ul>
                        <li><strong>Shaded area</strong> beyond line: number of particles that have enough energy to <strong>react</strong></li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    }
}
