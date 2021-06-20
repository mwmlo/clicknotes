import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import energetics1 from "../../../images/energeticsImg/energetics1.png"
import energetics2 from "../../../images/energeticsImg/energetics2.png"
import energetics3 from "../../../images/energeticsImg/energetics3.png"

export default function EnergyChanges(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Energetics</strong>: study of transformation of energy during chemical reactions<ul>
                    <li><strong>Temperature</strong>: average kinetic energy of particles</li>
                    <li><strong>Heat</strong>: form of energy</li>
                    <li>Total energy is always conserved</li>
                </ul>
                </li>
                <li><strong>Enthalpy</strong> $H$: potential energy stored in chemical bonds and intermolecular forces<ul>
                    <li><strong>Enthalpy change</strong> <TeX math="\Delta H"/>: difference in enthalpy between reactants and products</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Energy level diagrams</strong> represent changes in enthalpy<ul>
                        <li><strong>Activation energy</strong>: minimum energy required for reaction to occur</li>
                        <li>Shows energy level against <strong>reaction progress</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={energetics1} alt="Energy level diagram" />
                <ul>
                    <li><strong>Endothermic</strong> reaction: <strong>absorbs</strong> energy to break bond, <TeX math="∆H&gt;0"/><ul>
                        <li>Temperature decreases, product becomes <strong>less stable</strong></li>
                    </ul>
                    </li>
                    <li><strong>Exothermic</strong> reaction: <strong>releases</strong> energy to form bond, <TeX math="∆H &lt; 0"/><ul>
                        <li>Temperature increases, product becomes <strong>more stable</strong></li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Standard conditions</strong>: 298 K, 100 kPa</li>
                <li><strong>Bond enthalpy</strong>: energy required to break <strong>one mole of bonds</strong> in <strong>gaseous</strong> molecules under <strong>standard conditions</strong><ul>
                    <li><TeX math="∆H=\Sigma E<em>{bonds \ broken} - \Sigma E</em>{bonds \ formed}"/></li>
                    <li>Recall that single and double bonds have different energies</li>
                </ul>
                </li>
                <li><strong>Average bond enthalpy</strong>: energy required to break one mole of bonds in gaseous molecules under standard conditions, <strong>averaged over similar compounds</strong><ul>
                    <li>Bond enthalpy varies in different environments</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Heat capacity</strong> <TeX math="(C)"/>: heat needed to increase the temperature of a <strong>substance</strong> by 1 °K<ul>
                        <li>When heat is applied to <strong>fewer particles</strong>, temperature increases more</li>
                        <li>When <strong>different volumes</strong> of substance have the same temperature, the bigger volume contains more heat</li>
                    </ul>
                    </li>
                    <li><strong>Specific heat capacity</strong> <TeX math="(c)"/>: heat needed to increase the temperature of <strong>one unit mass</strong> of a substance by <strong>1 °K</strong><ul>
                        <li><TeX math="Q=mc∆T"/>: calculate heat change</li>
                        <li>Heat transferred to the system is <strong>equal</strong> to heat lost from the environment</li>
                        <li><TeX math="Q<em>{system}=-Q</em>{environment}=-mc∆T"/></li>
                    </ul>
                    </li>
                    <li><strong>Calorimeter</strong>: measures enthalpy change in an insulated system<ul>
                        <li>Assumptions of <strong>no heat loss</strong>, <strong>standard conditions</strong>, and <strong>complete combustion</strong> may not be true</li>
                    </ul>
                    </li>
                </ul>
                <img src={energetics2} alt="Calorimeters" />
            </>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Chapman cycle</strong>: ozone-oxygen cycle in atmosphere<ul>
                        <li>Continuous <strong>formation</strong> and <strong>decomposition</strong> of ozone</li>
                        <li>Ozone exists in <strong>dynamic equilibrium</strong> with oxygen</li>
                    </ul>
                    </li>
                    <li><strong>High energy UV rays</strong> break down <strong>covalent double bond</strong> in <TeX math="O_2"/><ul>
                        <li><TeX math="O_2 (g)\rightarrow O^•(g)+O^•(g)"/></li>
                        <li>Atomic oxygen has two unpaired electrons: <strong>free radical</strong>, unstable</li>
                    </ul>
                    </li>
                    <li>Free radical reacts with diatomic oxygen to form <strong>ozone</strong><ul>
                        <li><TeX math="O^•(g)+O_2(g) \rightarrow O_3(g)"/></li>
                    </ul>
                    </li>
                    <li><strong>Reversible reaction</strong>: UV rays use less energy to break bonds in ozone<ul>
                        <li>Ozone requires less energy: shorter bond order than oxygen</li>
                    </ul>
                    </li>
                    <li><strong>Ozone depletion</strong> may occur due to free radicals produced by nitrogen oxide and chlorofluorocarbons</li>
                </ul>
                <img src={energetics3} alt="Chapman cycle"/>
            </>
        )
    }
}
