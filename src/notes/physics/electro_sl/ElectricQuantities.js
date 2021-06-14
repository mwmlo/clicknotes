import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import electroSL1 from "../../../images/electroSLImg/electroSL1.png"
import electroSL2 from "../../../images/electroSLImg/electroSL2.png"

export default function ElectricQuantities(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Coulomb&#39;s Law describes electrostatic force of attraction between two point charges<ul>
                        <li>Point charge: singular charge</li>
                        <li>Opposite charges attract, similar charges repel</li>
                        <li>Newton's Third Law: each charge experiences the same amount of force</li>
                    </ul>
                    </li>
                    <li><TeX math="F_e={kqQ \over r^2}"/><ul>
                        <li>Directly proportional to product of charges</li>
                        <li>Inversely proportional to square of distance between centres of charges</li>
                        <li>Coulomb's constant <TeX math="k=8.99\times 10^9"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={electroSL1} alt="Coulomb's Law" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Electric field: region of space around electric charge in which another charged object experiences a force<ul>
                    <li>Field lines: represent direction of positive test charge</li>
                </ul>
                </li>
                <li>Electric field strength: force which a positive test charge experiences at that point<ul>
                    <li><TeX math="E={F\over q}$: force per unit charge, units $NC^{-1}"/></li>
                    <li><TeX math="E={kQ \over r^2}"/>: electric field strength in radial field</li>
                    <li><TeX math="W=qEd"/>: work done in parallel plates</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li>Electric potential: energy stored in charge due to position in electric field<ul>
                    <li>Charges accelerate: electric potential energy transformed into kinetic energy</li>
                    <li><TeX math="{1\over 2}mv^2=qEd"/></li>
                </ul>
                </li>
                <li>Potential difference: work done in moving a positive test charge from one point to another<ul>
                    <li><TeX math="V={W \over q}=Ed"/>, units <TeX math="V"/></li>
                    <li>Work done does not depend on path taken by test charge: conservative field</li>
                </ul>
                </li>
                <li>Electronvolt: work done to move electron through 1 V of potential difference<ul>
                    <li><TeX math="1 \ eV = 1.6 \times 10^{-19} J"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li>Current: rate of flow of electric charge<ul>
                    <li>Current is charge over time</li>
                    <li>Coulomb: amount of charge when 1 ampere of current flows for 1 second</li>
                    <li><TeX math="1 \ C = 1 \ As"/></li>
                    <li>Conventional current: flow of positive charge</li>
                </ul>
                </li>
                <li>Voltage: difference in electric potential energy between two points<ul>
                    <li>Voltage is equal to electric potential difference</li>
                </ul>
                </li>
                <li>Resistance is a material's tendency to resist the flow of charge<ul>
                    <li>Conductors: electrons can move freely through the crystal lattice</li>
                    <li>Ratio between potential difference and current</li>
                    <li><TeX math="V=IR"/>, units in ohms <TeX math="(\Omega)"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li>Drift velocity: speed at which charge carriers move through a material</li>
                    <li>Current <TeX math="I=nAvq"/><ul>
                        <li><TeX math="n"/> is charge density: number of charge carriers free to move per cubic meter</li>
                        <li><TeX math="v"/> is drift velocity</li>
                        <li><TeX math="A"/> is cross sectional area</li>
                        <li><TeX math="q"/> is charge of each charge carrier</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroSL2} alt="Drift velocity"/>
            </>
        )
    }
}
