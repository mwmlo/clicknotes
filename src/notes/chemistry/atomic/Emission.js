import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import atomic6 from "../../../images/atomicStruImg/atomic6.png"
import atomic7 from "../../../images/atomicStruImg/atomic7.png"
import atomic8 from "../../../images/atomicStruImg/atomic8.png"

export default function Emission(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Metal ions show <strong>different colours</strong> in flame<ul>
                        <li>Electrons absorb heat energy: <strong>jump</strong> from the ground state to <strong>higher energy levels</strong></li>
                        <li><strong>Return</strong> to the <strong>ground state</strong>: emits photons</li>
                    </ul>
                    </li>
                    <li>Amount of energy released depends on location of electrons and affinity of valence electrons<ul>
                        <li>Further electron jump: greater <strong>energy change</strong></li>
                        <li>Strong <strong>affinity</strong> for electrons: more energy absorbed to move electrons to different levels</li>
                        <li>More energy <strong>absorbed</strong>: more energy <strong>emitted</strong></li>
                    </ul>
                    </li>
                    <li><strong>Wavelength</strong> of energy corresponds to <strong>electromagnetic</strong> wavelength<ul>
                        <li>Higher energy: higher <strong>frequency</strong>, lower <strong>wavelength</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={atomic6} alt="EM spectrum" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><p><strong>Line spectrum</strong> of hydrogen: <strong>discrete</strong> coloured lines emitted by a low pressurised glowing gas</p>
                    <ul>
                        <li>Voltage through <strong>hot gas discharge tube</strong> with hydrogen gas</li>
                        <li><strong>Emission lines</strong> correspond to photons of discrete energies emitted when electrons <strong>transition</strong> to ground states</li>
                    </ul>
                </li>
                <img src={atomic7} alt="Emission spectrum" />
                <li><p><strong>Absorption spectrum</strong>: black lines on <strong>continuous</strong> spectrum</p>
                    <ul>
                        <li>Voltage passes through cold gas</li>
                        <li>Emission lines <strong>overlap</strong> into <strong>continuum</strong> of many wavelengths</li>
                        <li>Black areas correspond to where atoms <strong>absorb</strong> energy</li>
                    </ul>
                </li>
                <img src={atomic8} alt="Absorption spectrum" />
            </ul>
        )
    }
}
