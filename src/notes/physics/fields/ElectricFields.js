import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function ElectricFields(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Electric field</strong>: repels or attracts surrounding charges<ul>
                    <li><strong>Electric field strength</strong>: amount of force acting on positive test charge per unit charge (<TeX math="NC^{-1}"/>)</li>
                    <li><TeX math="E = {F_e \over q} = {kQ \over r^2}"/></li>
                    <li>Proportional to <strong>charge</strong>, inversely proportional to <strong>distance</strong> squared</li>
                    <li><strong>Potential gradient</strong>: field strength is change in potential over change in distance</li>
                    <li><TeX math="E= - {∆V_e \over ∆x}"/></li>
                    <li>Potential gradient must be <strong>negative</strong>: as distance from source charge increases, potential decreases</li>
                </ul>
                </li>
                <li><strong>Coulomb&#39;s Law</strong>: electric force exists between two point charges<ul>
                    <li><TeX math="F_e = {kQq \over r^2}"/></li>
                    <li>Directly proportional to <strong>charges</strong>, inversely proportion to <strong>distance</strong> squared</li>
                    <li><strong>Coulomb constant</strong> <TeX math="k = {1 \over 4π\epsilon _0} = 8.99 \times 10^9 \ N m^2 C^{-2}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Electric potential</strong>: work done in bringing a unit <strong>positive test charge</strong> from infinity to that point<ul>
                    <li>Electric potential difference <TeX math="∆V_c= {W \over q}"/></li>
                    <li>Since <TeX math="W=Fd"/>, <TeX math="E = {kQ \over r^2} = {∆V_e \over r}"/> and <TeX math="V_e = {kQ \over r}"/></li>
                </ul>
                </li>
                <li>Zero reference point at <strong>infinity</strong><ul>
                    <li><strong>Attractive</strong> charges: <strong>positive</strong> work needed to separate them, so <strong>negative</strong> electric potential <strong>increases</strong> to zero</li>
                    <li><strong>Repulsive</strong> charges: as charges separate, <strong>negative</strong> work is done and <strong>positive</strong> potential <strong>decreases</strong> to zero</li>
                </ul>
                </li>
            </ul>
        )
    }
}
