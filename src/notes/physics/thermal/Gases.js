import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import thermal3 from "../../../images/thermalImg/thermal3.png"
import thermal4 from "../../../images/thermalImg/thermal4.png"
import thermal5 from "../../../images/thermalImg/thermal5.png"
import thermal6 from "../../../images/thermalImg/thermal6.png"
import thermal7 from "../../../images/thermalImg/thermal7.png"

function Gases(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Mole</strong>: amount of substance that contains <TeX math="6.02\times 10^{23}"/> particles or molecules<ul>
                        <li><strong>Avogadro&#39;s number</strong>: same number of atoms in <strong>12g of carbon-12</strong></li>
                    </ul>
                    </li>
                    <li>Moles = mass ÷ molar mass<ul>
                        <li><TeX math="n={m \over M_r}"/></li>
                        <li><strong>Diatomic</strong> molecules: fluorine, nitrogen, oxygen, bromine, iodine, chlorine</li>
                    </ul>
                    </li>
                    <li>Number of moles = number of <strong>particles</strong> ÷ number of particles in a <strong>mole</strong></li>
                </ul>
                <img src={thermal3} alt="Mole equation triangle" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>No intermolecular forces</strong> except during collisions</li>
                <li>Molecules exist as <strong>identical points</strong> in random motion</li>
                <li>Collisions between molecules are <strong>perfectly elastic</strong>: constant velocity</li>
                <li><strong>Volume of molecules</strong> is negligible compared to volume of gas</li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Gas pressure</strong>: collisions between molecules and container walls<ul>
                    <li>Pressure is defined as <strong>force over area</strong>, <TeX math="P={F \over A}"/></li>
                    <li>Force increases with a <strong>greater change in momentum</strong>, <TeX math="F\Delta t = m\Delta v"/></li>
                </ul>
                </li>
                <li>Gas pressure increases with mass and <strong>velocity</strong> of particles</li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <div>
                <ul>
                    <li><strong>Boyle&#39;s Law</strong>: pressure is inversely proportional to volume<ul>
                        <li><TeX math="p_1V_1=p_2V_2"/></li>
                        <li>Increase in volume allows molecules to <strong>spread out</strong></li>
                        <li>Decrease in density reduces rate of collisions</li>
                    </ul>
                    </li>
                    <li><strong>Charles&#39; Law</strong>: volume is proportional to temperature<ul>
                        <li><TeX math="{V_1 \over T_1}={V_2 \over T_2}"/></li>
                        <li>Higher temperature: greater kinetic energy and change in momentum</li>
                        <li>Volume expands to <strong>maintain rate</strong> of collisions, average force and pressure</li>
                    </ul>
                    </li>
                    <li><strong>Gay-Lussac&#39;s Law</strong>: pressure is proportional to temperature<ul>
                        <li><TeX math="{p_1 \over T_1}={p_2 \over T_2}"/></li>
                        <li>Higher temperature: more kinetic energy, greater change in momentum</li>
                        <li><strong>Greater force and rate of collisions</strong> increases pressure</li>
                    </ul>
                    </li>
                </ul>
                <img src={thermal4} alt="PVT graphs" />
            </div>
        )
    } else if (props === 5) {
        return (
            <div>
                <ul>
                    <li><strong>Ideal gas behaviour</strong> exists at low pressure, low density and moderate temperature</li>
                    <li>Real gases at <strong>low temperature</strong><ul>
                        <li>Particles have <strong>less kinetic energy</strong> to overcome intermolecular forces</li>
                        <li>Intermolecular forces are no longer insignificant</li>
                    </ul>
                    </li>
                    <li>Real gases at <strong>high pressure</strong><ul>
                        <li>Volume of gas decreases while volume of molecules is constant</li>
                        <li><strong>Volume</strong> of molecules is <strong>not negligible</strong> compare to volume of system</li>
                        <li><strong>Intermolecular forces</strong> are no longer insignificant: particles are close together</li>
                    </ul>
                    </li>
                    <li>Differences between ideal and real gas <strong>properties</strong> at low temperature and high pressure<ul>
                        <li>Real <strong>volume</strong> <strong>&gt;</strong> ideal volume: molecules have volume and <strong>cannot be ignored as points</strong></li>
                        <li>Real <strong>pressure</strong> <strong>&lt;</strong> ideal pressure: intermolecular forces <strong>pull back</strong> on molecules colliding with the wall, <strong>reducing change in momentum</strong> and force</li>
                    </ul>
                    </li>
                </ul>
                <img src={thermal5} alt="Ideal PV graph" />
                <img src={thermal6} alt="Ideal PT graph" />
                <img src={thermal7} alt="Ideal VT graph" />
            </div>
        )
    } else if (props === 6) {
        return (
            <ul>
                <li>Ideal gas law: <TeX math="pV=nRT"/><ul>
                    <li><TeX math="p"/>: <strong>gas pressure</strong> in kPa</li>
                    <li><TeX math="V"/>: <strong>gas volume</strong> in <TeX math="dm^3"/></li>
                    <li><TeX math="n"/>: number of <strong>moles</strong> of gas</li>
                    <li><TeX math="R"/>: <strong>gas constant</strong>, <TeX math="8.314 \ JK^{-1}mol^{-1}"/></li>
                    <li><TeX math="%"/>: <strong>temperature</strong> in Kelvin</li>
                </ul>
                </li>
                <li>Absolute <strong>temperature</strong> is proportional to average <strong>kinetic energy</strong> per molecule<ul>
                    <li>Boltzmann&#39;s constant =  <TeX math="k_B={R\over N_A}=1.38\times 10^{-23}"/></li>
                    <li><TeX math="E_k={3\over 2}k_BT={3\over 2}{R\over N_A}T"/></li>
                </ul>
                </li>
            </ul>
        )
    }
}

export default Gases
