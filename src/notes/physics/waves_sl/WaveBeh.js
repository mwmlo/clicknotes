import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import waves12 from '../../../images/wavesSLImg/waves12.png'
import waves13 from '../../../images/wavesSLImg/waves13.png'
import waves14 from '../../../images/wavesSLImg/waves14.png'
import waves15 from '../../../images/wavesSLImg/waves15.png'
import waves16 from '../../../images/wavesSLImg/waves16.png'
import waves17 from '../../../images/wavesSLImg/waves17.png'

function WaveBeh(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Reflection</strong>: wave meets boundary between media and bounces back<ul>
                    <li><strong>Angle of incidence</strong> is equal to the <strong>angle of reflection</strong>, measured from the normal</li>
                </ul>
                </li>
                <li>Reflection from a <strong>fixed end</strong> is inverted: <strong>180° phase change</strong><ul>
                    <li>Reflection from a <strong>free end</strong> does not undergo phase change</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Refraction</strong>: waves <strong>change direction</strong> due to <strong>changes in wave speed</strong> in different media<ul>
                        <li>Waves <strong>slow down</strong> in <strong>denser</strong> mediums, e.g. shallow water: <strong>wavelength decreases</strong> and refracts towards normal</li>
                    </ul>
                    </li>
                    <li><strong>Refractive index</strong> describes how fast light travels through a material: <strong><TeX math="n={c \over v}"/></strong><ul>
                        <li>Speed of light in air divided by speed of light in medium</li>
                        <li><strong>Snell&#39;s Law</strong>: <TeX math="n={\sin \theta_1 \over \sin \theta_2}"/> or <TeX math="n_1 \sin \theta_1 = n_2 \sin \theta_2"/></li>
                    </ul>
                    </li>
                    <li>Ratio of refractive indices = ratio of speeds in media = ratio of <TeX math="\sin \theta"/>s</li>
                </ul>
                <img src={waves12} alt="Snell's Law" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Dispersion</strong>: spreading out of white light into <strong>component colours</strong> through a <strong>prism</strong></li>
                </ul>
                <img src={waves13} alt="Dispersion" />
                <ul>
                    <li><strong>Total internal reflection</strong>: complete reflection of light ray back into original medium<ul>
                        <li>Light is trapped in an <strong>optically denser medium</strong>: surrounded by less dense medium</li>
                        <li>Angle of incidence is <strong>greater than critical angle</strong>: angle of incidence where <strong>angle of refraction is 90°</strong></li>
                        <li><TeX math="\sin \theta_c = {1\over n}"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={waves14} alt="Critical angle" />
                <ul>
                    <li><strong>Uses</strong> of total internal reflection<ul>
                        <li><strong>Fibre optics</strong>: long distance communication</li>
                        <li><strong>Endoscopes</strong>: viewing internal organs</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 4) {
        return (
            <>
                <ul>
                    <li><strong>Diffraction</strong>: bending of a wave as it passes around edge of barrier or through gap<ul>
                        <li>Constant frequency, wavelength and speed</li>
                        <li><strong>Amplitude decreases</strong>: energy distributed out over larger area</li>
                    </ul>
                    </li>
                    <li>Most obvious when <strong>aperture width</strong> is <strong>equal</strong> to <strong>wavelength</strong><ul>
                        <li>Diffraction decreases: <strong>wavelength</strong> decreases, <strong>gap</strong> widens (<strong>DWDGW</strong>)</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves15} alt="Diffraction and slit width" />
            </>
        )
    } else if (props === 5) {
        return (
            <>
                <ul>
                    <li>Slit width must be <strong>equal</strong> to wavelength</li>
                    <li><strong>Huygens-Fresnel principle</strong>: every point on wavefront is a source of <strong>wavelets</strong><ul>
                        <li>Constructive interference of wavelets creates <strong>central maxima</strong></li>
                        <li><strong>Destructive interference</strong>: dark regions, out of phase, minima</li>
                    </ul>
                    </li>
                    <li><strong>Central minimum</strong> <TeX math="I_0"/> has <strong>twice</strong> the angular width of the secondary maxima</li>
                    <li><strong>Intensity decreases</strong> with angular width<ul>
                        <li><TeX math="I_1=0.05I_0"/></li>
                        <li><TeX math="I_2=0.02I_0"/></li>
                        <li><TeX math="I_3=0.01I_0"/></li>
                    </ul>
                    <img src={waves16} alt="Single slit diagram"/>
                    </li>
                    <li><strong>Minima</strong> position for single slit diffraction: <TeX math="d\sin\theta = n\lambda"/><ul>
                        <li><TeX math="d"/> represents distance between two sources of wavelets, i.e. <strong>width of slit</strong></li>
                        <li>Using small angle approximation, <TeX math="\theta = {S \over D}"/></li>
                        <li>Substitute the value of the angle between <TeX math="d"/> and path difference <TeX math="n\lambda"/></li>
                    </ul>
                    </li>
                    <li>For <strong>first minima</strong>, <TeX math="S={ \lambda D\over d}"/><ul>
                        <li><TeX math="S"/> represents <strong>separation</strong> between minima and central maximum</li>
                        <li><TeX math="D"/> represents <strong>distance</strong> between slit and wall</li>
                        <li>Due to small angle approximation, <TeX math="d({S\over D}) = \lambda"/></li>
                    </ul>
                    </li>
                    <li><strong>Angle increases</strong>: <strong>intensity</strong> of maxima <strong>decreases</strong>, further away from source</li>
                    <li><strong>Shorter wavelength</strong> of light: less diffraction, less spread out, <strong>narrower</strong> pattern</li>
                    <li><strong>White light</strong> disperses through a single slit with decreasing intensity<ul>
                        <li><strong>Blue</strong> has a lower wavelength: closer to <strong>central</strong> position</li>
                    </ul>
                    </li>
                </ul>
                <img src={waves17} alt="Single slit white light diffraction"/>
            </>
        )
    }
}

export default WaveBeh
