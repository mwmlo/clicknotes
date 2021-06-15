import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearSL3 from "../../../images/nuclearSLImg/nuclearSL3.png"
import nuclearSL4 from "../../../images/nuclearSLImg/nuclearSL4.png"
import nuclearSL5 from "../../../images/nuclearSLImg/nuclearSL5.png"

export default function AtomicStructure(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Continuous spectrum: mixture of wavelengths emitted from a dense gas</li>
                    <li><strong>Line spectrum</strong>: discrete wavelengths<ul>
                        <li>Produced by monoatomic gases at low density</li>
                    </ul>
                    </li>
                    <li><strong>Emission spectrum</strong>: produced by <strong>heated</strong> gas<ul>
                        <li>Electrons emit energy as electrons transition to lower energy levels</li>
                    </ul>
                    </li>
                    <li><strong>Absorption spectrum</strong>: produced by a <strong>cooled</strong> gas<ul>
                        <li>Electrons absorb energy as electrons transition to higher energy levels</li>
                    </ul>
                    </li>
                    <li>Discrete wavelengths correspond to <strong>discrete number of combinations</strong> for energy transitions of electrons<ul>
                        <li>Line spectra provide evidence for Bohr&#39;s model</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearSL3} alt="Emission vs absorption spectra" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Atomic number</strong>: number of protons</li>
                    <li><strong>Mass number</strong>: number of nucleons (protons and nucleons)</li>
                    <li><strong>Nuclide</strong>: particular species of atom with specified number of neutrons</li>
                    <li><strong>Isotopes</strong>: same atomic number, different mass number</li>
                </ul>
                <img src={nuclearSL4} alt="Atom notation" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>Strong nuclear force (SNF) exists between nucleons</li>
                    <li>Explains why nuclei are stable: holds nucleons together</li>
                    <li>Short range: attractive between <TeX math="1-2.5 \times 10^{-15}"/> m</li>
                    <li>When nucleon separation is <TeX math="&lt;2.5\times 10^{-15}"/>  m, SNF overcomes repulsion from Coulomb forces</li>
                    <li>When nucleon separation is <TeX math="&lt;10^{-15}"/> m, SNF itself becomes repulsive</li>
                </ul>
                <img src={nuclearSL5} alt="Forces inside the atom"/>
            </>
        )
    }
}
