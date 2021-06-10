import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import atomic1 from "../../../images/atomicStruImg/atomic1.png"

function AtomicProp(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Atom</strong>: smallest unit of a chemical element<ul>
                    <li><strong>Protons</strong>: relative mass 1, +1 charge</li>
                    <li><strong>Neutrons</strong>: relative mass 1, no charge</li>
                    <li><strong>Electrons</strong>: negligible relative mass <TeX math="1 \over 1840"/>, -1 charge</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Atomic number</strong> <TeX math="(Z)"/>: number of protons</li>
                <li><strong>Mass number</strong> <TeX math="(A)"/>: number of protons and neutrons</li>
                <li><strong>Relative atomic mass:</strong> mass of an element <strong>weighted</strong> according to the atomic masses of isotopes relative to the <strong>mass of carbon-12</strong><ul>
                    <li>% abundance of isotopes multiplied by relative isotopic masses</li>
                </ul>
                </li>
                <li><strong>Isotopes</strong>: same number of protons, different number of neutrons<ul>
                    <li>Same reactivity, different physical properties</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
            <ul>
                <li><strong>Mass spectroscopy</strong>: determine relative isotopic mass<ul>
                    <li>Carbon-14 dating, detecting illegal drugs, etc.</li>
                    <li>x-axis shows <TeX math="m/z"/> : mass per charge ratio</li>
                    <li><em>m</em>/<em>z</em> equal to <strong>mass of molecule</strong>: most ions have charge of 1</li>
                </ul>
                </li>
                <li><strong>Monoatomic elements</strong>: height of line on mass spectra is proportional to its abundance</li>
                <li><strong>Diatomic elements</strong>: mass spectra will show <strong>multiple</strong> peaks<ul>
                    <li>Different isotopes have different masses</li>
                    <li>Higher peaks show <strong>combinations</strong> with the same mass <strong>overlapping</strong> at the same point</li>
                </ul>
                </li>
            </ul>
            <img src={atomic1} alt="Mass spectrum of pentane"/>
            </>
        )
    }
}

export default AtomicProp
