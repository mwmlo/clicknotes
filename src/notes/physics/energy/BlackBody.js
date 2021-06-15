import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import energy9 from "../../../images/energyImg/energy9.png"

export default function BlackBody(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Conduction</strong>: kinetic energy transfers from molecule to molecule<ul>
                    <li>Collisions between electrons and atoms</li>
                </ul>
                </li>
                <li><strong>Convection</strong>: thermal energy transfers via bulk movement of <strong>fluids</strong><ul>
                    <li>Different densities causes circulation of heat</li>
                </ul>
                </li>
                <li><strong>Radiation</strong>: thermal energy transfers via infrared electromagnetic waves</li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Black body</strong>: perfectly absorbs and emits all wavelengths<ul>
                    <li>Solids absorb <strong>continuous spectrum</strong> of light: intermolecular interactions</li>
                </ul>
                </li>
                <li><strong>Emissivity</strong>: ratio of power emitted by object to power emitted by a <strong>black body of equal size</strong><ul>
                    <li>Black body: emissivity of 1</li>
                    <li>Emissivity of 0: cannot absorb or emit radiation</li>
                    <li><TeX math="e={P_{body} \over \sigma A T^4}"/> (from Stefan-Boltzmann Law)</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>Most intense wavelength depends on <strong>temperature</strong><ul>
                        <li><TeX math="\lambda_{max} = {2.9 \times 10^{-3} \over T}"/></li>
                    </ul>
                    </li>
                    <li>Spectral graph: wavelength vs. intensity<ul>
                        <li>As temperature increases, <strong>intensity</strong> at all wavelengths increases</li>
                        <li>As temperature increases, <strong>wavelength</strong> of maximum intensity decreases</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy9} alt="Intensity vs wavelength" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Stefan-Boltzmann Law</strong>: describes power emitted by black body per unit area to temperature<ul>
                    <li><TeX math="\text{power} = e \sigma AT^4"/></li>
                    <li><TeX math="\sigma"/> is the Stefan-Boltzmann constant: <TeX math="5.67 \times 10^{-8}"/></li>
                    <li><TeX math="A"/> is surface area, <TeX math="T"/> is temperature in <strong>Kelvin</strong></li>
                </ul>
                </li>
            </ul>
        )
    }
}
