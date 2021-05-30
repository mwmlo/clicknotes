import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import waves3 from '../../../images/wavesSLImg/waves3.png'
import waves4 from '../../../images/wavesSLImg/waves4.png'
import waves5 from '../../../images/wavesSLImg/waves5.png'
import waves6 from '../../../images/wavesSLImg/waves6.png'

function Travelling(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Transverse wave</strong>: direction of oscillations is <strong>perpendicular</strong> to direction of propagation<ul>
                    <li><strong>Crest</strong>: point of maximum positive displacement</li>
                    <li><strong>Trough</strong>: point of minimum displacement</li>
                </ul>
                </li>
                <li><strong>Longitudinal wave</strong>: direction of oscillations is <strong>parallel</strong> to direction of propagation<ul>
                    <li><strong>Compression</strong>: high pressure, particles are closer together</li>
                    <li><strong>Rarefaction</strong>: low pressure, particles are spread out</li>
                </ul>
                </li>
                <li>Both waves are <strong>traveling waves</strong>: continuous disturbances transfer energy</li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Wave speed</strong> <TeX math="(c)"/>: speed at which energy is carried by wave</li>
                <li><strong>Wavelength</strong> <TeX math="(\lambda)"/>: shortest distance between <strong>consecutive points in phase</strong> (moving in synchrony)</li>
                <li><TeX math="c=f\lambda"/>: wave speed is frequency times wavelength<ul>
                    <li>Derived from <TeX math="v={d \over t}"/> and <TeX math="T={1\over f}"/></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Displacement time graph</strong>: shows period and amplitude<ul>
                        <li>Maps the <strong>path of one particle</strong> as it moves in a wave pattern over time</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves3} alt="Displacement-time graph" />
                <ul>
                    <li><strong>Displacement distance graph</strong>: shows wavelength and amplitude<ul>
                        <li>Shows <strong>positions of all particles</strong> in a wave in a single instant</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves4} alt="Displacement-distance graph" />
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Electromagnetic waves</strong>: transverse waves that travel at <strong><TeX math="3 \times 10^8 \ ms^{-1}"/></strong><ul>
                        <li>Periodic oscillations of <strong>perpendicular electric and magnetic fields</strong> in space</li>
                        <li>Higher <strong>frequency</strong> waves have lower <strong>wavelengths</strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={waves5} alt="EM spectrum" />
                <ul>
                    <li><strong>Radio waves</strong>: <TeX math="\lambda = 1 \ m"/>, transmitting radio and TV signals from satellites</li>
                    <li><strong>Microwaves</strong>: <TeX math="\lambda = 10^6 \ nm"/>, heat water molecules in food</li>
                    <li><strong>Infrared rays</strong>: <TeX math="\lambda = 10^3 \ nm"/>, thermal imaging, remote controls</li>
                    <li><strong>Visible light</strong>: <TeX math="\lambda = 400 - 700 \ nm"/>, spectrum of colours, violet has the shortest wavelength as it is closest to ultraviolet light</li>
                    <li><strong>UV radiation</strong>: <TeX math="\lambda = 1 \ nm"/>, security markers and washing powders</li>
                    <li><strong>X-rays</strong>: <TeX math="\lambda = 10^{-3} \ nm"/>, medical scans</li>
                    <li><strong>Gamma rays</strong>: <TeX math="\lambda = 10^{-5} \ nm"/>, radioactive, used for radiotherapy and sterilisation</li>
                </ul>
            </>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Sound wave</strong>: mechanical, <strong>longitudinal</strong> wave<ul>
                        <li>Requires <strong>medium</strong> for transmission</li>
                    </ul>
                    </li>
                    <li><strong>Speed of sound</strong> depends on state of matter and temperature<ul>
                        <li>Measure frequency with <strong>cathode ray oscilloscope</strong>, measure wavelength using path difference or resonance tube</li>
                    </ul>
                    </li>
                    <li><strong>Loudness</strong> corresponds to amplitude, <strong>pitch</strong> corresponds to frequency<ul>
                        <li>Infrasonic &lt; <strong>20 Hz</strong> &lt; human hearing range &lt; <strong>20,000 Hz</strong> &lt; ultrasonic</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves6} alt="Cathode ray oscilloscope"/>
            </>
        )
    }
}

export default Travelling
