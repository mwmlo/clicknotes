import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function PeriodicTable(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Groups</strong>: vertical columns with similar valence electron configurations</li>
                <li><strong>Periods</strong>: horizontal rows with similar electron shell numbers</li>
                <li><strong>Metalloids</strong>: elements that follow the diagonal staircase between metals and non-metals<ul>
                    <li>Physical properties resemble metals</li>
                    <li>Chemical properties resemble non-metals</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Effective nuclear charge</strong>: attraction experienced by a particular electron<ul>
                    <li>Smaller than actual nuclear charge: <strong>shielding</strong> effect and inter-electron repulsion</li>
                    <li><strong>ENC = nuclear charge - number of shielding electrons</strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <ul>
                <li><strong>Atomic radius</strong>: half the distance between two <strong>nuclei</strong> of adjacent atoms</li>
                <li><strong>Decreases across period</strong><ul>
                    <li>Greater <strong>positive</strong> charge, same number of electron shells</li>
                    <li>Higher ENC: more attractive force</li>
                </ul>
                </li>
                <li><strong>Increases down group</strong><ul>
                    <li>Constant ENC: same nuclear charge down a group</li>
                    <li><strong>Shielding</strong> effect increases: greater distance between shells, less attractive force</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Cation</strong>: positive ion, <strong>smaller</strong> than corresponding atoms<ul>
                    <li>Ionic radius <strong>decreases</strong>: more protons, more attraction</li>
                </ul>
                </li>
                <li><strong>Anion</strong>: negative ion, <strong>larger</strong> than corresponding atoms<ul>
                    <li>Ionic radius <strong>increases</strong>: fewer protons than electrons, less attraction</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li><strong>Electron affinity</strong>: energy change when <strong>one mole of electrons</strong> is added to <strong>one mole of gaseous atoms</strong> to form <strong>one mole of gaseous ions</strong><ul>
                    <li>Usually exothermic: energy is typically released</li>
                    <li><TeX math="X(g)+e^-\rightarrow X^-(g)" /></li>
                </ul>
                </li>
                <li>More <strong>negative</strong> electron affinity: greater tendency to <strong>gain electron</strong><ul>
                    <li><strong>Halogens</strong> have more negative electron affinities</li>
                    <li><strong>Positive</strong> value: energy must be <strong>absorbed</strong> for energy to gain electron</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 6) {
        return (
            <ul>
                <li>Electron affinities <strong>increase</strong> across a <strong>period</strong><ul>
                    <li>Need to gain electrons to achieve full shells</li>
                </ul>
                </li>
                <li>Electron affinities <strong>decrease</strong> down a <strong>group</strong><ul>
                    <li><strong>Larger orbitals</strong>: electrons gained further from the nucleus</li>
                    <li>More electron shells: more <strong>shielding</strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 7) {
        return (
            <ul>
                <li><strong>Electronegativity</strong>: ability of an atom in a <strong>molecule</strong> to <strong>attract electrons</strong> in a <strong>covalent bond</strong><ul>
                    <li><strong>Noble gases</strong> lack electronegativity: cannot form covalent molecule</li>
                </ul>
                </li>
                <li>Increases from <strong>bottom left to top right</strong><ul>
                    <li>Down a <strong>group</strong>, bonding electrons are <strong>further</strong> from the nucleus: reduced attraction from nucleus</li>
                    <li>Across a <strong>period</strong>, nuclear <strong>charge</strong> increases: more attraction</li>
                </ul>
                </li>
                <li><strong>Fluorine</strong> is the most electronegative element</li>
            </ul>
        )
    } else if (props === 8) {
        return (
            <ul>
                <li>Melting point <strong>decreases down Group 1</strong><ul>
                    <li><strong>Atomic radius</strong> increases, number of <strong>shells</strong> increases</li>
                    <li>Less attraction between cations in metallic bonding</li>
                </ul>
                </li>
                <li>Melting point <strong>increases down Group 17</strong><ul>
                    <li>More <strong>electrons</strong>: more <strong>London dispersion forces</strong></li>
                    <li>Greater attraction between cations in metallic bonding</li>
                </ul>
                </li>
                <li>Melting point <strong>increases across a period</strong> to Group 14, then <strong>decreases</strong><ul>
                    <li><strong>Metals</strong>: more <strong>positively</strong> charged, greater sea of <strong>electrons</strong></li>
                    <li>Carbon has the highest melting point</li>
                    <li><strong>Non-metals</strong>: weakening <strong>van der Waal&#39;s</strong> forces</li>
                </ul>
                </li>
            </ul>
        )
    }
}
