import React from 'react'
import 'katex/dist/katex.min.css';

// Import images
import fields1 from "../../../images/fieldsImg/fields1.png"
import fields2 from "../../../images/fieldsImg/fields2.png"
import fields3 from "../../../images/fieldsImg/fields3.png"
import fields4 from "../../../images/fieldsImg/fields4.png"
import fields5 from "../../../images/fieldsImg/fields5.png"
import fields6 from "../../../images/fieldsImg/fields6.png"

export default function GraphFields(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Equally spaced</strong> field lines: slight bending at edges</li>
                    <li><strong>Potential</strong> increases as <strong>distance</strong> from zero increases<ul>
                        <li>Equally spaced equipotentials: <strong>constant field strength</strong></li>
                        <li>Field strength is potential over distance: two variables must change <strong>proportionally</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={fields1} alt="Graphs of field quantities" />
                <ul>
                    <li><strong>Constant force</strong> throughout plates<ul>
                        <li>Proportional to constant field strength</li>
                        <li><strong>Area</strong> under <strong>force-distance</strong> graph: <strong>work</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={fields2} alt="Force, distance and work" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Distance</strong> and <strong>force</strong>: <strong>inverse square</strong> relation<ul>
                        <li>Area under distance-force graph: <strong>work</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={fields3} alt="Electric force vs distance" />
                <ul>
                    <li><strong>Distance</strong> is <strong>inversely proportional</strong> to <strong>potential</strong><ul>
                        <li><strong>Derivative</strong> of distance-potential graph: <strong>field strength</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={fields4} alt="Electric potential vs distance" />
                <ul>
                    <li><strong>Distance</strong> and <strong>field strength</strong>: <strong>inverse square</strong> relation<ul>
                        <li><strong>Area</strong> under distance-strength curve: <strong>potential</strong></li>
                        <li>Potential: force per unit charge, times by distance</li>
                    </ul>
                    </li>
                </ul>
                <img src={fields5} alt="Electric field strength vs distance" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Surplus</strong> charges reside on <strong>outside</strong> of sphere: distributed evenly apart</li>
                    <li><strong>Forces</strong> from charges <strong>cancel out</strong> inside sphere<ul>
                        <li><strong>No</strong> net <strong>force</strong>, zero <strong>electric field strength</strong></li>
                        <li><strong>Constant</strong> electric field <strong>potential</strong>: equal to potential at surface of square</li>
                        <li><strong>Zero potential difference</strong>: no <strong>work</strong> done inside</li>
                    </ul>
                    </li>
                </ul>
                <img src={fields6} alt="Electric strength and potential inside a hollow sphere"/>
            </>
        )
    }
}
