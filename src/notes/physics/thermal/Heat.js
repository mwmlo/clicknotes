import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import thermal1 from '../../../images/thermalImg/thermal1.png'
import thermal2 from '../../../images/thermalImg/thermal2.png'

function Thermal(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Heat</strong>: energy <strong>transferred</strong> from hot to cold objects<ul>
                    <li>Bodies do not store heat: only receive or transfer</li>
                    <li><strong>Non-mechanical</strong> energy: does not count as work</li>
                </ul>
                </li>
                <li><strong>Temperature</strong>: measure of <strong>average internal kinetic energy</strong> of molecules in a substance<ul>
                    <li><strong>Thermal equilibrium</strong>: objects reach the same temperature and the same average internal kinetic energy</li>
                </ul>
                </li>
                <li><strong>Absolute temperature</strong> in Kelvin: directly <strong>proportional</strong> to average kinetic energy per molecule<ul>
                    <li><TeX math="T(K)=t(°C)+273"/></li>
                    <li>Absolute zero <TeX math="(0K)"/>: atoms have no kinetic energy</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Internal energy</strong>: total energy that molecules possess</li>
                <li><strong>Internal kinetic energy</strong>: due to random vibrational, translational and rotational <strong>motion</strong> in molecules</li>
                <li><strong>Internal potential energy</strong>: energy that <strong>opposes attractive forces</strong> between molecules<ul>
                    <li>Depends on relative <strong>positions</strong> of molecules</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
            <ul>
                <li>Molecules are arranged differently in different <strong>phases</strong><ul>
                    <li>Internal <strong>potential</strong> energy affects how close molecules are</li>
                    <li>Internal <strong>kinetic</strong> energy affects the motion of molecules</li>
                </ul>
                </li>
                <li><strong>Solids</strong>: fixed volume, fixed shape, close vibrating molecules</li>
                <li><strong>Liquids</strong>: fixed volume, variable shape, close sliding molecules</li>
                <li><strong>Gases</strong>: variable volume, variable shape, separated moving molecules</li>
            </ul>
            <img src={thermal1} alt="Solid, liquid, gas"/>
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Thermal capacity</strong>: energy needed to raise object&#39;s temperature by 1 K<ul>
                    <li><TeX math="C={Q \over ∆T}"/></li>
                    <li>Energy per unit of temperature: <TeX math="JK^{-1}"/></li>
                </ul>
                </li>
                <li><strong>Specific heat capacity</strong>: energy needed to raise one <strong>unit mass</strong> of a substance by 1 K<ul>
                    <li><TeX math="Q=mc∆T"/></li>
                    <li>Energy per unit mass and temperature: <TeX math="J \ kg^{-1} \ K^{-1}"/></li>
                </ul>
                </li>
                <li>Experimentally determining heat capacity<ul>
                    <li>Measure electrically or using method of mixtures</li>
                    <li>Assume that <strong>no energy is lost</strong> and heat transfer is <strong>uniform</strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <>
            <ul>
                <li><strong>Specific latent heat</strong>: energy per unit mass <strong>absorbed or released</strong> during a change of phase<ul>
                    <li><TeX math="Q=mL"/></li>
                    <li>Specific latent heat of <strong>fusion</strong>: energy needed to change 1 kg of substance between solid and liquid states</li>
                    <li>Specific latent heat of <strong>vaporisation</strong>: energy needed to change 1 kg of substance between liquid and gas states</li>
                </ul>
                </li>
                <li><strong>Temperature</strong> remains <strong>constant</strong> during <strong>phase change</strong><ul>
                    <li>Latent heat: energy used to increase internal <strong>potential</strong> energy and separate molecules</li>
                </ul>
                </li>
            </ul>
            <img src={thermal2} alt="Heating curve"/>
            </>
        )
    }
}

export default Forces
