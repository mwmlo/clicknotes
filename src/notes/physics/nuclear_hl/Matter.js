import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearHL6 from "../../../images/nuclearHLImg/nuclearHL6.png"
import nuclearHL7 from "../../../images/nuclearHLImg/nuclearHL7.png"

export default function Matter(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>de Broglie hypothesis</strong>: any particle with momentum <TeX math="p"/> has an associated matter wave of wavelength <TeX math="\lambda = {h \over p}"/><ul>
                    <li><strong>Matter wave</strong>: probability function associated with moving particle</li>
                    <li><TeX math="\lambda = {h \over mv}"/></li>
                </ul>
                </li>
                <li>Calculate wavelength using <strong>Planck&#39;s constant</strong>, electron mass and electron velocity<ul>
                    <li>Determine <strong>velocity</strong> with <strong>electric field</strong>: <TeX math="{1\over 2}mv^2 = q∆V"/></li>
                    <li>Change wavelength by changing acceleration: change electric field <strong>potential difference</strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li>Confirmed wave behaviour of particles: diffraction</li>
                    <li><strong>Diffraction</strong>: aperture of hole is comparable to wavelength<ul>
                        <li><strong>Wavelength</strong> of electron and <strong>radius</strong> of an atom have the same order of magnitude: <TeX math="10^{-10}"/></li>
                        <li>Electron beam passes through atomic spacing in <strong>crystal lattice</strong>: powdered graphite</li>
                    </ul>
                    </li>
                    <li><strong>Circular diffraction pattern</strong> of electrons<ul>
                        <li>Circles correspond to <strong>constructive interference</strong>: verified predicted angles of interference</li>
                        <li>Electrons diffracted according to wavelength: determined by <strong>acceleration potential</strong> (de Broglie)</li>
                        <li>Higher acceleration: smaller electron <strong>wavelengths</strong> relative to gap, less <strong>diffraction</strong>, smaller angles</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL6} alt="Diffraction patterns" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>Beam of <strong>electrons</strong> struck a <strong>nickel crystal</strong><ul>
                        <li>Electrons <strong>accelerated</strong> through potential difference: controlled wavelength of electron</li>
                        <li>Varied <strong>angle</strong> of beam towards crystal</li>
                    </ul>
                    </li>
                    <li><strong>Intensity of scattered electrons</strong> depended on speed and angle of electron beam<ul>
                        <li>Electrons reflected at certain angles only</li>
                        <li><strong>Maximum scattering intensit</strong>y: angles which correspond to constructive interference</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL7} alt="Davisson Germer diagram" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li>Every particle has an <strong>antiparticle</strong>: same mass, <strong>opposite</strong> quantum numbers</li>
                <li><strong>Annihilation</strong>: matter meets antimatter and becomes pure energy (photons)</li>
                <li><strong>Pair production</strong>: photon turns into a pair of matter and antimatter particles</li>
                <li>Amount of time that particle and antiparticle can <strong>coexist</strong>: found with Heisenberg&#39;s Uncertainty Principle</li>
            </ul>
        )
    }
}
