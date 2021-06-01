import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import waves7 from '../../../images/wavesSLImg/waves7.png'
import waves8 from '../../../images/wavesSLImg/waves8.png'
import waves9 from '../../../images/wavesSLImg/waves9.png'
import waves10 from '../../../images/wavesSLImg/waves10.png'
import waves11 from '../../../images/wavesSLImg/waves11.png'

function WaveChar(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Intensity is <strong>proportional</strong> to amplitude squared, <strong><TeX math="I \propto A^2"/></strong><ul>
                        <li><strong>Intensity</strong>: rate of <strong>energy transfer</strong> per unit <strong>area</strong> in unit <strong>time</strong> <TeX math="(Wm^{-2})"/></li>
                    </ul>
                    </li>
                    <li><strong>Inverse square law</strong>: <strong><TeX math="I={P \over 4\pi r^2}"/></strong><ul>
                        <li>Energy radiates outwards in spherical net: <strong>power</strong> is distributed over larger surface</li>
                        <li>Intensity is <strong>inversely proportional</strong> to radius squared</li>
                        <li><strong>Amplitude</strong> is inversely proportional to radius</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves7} alt="Intensity in a sphere" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Resultant displacement</strong> when waves meet is the <strong>vector sum</strong> of disturbances produced by each individual wave<ul>
                        <li><strong>Constructive interference</strong>: waves in phase magnify displacement</li>
                        <li><strong>Destructive interference</strong>: waves out of phase cancel out displacement</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves8} alt="Constructive and destructive interference" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Path difference</strong>: difference in paths traversed by two waves in terms of wavelength<ul>
                        <li><strong>In phase</strong>: path difference of <TeX math="n\lambda, \ n \in 0, 1,2,..."/>, perfectly synchronised</li>
                        <li><strong>Out of phase</strong>: 180° out of sync, path difference of <TeX math="(n+{1\over 2})\lambda, \ n \in 0, 1, 2..."/></li>
                    </ul>
                    </li>
                    <li><strong>Coherent</strong> wave sources have a constant path difference</li>
                </ul>
                <img src={waves9} alt="Phase difference" />
            </>
        )
    } else if (props === 4) {
        return (
            <ul>
                <li><strong>Polarisation</strong>: process of <strong>restricting direction of oscillation</strong> in transverse waves<ul>
                    <li><strong>Unpolarised</strong> wave: vibrates in <strong>infinite orientations</strong> perpendicular to direction of propagation</li>
                    <li><strong>Plane polarised</strong> wave: <strong>one</strong> plane of oscillation</li>
                    <li>Partial polarisation: mixture of polarised and unpolarised waves</li>
                </ul>
                </li>
                <li><strong>Polariser</strong>: device that produces plane polarised wave<ul>
                    <li>Only allows wave vibrating in one plane through material: fence analogy</li>
                    <li>Reduces intensity of original wave by <strong>half</strong></li>
                </ul>
                </li>
                <li><strong>Analyser</strong>: polariser that detects polarised wave and plane of polarisation</li>
            </ul>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li><strong>Brewster&#39;s Law</strong>: when unpolarised light is incident upon a <strong>denser</strong> medium, the <strong>reflected</strong> ray that is <strong>perpendicular</strong> to the <strong>refracted</strong> ray is <strong>polarised</strong></li>
                    <li><TeX math="\tan \theta={n_2 \over n_1}"/>, where <strong>Brewster&#39;s angle</strong> is <TeX math="\theta"/> and <TeX math="n_1, \ n_2"/> are refractive indices</li>
                    <li>Incident ray and reflected ray are perpendicular: <TeX math="\theta_i+\theta_r=90°"/></li>
                </ul>
                <img src={waves10} alt="Brewster's angle" />
            </>
        )
    } else if (props === 6) {
        return (
            <>
                <ul>
                    <li><strong>Malus&#39; Law</strong>: only some <strong>polarised</strong> light can pass through a <strong>rotated analyser</strong></li>
                    <li>Transmitted <strong>light intensity</strong>: <strong><TeX math="I=I_0 \cos^2\theta"/></strong><ul>
                        <li><TeX math="\theta"/> represents the angle between the original plane of vibration and the analyser&#39;s preferred direction</li>
                        <li>Analyser rotated <strong>90°</strong>: <strong>zero</strong> transmission</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves11} alt="Malus' Law"/>
            </>
        )
    }
}

export default WaveChar
