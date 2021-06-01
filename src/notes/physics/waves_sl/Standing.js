import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import waves18 from '../../../images/wavesSLImg/waves18.png'
import waves19 from '../../../images/wavesSLImg/waves19.png'

function Standing(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Standing wave</strong>: stationary wave pattern with fixed crests and troughs<ul>
                        <li>Formed when waves of <strong>equal frequency and amplitude</strong> moving in <strong>opposite</strong> directions meet</li>
                    </ul>
                    </li>
                    <li><strong>Node</strong>: point on wave always at rest, due to <strong>destructive interference</strong><ul>
                        <li>In between compressions and rarefactions: in between crests and troughs</li>
                    </ul>
                    </li>
                    <li><strong>Anti-node</strong>: point on wave with <strong>maximum displacement</strong>, due to constructive interference<ul>
                        <li>Compression or rarefaction</li>
                    </ul>
                    </li>
                    <li><strong>Fundamental</strong> <TeX math="(F_1)"/>: lowest frequency at which standing wave is produced<ul>
                        <li><strong>Harmonic</strong>: multiple of <TeX math="F_1"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={waves18} alt="Harmonic shapes" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Standing waves</strong><ul>
                    <li>Adjacent points vibrate at <strong>different amplitudes</strong></li>
                    <li>No energy transferred</li>
                    <li>Wavelength: <strong>twice distance</strong> between consecutive nodes</li>
                    <li><strong>All points</strong> between consecutive nodes move <strong>in phase</strong></li>
                </ul>
                </li>
                <li><strong>Traveling waves</strong><ul>
                    <li>All points have the same amplitude</li>
                    <li><strong>Transfers energy</strong></li>
                    <li>Wavelength: shortest distance between points in phase</li>
                    <li>Not all points are in phase</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>String</strong>: <TeX math="L={n \over 2}\lambda"/><ul>
                        <li>Number of loops: <TeX math="n^{th}"/> harmonic</li>
                        <li>Ends are nodes</li>
                    </ul>
                    </li>
                    <li><strong>Open pipe: <TeX math="L = {n\over 2}\lambda"/></strong><ul>
                        <li>Ends are antinodes</li>
                    </ul>
                    </li>
                    <li><strong>Pipe with one closed end: <TeX math="L={n\over 4}\lambda"/></strong><ul>
                        <li>Only <strong>odd</strong> harmonics</li>
                        <li>Node at fixed end, anti-node at open end</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves19} alt="Modes of vibration"/>
            </>
        )
    }
}

export default Standing
