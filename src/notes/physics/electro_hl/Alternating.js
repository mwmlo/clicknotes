import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import electroHL1 from "../../../images/electroHLImg/electroHL1.png"
import electroHL2 from "../../../images/electroHLImg/electroHL2.png"
import electroHL3 from "../../../images/electroHLImg/electroHL3.png"
import electroHL4 from "../../../images/electroHLImg/electroHL4.png"
import electroHL5 from "../../../images/electroHLImg/electroHL5.png"

export default function Alternating(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>AC generator</strong>: coil <strong>rotates</strong> in magnetic field<ul>
                        <li>Flux linkage changes with time: induces <strong>e.m.f.</strong></li>
                        <li>Converts mechanical energy to electrical energy</li>
                    </ul>
                    </li>
                    <li>Induced e.m.f. against time: <strong>sinusoidal graph</strong><ul>
                        <li><strong>Maximum e.m.f.</strong> when coil is <strong>horizontal</strong>: cuts most field lines</li>
                        <li><strong>Minimum e.m.f.</strong> when coil is <strong>vertical</strong></li>
                        <li>e.m.f. graph: <strong>negative slope</strong> of <strong>magnetic flux</strong> against time</li>
                    </ul>
                    </li>
                    <li><TeX math="\varepsilon = NAB2\pi f \sin(2\pi ft)"/><ul>
                        <li>Induced e.m.f. depends on <strong>angular velocity</strong></li>
                        <li><strong>Frequency</strong> measured in radians: <TeX math="2\pi f = \omega"/></li>
                        <li><strong>Increasing speed</strong> of rotation <strong>increases amplitude</strong> of induced e.m.f. and <strong>decreases period</strong>: faster rate of change</li>
                    </ul>
                    </li>
                    <li>Equation for induced e.m.f. depends on <strong>starting orientation</strong> of coil<ul>
                        <li><strong>Perpendicular</strong> to field: <TeX math="\sin (0) = 0"/>, minimum</li>
                        <li><strong>Parallel</strong> to magnetic field: <TeX math="\cos(0)=1"/>, maximum</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL1} alt="AC cycle rotation" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Power against time</strong> graph: <TeX math="\sin^2"/> curve<ul>
                        <li><strong>Period</strong> of varying power spans <strong>two peaks</strong></li>
                        <li><strong>Area</strong> under graph represents <strong>energy</strong></li>
                        <li>Power must always be <strong>positive</strong></li>
                    </ul>
                    </li>
                    <li><TeX math="P=I_0^2 R \sin^2 (\omega t)"/>, since <TeX math="P=I^2 R"/><ul>
                        <li><TeX math="I=I_0 \sin (\omega t)"/>, where <TeX math="I_0"/> is maximum <strong>current</strong></li>
                        <li><TeX math="V=V_0 \sin (\omega t)"/>, where <TeX math="V_0"/> is maximum <strong>voltage</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL2} alt="AC Average Power Graph" />
            </>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Root mean square power</strong>: average power dissipation<ul>
                    <li>Half of peak power dissipation</li>
                    <li><TeX math="\bar{P}={1\over 2}I_0^2R = ({I_0 \over \sqrt{2}})^2 R"/></li>
                </ul>
                </li>
                <li><strong>Resistance</strong> in component is constant as current varies<ul>
                    <li><TeX math="R={V_0 \over I_0}={\bar{V} \over \bar{I}}"/></li>
                    <li><strong>Root mean square current</strong>: <TeX math="\bar{I}={I_0 \over \sqrt{2}}"/></li>
                    <li><strong>Root mean square voltage</strong>: <TeX math="\bar{V}={V_0 \over \sqrt{2}}"/></li>
                </ul>
                </li>
                <li>Root mean square values are equivalent to <strong>DC values</strong></li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Transformers</strong> modify <strong>voltages</strong> in AC currents<ul>
                    <li>Primary and secondary coils wound around cores</li>
                    <li><strong>AC current</strong> in primary coil induces <strong>continuously changing magnetic field</strong> in core</li>
                    <li>Changing magnetic fields <strong>cut secondary coils</strong>: induces e.m.f.</li>
                </ul>
                </li>
                <li><TeX math="{N_P\over N_S}={V_P \over V_S}={I_S \over I_P}"/><ul>
                    <li><strong>Number of turns</strong> is proportional to induced voltage</li>
                    <li><strong>Step-up transformer</strong> increases voltage: <TeX math="N_s > N_p"/></li>
                    <li><strong>Step-down transformer</strong> decreases voltage: <TeX math="N_s < N_p"/></li>
                </ul>
                </li>
                <li>No power loss in <strong>ideal</strong> transformer: <TeX math="I_pV_p=I_sV_s"/></li>
                <li>Used to increase safety and efficiency in <strong>power lines</strong><ul>
                    <li><strong>Maximise voltage</strong> to minimise current and resistance and <strong>power loss</strong>: <TeX math="P=IV"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li>Power loss in <strong>transformers</strong><ul>
                    <li><strong>Resistance</strong> in coils: use <strong>thicker</strong> wires</li>
                    <li>Unwanted <strong>eddy currents</strong>: <strong>laminate</strong> core</li>
                    <li><strong>Hysteresis losses</strong>: continued changes in magnetism cause core to <strong>warm up</strong></li>
                    <li><strong>Flux leakage</strong>: use soft <strong>iron</strong> core</li>
                </ul>
                </li>
                <li>Power loss in <strong>power lines</strong><ul>
                    <li>Resistant wires: increase voltage, use thicker wires, <TeX math="P_{loss}=I^2R"/></li>
                    <li><strong>Dielectric losses</strong>: imperfect insulators</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 6) {
        return (
            <>
                <ul>
                    <li><strong>Rectification</strong>: conversion from AC to DC supply</li>
                    <li><strong>Half-wave rectification</strong>: pulsating DC supply<ul>
                        <li>Diode <strong>blocks negative half</strong> of AC current: wastes half of the electrical energy</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL3} alt="Half wave rectification" />
                <ul>
                    <li><strong>Full-wave rectification</strong>: complete DC supply<ul>
                        <li><strong>Diode bridge</strong> converts all electrical energy</li>
                        <li>AC supply connects to where opposite ends of two diodes meet: <strong>positive and negative cycles</strong></li>
                        <li>Parallel diodes point in same direction</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL4} alt="Full wave rectification" />
            </>
        )
    } else if (props === 7) {
        return (
            <>
                <ul>
                    <li><strong>Smoothing circuits</strong>: achieve <strong>steady</strong> voltage<ul>
                        <li>Resistor and capacitor placed in parallel to diodes</li>
                        <li><strong>Capacitor</strong> <strong>charges</strong> in first half-cycle</li>
                        <li><strong>Capacitor discharges</strong> during second-half cycle</li>
                        <li>Short term store: <strong>compensates</strong> for when supply does not provide current</li>
                        <li><strong>Output ripple</strong>: output fluctuates slightly</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroHL5} alt="Rectification graphs"/>
            </>
        )
    }
}
