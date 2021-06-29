import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function Induction(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Motor effect</strong>: magnetic field exerts force on wire<ul>
                    <li>Conducting wire placed in magnetic field</li>
                    <li><strong>Fleming&#39;s left hand rule</strong>: predict direction of force</li>
                </ul>
                </li>
                <li><strong>Generator effect</strong>: magnetic field induces e.m.f.<ul>
                    <li>Conductor <strong>cuts</strong> magnetic field lines</li>
                    <li>Force exerted on electrons: potential difference</li>
                    <li><strong>Fleming&#39;s right hand rule</strong>: predict direction of induced e.m.f. in moving conductor</li>
                </ul>
                </li>
                <li><strong>Factors</strong> affecting generated e.m.f.<ul>
                    <li>Faster <strong>speed</strong> increases induced e.m.f.</li>
                    <li>Stronger <strong>magnetic field</strong> increases e.m.f.</li>
                    <li>Longer <strong>length</strong> of wire increases e.m.f.</li>
                </ul>
                </li>
                <li><strong>Total induced e.m.f. <TeX math="\varepsilon =BvlN"/></strong><ul>
                    <li><strong>Magnetic field strength</strong> <TeX math="(B)"/>: number of magnetic field lines per unit area, measured in <strong>Webers</strong></li>
                    <li><strong>Velocity</strong> of moving conductor <TeX math="(v)"/></li>
                    <li><strong>Length</strong> of conductor <TeX math="(l)"/></li>
                    <li>Number of <strong>turns</strong> in coil <TeX math="(N)"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Magnetic flux <TeX math="\Phi = AB \cos \theta"/></strong><ul>
                    <li>Product of magnetic field strength <TeX math="(B)"/> &amp; area <TeX math="(A)"/></li>
                    <li>Angle <TeX math="\cos \theta"/> between field and <strong>normal</strong> to surface</li>
                    <li>Angle <TeX math="\sin \theta"/> between magnetic field and area itself</li>
                    <li>Measured in <strong>Webers</strong>: <TeX math="1 \ Wb = 1 \ Tm^2"/></li>
                </ul>
                </li>
                <li><strong>Magnetic flux linkage</strong>: total magnetic flux, accounting for the number of turns of the wire<ul>
                    <li><TeX math="\Phi = NAB \cos \theta"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Lenz&#39;s Law</strong>: direction of <strong>induced current opposes</strong> the change in direction that induces it</li>
                <li><strong>Conservation of energy</strong><ul>
                    <li>Work needed to produce e.m.f.</li>
                    <li>External force must <strong>balance</strong> <strong>opposing magnetic field</strong> produced by induced current</li>
                </ul>
                </li>
                <li><strong>Right hand curl rule</strong>: predict direction of current or magnetic field<ul>
                    <li>Thumb: conventional current or North pole</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Faraday&#39;s Law</strong>: magnitude of induced e.m.f. is proportional to the <strong>rate of change of flux linkage</strong></li>
                <li><TeX math="\varepsilon = -N{∆\Phi \over ∆t}"/><ul>
                    <li><TeX math="N"/> represents number of <strong>turns</strong> in coil</li>
                    <li>Induced e.m.f. is the rate of change in magnetic flux: <strong>change</strong> in magnetic <strong>flux</strong> <TeX math="∆\Phi"/> over <strong>time</strong> <TeX math="∆t"/></li>
                    <li><strong>Negative</strong> sign indicates Lenz&#39;s Law</li>
                </ul>
                </li>
            </ul>
        )
    }
}
