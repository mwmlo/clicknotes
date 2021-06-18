import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import bond1 from "../../../images/bondingImg/bond1.png"
import bond2 from "../../../images/bondingImg/bond2.png"

export default function BondForces(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Ionic bond</strong>: one atom with greater electron affinity takes an electron from another, forming a cation and an anion<ul>
                    <li><strong>Cation</strong>: atoms with few valence electrons <strong>lose</strong> electrons</li>
                    <li><strong>Anion</strong>: atoms with more valence electrons <strong>gain</strong> electrons</li>
                    <li>Strong <strong>electrostatic attraction</strong> between positive and negative ions</li>
                </ul>
                </li>
                <li><strong>Ionic crystal lattice</strong>: regular structure, made of <strong>repeating array</strong> of positive and negative ions<ul>
                    <li>High melting and <strong>boiling points</strong>, solid at room temperature</li>
                    <li>Conducts electricity in <strong>molten</strong> or <strong>aqueous</strong> form</li>
                    <li><strong>Coordination number</strong>: number of ions that surround an ion of the opposite charge within a crystal lattice</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Bond strength factors: <strong>ion charges</strong> and <strong>distance</strong> between ions<ul>
                    <li>Larger charges and smaller ionic radii strengthen bonds</li>
                    <li>Strong bonds: high melting points</li>
                </ul>
                </li>
                <li><strong><TeX math="bond \ strength = {Q_1 \times Q_2 \over r^2}"/></strong><ul>
                    <li>Product of ion charges, divided by square of ionic radii</li>
                </ul>
                </li>
                <li>More ionic compounds have <strong>greater differences in electronegativity</strong><ul>
                    <li><strong>Ionic</strong> bonding: difference in electronegativity <strong>&gt; 1.8</strong></li>
                    <li><strong>Polar covalent</strong> bonding: 0 &lt; difference in electronegativity <strong>&lt; 1.8</strong></li>
                    <li><strong>Non-polar covalent bonding</strong>: no difference in electronegativity</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Covalent bond</strong>: non-metal atoms <strong>share</strong> electrons<ul>
                    <li><strong>Single</strong> covalent bond: one pair of shared electrons</li>
                    <li><strong>Double</strong> covalent bond: two pairs of shared electrons</li>
                    <li><strong>Triple</strong> covalent bond: three pairs of shared electrons</li>
                </ul>
                </li>
                <li><strong>Coordinate bond</strong>: one atom donates <strong>both</strong> shared electrons</li>
                <li><strong>Bond length</strong>: measure of <strong>distance</strong> between bonded <strong>nuclei</strong><ul>
                    <li>Triple bond length &lt; double bond length &lt; single bond length</li>
                    <li>As atomic radius <strong>increases</strong>, bond length increases</li>
                </ul>
                </li>
                <li><strong>Bond strength</strong>: measure of <strong>energy</strong> required to <strong>break</strong> the bond<ul>
                    <li>Single bond strength &lt; double bond strength &lt; triple bond strength</li>
                    <li>As atomic radius <strong>decreases</strong>, bond strength increases</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Polarity</strong> is proportional to the <strong>difference in electronegativity</strong><ul>
                        <li><strong>Polar covalent bond</strong>: uneven sharing of electrons, uneven distribution of charge</li>
                    </ul>
                    </li>
                    <li><strong>Dipole moment</strong>: measure of <strong>molecular polarity</strong><ul>
                        <li><strong>Sum</strong> of all bond polarities, including directions</li>
                        <li>Degree of <strong>overall separation of charge</strong> in the covalent bond</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond1} alt="Polar water molecule" />
                <ul>
                    <li><strong>Non-polar</strong> molecule: no dipole moment<ul>
                        <li>Symmetrical: equal polar bonds <strong>cancel</strong> each other out</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li><strong>London dispersion forces</strong>: weak intermolecular forces<ul>
                    <li>Present in all molecules</li>
                </ul>
                </li>
                <li><strong>Non-polar molecules</strong> only have London dispersion forces<ul>
                    <li><strong>Temporary instantaneous dipoles</strong>: formed from random electron movement, <strong>induce</strong> dipoles in nearby molecules</li>
                    <li>Weak forces of attraction between temporary dipoles</li>
                </ul>
                </li>
                <li><strong>Strength</strong> increases with <strong>molecular size</strong> and <strong>surface area</strong><ul>
                    <li>Outer electrons experience less attraction to the nucleus: easier to induce polarity</li>
                    <li>Straight chain molecules are more <strong>exposed</strong>: higher boiling points</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 6) {
        return (
            <>
                <ul>
                    <li><strong>Permanent dipole-dipole forces</strong>: present in <strong>polar</strong> molecules<ul>
                        <li>Electrostatic electron between <strong>permanent dipoles</strong></li>
                        <li>Stronger than London dispersion forces</li>
                    </ul>
                    </li>
                    <li><strong>Hydrogen bonds</strong>: formed when hydrogen bonds to <strong>nitrogen</strong>, <strong>oxygen</strong> or <strong>fluorine</strong><ul>
                        <li>Very electronegative atoms: hydrogen <strong>donates electrons</strong></li>
                        <li><strong>Concentrated positive charge</strong> due to small size: single proton</li>
                        <li>Attracts <strong>lone pairs</strong> from electronegative atoms in neighbouring molecule</li>
                        <li><strong>High electronegativity</strong> increases strength of hydrogen bond</li>
                        <li>Strongest intermolecular force</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond2} alt="Types of intermolecular forces"/>
            </>
        )
    }
}
