import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearSL6 from "../../../images/nuclearSLImg/nuclearSL6.png"

export default function Radioactivity(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Radioactivity</strong>: random, spontaneous emission of alpha, beta or gamma particles from the nucleus<ul>
                    <li>Random: happens at unpredictable times</li>
                    <li>Spontaneous: does not require additional energy</li>
                </ul>
                </li>
                <li><strong>Transmutation</strong>: conversion of one chemical element into another<ul>
                    <li>Produces radioisotopes by particle bombardment</li>
                    <li>Equations for artificial transmutation involve the addition of a sub-atomic particle as a reactant</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Alpha particles</strong> <TeX math="(^4_2\alpha)"/> have a charge of +2</li>
                <li>Large mass, high momentum<ul>
                    <li>Imparts high impulse upon collision: knocks off electrons, <strong>strong ionisation</strong></li>
                    <li>Slight deflection in magnetic fields</li>
                </ul>
                </li>
                <li>Slow speeds: <strong>low penetration</strong> ability<ul>
                    <li>Can only travel a few millimetres before ionising into helium atoms</li>
                </ul>
                </li>
                <li><strong>Alpha decay</strong>: atom emits alpha particle and loses two protons<ul>
                    <li><TeX math="^A<em>ZX \rightarrow ^{A - 4} </em>{Z - 2}Y+^4_2 \alpha"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Beta electrons</strong> <TeX math="(^0 _{-1} \beta)"/> have a charge of -1<ul>
                    <li><strong>Beta positrons</strong> <TeX math="(^0 _1 \beta )"/> have a charge of +1</li>
                </ul>
                </li>
                <li>Small mass, high speeds<ul>
                    <li>Considerable deflection in magnetic fields</li>
                    <li>Less ionisation: less impulse upon collision</li>
                    <li>More penetrative: moves several meters through air</li>
                </ul>
                </li>
                <li><strong>Beta-minus</strong> decay: neutron turns into a proton<ul>
                    <li>Emits an electron and an antineutrino</li>
                    <li>Atomic number increases by one</li>
                    <li>Antineutrino <TeX math="\bar{v}"/>: no charge, negligible mass, fast</li>
                    <li><TeX math="^A<em>ZX \rightarrow ^A </em>{Z + 1}Y +e^-+\bar{v}"/></li>
                </ul>
                </li>
                <li><strong>Beta-plus</strong> decay: proton turns into a neutron<ul>
                    <li>Emits a positron and a neutrino</li>
                    <li>Atomic number decreases by one</li>
                    <li>Neutrino: no charge, negligible mass</li>
                    <li><TeX math="^A<em>ZX \rightarrow ^A </em>{Z - 1}Y + ^0_1 \beta +v"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Gamma rays:</strong> high frequency electromagnetic radiation<ul>
                    <li>Travels at the speed of light</li>
                    <li>Does not deflect in magnetic fields</li>
                </ul>
                </li>
                <li>No mass, high energy<ul>
                    <li>Limited ionisation: does not interact with matter</li>
                    <li>High penetration: travels for several kilometres</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Stable</strong> nuclides: same number of protons and neutrons<ul>
                        <li>True for lighter elements: atomic number &lt; 20</li>
                        <li>As number of protons increases, number of neutrons needs to <strong>increase proportionally</strong></li>
                        <li>Strong nuclear force needs to counteract repulsive Coulomb forces</li>
                    </ul>
                    </li>
                    <li><strong>Too many neutrons</strong>: above the zone of stability (left)<ul>
                        <li>Undergoes alpha decay and beta-minus decay</li>
                    </ul>
                    </li>
                    <li><strong>Too many protons</strong>: below the zone of stability (right)<ul>
                        <li>Undergoes beta-plus decay to regain stability</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearSL6} alt="Atomic number vs mass number" />
            </>
        )
    } else if (props === 6) {
        return (
            <ul>
                <li><strong>Half-life</strong>: time for half of the atoms in a sample to undergo radioactive decay<ul>
                    <li>Rate of radioactivity decreases exponentially</li>
                </ul>
                </li>
                <li><TeX math="A={A_0 \over 2^h}"/><ul>
                    <li>A is activity and h is number of half-lives</li>
                    <li>Account for background radiation</li>
                </ul>
                </li>
            </ul>
        )
    }
}
