import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import period1 from "../../../images/periodImg/period1.png"
import period2 from "../../../images/periodImg/period2.png"
import period3 from "../../../images/periodImg/period3.png"
import period4 from "../../../images/periodImg/period4.png"
import period5 from "../../../images/periodImg/period5.png"

export default function PeriodicGroup(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Physical</strong> properties: shiny, <strong>low density</strong>, conductive, <strong>soft</strong></li>
                <li><strong>Chemical</strong> properties: <strong>reactive</strong>, forms <strong>ionic compounds</strong> with non-metals, positively charged</li>
                <li>Reactions become <strong>more vigorous</strong> down the <strong>group</strong><ul>
                    <li><strong>Lower ionisation energy</strong>: forms cations more readily</li>
                    <li>Alkali metal + water —&gt; <strong>hydrogen</strong> and <strong>metal hydroxide</strong></li>
                    <li><TeX math="2K(s)+2H_2O\rightarrow 2KOH(aq)+H_2(g)" /></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Physical</strong> properties: <strong>colour darkens</strong> down group<ul>
                    <li>Green <strong>chlorine</strong> gas, brown <strong>bromine</strong> liquid, purple <strong>iodine</strong> solid</li>
                    <li>Gradual change from <strong>gas to liquid to solid</strong> down group</li>
                </ul>
                </li>
                <li><strong>Chemical</strong> properties: <strong>reactivity decreases</strong> down group<ul>
                    <li>Forms <strong>ionic</strong> compounds with metals</li>
                    <li>Forms <strong>covalent</strong> compounds with non-metals</li>
                    <li><strong>Atomic radius increases</strong>: less attraction to gain electrons</li>
                </ul>
                </li>
                <li>Forms <strong>ionic halides</strong> with Group 1 metals<ul>
                    <li><TeX math="2Na(s)+Cl_2(g)\rightarrow 2NaCl(s)" /></li>
                </ul>
                </li>
                <li>More reactive halogens <strong>displace</strong> less reactive halogens<ul>
                    <li><TeX math="I_2 &lt; Br_2 &lt; Cl_2 &lt; F_2" /></li>
                    <li>Ions with <strong>smaller radii</strong> are more reactive: greater attraction</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Electronegativity difference</strong> increases: <strong>ionic character</strong> increases<ul>
                        <li><strong>Large</strong> electronegativity difference: metal atom loses electron, <strong>ionic</strong> bond, basic</li>
                        <li><strong>Similar</strong> electronegativity: less than <strong>1.8</strong>, non-metal atoms share electrons, <strong>covalent</strong> bonds, acidic</li>
                        <li><strong>Zero</strong> electronegativity difference: <strong>completely covalent</strong>, diatomic</li>
                    </ul>
                    </li>
                </ul>
                <img src={period1} alt="Trends across Period 3" />
                <img src={period2} alt="Electronegativity Triangle" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Basic oxides</strong>: metal oxides<ul>
                        <li>Forms <strong>alkaline</strong> solution with water, forms salt and water with <strong>acid</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={period3} alt="Basic oxides"/>
                <ul>
                    <li><strong>Amphoteric</strong> oxides: reacts with <strong>acids and alkalis</strong> to form salt and water</li>
                </ul>
                <img src={period4} alt="Amphoteric oxides"/>
                <ul>
                    <li><strong>Acidic</strong> oxides: <strong>non-metal</strong> oxides<ul>
                        <li>Forms <strong>acidic</strong> solution with water, forms salt and water with <strong>bases</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={period5} alt="Acidic oxides"/>
            </>
        )
    }
}
