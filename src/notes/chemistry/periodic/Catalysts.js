import React from 'react'
import 'katex/dist/katex.min.css';

// Import images
import period10 from "../../../images/periodImg/period10.png"
import period11 from "../../../images/periodImg/period11.png"

export default function Catalysts(props) {
    if (props === 1) {
        return (
            <ul>
                <li>Every <strong>spinning electron</strong> behaves as a <strong>magnet</strong><ul>
                    <li><strong>Opposite spins</strong> in paired electrons: opposing orientations, no net magnetic effect</li>
                </ul>
                </li>
                <li>Applying a magnetic field <strong>aligns electrons</strong><ul>
                    <li><strong>Domain</strong>: unpaired electrons align with parallel spins</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Diamagnetic</strong>: weak opposition to applied magnetic field<ul>
                    <li>Property of all materials: no unpaired electrons</li>
                </ul>
                </li>
                <li><strong>Paramagnetic</strong>: only materials with <strong>unpaired electrons</strong><ul>
                    <li>Magnetism proportional to applied magnetic field</li>
                    <li>Increases with <strong>number of unpaired electrons</strong>: increases across period to chromium</li>
                </ul>
                </li>
                <li><strong>Ferromagnetism</strong>: <strong>iron, cobalt, nickel</strong><ul>
                    <li>Many unpaired electrons: largest magnetic effect</li>
                    <li>Magnetism <strong>remains</strong> after external field is removed: domains remain aligned</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>Transition metals have <strong>incomplete d-orbitals</strong><ul>
                        <li>All 3d orbitals are initially <strong>degenerate</strong>: same energy</li>
                    </ul>
                    </li>
                    <li><strong>Ligands</strong> in complex compounds split d-orbitals into two different <strong>energy levels</strong><ul>
                        <li>Repulsion of electrons and electric field</li>
                    </ul>
                    </li>
                    <li><strong>d-d transition</strong>: <strong>unpaired</strong> electrons <strong>jump</strong> from lower energy level to higher energy level<ul>
                        <li><strong>Absorb</strong> light energy: reflects <strong>complementary</strong> wavelengths</li>
                        <li>Na+ appears <strong>colourless</strong>: transition absorbs UV</li>
                    </ul>
                    </li>
                </ul>
                <img src={period10} alt="Split d-orbitals" />
                <img src={period11} alt="Colour wheel" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li>Difference in <strong>energy levels</strong> affects the <strong>wavelength</strong> of light absorbed</li>
                <li><strong>Nuclear charge</strong> and size of metal: more energy</li>
                <li><strong>Charge density</strong>: higher charger density increases electron repulsion, larger split in orbitals</li>
                <li><strong>Geometry</strong> of complex ion: electric field</li>
                <li><strong>Oxidation state</strong>: higher oxidation state, greater split</li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <ul>
                <li><strong>Catalyst</strong>: alters rate of chemical reaction<ul>
                    <li>Provides <strong>alternative reaction pathway</strong></li>
                    <li>Lowers activation energy</li>
                </ul>
                </li>
                <li><strong>Heterogenous</strong> catalyst: <strong>different state</strong> of matter as reactants<ul>
                    <li>3d and 4s electrons form weak bonds with reactants: <strong>orients</strong> reactants for collisions</li>
                    <li>Nickel in hydrogenation, iron in the Haber process</li>
                </ul>
                </li>
                <li><strong>Homogenous</strong> catalyst: <strong>same state</strong> of matter as reactants<ul>
                    <li><strong>Variable oxidation states</strong>: changing charges allow products to detach easily and increases efficiency</li>
                </ul>
                </li>
            </ul>
        )
    }
}
