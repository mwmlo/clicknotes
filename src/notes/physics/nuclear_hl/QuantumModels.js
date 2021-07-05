import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearHL8 from "../../../images/nuclearHLImg/nuclearHL8.png"
import nuclearHL9 from "../../../images/nuclearHLImg/nuclearHL9.png"

export default function QuantumModels(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Electron orbits are <strong>quantised</strong>: discrete values of radii<ul>
                        <li><strong>Angular momentum</strong> of orbit <TeX math="(mvr)"/> is an integer multiple of <TeX math="{h \over 2\pi}"/></li>
                        <li>Energy levels predicted correspond to discrete wavelengths of hydrogen <strong>emission spectrum</strong></li>
                    </ul>
                    </li>
                    <li>Bohr&#39;s equations for <strong>hydrogen radii</strong>:<ul>
                        <li>Energy of <strong>electron</strong> in nth orbit: <TeX math="E_n=-{13.6 \over n^2}"/></li>
                        <li><strong>Radius</strong> of nth orbit: <TeX math="r_n={n ^ 2h^2 \over 4\pi ^2 ke^2 m}"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL8} alt="Bohr's Model" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Wave function</strong> <TeX math="\Psi"/>: probability function associated with moving particle and matter wave<ul>
                        <li>Electron has an <strong>undefined position</strong></li>
                    </ul>
                    </li>
                    <li><strong>Probability density</strong> <TeX math="\Psi ^2"/>: proportional to <strong>probability</strong> of finding an electron at a particular point<ul>
                        <li><strong>High probability density</strong> within <strong>electron orbitals</strong>: electrons are likely to exist within a cloud</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL9} alt="Probability density graph" />
            </>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Heisenberg&#39;s Uncertainty Principle</strong>: cannot precisely measure both position and momentum simultaneously<ul>
                    <li><strong>Position</strong> and <strong>momentum</strong> are conjugate quantities</li>
                </ul>
                </li>
                <li>Increase in accuracy of position: decrease in accuracy of momentum<ul>
                    <li>Electrons are detected using photons: <strong>photon bombardment</strong> changes position of electron</li>
                    <li><strong>Short wavelength photons</strong> measure position precisely: high energy changes momentum</li>
                </ul>
                </li>
                <li><TeX math="∆x∆p ≥ {h \over 4\pi}"/> and <TeX math="∆E∆t ≥ {h \over 4\pi}"/><ul>
                    <li><TeX math="∆x"/> represents uncertainty in measurement of position</li>
                    <li><TeX math="∆p"/> represents uncertainty in measurement of momentum</li>
                    <li>These <strong>uncertainties</strong> are not the same as the &#39;uncertainties&#39; from topic 1</li>
                </ul>
                </li>
            </ul>
        )
    } 
}
