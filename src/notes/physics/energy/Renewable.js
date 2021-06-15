import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import energy5 from "../../../images/energyImg/energy5.png"
import energy6 from "../../../images/energyImg/energy6.png"
import energy7 from "../../../images/energyImg/energy7.png"
import energy8 from "../../../images/energyImg/energy8.png"

export default function Renewable(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Solar cells</strong>: convert solar radiation into <strong>electrical energy</strong><ul>
                    <li>Semiconductors absorb photons and release electrons</li>
                </ul>
                </li>
                <li><strong>Solar water heating</strong>: convert solar radiation into <strong>thermal energy</strong><ul>
                    <li>Sunlight absorbed by black metal plate: heats water</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Wind power</strong>: converts <strong>kinetic energy</strong> from air into electrical energy by turning a propellor<ul>
                        <li>Comes from solar power: sun heats Earth unevenly which causes air to move as wind</li>
                    </ul>
                    </li>
                    <li><strong>Advantages</strong>: free wind, no waste, land beneath is usable</li>
                    <li><strong>Disadvantages</strong>: unpredictable wind, noise pollution, expensive land</li>
                    <li>Calculating wind energy: <TeX math="P={1\over 2}A\rho v^3"/><ul>
                        <li><strong>Assume no friction</strong>: kinetic energy of wind is totally transferred to turbine</li>
                        <li>$A$ is cross-sectional area, $\rho$ is air density, $v$ is wind speed</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy5} alt="Wind turbine diagram" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Hydroelectric dam</strong>: convert <strong>gravitational potential energy</strong> to kinetic energy and electrical energy<ul>
                        <li>Channel water through turbines</li>
                        <li>Use height and mass of water to calculate power</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy6} alt="Hydroelectric power diagram" />
                <ul>
                    <li><strong>Advantages</strong>: produces large amounts of energy, reliable, water stored to increase power fast<ul>
                        <li><strong>Pump storage reservoirs</strong>: store and release energy quickly to meet sudden surges in demand</li>
                    </ul>
                    </li>
                    <li><strong>Disadvantages</strong>: expensive to build, environmental impact, flooding</li>
                </ul>
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Tidal power</strong>: converts kinetic energy to electrical energy using tidal waves<ul>
                        <li>Tides flowing in and out across a <strong>barrage</strong>: turns turbines</li>
                        <li><strong>Advantages</strong>: no greenhouse gases, no fuel, predictable, easy to maintain</li>
                        <li><strong>Disadvantages</strong>: expensive to build, only generates when tides move</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy7} alt="Tidal power generator"/>
                <ul>
                    <li><strong>Wave power</strong>: convert kinetic energy to electrical energy using oscillating water columns<ul>
                        <li><strong>Oscillating water column</strong>: half-full of water and air with turbine at centre</li>
                        <li>Water pushes up column: <strong>compressed air</strong> turns turbine</li>
                        <li><strong>Advantages</strong>: free energy, no fuel, inexpensive to operate and maintain</li>
                        <li><strong>Disadvantages</strong>: depends on waves, needs suitable site, rough weather</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy8} alt="Oscillating water column"/>
            </>
        )
    }
}
