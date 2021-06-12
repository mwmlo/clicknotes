import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import period6 from "../../../images/periodImg/period6.png"
import period7 from "../../../images/periodImg/period7.png"
import period8 from "../../../images/periodImg/period8.png"
import period9 from "../../../images/periodImg/period9.png"

export default function DBlock(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>d-block elements</strong>: valence electrons are in <strong>d-orbital</strong><ul>
                    <li>Fourth and subsequent periods</li>
                    <li><strong>Chromium</strong> and <strong>copper</strong> are not d-block elements: electron configurations end in the <strong>s-orbital</strong></li>
                </ul>
                </li>
                <li><strong>Transition metals</strong>: elements whose atoms have an <strong>incomplete d sub-shell</strong>, or which can give rise to <strong>cations</strong> with an incomplete d sub-shell<ul>
                    <li><strong>Zinc</strong> is not a transition metal: atom ends in <strong>s sub-shell</strong>, cation only has one oxidation state in which d sub-shell is complete</li>
                </ul>
                </li>
                <li><strong>Physical</strong> properties of transition metals<ul>
                    <li><strong>Conductive</strong>, hard, stronger, <strong>malleable</strong>, ductile, <strong>unreactive</strong></li>
                    <li>Higher melting points and boiling points than s block metals</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Smaller atomic radii</strong> than s block elements</li>
                <li>Atomic radius <strong>decreases</strong> as <strong>atomic number increases</strong><ul>
                    <li>Increasing ENC experienced by outer electrons: more <strong>shielding</strong></li>
                    <li>Addition of electron in <strong>inner 3d sub-shell</strong>: filled before 4s shell</li>
                </ul>
                </li>
                <li><strong>Less variation</strong> in atomic radii: formation of <strong>alloys</strong><ul>
                    <li>Atoms of one element <strong>replace</strong> those of another: less disruption</li>
                    <li><strong>Alloy</strong>: mixture of metals and/or non-metals, stronger</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Variable oxidation states</strong>: form two or more different types of cations<ul>
                        <li><strong>3d</strong> energy level is very <strong>close</strong> to <strong>4s</strong> energy level: <strong>small difference</strong> in ionisation energy</li>
                        <li>Electrons can be <strong>removed</strong> from both <strong>4s and 3d energy levels</strong></li>
                    </ul>
                    </li>
                    <li><strong>Oxidation states</strong> corresponds to <strong>total number of electrons</strong> in 3d and 4s sub-shells<ul>
                        <li>Minimum oxidation state of $+2$</li>
                        <li>Example: titanium <TeX math="(3d^2 4s^2)" /> has charges <TeX math="+2, +3,+4" /></li>
                        <li><strong>Increased nuclear charge</strong> in later transition elements: harder to remove electrons, <strong>fewer</strong> possible oxidation states</li>
                    </ul>
                    </li>
                </ul>
                <img src={period6} src="Orbital configurations in transition metals" />
                <img src={period7} src="Variable charges in transition metals" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Complex</strong>: central ions surrounded by ligands<ul>
                        <li><strong>Ligand</strong>: species with <strong>lone pair of electrons</strong></li>
                    </ul>
                    </li>
                    <li><strong>d-block elements</strong> accept electron pairs: incomplete d-orbitals<ul>
                        <li><strong>Vacant</strong> and low energy 3d, 4s, 4p or 4d orbitals</li>
                    </ul>
                    </li>
                    <li><strong>Dative covalent bond</strong>: both electrons in the covalent bond come from the same atom</li>
                </ul>
                <img src={period8} alt="Complex ion" />
            </>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Coordination compound</strong>: neutral complex made of a complex ion and another ion<ul>
                        <li>Ligand charge: negative or neutral</li>
                        <li><strong>Charge</strong> on coordination compound: <strong>sum</strong> of charges on metal cation and all ligands = 0</li>
                        <li><strong>Coordination number</strong>: number of ligands</li>
                    </ul>
                    </li>
                </ul>
                <ul>
                    <li><strong>Shapes</strong> of coordination compounds<ul>
                        <li><strong>Linear</strong>: coordination number = 2</li>
                        <li><strong>Square planar</strong>: coordination number = 4</li>
                        <li><strong>Tetrahedral</strong>: coordination number = 4</li>
                        <li><strong>Octahedral</strong>: coordination number = 6</li>
                    </ul>
                    </li>
                </ul>
                <img src={period9} alt="Coordination compounds"/>
            </>
        )
    }
}
