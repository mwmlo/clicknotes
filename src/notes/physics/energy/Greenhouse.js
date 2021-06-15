import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import energy10 from "../../../images/energyImg/energy10.png"
import energy11 from "../../../images/energyImg/energy11.png"

export default function Greenhouse(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Solar constant</strong> <TeX math="S=1.36 \times 10^3 \text{Wm}^{-2}"/><ul>
                    <li>Total power received from the Sun at the Earth&#39;s mean distance from the Sun per unit area</li>
                    <li>Represents <strong>intensity</strong> of solar radiation</li>
                </ul>
                </li>
                <li><strong>Albedo</strong>: ratio of reflected to received solar radiation<ul>
                    <li>Earth&#39;s mean albedo is 0.3: 30% <strong>reflected</strong></li>
                    <li>Ice and snow have high albedos</li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Greenhouse effect</strong>: warming of planet due to atmosphere allowing in solar radiation but trapping re-emitted infrared radiation<ul>
                        <li><strong>Short wavelength</strong> radiation: absorbed by Earth</li>
                        <li>Earth emits infrared of longer wavelength: absorbed and <strong>reradiated</strong> by greenhouse gases</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy10} alt="Greenhouse effect" />
                <ul>
                    <li><strong>Global warming</strong>: gradual increase in overall temperature of Earth&#39;s atmosphere due to greenhouse effect<ul>
                        <li><strong>Enhanced greenhouse effect</strong>: increase in greenhouse effect caused by human activities</li>
                    </ul>
                    </li>
                    <li><strong>Positive feedback</strong> loop<ul>
                        <li><strong>Melting ice and snow</strong> reduces reflection: absorbed heat exacerbates melting</li>
                        <li>Carbon dioxide is less soluble in <strong>warm water</strong>: more greenhouse gases continue warming</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li>Molecules absorb <strong>light energy</strong><ul>
                        <li>Photons excite electrons: internal kinetic energy increases and atom vibrates</li>
                        <li><strong>Resonance wavelength</strong>: specific wavelengths intensify molecular vibrations</li>
                    </ul>
                    </li>
                    <li>Greenhouse gas molecules readily <strong>absorb</strong> <strong>infrared radiation</strong> at resonance frequencies<ul>
                        <li>Absorption spectra: shows high absorption rates</li>
                        <li><strong>Ozone</strong> absorbs UV light readily</li>
                        <li><strong>Carbon dioxide</strong> and <strong>water</strong> absorb visible light</li>
                    </ul>
                    </li>
                </ul>
                <img src={energy11} alt="Absorption and wavelength of gases" />
            </>
        )
    } else if (props === 4) {
        return (
            <ol>
                <li>Determine the <strong>power incident</strong> on Earth.<ul>
                    <li>Use solar constant (<strong>intensity</strong>) and area</li>
                    <li>Calculate Earth&#39;s surface area as <strong>cross-sectional disc</strong> <TeX math="(\pi r^2)"/></li>
                </ul>
                </li>
                <li>Calculate <strong>power emitted</strong> by Earth.<ul>
                    <li>Multiply <strong>albedo</strong> to find power absorbed by Earth.</li>
                    <li>Assume Earth is a <strong>black body</strong>: perfect emissivity, so power absorbed is power emitted</li>
                </ul>
                </li>
                <li>Use <strong>Stefan-Boltzmann&#39;s law</strong> to determine temperature.<ul>
                    <li>Relate power to <TeX math="\sigma AT^4"/> and rearrange</li>
                </ul>
                </li>
            </ol>
        )
    }
}
