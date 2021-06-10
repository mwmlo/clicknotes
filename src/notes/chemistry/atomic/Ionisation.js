import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import atomic9 from "../../../images/atomicStruImg/atomic9.png"
import atomic10 from "../../../images/atomicStruImg/atomic10.png"

export default function Ionisation(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>First ionisation energy</strong>: energy required to remove <strong>one mole</strong> of electrons from ground state from one mole of <strong>gaseous</strong> atoms<ul>
                        <li><TeX math="X(g) \rightarrow X^+(g) + e^-, ∆H &gt; 0"/></li>
                    </ul>
                    </li>
                    <li>Ionisation energy <strong>increases</strong> across <strong>period</strong><ul>
                        <li>Size of <strong>nuclear charge</strong> increases: more energy required to overcome attractive forces</li>
                    </ul>
                    </li>
                    <li>Ionisation energy <strong>decreases</strong> down <strong>group</strong><ul>
                        <li>Energy level of electrons increases: <strong>distance</strong> from nucleus increases</li>
                        <li>Larger nuclear charge offset by <strong>shielding</strong>: inner shell electrons decrease attraction on outer electrons</li>
                    </ul>
                    </li>
                    <li><strong>Exceptions</strong> to trends<ul>
                        <li><strong>Aluminium</strong>: lower first ionisation energy than magnesium, electrons removed from <strong>higher sub-levels</strong> farther from nucleus first (3<em>s</em> &lt; 3<em>p</em>)</li>
                        <li><strong>Paired electrons</strong>: lower first ionisation energies due to extra mutual repulsion</li>
                    </ul>
                    </li>
                </ul>
                <img src={atomic9} alt="First ionisation energies" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Successive ionisation energy</strong>: energy per mole needed to <strong>remove</strong> <strong>one mole</strong> of electrons from one mole of <strong>gaseous</strong> ions<ul>
                        <li><TeX math="X^+(g) \rightarrow X^{2 +}(g) + e^-"/></li>
                    </ul>
                    </li>
                    <li>Successive ionisation energy <strong>increases</strong> per <strong>orbital</strong>: increasingly positive ions, stronger <strong>nuclear attractions</strong><ul>
                        <li>Within same orbital, elements gradually increase in successive ionisation energy with <strong>small jumps</strong></li>
                        <li>As <strong>orbitals change</strong>, successive ionisation energy increases by a big jump</li>
                        <li>At lower energy levels, ionisation energy jumps are smaller than at <strong>higher energy levels</strong></li>
                        <li><strong>Energy levels jumps</strong> are larger than sub-level jumps</li>
                    </ul>
                    </li>
                </ul>
                <img src={atomic10} alt="Successive ionisation energies"/>
            </>
        )
    }
}
