import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearSL10 from "../../../images/nuclearSLImg/nuclearSL10.png"
import nuclearSL11 from "../../../images/nuclearSLImg/nuclearSL11.png"
import nuclearSL12 from "../../../images/nuclearSLImg/nuclearSL12.png"
import nuclearSL13 from "../../../images/nuclearSLImg/nuclearSL13.png"
import nuclearSL14 from "../../../images/nuclearSLImg/nuclearSL14.png"

export default function Particles(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Standard Model</strong>: organises fundamental particles including quarks, leptons and bosons<ul>
                        <li><strong>Quarks</strong>: heavier particles which make up the nucleons</li>
                        <li><strong>Leptons</strong>: lighter particles such as electrons</li>
                        <li>Force carriers (<strong>exchange particles</strong>): swapped between compatible particles</li>
                    </ul>
                    </li>
                    <li>Particles are classes into <strong>families</strong> / generations: I, II and III</li>
                </ul>
                <img src={nuclearSL10} alt="Standard Model" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li>Six types of <strong>quarks</strong>: up, down, strange, charm, top, bottom<ul>
                        <li>Each quark has a corresponding <strong>anti-quark</strong>: opposite properties</li>
                    </ul>
                    </li>
                    <li>Quarks interact via <strong>strong nuclear force</strong> and <strong>electromagnetic force</strong><ul>
                        <li>Exchange particles: <strong>gluons</strong> (nuclear force) and <strong>photons</strong> (electromagnetic)</li>
                    </ul>
                    </li>
                    <li>Quarks are <strong>hadrons</strong>: participate in the <strong>strong nuclear force</strong><ul>
                        <li>Types of hadrons: baryons, mesons and anti-baryons</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearSL11} alt="Quark table in data booklet" />
                <ul>
                    <li><strong>Baryons</strong>: made of <strong>3 quarks</strong>, has a <strong>baryon number</strong> of 1<ul>
                        <li><strong>Protons</strong> (up, up, down) and <strong>neutrons</strong> (up, down, down)</li>
                        <li><strong>Anti-baryons</strong>: made of <strong>3 anti-quarks</strong>, has a baryon number of <strong>-1</strong></li>
                    </ul>
                    </li>
                    <li><strong>Mesons</strong>: made of <strong>1 quark and 1 anti-quark</strong>, has a baryon number of <strong>0</strong><ul>
                        <li>Do not have to be opposing pairs</li>
                    </ul>
                    </li>
                    <li><strong>Strangeness number</strong>: how many (non-) strange quarks that a particle has<ul>
                        <li><strong>Strange</strong> quarks have a strangeness number of <strong>-1</strong></li>
                        <li><strong>Anti-strange</strong> quarks have a strangeness number of <strong>+1</strong></li>
                        <li>All other quarks have a strangeness number of <strong>0</strong></li>
                        <li>Add up all the strangeness numbers to determine strangeness</li>
                        <li>Strangeness must be <strong>conserved</strong></li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Quark confinement</strong>: cannot <strong>separate</strong> single quarks from baryons or mesons<ul>
                    <li>Extreme <strong>energy</strong> needed to overcome strong nuclear force: induces <strong>pair production</strong></li>
                    <li>Creates new pairs of quarks and anti-quarks</li>
                </ul>
                </li>
                <li><strong>Higgs Boson</strong>: particles which gives quarks and leptons <strong>mass</strong><ul>
                    <li>Mass is not the property of the particle: it is an <strong>interaction</strong> with the Higgs field</li>
                    <li>Associated with <strong>Higgs field</strong>: covers space in which particles acquire mass</li>
                    <li>Higgs Boson <strong>disturbs</strong> the Higgs field: causes mass in absence of particle</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Leptons</strong> interact via <strong>electromagnetic force</strong>: <strong>photon</strong> exchange particle<ul>
                        <li>All leptons have <strong>lepton number</strong> of <strong>1</strong>: <strong>anti-leptons</strong> have lepton number <strong>-1</strong></li>
                    </ul>
                    </li>
                    <li>Leptons include <strong>electrons</strong>, <strong>muons</strong> and <strong>tau</strong> particles: charge <strong>-1</strong><ul>
                        <li>Corresponding <strong>neutrinos</strong>: electron neutrino, muon neutrino, tau neutrino</li>
                    </ul>
                    </li>
                    <li>Lepton number is <strong>conserved</strong> by <strong>family</strong>: denoted <TeX math="L<em>I"/>, <TeX math="L</em>{II}"/> or <TeX math="L_{III}"/></li>
                </ul>
                <img src={nuclearSL12} alt="Lepton table in data booklet" />
            </>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Exchange particles</strong> allow compatible particles to sense and react to each other</li>
                    <li><strong>Theory of exchange particles</strong>: all forces are due to exchange of force carriers</li>
                    <li><strong>Virtual particles</strong>: short life spans, <strong>limited ranges of influence</strong><ul>
                        <li>Gluons, W bosons and Z bosons are virtual particles</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearSL13} alt="Exchange particles in data booklet" />
            </>
        )
    } else if (props === 6) {
        return (
            <>
                <ul>
                    <li><strong>Feynman diagrams</strong>: represent particle interactions along <strong>space</strong> and <strong>time</strong> axis</li>
                    <li><strong>Particles</strong> such as quarks and leptons: <strong>solid arrows</strong><ul>
                        <li>Travel forward in time: left to right</li>
                        <li><strong>Antiparticles</strong> travel from right to left</li>
                    </ul>
                    </li>
                    <li><strong>Exchange particles</strong> such as photons, gluons and bosons: wavy or curly lines<ul>
                        <li>Electromagnetic or weak forces: <strong>wavy</strong> lines</li>
                        <li>Nuclear strong force: <strong>curly</strong> lines</li>
                    </ul>
                    </li>
                    <li><strong>Junctions</strong>: incoming and outgoing arrows represent transitions<ul>
                        <li><strong>Quark-quark</strong> transition or <strong>lepton-lepton</strong> transition: separated</li>
                        <li>Charge must be <strong>conserved</strong> at each junction: determines <strong>charge</strong> of exchange particle</li>
                        <li>Linked by exchange particle <strong>intermediate lines</strong>: may not obey energy conservation</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearSL14} alt="Feynman diagrams for different particle interactions"/>
            </>
        )
    }
}
