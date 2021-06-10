import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import atomic2 from "../../../images/atomicStruImg/atomic2.gif"
import atomic3 from "../../../images/atomicStruImg/atomic3.png"
import atomic4 from "../../../images/atomicStruImg/atomic4.png"
import atomic5 from "../../../images/atomicStruImg/atomic5.gif"

function Energy(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Energy levels <strong>converge</strong> at <strong>higher</strong> energies<ul>
                        <li>Change in energy proportional to frequency</li>
                        <li><TeX math="h" /> represents <strong>Planck’s constant</strong></li>
                        <li><TeX math="v" /> represents the <strong>frequency of light</strong> emitted</li>
                    </ul>
                    </li>
                </ul>
                <p><TeX math="∆E=E_1 - E_2 = hv" /></p>
                <ul>
                    <li>Ions lose or gain <strong>valence electrons</strong> first: furthest from nucleus<ul>
                        <li><strong>Transition metals</strong> lose <strong>4<em>s</em></strong> orbital electrons first</li>
                        <li>Filled <strong>4<em>s</em></strong> orbitals gain more energy than filled <strong>4<em>d</em></strong> orbitals</li>
                    </ul>
                    </li>
                </ul>
                <img src={atomic2} alt="Emission spectrum transitions" />
                <ul>
                    <li>Electron transitions to level <strong><TeX math="n=1" /></strong>: <strong>UV</strong> spectrum</li>
                    <li>Electron transitions to level <TeX math="n=2" />: <strong>visible</strong> spectrum</li>
                </ul>

            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li>Electron moves around the nucleus in <strong>circular orbits</strong><ul>
                        <li>Different orbits have different energy levels</li>
                    </ul>
                    </li>
                    <li><strong>Principal quantum number <em>n</em></strong> describes number of electrons in electron shell<ul>
                        <li>Each energy level has <strong>sub-shells</strong> (s, p, d, f).</li>
                        <li>Each sub-shell has orbitals</li>
                        <li><strong>Spin quantum number</strong> shows ± spin</li>
                    </ul>
                    </li>
                    <li><strong>Orbitals</strong>: regions of space with <strong>high probability</strong> of finding an electron<ul>
                        <li><strong>s-orbitals</strong>: one <strong>spherical</strong> orientation, <strong>2</strong> electrons</li>
                        <li><strong>p-orbitals</strong>: <strong>dumbbell</strong> shaped, three orientations, <strong>6</strong> electrons</li>
                        <li><strong>d-orbitals</strong>: five different orientations, <strong>10</strong> electrons</li>
                        <li><strong>f-orbitals</strong>: seven different orientations, <strong>14</strong> electrons</li>
                    </ul>
                    </li>
                </ul>
                <img src={atomic3} alt="Shapes of orbitals" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Full</strong> orbital notation: <strong><TeX math="1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10}" /></strong><ul>
                        <li><strong>Condensed</strong> notation: simplifies previous noble gas, lists next orbitals only, e.g. <TeX math="[Ne] \ 3s^1" /></li>
                        <li><strong>Energy level</strong> number equivalent to <strong>period</strong> number</li>
                    </ul>
                    </li>
                    <li>Orbital sub-shells correspond to <strong>periodic table groups</strong><ul>
                        <li>Group 1 - 2 elements: <strong>s-block</strong></li>
                        <li>Transition metal elements: <strong>d-block</strong></li>
                        <li>Group 3 - 8 elements: <strong>p-block</strong></li>
                        <li>The bottom group (lathanides and actinides) elements: <strong>f-block</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={atomic4} alt="Order of orbital shells" />
                <ul>
                    <li><strong>Orbital diagrams</strong>: electron configurations in <strong>boxes</strong>, each box represents one orbital<ul>
                        <li>Each box / orbital can hold <strong>two electrons</strong></li>
                        <li>Number of orbitals depends on energy level</li>
                    </ul>
                    </li>
                </ul>
                <img src={atomic5} alt="Electron configuration of example elements" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Pauli Exclusion Principle</strong>: orbitals hold a maximum of <strong>two electrons</strong> with opposite spins<ul>
                    <li>Number of electrons at nth energy level: <TeX math="2n^2" /></li>
                </ul>
                </li>
                <li><strong>Aufbau Principle</strong>: electrons are placed into orbitals of <strong>lowest energy</strong> first<ul>
                    <li><strong>4s orbital</strong> filled before 3d orbital: less energy</li>
                    <li><strong>Copper</strong> is an exception: <TeX math="1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^1" /></li>
                    <li><strong>Chromium</strong> is an exception: <TeX math="1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1" /></li>
                    <li>Allow copper and chromium to be more <strong>stable</strong>: better dispersion of electrons</li>
                </ul>
                </li>
                <li><strong>Hund’s Rule</strong>: electrons first occupy orbitals as <strong>unpaired</strong> electrons<ul>
                    <li>Electrons paired together with <strong>opposite spin</strong>: reduced mutual repulsion</li>
                </ul>
                </li>
            </ul>
        )
    }
}

export default Energy
