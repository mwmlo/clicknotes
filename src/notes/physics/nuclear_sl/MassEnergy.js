import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearSL7 from "../../../images/nuclearSLImg/nuclearSL7.png"
import nuclearSL8 from "../../../images/nuclearSLImg/nuclearSL8.png"
import nuclearSL9 from "../../../images/nuclearSLImg/nuclearSL9.png"

export default function MassEnergy(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Mass</strong> is another form of <strong>energy</strong>: <TeX math="E=mc^2"/><ul>
                    <li>Energy is often measured in <strong>MeV</strong></li>
                </ul>
                </li>
                <li><strong>Unified atomic mass unit</strong> <TeX math="(u)=1.66 \times 10^{-27}"/> kg<ul>
                    <li>Equal to 1/12 of the mass of a <strong>carbon-12</strong> atom</li>
                    <li><strong>1 amu = 931.5 MeV</strong></li>
                </ul>
                </li>
                <li><TeX math="MeVc^{-2}"/> measures mass in terms of light and energy<ul>
                    <li>1 <TeX math="MeVc^{-2}"/> of mass is equal to <strong>1 MeV of energy</strong></li>
                    <li><TeX math="1.66 \times 10^{-27} \ kg = 931.5 \ MeVc^{-2}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Mass defect</strong>: difference between <strong>total mass</strong> of nucleons and <strong>actual mass</strong> of nucleus<ul>
                        <li>Nucleus weighs less than all nucleons combined</li>
                        <li>Equal to mass of energy binding the nucleus</li>
                    </ul>
                    </li>
                    <li><strong>Binding energy</strong>: energy needed to <strong>separate nucleons</strong><ul>
                        <li><strong>Binding energy per nucleon</strong>: energy needed to separate nucleons, divided by number of nucleons</li>
                    </ul>
                    </li>
                    <li>Binding energy and binding energy per nucleon <strong>increases</strong> after a reaction: more stable<ul>
                        <li><strong>Iron-56</strong> is the most stable element: maximum binding energy</li>
                        <li>To the left: <strong>fusion</strong> occurs to <strong>increase</strong> mass number and binding energy</li>
                        <li>To the right: <strong>fission</strong> occurs to <strong>decrease</strong> mass number and increase binding energy</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearSL7} alt="Binding energy per nucleon vs mass number" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Fission</strong>: heavy nucleus <strong>splits</strong> into smaller fragments<ul>
                        <li>Slow moving neutron splits unstable nucleus</li>
                        <li>Produces more <strong>neutrons</strong>: causes a chain reaction</li>
                    </ul>
                    </li>
                    <li>Breaks apart heavy nuclei to <strong>decrease mass per nucleon</strong>: increases binding energy per nucleon</li>
                </ul>
                <img src={nuclearSL8} alt="Nuclear fission of U-235" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Fusion</strong>: smaller nuclei <strong>fuse</strong> together to form a <strong>heavier</strong> nucleus<ul>
                        <li><strong>Fast-moving</strong> nuclei collide and fuse together</li>
                    </ul>
                    </li>
                    <li><strong>Increases mass per nucleon</strong> for small atoms: increases stability and binding energy per nucleon</li>
                </ul>
                <img src={nuclearSL9} alt="Nuclear fusion of hydrogen isotopes" />
            </>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li><strong>Pair production</strong>: a photon produces a particle and an antiparticle</li>
                <li><strong>Annihilation</strong>: a particle collides with its antiparticles and releases energy as photons</li>
            </ul>
        )
    }
}
