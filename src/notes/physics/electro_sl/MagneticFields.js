import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function MagneticFields(props) {
    if (props === 1) {
        return (
            <ul>
                <li>Magnetic force flows from North to South<ul>
                    <li>Stronger field: density of field lines</li>
                </ul>
                </li>
                <li>Moving charge (current): creates magnetic force<ul>
                    <li>Right hand grip rule: thumb points to conventional current, curled with magnetic field</li>
                </ul>
                </li>
                <li>Solenoid: coil of wire<ul>
                    <li>Right hand grip rule: thumb points to North, curled with conventional current</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Motor effect: current carrying conductor experiences force in magnetic field<ul>
                    <li>Fleming&#39;s left hand rule: used to determine direction of force</li>
                </ul>
                </li>
                <li><TeX math="F=BIL\sin \theta"/>: conducting wire<ul>
                    <li>Magnetic field strength <TeX math="B"/>: units in Tesla, <TeX math="1 \ T = 1 \ NA^{-1}m^{-1}"/></li>
                    <li><TeX math="\sin \theta"/>: angle of current to magnetic field</li>
                </ul>
                </li>
                <li><TeX math="F=qvB\sin\theta"/>: moving charge<ul>
                    <li>Motor effect provides centripetal force</li>
                    <li><TeX math="F={mv ^ 2 \over r}"/></li>
                </ul>
                </li>
            </ul>
        )
    }
}
