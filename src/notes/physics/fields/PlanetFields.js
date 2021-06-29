import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import fields7 from "../../../images/fieldsImg/fields7.png"

export default function PlanetFields(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Gravitational potential energy</strong>: mass of planet multiplied by gravitational potential<ul>
                    <li><TeX math="E_{p(g)} = mV_g = -{GMm \over r}"/></li>
                </ul>
                </li>
                <li><strong>Gravitational kinetic energy</strong>: derived from <TeX math="{1\over2}mv^2"/> and orbital velocity<ul>
                    <li><TeX math="E_k = {GMm \over 2r}"/></li>
                </ul>
                </li>
                <li><strong>Total gravitational energy</strong>: kinetic + potential energy<ul>
                    <li><TeX math="{GMm \over 2r} - {GMm \over r} = -{GMm \over 2r}"/></li>
                </ul>
                </li>
                <li><strong>Electric potential energy</strong>: <TeX math="E_{p(e)} = {kQq \over r}"/></li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Model planet</strong>: solid sphere separated into interior and exterior shells<ul>
                        <li>Outer shell: no gravitational field</li>
                    </ul>
                    </li>
                    <li><strong>Inner sphere</strong>: gravitational field <strong>proportional to radial distance</strong> from centre of the planet</li>
                </ul>
                <img src={fields7} alt="Gravitational field inside Earth" />
            </>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Orbital velocity</strong>: <TeX math="v = {GM \over r}"/><ul>
                    <li>Derived using <TeX math="F=ma"/> and <TeX math="a = {v ^ 2 \over r}"/></li>
                </ul>
                </li>
                <li><strong>Orbital period</strong>: <TeX math="T=\sqrt{4\pi ^2 r^3 \over GM}"/></li>
                <li><strong>Polar</strong> orbit: satellite orbits over the poles at <strong>100 km</strong> above the surface</li>
                <li><strong>Geosynchronous orbit</strong>: satellite stays in one area of the sky, moving with the earth<ul>
                    <li>Orbital period: <strong>24 hours</strong></li>
                    <li><strong>Geostationary</strong> orbit: orbits over equator</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Escape velocity</strong>: velocity needed for an <strong>unpowered</strong> projectile launched from the <strong>surface</strong> to <strong>escape Earth&#39;s gravitational field</strong></li>
                <li>Gravitational <strong>potential energy</strong> and <strong>kinetic energy</strong> are <strong>equal</strong>: overcome potential attraction<ul>
                    <li><TeX math="-{GMm \over r} + {1 \over 2}mv^2 = 0"/></li>
                </ul>
                </li>
                <li><TeX math="v=\sqrt{2GM \over r} = \sqrt{2gr}"/></li>
            </ul>
        )
    }
}
