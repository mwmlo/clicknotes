import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import electroHL6 from "../../../images/electroHLImg/electroHL6.png"
import electroHL7 from "../../../images/electroHLImg/electroHL7.png"
import electroHL8 from "../../../images/electroHLImg/electroHL8.png"
import electroHL9 from "../../../images/electroHLImg/electroHL9.png"
import electroHL10 from "../../../images/electroHLImg/electroHL10.png"

export default function Capacitance(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Capacitor</strong>: stores electrical charge between <strong>parallel plates</strong> separated by an insulator<ul>
                        <li><strong>Insulator</strong>: prevents charge from transferring</li>
                    </ul>
                    </li>
                    <li><strong>Work</strong> needed to store charge <strong>increases exponentially</strong><ul>
                        <li><strong>Charge repulsion</strong> builds up: electrons collect on other plate</li>
                        <li><strong>Potential difference</strong> builds up in closed circuit</li>
                        <li>Reaches maximum potential difference of <strong>battery</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL6} alt="Capacitor set-up" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Capacitance</strong> <TeX math="(C)"/>: ratio of <strong>charge</strong> stored <TeX math="(q)"/> to <strong>potential difference</strong> across plates <TeX math="(V)"/><ul>
                        <li><TeX math="C={q \over V}"/></li>
                        <li>Measured in <strong>Farads</strong> <TeX math="(F)"/>: Coulomb per volt <TeX math="(CV^{-1})"/></li>
                    </ul>
                    </li>
                    <li>Graph of charge against potential difference<ul>
                        <li><strong>Gradient</strong> represents <strong>capacitance</strong>: charge over potential difference</li>
                        <li><strong>Area</strong> represents <strong>energy</strong>: charge times potential difference</li>
                    </ul>
                    </li>
                    <li><TeX math="E={1 \over 2}QV = {1 \over 2}CV^2={1 \over 2}\times {Q ^ 2 \over C}"/></li>
                </ul>
                <img src={electroHL7} alt="Charge vs voltage graph" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><TeX math="C={\varepsilon A \over d}"/><ul>
                        <li><strong>Area</strong> <TeX math="(A)"/>, <strong>distance</strong> between plates <TeX math="(d)"/>, <strong>permittivity</strong> of insulator <TeX math="(\varepsilon)"/></li>
                        <li><strong>Permittivity</strong>: ability to store electrical energy in an electric field</li>
                        <li>Permittivity of <strong>free space</strong>: <TeX math="\varepsilon_0 = 8.85 \times 10^{-12} \ C^2 N^{-1} \ m^{-2}"/></li>
                    </ul>
                    </li>
                    <li><strong>Dielectric</strong>: insulator that is <strong>polarised</strong> when placed in an electric field<ul>
                        <li><strong>Polar molecules</strong> realign according to direction of electric field: <strong>reduces electric field strength</strong></li>
                        <li>Unique permittivity: greater than <TeX math="\varepsilon _0"/></li>
                    </ul>
                    </li>
                    <li>Adding a <strong>dielectric increases capacitance</strong><ul>
                        <li><strong>Higher permittivity</strong>: greater ability to store charge</li>
                        <li><strong>Potential difference decreases</strong>: charges cancel out</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL8} alt="Capacitance factors" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Parallel capacitors</strong> have the same <strong>potential difference</strong><ul>
                    <li>Charges add up: <TeX math="Q_T=Q_1 + Q_2"/></li>
                    <li>Capacitance adds up: <TeX math="C_T=C_1+C_2"/></li>
                </ul>
                </li>
                <li><strong>Series capacitors</strong> have the <strong>same charge</strong><ul>
                    <li>Potential differences add up: <TeX math="V_T=V_1+V_2"/></li>
                    <li>Total reciprocal capacitance adds up: <TeX math="{1 \over C_T}={1 \over C_1}+{1 \over C_2}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Discharging</strong>: capacitor empties<ul>
                        <li>Value of <strong>current drops</strong> from <TeX math="I_0"/> to 0</li>
                        <li>Value of <strong>stored charge drops</strong> from <TeX math="Q_0"/> to 0</li>
                        <li>Value of <strong>potential difference drops</strong> from <TeX math="V_0"/> to 0</li>
                    </ul>
                    </li>
                    <li>Exponential decrease of charge: <TeX math="Q=Q_0 e^{-1 \over RC}"/><ul>
                        <li><strong>Rate of flow of charge</strong>: proportional to charge stored</li>
                        <li><strong>Current</strong>: <TeX math="I=I_0e^{-1 \over RC}"/></li>
                        <li><strong>Voltage</strong>: <TeX math="V=V_0e^{-1\over RC}"/></li>
                    </ul>
                    </li>
                    <li><strong>Time constant <TeX math="\tau = RC"/></strong>: time needed to discharge capacitor to <strong>37%</strong> of maximum voltage<ul>
                        <li>After <TeX math="n\tau"/> seconds, <TeX math="Q=0.37^nQ_0"/></li>
                    </ul>
                    </li>
                    <li>Graph of <strong>voltage against time</strong>: exponential decay<ul>
                        <li>Plateaus when capacitor reaches <strong>zero</strong></li>
                    </ul>
                    </li>
                    <li>Graph of <strong>current against time</strong>: exponential decay<ul>
                        <li>Plateaus when capacitor reaches <strong>zero</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL9} alt="Discharging graphs" />
            </>
        )
    } else if (props === 6) {
        return (
            <>
                <ul>
                    <li>Charging: capacitor fills up<ul>
                        <li><strong>Charging current drops</strong> from <TeX math="I_0"/> to 0</li>
                        <li><strong>Stored charge increases</strong> from 0 to <TeX math="Q_0"/></li>
                        <li><strong>Potential difference across capacitor increases</strong> from 0 to <TeX math="\varepsilon"/></li>
                        <li><strong>Potential difference across resistor decreases</strong> from <TeX math="\varepsilon"/> to 0</li>
                    </ul>
                    </li>
                    <li>Graph of <strong>voltage against time</strong>: exponential increase<ul>
                        <li>Plateaus when capacitor reaches <strong>maximum</strong></li>
                    </ul>
                    </li>
                    <li>Graph of <strong>current against time</strong>: exponential decay<ul>
                        <li>Plateaus when current reaches <strong>zero</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL10} alt="Charging graphs"/>
            </>
        )
    }
}
