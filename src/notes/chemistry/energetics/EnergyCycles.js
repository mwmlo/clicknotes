import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import energetics4 from "../../../images/energeticsImg/energetics4.png"
import energetics5 from "../../../images/energeticsImg/energetics5.png"
import energetics6 from "../../../images/energeticsImg/energetics6.png"
import energetics7 from "../../../images/energeticsImg/energetics7.png"

export default function EnergyCycles(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Hess&#39; Law</strong>: enthalpy change depends only on the <strong>difference</strong> between the enthalpy of products and the enthalpy of reactants<ul>
                        <li>Enthalpy change is <strong>independent of route</strong></li>
                        <li><TeX math="∆H"/> = sum of enthalpy changes in an <strong>alternative pathway</strong></li>
                    </ul>
                    </li>
                    <li><TeX math="∆H^\theta<em>{f \ (reaction)}=\Sigma ∆H^\theta</em>{f \ (products)} - \Sigma ∆H^\theta_{f \ (reactants)}"/></li>
                </ul>
                <img src={energetics4} alt="Energy cycle diagram" />
                <ul>
                    <li><strong>Standard enthalpy change of formation</strong> <TeX math="∆H^{\theta}_f"/>: energy required for <strong>one mole</strong> of substance to form from its <strong>elements</strong> in <strong>standard states</strong></li>
                    <li>Calculating standard enthalpy change from given equations<ul>
                        <li>Identify reactants and products of the desired reaction</li>
                        <li><strong>Rearrange</strong> so that products and reactants are on the correct sides</li>
                        <li><strong>Flip</strong> <TeX math="±∆H"/> accordingly</li>
                        <li>Complete <strong>simultaneous equations</strong> where products and reactants <strong>pair up</strong> across multiple reactions</li>
                        <li><strong>Add</strong> enthalpy changes together</li>
                    </ul>
                    </li>
                </ul>
                <img src={energetics5} alt="Hess' Law Calculations" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>First ionisation energy</strong> <TeX math="E_I"/>: <strong>remove</strong> one mole of <strong>electrons</strong> from one mole of <strong>gaseous</strong> atoms<ul>
                    <li><TeX math="Na(g) \rightarrow Na^+(g)+e^-"/></li>
                </ul>
                </li>
                <li><strong>First electron affinity</strong> <TeX math="E_{ea}"/>: <strong>add</strong> one mole of <strong>electrons</strong> to one mole of <strong>gaseous</strong> atoms<ul>
                    <li><TeX math="Cl(g)+e^- \rightarrow Cl^-(g)"/></li>
                </ul>
                </li>
                <li><strong>Lattice enthalpy</strong> <TeX math="∆H_{lattice}"/>: <strong>separate</strong> one mole of <strong>solid ionic compound</strong> into <strong>gaseous ions</strong><ul>
                    <li><TeX math="NaCl(s) \rightarrow Na^+ (g) + Cl^-(g)"/></li>
                    <li>Depends on ionic bond strength: ion radii, charges and density</li>
                </ul>
                </li>
                <li><strong>Enthalpy of atomisation</strong> <TeX math="∆H_{atom}"/>: <strong>form</strong> one mole of <strong>gaseous</strong> atoms from one mole of atoms in <strong>standard state</strong><ul>
                    <li><TeX math="{1 \over 2}Cl_2(g) \rightarrow Cl(g)"/></li>
                </ul>
                </li>
                <li><strong>Enthalpy of sublimation</strong> <TeX math="∆H_{sub}"/>: <strong>form</strong> one mole of <strong>gaseous</strong> atoms from one mole of atoms in <strong>solid state</strong><ul>
                    <li><TeX math="Na(s) \rightarrow Na(g)"/></li>
                </ul>
                </li>
                <li><strong>Enthalpy of solution</strong> <TeX math="∆H_{sol}"/>: <strong>dissolve</strong> one mole of <strong>solute</strong> into <strong>ions</strong> to infinite dilution under standard conditions<ul>
                    <li><TeX math="NH_4Cl(s) \rightarrow NH_4^+ (aq)+Cl^-(aq)"/></li>
                </ul>
                </li>
                <li><strong>Enthalpy of hydration</strong> <TeX math="∆H_{hyd}"/>: <strong>dissolve</strong> one mole of <strong>gaseous</strong> <strong>ions</strong> to infinite dilution in water<ul>
                    <li>Releases heat due to bonds formed between ions and hydrogen in <strong>water</strong></li>
                    <li><TeX math="Na^+(g) \rightarrow Na^+(aq)"/></li>
                </ul>
                </li>
                <li><strong>Enthalpy of combustion</strong> <TeX math="∆H_{c}"/>: <strong>burn</strong> one mole of substance <strong>completely</strong> in oxygen<ul>
                    <li><strong><TeX math="∆H^\theta<em>{c \ (reaction)}=∆H^\theta</em>{c \ (reactants)} - ∆H^\theta_{c \ (products)}"/></strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Born Haber cycle</strong>: shows alternative pathway to calculate the <strong>lattice enthalpy</strong> of an <strong>ionic compound</strong></li>
                </ul>
                <img src={energetics6} alt="Born Haber Cycle for NaCl" />
                <ul>
                    <li><strong>Order</strong> of energy transformations typically goes: <strong>formation</strong>, <strong>atomisation</strong>, <strong>ionisation</strong>, <strong>bond</strong> enthalpy, <strong>electron affinity</strong>, and <strong>lattice</strong> enthalpy</li>
                </ul>
                <img src={energetics7} alt="Born Haber Cycle for LiF" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Entropy</strong> <TeX math="(S)"/>: measure of <strong>molecular randomness</strong>, <TeX math="JK^{-1}mol^{-1}"/><ul>
                    <li>Refers to number of possible arrangements of atoms in a system</li>
                </ul>
                </li>
                <li>Entropy increases when:<ul>
                    <li>Different types of particles are <strong>mixed</strong> together</li>
                    <li><strong>Distance</strong> between particles increases due to a <strong>change in state</strong></li>
                    <li><strong>Number</strong> of particles increase</li>
                    <li><strong>Volume</strong> available for a substance increases</li>
                </ul>
                </li>
                <li><strong>Standard entropy</strong>: entropy change <strong>per mole</strong> when <strong>heating substance</strong> from 0 °K to <strong>standard state</strong> (298 °K)<ul>
                    <li><strong>Entropy change</strong>: difference between total entropy of products and total entropy of reactants</li>
                    <li><TeX math="∆S=\Sigma S<em>{products} - \Sigma S</em>{reactants}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li><strong>Spontaneous</strong> reaction: process that occurs <strong>without extra work</strong><ul>
                    <li>Automatically <strong>increases stability</strong> of system under specific conditions</li>
                    <li>Favours formation of products</li>
                    <li>Occurs when <TeX math="∆H < 0"/> and <TeX math="∆S > 0"/></li>
                </ul>
                </li>
                <li><strong>Gibbs&#39; free energy</strong> <TeX math="∆G"/>: measure of free <strong>energy available to do work</strong><ul>
                    <li><TeX math="∆G = ∆H - T∆S"/></li>
                    <li>Spontaneous reactions occur when <TeX math="∆G < 0"/></li>
                    <li>Can be calculated through an energy cycle using Hess&#39; Law</li>
                </ul>
                </li>
                <li>Spontaneity changes with <strong>temperature</strong><ul>
                    <li>At a <strong>low</strong> temperature, <TeX math="T ≈ 0"/> and <TeX math="T∆S ≈ 0"/>, so <TeX math="∆G ≈ ∆H"/></li>
                    <li>At a <strong>high</strong> temperature, <TeX math="T∆S"/> becomes extremely large and <TeX math="∆H"/> is negligible in comparison: <TeX math="∆G ≈ -T∆S"/></li>
                </ul>
                </li>
                <li><strong>Extent of spontaneous reaction</strong> depends on ratio of products to reactants<ul>
                    <li><TeX math="∆G > 30 \ kJmol^{-1}"/>: reaction does not start, only <strong>reactants</strong> are present</li>
                    <li><TeX math="∆G=0 \ kJmol^{-1}"/>: reaction is in perfect <strong>equilibrium</strong></li>
                    <li><TeX math="∆G < -30 \ kJmol^{-1}"/>: reaction is complete, only <strong>products</strong> are present</li>
                </ul>
                </li>
            </ul>
        )
    }
}
