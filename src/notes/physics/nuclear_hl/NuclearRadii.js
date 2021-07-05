import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearHL12 from "../../../images/nuclearHLImg/nuclearHL12.png"
import nuclearHL13 from "../../../images/nuclearHLImg/nuclearHL13.png"

export default function Tunnelling(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Alpha particle</strong> approaches nucleus: loses <strong>kinetic energy</strong><ul>
                        <li>Electrostatic <strong>repulsion</strong>: force exerts negative work</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL12} alt="Closest approach diagram" />
                <ul>
                    <li>Kinetic energy transformed into <strong>electric potential energy</strong><ul>
                        <li><TeX math="{1\over 2}mv^2 = {kQq \over r}"/></li>
                        <li>Assume mass and charge for <strong>gold nucleus:</strong> Rutherford&#39;s scattering experiment</li>
                        <li><TeX math="r={k(79)(2)e^2 \over 0.5(4m_e)v^2}"/></li>
                    </ul>
                    </li>
                    <li>Approximation of <strong><TeX math="10^{-14}"/> m</strong> for nuclear radius<ul>
                        <li>More kinetic energy: more accurate estimate</li>
                        <li>Implies that <strong>radius depends on kinetic energy</strong> of alpha particle</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Radius of atom<strong>: <TeX math="R=R_0 A^{1\over 3}"/></strong><ul>
                    <li><TeX math="R_0 = 1.2 \times 10^{-15}"/>: constant <strong>Fermi radius</strong></li>
                    <li><TeX math="A"/>: atomic <strong>mass number</strong></li>
                </ul>
                </li>
                <li><strong>Volume</strong> of nucleus: <strong>proportional</strong> to number of <strong>nucleons</strong><ul>
                    <li><TeX math="V \propto A"/>, therefore <TeX math="{4\over 3}\pi R^3 \propto A"/> and <TeX math="R \propto A^{1\over 3}"/></li>
                </ul>
                </li>
                <li><strong>Density</strong> of nucleus: <TeX math="2.3 \times 10^{17} \ \text{kg m}^{-3}"/><ul>
                    <li>Derived from <TeX math="V= {4\over 3 }\pi R_0^3 A"/> and <TeX math="\text{mass} = Au"/></li>
                    <li><TeX math="\rho = {3u \over 4\pi R_0 ^3}"/>: density is <strong>independent</strong> of number of nucleons</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Alpha</strong> decay: <strong>discrete</strong> energy emissions<ul>
                        <li>Alpha particles leaving the nucleus <strong>release photons</strong> when excited: <strong>quantised</strong> gamma radiation</li>
                        <li>Quantum tunnelling occurs: kinetic energy of alpha particles is insufficient to escape mechanically</li>
                    </ul>
                    </li>
                    <li><strong>Beta-minus</strong> decay: <strong>continuous</strong> energy spectrum<ul>
                        <li>Emits <strong>electrons</strong> and <strong>electron antineutrinos</strong>: conservation of mass and energy</li>
                        <li>Energy is <strong>shared</strong> between electron and antineutrino</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL13} alt="Beta energies" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li>Activity of a sample <TeX math="A= \lambda N"/><ul>
                    <li><strong>Decay constant</strong> <TeX math="(\lambda)"/>: probability that nucleus will decay in a given time interval</li>
                    <li><strong>Number of undecayed nuclei</strong> <TeX math="(N)"/>: decreases exponentially</li>
                    <li><TeX math="A=A_0e^{-\lambda t}"/> and <TeX math="N=N_0 e^{-\lambda t}"/></li>
                </ul>
                </li>
                <li>Measure <strong>long half-lives</strong>: use law of radioactive decay<ul>
                    <li>Measure activity of sample with Geiger counter</li>
                    <li>Use radioactive decay law to find <strong>decay constant</strong></li>
                    <li><strong>Half-life of sample <TeX math="t_{1\over 2} = -{\ln(0.5) \over \lambda}"/></strong></li>
                    <li>Derived from <TeX math="{N_0 \over 2} = N_0 e^{-\lambda t}"/></li>
                </ul>
                </li>
                <li>Measure <strong>short half-lives</strong>: graph activity over time<ul>
                    <li>Read half-life straight from the <strong>graph</strong></li>
                </ul>
                </li>
            </ul>
        )
    }
}
