import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import electroSL5 from "../../../images/electroSLImg/electroSL5.png"
import electroSL6 from "../../../images/electroSLImg/electroSL6.png"

export default function Circuits(props) {
    if (props === 1) {
        return (
            <ul>
                <li>Power is energy transformed per second<ul>
                    <li><TeX math="P={W \over t}"/></li>
                    <li><TeX math="P=IV"/></li>
                    <li><TeX math="P=I^2R={V ^ 2 \over R}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li>Kirchoff&#39;s First Circuit Law: total current entering a node is equal to the total current leaving the node<ul>
                    <li><TeX math="\Sigma I = 0"/></li>
                </ul>
                </li>
                <li>Kirchoff&#39;s Second Circuit Law: total voltage around any closed loop must equal zero<ul>
                    <li><TeX math="\Sigma V = 0"/></li>
                    <li>Charges gain or lose electrical energy when they pass through a component</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>Electromotive force: energy transferred in driving a unit of charge around a complete circuit<ul>
                        <li>Total potential difference across cell when no current is flowing</li>
                        <li><TeX math="\varepsilon = {W \over q} = ∆V"/></li>
                        <li>Terminal potential difference: <TeX math="V=\varepsilon - IR"/></li>
                    </ul>
                    </li>
                    <li>Internal resistance <TeX math="(r)"/>: resistance of components within cell itself leading to power loss<ul>
                        <li>Voltage drop below e.m.f. is <TeX math="V=Ir"/></li>
                        <li>Real battery <TeX math="\varepsilon = I(R+r)"/></li>
                    </ul>
                    </li>
                    <li>Graph of voltage against current<ul>
                        <li>Electromotive force: y-intercept</li>
                        <li>Internal resistance: gradient</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroSL5} alt="Potential difference vs current" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li>Primary cells: cannot be recharged, dry cells<ul>
                    <li>Irreversible chemical reaction</li>
                    <li>Used and discarded when exhausted</li>
                </ul>
                </li>
                <li>Secondary cells: rechargeable using power adapter<ul>
                    <li>Power adapter reverses chemical reaction: work provided for redox reactions</li>
                </ul>
                </li>
                <li>Cells connected in series: increases total potential difference and electromotive force</li>
                <li>Cells connected in parallel: increases power and time</li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li>Cell capacity: ability of cell to release charge<ul>
                        <li>Measured in amp hours (AH): current x time</li>
                        <li>E.g. 125 AH supplies 10 A for 12.5 hours, or 20 A for 6.25 hours</li>
                    </ul>
                    </li>
                    <li>Discharging cells: loses p.d. quickly<ul>
                        <li>Stable and constant for most of its lifetime</li>
                        <li>Rapid decrease at start and end of discharge cycle</li>
                    </ul>
                    </li>
                </ul>
                <img src={electroSL6} alt="voltage against cell capacity"/>
            </>
        )
    }
}
