import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import nuclearHL10 from "../../../images/nuclearHLImg/nuclearHL10.png"
import nuclearHL11 from "../../../images/nuclearHLImg/nuclearHL11.png"

export default function Tunnelling(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li><strong>Potential well barrier</strong>: prevents particles from existing outside of the nucleus<ul>
                        <li><strong>Height</strong> of potential well <TeX math="(∆V)"/>: determined by strong nuclear force</li>
                        <li>Particle oscillates as <strong>standing wave</strong> within nucleus: between potential barriers</li>
                    </ul>
                    </li>
                    <li>Outside of potential well: matter waveform <TeX math="\Psi^2"/> <strong>decreases</strong> exponentially<ul>
                        <li><strong>Probability</strong> of particle existing <TeX math="P(r)=|\Psi|^2 ∆V"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL10} alt="Potential barrier" />
            </>
        )
    } else if (props === 2) {
        return (
            <ul>
                <li><strong>Probability</strong> of particle existing outside potential well: small but <strong>not zero</strong><ul>
                    <li>Particle can tunnel outside nucleus: radioactive decay</li>
                </ul>
                </li>
                <li>Small <strong>mass</strong>, small <strong>charge</strong>: easier to tunnel outside potential well<ul>
                    <li>Beta decay is more probable than alpha decay</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>High energy electrons: wavelength with <strong>same order of magnitude</strong> as size of nucleus<ul>
                        <li><strong>Nuclear barrier</strong> acts as a single slit</li>
                    </ul>
                    </li>
                    <li>Angle for <strong>first minimum</strong>: <TeX math="\sin \theta \approx {\lambda \over D}"/><ul>
                        <li>Intensity <strong>never reaches zero</strong>: visible minimum</li>
                        <li>Intensity of diffracted beam is at a maximum when passing straight through</li>
                        <li>Confirms that particles act as a <strong>wave</strong></li>
                    </ul>
                    </li>
                    <li>Experimentally determine <strong>diameter of nucleus</strong> <TeX math="(D)"/> using wavelength and angle<ul>
                        <li>Approximate energy of electron for appropriate wavelengths is 400 MeV</li>
                    </ul>
                    </li>
                </ul>
                <img src={nuclearHL11} alt="Experimental arrangement and results"/>
            </>
        )
    }
}
