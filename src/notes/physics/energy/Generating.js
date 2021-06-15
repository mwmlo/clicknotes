import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import energy1 from "../../../images/energyImg/energy1.png"
import energy2 from "../../../images/energyImg/energy2.png"
import energy3 from "../../../images/energyImg/energy3.png"
import energy4 from "../../../images/energyImg/energy4.png"

export default function Generating(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Fuel</strong>: substance that releases energy by changing chemical or nuclear structure<ul>
                    <li>Internal potential energy turns into thermal energy</li>
                </ul>
                </li>
                <li><strong>Specific energy</strong>: amount of energy released per unit mass <TeX math="\text{J kg}^{-1}"/></li>
                <li><strong>Energy density</strong>: amount of energy released per unit volume <TeX math="\text{J m}^{-3}"/></li>
                <li><strong>Renewable resources</strong>: rate of consumption matches rate of replenishment<ul>
                    <li>Solar power, hydroelectric power, wind power and tidal power</li>
                </ul>
                </li>
                <li><strong>Non-renewable resources</strong>: rate of consumption exceeds rate of replenishment<ul>
                    <li>Formed at slow pace: nuclear fuel, wood, fossil fuels</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Sankey diagram</strong>: visualise flow of energy as it transforms<ul>
                        <li><strong>Width</strong> of arrow proportional to quantity of energy</li>
                        <li><strong>Conservation of energy</strong> applies: width of output arrows add up to width of source arrow</li>
                    </ul>
                    </li>
                    <li>Electricity is <strong>versatile</strong>: easily converts into useful power, easy to transport, can be switched on and off</li>
                </ul>
                <img src={energy1} alt="Sankey diagram" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>Generator converts <strong>kinetic energy</strong> to electricity<ul>
                        <li>Used in turbines for power stations</li>
                    </ul>
                    </li>
                    <li>Conducting <strong>coil</strong> <strong>rotates</strong> in magnetic field<ul>
                        <li><strong>Magnetic field</strong> induces force on electrons</li>
                        <li>Movement induces current in wire</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy2} alt="AC Generator" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Fossil fuels</strong>: formed from organic remains of prehistoric plants and animals<ul>
                        <li><strong>Coal</strong>: compressed plant fossils, produces <TeX math="\text{CO}_2"/></li>
                        <li>Coal is crushed to a fine dust then combusted</li>
                    </ul>
                    </li>
                    <li><strong>Water</strong> runs through pipes in hot coal furnace<ul>
                        <li>Produces <strong>steam</strong> to turn a turbine generator</li>
                        <li>Water pipes are kept separate from furnace</li>
                        <li><strong>Condenser</strong> turns steam back into water</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy3} alt="Coal-fired power plant" />
            </>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Uranium-235</strong> undergoes <strong>nuclear fission</strong><ul>
                        <li>Uranium-235 decays into plutonium: produces thermal energy</li>
                        <li>Heats water to produce <strong>steam</strong>: turns turbine on generator</li>
                        <li><strong>Critical mass</strong>: mass of radioactive material needed to support chain reaction</li>
                    </ul>
                    </li>
                    <li>Controlled fission occurs in nuclear <strong>reactor core</strong><ul>
                        <li><strong>Fuel rods</strong>: enriched uranium or plutonium</li>
                        <li><strong>Control rods</strong>: absorb neutrons, slows fission rate</li>
                        <li><strong>Moderator</strong>: slows down neutrons, increases rate of collisions with nuclei and fission rate</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy4} alt="Nuclear reactor core" />
            </>
        )
    } else if (props === 6) {
        return (
            <ul>
                <li><strong>Environmental damage</strong> of nuclear power stations<ul>
                    <li>Radioactive waste material: contamination</li>
                    <li>Spent fuel rods must be stored safely</li>
                </ul>
                </li>
                <li>Difficult to obtain pure uranium-235<ul>
                    <li>Common <strong>uranium-238</strong> isotope does not readily undergo fission</li>
                    <li><strong>Enrichment</strong>: increase percentage of uranium-235</li>
                </ul>
                </li>
                <li>Safety precautions needed to prevent meltdown<ul>
                    <li><strong>Containment</strong>: thick concrete and steel needed to reduce effects of radiation</li>
                    <li><strong>Separated pipes</strong> in heat exchanger: prevent contamination between coolant and steam</li>
                </ul>
                </li>
            </ul>
        )
    }
}
