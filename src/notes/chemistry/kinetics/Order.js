import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import kinetics2 from "../../../images/kineticsImg/kinetics2.png"
import kinetics3 from "../../../images/kineticsImg/kinetics3.png"

export default function Order(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong><TeX math="rate = k[A]^{n_1}[B]^{n_2}"/></strong><ul>
                        <li><TeX math="k"/>: <strong>rate constant</strong>, <TeX math="mol\ dm^{-3} \ s^{-1}"/></li>
                        <li><TeX math="A"/>: <strong>concentration</strong> of molecule A</li>
                        <li><TeX math="B"/>: concentration of molecule B</li>
                        <li><TeX math="n_1, n_2"/>: <strong>rate orders</strong>, determined experimentally</li>
                    </ul>
                    </li>
                    <li><strong>Rate order</strong>: degree to which rate depends on concentration of particular reactant<ul>
                        <li><strong>Zero</strong> order <TeX math="(n=0)"/>: rate stays <strong>constant</strong></li>
                        <li><strong>First</strong> order <TeX math="(n=1)"/>: directly <strong>proportional</strong></li>
                        <li><strong>Second</strong> order <TeX math="(n=2)"/>: <strong>square</strong> relationship</li>
                        <li><strong>Unit</strong> of rate order varies: determine through rearranging and reversing the equation</li>
                    </ul>
                    </li>
                    <li><strong>Half life</strong>: how long it takes for reactant concentration to decrease to half its original value</li>
                </ul>
                <img src={kinetics2} alt="Rate vs concentration" />
                <img src={kinetics3} alt="Different orders of reactions - graphs" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Compare <strong>ratio of concentration to rate</strong>: given table of rate values at different concentrations</li>
                <li><strong>Zero</strong> order: changing concentration has <strong>no effect</strong> on the initial rate of reaction</li>
                <li><strong>First</strong> order: doubling the concentration doubles rate <strong>proportionally</strong></li>
                <li><strong>Second</strong> order: changing concentration causes change in reaction rate to <strong>square</strong></li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Reaction mechanism</strong>: steps of how a given reaction occurs at a molecular level<ul>
                    <li><strong>Elementary steps</strong>: probable reactions of molecules, including intermediates</li>
                    <li>Sum of steps: overall <strong>balanced</strong> equation</li>
                </ul>
                </li>
                <li><strong>Molecularity</strong>: number of molecular steps that react in an elementary process</li>
                <li><strong>Transition state</strong>: duration of time on energy profile when particles are <strong>reacting</strong></li>
                <li><strong>Rate determining step</strong>: <strong>slow</strong> step<ul>
                    <li>Contains <strong>highest activation energy</strong></li>
                    <li>Sum of <strong>coefficients</strong> of reactants up to rate determining step: <strong>rate order</strong></li>
                    <li>$2A\rightarrow product$: bi-molecular, second order</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Arrhenius equation: <TeX math="k=Ae^{-E_a \over RT}"/></strong><ul>
                    <li><TeX math="k"/> represents rate constant</li>
                    <li><TeX math="A"/> represents the <strong>frequency factor</strong>: orientation of molecules in collisions</li>
                    <li><TeX math="E_a"/> represents <strong>activation energy</strong></li>
                    <li><TeX math="R"/> represents <strong>gas constant</strong>, <TeX math="T"/> represents <strong>temperature</strong> in Kelvin</li>
                </ul>
                </li>
                <li><strong>Linearisation</strong> of Arrhenius equation<ul>
                    <li>Natural logarithm: <TeX math="ln(k)={-E_a \over RT}+ln(A)"/></li>
                    <li>Straight line plot on <strong><TeX math="ln(k)"/> against <TeX math="1 \over T"/></strong></li>
                    <li><strong>Gradient</strong> represents activation energy</li>
                </ul>
                </li>
                <li><TeX math="ln({k_1 \over k_2})=-{E_a \over R}({1 \over T_2} - {1 \over T_1})"/><ul>
                    <li>Calculate activation energy from <strong>two temperatures</strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li><strong>Half life</strong>: amount of time needed for the concentration of reactants to decrease to half the initial concentration</li>
                <li><strong>First order</strong> half life: <TeX math="t_{1 \over 2} = {\ln(2) \over k}"/><ul>
                    <li>Initial concentration does not affect the half life</li>
                </ul>
                </li>
            </ul>
        )
    }
}
