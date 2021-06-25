import React from 'react'
import 'katex/dist/katex.min.css';

// Import images
import circMotion7 from "../../../images/circMotionImg/circMotion7.png"

export default function DescribingFields(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Fields</strong> exist when one object <strong>exerts a force</strong> on another object at a distance<ul>
                        <li><strong>Field strength</strong>: amount of force acting on test object in a field</li>
                        <li><strong>Potential</strong>: amount of energy transferred in a field</li>
                    </ul>
                    </li>
                    <li><strong>Field lines</strong>: follow direction of movement for a test object, show shape of field<ul>
                        <li><strong>Density</strong> of field liens: proportional to field strength</li>
                    </ul>
                    </li>
                </ul>
                <img src={circMotion7} alt="Field line patterns" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Equipotential</strong> line: connects points where potential difference is <strong>constant</strong><ul>
                        <li>Moving along equipotential: <strong>no work</strong> done</li>
                        <li><strong>Perpendicular</strong> to field lines</li>
                        <li>Never cross and have no direction</li>
                    </ul>
                    </li>
                    <li><strong>Density</strong> of equipotential lines: proportional to field strength<ul>
                        <li><strong>Distance</strong> between equipotential lines <strong>increases</strong> further from the field source</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    }
}
