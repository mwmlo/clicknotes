import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearSL1 from "../../../images/nuclearSLImg/nuclearSL1.png"
import nuclearSL2 from "../../../images/nuclearSLImg/nuclearSL2.png"

export default function AtomicModels(props) {
    if (props === 1) {
        return (
            <ul>
                <li>Stream of alpha particles aimed through a hole in a lead plate towards a sheet of gold foil</li>
                <li>Surrounding zinc sulphide screen flashed when particles collided</li>
                <li>Most alpha particles passed through the foil: atoms are made of empty space</li>
                <li>Several alpha particles were deflected: there is a small, dense, charged nucleus</li>
                <li>Several alpha particles were reflected: the nucleus has a positive charge</li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Protons</strong>: positive particles in the nucleus, mass 1, charge +1</li>
                    <li><strong>Neutrons</strong>: neutral particles in the nucleus, mass 1</li>
                    <li><strong>Electrons</strong>: negative particles orbiting the nucleus, mass <TeX math="1 \over 1800"/>, charge -1</li>
                    <li><strong>Limitations</strong>: does not explain stability, isotopes, or why accelerating electrons do not fall into the nucleus</li>
                </ul>
                <img src={nuclearSL1} alt="Atomic structure" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Bohr&#39;s model</strong>: electrons orbit in discrete energy levels<ul>
                        <li>Energy levels converge at infinity</li>
                        <li>Excited state: electrons gain energy and transition to higher energy levels</li>
                        <li>Return to bound state: electrons lose energy of a specific wavelength</li>
                        <li>Ionisation: electrons gain energy to escape potential well and leave atom</li>
                    </ul>
                    </li>
                    <li>Energy change during <strong>electron transition</strong>: $E=hf$<ul>
                        <li>Product of Planck&#39;s constant and frequency</li>
                        <li>Measured in electronvolts: eV</li>
                        <li>Corresponds to length of arrow on electron transition diagram</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearSL2} alt="Electron transitions"/>
            </>
        )
    }
}
