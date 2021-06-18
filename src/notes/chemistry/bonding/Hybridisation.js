import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import bond10 from "../../../images/bondingImg/bond10.png"
import bond11 from "../../../images/bondingImg/bond11.png"
import bond12 from "../../../images/bondingImg/bond12.png"
import bond13 from "../../../images/bondingImg/bond13.png"
import bond14 from "../../../images/bondingImg/bond14.png"

export default function Hybridisation(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Hybridisation</strong>: atomic orbitals within an atom <strong>mix</strong> to produce <strong>hybrid orbitals</strong> of <strong>equal intermediate energy</strong><ul>
                        <li>Types: <TeX math="sp^3, sp^2,sp"/> hybrid orbitals, named after their <strong>combined</strong> component orbitals</li>
                    </ul>
                    </li>
                    <li><strong>Excited 2s electrons</strong> are promoted to 2p: creates <strong>half-filled orbitals</strong><ul>
                        <li>Enables atoms to form bonds in half-filled orbitals</li>
                        <li>s and p orbitals <strong>merge together</strong>: forms 4 <TeX math="(sp^3)"/> orbitals</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond10} alt="Process of hybridisation" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Sigma <TeX math="\sigma"/> bond</strong>: lies along <strong>internuclear axis</strong><ul>
                        <li>Formed by <strong>head on overlap</strong> between two orbitals</li>
                        <li>All single bonds are sigma bonds: form before pi bonds</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond11} alt="Sigma bonds" />
                <ul>
                    <li><strong>Pi <TeX math="\pi"/> bond</strong>: lateral bond, <strong>off</strong> internuclear axis<ul>
                        <li>Dumbbell shaped <strong>p orbitals</strong> overlap sideways</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond12} alt="Pi bonds" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Single</strong> bond: <TeX math="sp^3"/> bond, only <strong>sigma bond</strong> between hybrid orbitals</li>
                    <li><strong>Double</strong> bond: requires one sigma bond and one pi bond<ul>
                        <li>Formation of one <strong>pi bond</strong> requires one <strong>p orbital</strong></li>
                        <li>Only 2 p orbitals merge with 1 s orbital: forms <strong><TeX math="sp^2"/></strong></li>
                    </ul>
                    </li>
                    <li><strong>Triple</strong> bond: <strong>two pi bonds</strong>, one sigma bond, <strong><TeX math="sp"/></strong></li>
                </ul>
                <img src={bond13} alt="Triple bonds" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Number of hybrid orbitals</strong> determines <strong>number of electron domains</strong></li>
                    <li><strong>Tetrahedral</strong> molecule: <TeX math="sp^3"/> hybridised, four domains</li>
                    <li><strong>Triangular planar</strong> molecule: <TeX math="sp^2"/> hybridised, three domains</li>
                    <li><strong>Linear</strong> molecule: <TeX math="sp"/> hybridised, two domains</li>
                </ul>
                <img src={bond14} alt="Geometry of hybridised orbitals"/>
            </>
        )
    }
}
