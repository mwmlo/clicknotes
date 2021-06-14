import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function GravFields(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Gravitational field</strong>: single mass attracts other masses<ul>
                    <li><strong>Field strength</strong>: force acting on test object in field per unit mass (<TeX math="Nkg^{-1}"/>)</li>
                    <li><TeX math="g = {F_g \over m} = {GM \over r^2}"/></li>
                    <li>Proportional to <strong>mass</strong>, inversely proportional to <strong>distance</strong> squared</li>
                    <li>Point sources: proportional to change in <strong>potential</strong> over change in <strong>radial distance</strong></li>
                    <li><TeX math="g=- {∆V_g \over ∆r}"/></li>
                </ul>
                </li>
                <li>Newton&#39;s Law of Gravitation: gravitational force exists between <strong>two masses</strong><ul>
                    <li><TeX math="F_g= {GMm \over r^2}"/></li>
                    <li>Directly proportional to <strong>masses</strong>, inversely proportional to <strong>distance</strong> squared</li>
                    <li><strong>Universal gravitational constant</strong> <TeX math="G=6.67\times 10^{-11} \ m^3kg^{-1}s^{-2}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Gravitational potential</strong>: <strong>work</strong> done <strong>per unit mass</strong> in moving a test mass from <strong>infinity</strong> to that point<ul>
                    <li>Gravitational potential difference: <TeX math="∆V_g = {W \over m}"/></li>
                    <li>Since <TeX math="W=Fd"/>, <TeX math="g={GM \over r^2}=-{∆V_g \over r}"/> therefore <TeX math="V_g= - {GM \over r}"/></li>
                </ul>
                </li>
                <li><strong>Zero reference point</strong> for potential: <strong>infinity</strong><ul>
                    <li>No interaction between masses separated by an infinite distance</li>
                    <li>Gravitational potential must be <strong>negative</strong>: negative work to bring masses together from infinity</li>
                </ul>
                </li>
            </ul>
        )
    }
}
