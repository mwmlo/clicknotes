import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import electroSL3 from "../../../images/electroSLImg/electroSL3.png"
import electroSL4 from "../../../images/electroSLImg/electroSL4.png"

export default function Resistors(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Ohm&#39;s Law: current flowing through metal is directly proportional to its potential difference<ul>
                        <li>Temperature remains constant</li>
                        <li>Graph of current vs. potential difference: straight line through origin</li>
                    </ul>
                    </li>
                    <li>Ohmic device: obeys Ohm&#39;s Law<ul>
                        <li><TeX math="V\propto I"/></li>
                    </ul>
                    </li>
                    <li>Non-ohmic devices: filament lamps, diodes</li>
                </ul>
                <img src={electroSL3} alt="Ohmic and non-ohmic graphs" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Resistance <TeX math="R={\rho l \over A}"/><ul>
                    <li>Proportional to length <TeX math="(l)"/></li>
                    <li>Inversely proportional to cross sectional area <TeX math="(A)"/></li>
                    <li>Proportional to resistivity of material <TeX math="(\rho)"/></li>
                </ul>
                </li>
                <li>Temperature and resistance are proportional<ul>
                    <li>Molecules in lattice gain kinetic energy: vibrate, collide and slow down electrons</li>
                </ul>
                </li>
                <li>Power dissipation: charge in energy over time<ul>
                    <li>Greater resistance increases power loss</li>
                    <li><TeX math="P=IV={V ^ 2 \over R}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li>Series circuit: constant current<ul>
                    <li>Total potential difference: <TeX math="V_T = V_1 + V_2"/></li>
                    <li>Total resistance: <TeX math="R_T = R_1 + R_2"/></li>
                </ul>
                </li>
                <li>Parallel circuit: constant potential difference<ul>
                    <li>Total current: <TeX math="I_T=I_1+I_2"/></li>
                    <li>Total resistance is reciprocal: <TeX math="{1\over R_T}={1\over R_1}+{1\over R_2}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li>Potential divider: produces different voltages from identical currents
                        <ul>
                            <li>Resistors divide up total potential difference</li>
                            <li>Higher resistance consumes more voltage</li>
                            <li><TeX math="V_{out}={V < em > TR</em>{out} \over R_T}"/></li>
                        </ul>
                    </li>
                    <li>Potentiometer: variable potential divider<ul>
                        <li>Contact at start of resistor: no resistance, no potential difference</li>
                        <li>Contact at end of resistor: maximum resistance, maximum potential difference</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroSL4} alt="Potential divider"/>
            </>
        )
    }
}
