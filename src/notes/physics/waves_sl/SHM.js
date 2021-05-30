import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import waves1 from '../../../images/wavesSLImg/waves1.png'
import waves2 from '../../../images/wavesSLImg/waves2.png'

function SHM(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Oscillation</strong>: moves to and fro about mean position in periodic cycles</li>
                <li><strong>Period</strong> <TeX math="(T)"/>: time taken for one complete oscillation</li>
                <li><strong>Frequency</strong> <TeX math="(f)"/>: number of oscillations per unit time, or number of wavelengths passing given point per second (Hz)</li>
                <li><TeX math="T={1 \over f}"/>: period and frequency are inversely related</li>
                <li><strong>Displacement</strong> <TeX math="(x)"/>: distance from equilibrium position in a specific direction</li>
                <li><strong>Amplitude</strong>: maximum displacement of a wave</li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <p>Acceleration is proportional to displacement in the opposite direction</p>
        )
    } else if (props === 3) {
        return (
            <>
                <p>Starting point of graph: generally start at maximum displacement, but this may change</p>
                <img src={waves1} alt="SHM motion graphs" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Equilibrium position</strong>: maximum velocity, maximum kinetic energy, no potential energy</li>
                    <li><strong>Maximum displacement</strong>: maximum acceleration, maximum potential energy, no kinetic energy</li>
                    <li><strong>Total energy</strong> is constant: <TeX math="E_T={1\over 2}mv^2+{1\over 2}kx^2"/></li>
                </ul>
                <img src={waves2} alt="SHM energy graphs"/>
            </>
        )
    }
}

export default SHM
