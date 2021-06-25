import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import equilibrium3 from "../../../images/equilibriumImg/equilibrium3.png"
import equilibrium4 from "../../../images/equilibriumImg/equilibrium4.png"

export default function Calculations(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Reaction quotient</strong> <TeX math="Q_c"/>: ratio of concentrations of products to reactants at <strong>any point in a reaction</strong><ul>
                    <li><TeX math="Q_c={[C] ^ 3[D] ^ 4\over [A][B]^2}"/></li>
                    <li>Used to predict <strong>direction</strong> of reaction</li>
                </ul>
                </li>
                <li><TeX math="Q < K"/>: reaction goes <strong>right</strong> to reach equilibrium, requires more product</li>
                <li><TeX math="Q > K"/>: reaction goes <strong>left</strong> to reach equilibrium, needs more reactants</li>
            </ul>

        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li>Write <strong>balanced equation</strong>: coefficients are important!</li>
                    <li>Use <strong>ICE</strong> table: initial concentrations, change in concentration, equilibrium concentration<ul>
                        <li><strong>Initial</strong>: concentration placed in vessel</li>
                        <li><strong>Change</strong>: amount that reacts, proportional to the <strong>ratio of coefficients</strong> in the balanced equation</li>
                        <li><strong>Equilibrium</strong>: concentration present in equilibrium mixture</li>
                    </ul>
                    </li>
                    <li>Substitute values from table to find $K$</li>
                </ul>
                <img src={equilibrium3} alt="ICE table" />
                <ul>
                    <li><strong>Small</strong> values of <TeX math="K"/>: <strong>negligible</strong> forward reaction<ul>
                        <li>Assume initial concentration is <strong>roughly the same</strong> as equilibrium concentration</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Free energy</strong> <TeX math="∆G"/>: energy available to do <strong>work</strong><ul>
                        <li><TeX math="∆G=0"/>: reaction is at <strong>equilibrium</strong></li>
                        <li><strong>Forward</strong> reactions are <strong>spontaneous</strong>: <TeX math="∆G < 0"/></li>
                        <li><strong>Backward</strong> reactions are <strong>non-spontaneous</strong>: <TeX math="∆G > 0"/></li>
                    </ul>
                    </li>
                    <li><TeX math="∆G=G<em>{product} - G</em>{reactant}"/></li>
                </ul>
                <img src={equilibrium4} alt="Free energy vs equilibrium position"/>
                <ul>
                    <li>Free energy <strong>decreases</strong>: work is done, entropy increases<ul>
                        <li>Equilibrium: <strong>minimum free energy</strong>, <strong>maximum entropy</strong></li>
                    </ul>
                    </li>
                    <li><TeX math="∆G=-RT\ln(K_c)"/><ul>
                        <li><TeX math="R"/> represents gas constant</li>
                        <li><TeX math="T"/> represents absolute temperature in Kelvin</li>
                    </ul>
                    </li>
                    <li><strong>Position</strong> of equilibrium: ratio between <strong>forward rate constant</strong> and <strong>backward rate constant</strong><ul>
                        <li><TeX math="K={k\over k'}"/>: rate constant over inverse rate constant</li>
                        <li>Recall that <TeX math="k=[A]^a[B]^b"/>: substitution</li>
                    </ul>
                    </li>
                    <li><strong>Changing temperatures</strong> and equilibrium constant<ul>
                        <li>Temperature affects <strong>rate constant</strong> and <strong>inverse rate constant</strong> differently</li>
                        <li>Example: for a forward exothermic reaction, there is a bigger increase in <TeX math="k'"/>, so <TeX math="K_c"/> decreases</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    }
}
