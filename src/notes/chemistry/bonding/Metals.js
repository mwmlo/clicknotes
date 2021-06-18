import React from 'react'
import 'katex/dist/katex.min.css';

// Import images
import bond8 from "../../../images/bondingImg/bond8.png"
import bond9 from "../../../images/bondingImg/bond9.png"

export default function Metals(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Metallic bond</strong>: attraction between metal cations and electrons<ul>
                        <li>Lattice of <strong>positive metal ions</strong>, surrounded by a sea of <strong>delocalised electrons</strong></li>
                        <li><strong>Conductive</strong>: free electrons carry charge</li>
                        <li><strong>Malleable</strong>: ion layers can slide over each other</li>
                    </ul>
                    </li>
                    <li><strong>Alloys</strong>: mixture of metals and/or non-metals<ul>
                        <li>Ions of different element <strong>disrupt</strong> original metallic lattice</li>
                        <li>Prevents corrosion, increases stability, improves strength</li>
                    </ul>
                    </li>
                    <li>Factors affecting <strong>strength of metallic bond</strong>: number of delocalised <strong>electrons</strong>, cation <strong>charges</strong> and cation <strong>radii</strong><ul>
                        <li>Stronger bond formed with more electrons, more positive charges, and smaller cations</li>
                        <li>Metallic bond strength <strong>increases across the period</strong> and <strong>decreases down the group</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={bond8} alt="Metallic bonding" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Polar molecules</strong> dissolve in <strong>polar solvents</strong><ul>
                    <li>Partially <strong>positive</strong> side of solvent molecule is attracted to partially <strong>negative</strong> side of solute molecule</li>
                </ul>
                </li>
                <li><strong>Shorter chain molecules</strong> are more soluble: <strong>greater proportion</strong> of molecule is polar</li>
                <li>Non-polar molecules dissolve in non-polar solvents</li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Allotropes</strong>: multiple crystalline forms of the <strong>same element</strong>, in which atoms are bonded differently</li>
                    <li><strong>Graphite</strong>: carbon forms <strong>3 bonds</strong> with 1 delocalised electron<ul>
                        <li><strong>Layers</strong> of carbon slide over each other: weak London dispersion forces in between</li>
                        <li><strong>Conductive</strong>: electrons can move and carry charges</li>
                        <li><strong>Trigonal planar</strong> structure: 120° apart</li>
                    </ul>
                    </li>
                    <li><strong>Diamond</strong>: carbon forms <strong>4 bonds</strong><ul>
                        <li><strong>Tetrahedrally arranged</strong> and linked together: 109.5° apart</li>
                        <li>Non-conductive, hard, brittle, high melting and boiling points</li>
                    </ul>
                    </li>
                    <li><strong>C60 fullerene</strong>: sphere of <strong>60 carbon atoms</strong> bonded together<ul>
                        <li>Not a giant covalent structure: alternating single and double bonds</li>
                        <li><strong>Semiconductor</strong>: some electron mobility</li>
                    </ul>
                    </li>
                    <li><strong>Graphene</strong>: one layer of graphite<ul>
                        <li><strong>Honeycomb</strong> structure: high conductivity, flexible, strong</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond9} alt="Allotropes of carbon" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li>Each <strong>silicon</strong> atom bonds with <strong>four oxygen atoms</strong></li>
                <li>Each <strong>oxygen</strong> atom bonds with <strong>two silicon atoms</strong></li>
                <li><strong>Tetrahedral</strong>, repeated structure: giant covalent structure</li>
            </ul>
        )
    }
}
