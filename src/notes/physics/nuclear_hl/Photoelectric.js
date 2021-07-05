import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearHL1 from "../../../images/nuclearHLImg/nuclearHL1.png"
import nuclearHL2 from "../../../images/nuclearHLImg/nuclearHL2.png"
import nuclearHL3 from "../../../images/nuclearHLImg/nuclearHL3.png"
import nuclearHL4 from "../../../images/nuclearHLImg/nuclearHL4.png"
import nuclearHL5 from "../../../images/nuclearHLImg/nuclearHL5.png"

export default function Photoelectric(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Photoelectric effect</strong>: emission of electrons when electromagnetic radiation hits a material<ul>
                        <li>Occurs only with frequencies above <strong>threshold frequency</strong> <TeX math="(f_0)"/></li>
                        <li>More <strong>reactive</strong> materials: lower threshold frequencies and energies needed to lose electrons</li>
                    </ul>
                    </li>
                    <li><strong>Frequency</strong> of photons: affects <strong>kinetic energy</strong> of dislodged electrons<ul>
                        <li>Higher frequency: imparts higher energy</li>
                        <li>Electrons <strong>absorb energy</strong> to escape bound energy</li>
                    </ul>
                    </li>
                    <li><strong>Intensity</strong> of photons: affects <strong>rate</strong> and number of electrons ejected<ul>
                        <li>Provided that frequency of light remains the same</li>
                        <li>Intensity corresponds to <strong>number of photons</strong> hitting the material</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL1} alt="Photoelectric effect" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Electrons are <strong>always ejected</strong> as long as the <strong>frequency</strong> of the photons is above the threshold frequency<ul>
                    <li><strong>Intensity</strong> has <strong>no effect</strong> on the energy of electrons emitted</li>
                </ul>
                </li>
                <li>Electrons are emitted instantaneously</li>
                <li><strong>Classical wave theory</strong> cannot explain this effect<ul>
                    <li>Wave of any frequency should eventually bring enough energy to dislodge electrons</li>
                </ul>
                </li>
                <li><strong>Wave-particle duality</strong>: light displays both wave and particle properties</li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Work function</strong> <TeX math="(\phi)"/>: amount of energy needed to dislodge an electron<ul>
                        <li><TeX math="\phi = hf_0"/></li>
                    </ul>
                    </li>
                    <li>Process of dislodging an electron<ul>
                        <li><strong>Photons</strong> supply energy: <TeX math="E=hf"/></li>
                        <li>Electrons absorb energy to <strong>escape bound state</strong> according to the work function: <TeX math="\phi = hf_0"/></li>
                        <li>Remaining energy is converted into <strong>kinetic energy</strong> in the electron: <TeX math="E_k = hf - \phi"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL2} alt="Work function" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Stopping potential</strong>: potential difference needed to bring photoelectrons to rest between parallel plates</li>
                    <li>Apparatus: current flows between <strong>parallel metal plates</strong><ul>
                        <li><strong>Cathode</strong> is exposed to light: photoelectric effect</li>
                        <li>Electrons flow in direction <strong>opposite to electric field</strong> between cathode and anode</li>
                        <li><strong>Potential difference</strong> between plates does work on electrons: lose kinetic energy</li>
                        <li>At stopping potential, potential difference does enough <strong>work</strong> to remove all kinetic energy</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL3} alt="Stopping potential" />
                <ul>
                    <li>At <strong>threshold frequency</strong>: stopping potential is <strong>zero</strong><ul>
                        <li>Kinetic energy of electrons is always zero</li>
                        <li>Threshold frequency is <strong>proportional</strong> to stopping potential</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><TeX math="∆V = {h \over q} f - {\phi \over q}"/><ul>
                        <li>Derived from the relations between <strong>work, energy and p.d</strong>: <TeX math="W=q∆V"/> and <TeX math="W=E_k=hf-\phi"/></li>
                    </ul>
                    </li>
                    <li>Graph of <strong>frequency vs potential difference</strong><ul>
                        <li>Gradient = <TeX math="{h \over q}"/></li>
                        <li>y-intercept = <TeX math="-{\phi \over q}"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL4} alt="Stopping potential vs frequency"/>
                <ul>
                    <li><strong>Current</strong> is <strong>directly proportional</strong> to <strong>intensity</strong><ul>
                        <li>For every photon, one electron is ejected</li>
                        <li><strong>Rate</strong> of electrons dislodged depends on intensity</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL5} alt="Current vs intensity"/>
            </>
        )
    }
}
