import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import bond3 from "../../../images/bondingImg/bond3.png"
import bond4 from "../../../images/bondingImg/bond4.png"
import bond5 from "../../../images/bondingImg/bond5.png"
import bond6 from "../../../images/bondingImg/bond6.png"
import bond7 from "../../../images/bondingImg/bond7.png"

export default function Structure(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Lewis structure</strong>: diagram of molecule showing how <strong>valence electrons</strong> are arranged among atoms<ul>
                        <li>Lone pairs of electrons represented as dots or crosses</li>
                        <li>Shared pairs of electrons represented as lines</li>
                        <li><strong>Coordinate bonds</strong> represented as arrows</li>
                    </ul>
                    </li>
                    <li>Rules for drawing a Lewis structure diagram<ul>
                        <li><strong>Total number of electrons</strong> must remain the same</li>
                        <li>Central atom has the <strong>lowest electronegativity</strong>, bar hydrogen</li>
                        <li>Each atom should have <strong>8 bonding and non-bonding electrons</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={bond3} alt="Lewis structure diagram" />
                <ul>
                    <li><strong>Exceptions</strong> to the octet rule<ul>
                        <li><strong>Beryllium</strong> and <strong>boron</strong> are stable with incomplete octets</li>
                        <li><strong>Electron deficient</strong>: able to accept electron pairs from other molecules with lone pairs, forming coordinate compounds</li>
                        <li>Elements in period 3 and below <strong>expand octets</strong>: use d-orbitals</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>VSEPR</strong>: valence shell electron pair repulsion theory<ul>
                        <li>Used to predict <strong>shapes of molecules</strong></li>
                        <li>Electron pairs around the central atom <strong>repel</strong> each other</li>
                        <li><strong>Bonding pairs</strong> and <strong>lone pairs</strong> are as far apart as possible</li>
                    </ul>
                    </li>
                    <li>Determined by number of <strong>domains</strong> (areas of electron density) around central atom<ul>
                        <li><strong>More than one</strong> central atom: calculate geometry separately for each central atom</li>
                    </ul>
                    </li>
                    <li><strong>Electron domain geometry</strong>: basic shape, ignoring lone pairs</li>
                    <li><strong>Molecular geometry</strong>: molecular shape accounting for lone pairs</li>
                </ul>
                <img src={bond4} alt="Bond angles and shapes" />
            </>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Linear</strong> molecule, <TeX math="CO_2"/><ul>
                    <li>2 electron domains, <strong>180°</strong> apart</li>
                    <li>Describes all diatomic molecules</li>
                </ul>
                </li>
                <li><strong>Bent</strong> molecule, <TeX math="H_2O"/><ul>
                    <li>2 electron domains, <strong>104.5°</strong> apart</li>
                    <li>Lone pairs on central atom exert repulsion</li>
                </ul>
                </li>
                <li><strong>Trigonal planar</strong> molecule, <TeX math="BF_3"/><ul>
                    <li>3 electron domains, <strong>120°</strong> apart</li>
                    <li>Flat molecule: bonds spread into equilateral triangle</li>
                </ul>
                </li>
                <li><strong>Tetrahedral</strong> molecule, <TeX math="CH_4"/><ul>
                    <li>4 electron domains, <strong>109.5°</strong> apart</li>
                    <li>Symmetrical, often forms non-polar molecules</li>
                </ul>
                </li>
                <li><strong>Trigonal pyramidal</strong> molecule, <TeX math="NH_3"/><ul>
                    <li>4 electron domains, <strong>107°</strong> apart</li>
                    <li>Lone pairs repel bonding pairs more than bonding pairs repel each other, forcing base closer together</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li>Elements from <strong>Period 3 and below</strong> have <strong>more than 8 electrons</strong> around a central atom</li>
                <li>3p electrons promoted to empty <strong>3d orbitals</strong>: allows additional electron pair to form</li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li><strong>Triangular bi-pyramidal</strong> molecule: <TeX math="PCl_5"/>, 90° and 120° apart</li>
                <li><strong>Seesaw</strong> molecule: <TeX math="SF_4"/>, one lone pair, <strong>117°</strong> and 90° apart</li>
                <li><strong>T-shaped</strong> molecule: <TeX math="ClF_3"/>, two lone pairs, 180° and 90° apart</li>
                <li><strong>Linear</strong> molecule: <TeX math="I_3^-"/>, three lone pairs, two covalent bonds</li>
            </ul>
        )
    } else if (props === 6) {
        return (
            <>
                <ul>
                    <li><strong>Octahedral</strong> molecule: <TeX math="SF_6"/>, 90° and 180° apart</li>
                    <li><strong>Square pyramidal</strong> molecule: <TeX math="BrF_5"/>, one lone pair, 90° apart</li>
                    <li><strong>Square planar</strong> shape: <TeX math="XeF_4"/>, two lone pairs, 90° apart</li>
                </ul>
                <img src={bond5} alt="Summary: molecular geometry of expanded octets" />
            </>
        )
    } else if (props === 7) {
        return (
            <>
                <ul>
                    <li><strong>Resonance</strong>: molecule has <strong>more than one valid Lewis structure</strong><ul>
                        <li>Double bonds can <strong>move</strong> to different positions</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond6} alt="Resonance Lewis structures" />
                <ul>
                    <li><strong>Delocalised</strong> electrons: not confined to one location<ul>
                        <li>Series of <strong>neighbouring p-orbitals overlap</strong>: delocalised orbital</li>
                        <li>Electrons <strong>spread out</strong> between bonds for stability: equal length and strength, conductive</li>
                    </ul>
                    </li>
                </ul>
                <img src={bond7} alt="Delocalisation in benzene" />
                <ul>
                    <li><strong>Resonance hybrid</strong>: average of all resonance structures<ul>
                        <li>Bond lengths and bond strengths taken as <strong>average</strong></li>
                    </ul>
                    </li>
                    <li><strong>Bond order</strong>: electron density in bond<ul>
                        <li><TeX math="bond \ order = {number \ of \ bonds \over number \ of \ bond \ positions}"/></li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 8) {
        <ul>
            <li><strong>Formal charge</strong>: used to compare <strong>stability</strong> of resonance structures<ul>
                <li>Number of valence electrons in un-bonded atom - number of electrons assigned to atom in Lewis structure</li>
                <li><strong><TeX math="FC=V-(0.5B+L)"/></strong></li>
                <li>Number of valence electrons in un-bonded atom - (half the number of shared electrons + lone electrons)</li>
            </ul>
            </li>
            <li><strong>Low</strong> formal charge: very <strong>stable</strong> structure<ul>
                <li>Less charge transferred to form structure</li>
            </ul>
            </li>
            <li>Structures with the same formal charges: compare <strong>electronegativity</strong><ul>
                <li><strong>Negative formal charges</strong> are more stable on more electronegative atoms</li>
            </ul>
            </li>
        </ul>
    }
}
