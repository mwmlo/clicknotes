import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import equilibrium1 from "../../../images/equilibriumImg/equilibrium1.png"
import equilibrium2 from "../../../images/equilibriumImg/equilibrium2.png"

export default function Reversible(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Reversible</strong> reaction: <strong>bi-directional</strong> reactions<ul>
                    <li>Product can be converted back to reactant</li>
                    <li><TeX math="A+B\leftrightarrow C +D"/></li>
                    <li><strong>Same amount of energy</strong> released and absorbed</li>
                    <li><strong>Exothermic</strong> in one direction, <strong>endothermic</strong> in other direction</li>
                </ul>
                </li>
                <li>Examples of reversible reactions<ul>
                    <li><strong>Water of crystallisation</strong>: copper sulphate, cobalt chloride</li>
                    <li>Bromine liquid and gas at room temperature</li>
                </ul>
                </li>
                <li><strong>Dynamic equilibrium</strong>: no overall change<ul>
                    <li><strong>Constant concentration</strong> of reactants and products</li>
                    <li><strong>Rate</strong> of forward reaction is <strong>equal</strong> to rate of backward reaction</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Le Chatelier&#39;s Principle</strong>: position of chemical equilibrium shifts to <strong>oppose changes</strong> introduced to system<ul>
                    <li>Maintain <strong>balance</strong> between rates of reaction</li>
                </ul>
                </li>
                <li>Equilibrium shifts to equalise <strong>temperature</strong> change: favour <strong>endothermic or exothermic</strong> reaction<ul>
                    <li>Increasing temperature: exothermic rate increases, so system increases endothermic rate</li>
                </ul>
                </li>
                <li>Equilibrium shifts to equalise <strong>concentration</strong> change: favour side with <strong>more or less moles</strong></li>
                <li>Equilibrium shifts to equalise <strong>pressure</strong> change: favour side with <strong>more or less moles of gas</strong></li>
                <li><strong>Catalyst</strong>: increases reaction both ways<ul>
                    <li><strong>No effect</strong> on equilibrium</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Equilibrium constant</strong> <TeX math="K_c"/>: ratio of <strong>concentrations of products to reactants</strong> at equilibrium state<ul>
                        <li><strong>Temperature</strong> dependent: fixed at specific temperatures</li>
                        <li>Not affected by concentration or pressure</li>
                    </ul>
                    </li>
                </ul>
                <img src={equilibrium1} alt="Changes to equilibrium and Kc"/>
                <ul>
                    <li>Let equilibrium reaction be <TeX math="A+2B\leftrightarrow 3C+4D"/><ul>
                        <li><strong>Forward</strong> reaction: <TeX math="K_c={[C] ^ 3[D] ^ 4\over [A][B]^2}"/></li>
                        <li><strong>Reverse</strong> reaction: <TeX math="K_c&#39; ={1\over K}={[A][B] ^ 2\over [C]^3[D]^4}"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={equilibrium2} alt="Equilibrium constant equation"/>
                <ul>
                    <li><strong>Multiplying</strong> concentrations: include <strong>power</strong> in equation<ul>
                        <li>Reflects change in coefficients</li>
                        <li><strong>Doubling</strong> reaction concentrations: <strong>square</strong> equation concentrations</li>
                        <li><strong>Halving</strong> reaction concentrations: <strong>square</strong> root equation concentrations</li>
                    </ul>
                    </li>
                    <li><strong>Magnitude</strong> of equilibrium constant: <strong>extent</strong> of reaction progression<ul>
                        <li><TeX math="K_c > 1"/>: more products than reactants</li>
                        <li><TeX math="K_c < 1"/>: more reactants than products</li>
                    </ul>
                    </li>
                </ul> 
            </>
        )
    }
}
