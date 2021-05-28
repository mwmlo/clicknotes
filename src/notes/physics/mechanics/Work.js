import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

function Work(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Work</strong> is force times by distance, with direction<ul>
                    <li><TeX math="W=Fd\cos\theta"/></li>
                    <li>Work represents the <strong>change in energy</strong></li>
                </ul>
                </li>
                <li><strong>Direction of displacement</strong> relative to force matters<ul>
                    <li><strong>180°</strong> means <strong>work is negative</strong></li>
                    <li><strong>0°</strong> means work is <strong>positive</strong></li>
                    <li>Work is only exerted when <strong>external force</strong> acts on system and <strong>angle is not 90°</strong></li>
                </ul>
                </li>
                <li><strong>Power</strong>: rate of work done<ul>
                    <li><TeX math="P={W \over t}"/></li>
                </ul>
                </li>
            </ul>

        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Kinetic</strong> energy<strong>: <TeX math="KE={1\over 2}mv^2"/></strong></li>
                <li><strong>Gravitational potential</strong> energy<strong>: <TeX math="GPE=mgh"/></strong></li>
                <li><strong>Elastic potential</strong> energy<strong>: <TeX math="EPE={1\over 2}kx^2"/></strong><ul>
                    <li>Area under Hooke&#39;s Law graph</li>
                </ul>
                </li>
                <li>Use <strong>energy bar chart</strong>: initial, change in work, final<ul>
                    <li>Work is equal to gravitational potential energy</li>
                    <li><TeX math="GPE=Fd=mgh"/></li>
                    <li>Ignore work done by earth: earth is considered part of the system</li>
                </ul>
                </li>
            </ul>
        )
    }
}

export default Work
