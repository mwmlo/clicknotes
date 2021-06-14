import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import circMotion1 from "../../../images/circMotionImg/circMotion1.png"
import circMotion2 from "../../../images/circMotionImg/circMotion2.png"
import circMotion3 from "../../../images/circMotionImg/circMotion3.png"

export default function UniformCirc(props) {
    if (props === 1) {
        return (
            <ul>
                <li><strong>Period</strong>: time to complete one rotation (seconds)<ul>
                    <li>One full rotation: <TeX math="2\pi"/> radians (360°)</li>
                </ul>
                </li>
                <li><strong>Frequency</strong>: number of rotations per second (Hertz)</li>
                <li><strong>Uniform circular motion</strong>: always accelerating<ul>
                    <li>Changing <strong>velocity</strong>, constant <strong>speed</strong></li>
                    <li>Centripetal acceleration towards <strong>centre</strong></li>
                </ul>
                </li>
                <li><strong>Angular velocity</strong>: angle turned per second<ul>
                    <li><TeX math="w={\theta \over t}"/></li>
                    <li>Constant velocity (distance over time): <TeX math="v={2\pi r \over T}"/></li>
                </ul>
                </li>
                <li><strong>Centripetal acceleration: <TeX math="a={v ^ 2 \over r}"/></strong><ul>
                    <li>Derived from <TeX math="a=-w^2r"/>, <TeX math="w={2\pi \over T}"/> and <TeX math="v={2\pi r \over T}"/></li>
                </ul>
                </li>
                <li><strong>Centripetal force</strong>: <strong>net</strong> force exerted on a system when it moves in a circle<ul>
                    <li>Causes object to accelerate inwards</li>
                    <li>Acts <strong>perpendicular</strong> to object&#39;s velocity</li>
                    <li>Released objects move at a <strong>tangent</strong> to circle without centripetal force</li>
                    <li><strong>Centripetal force: <TeX math="F={mv ^ 2 \over r}"/></strong></li>
                </ul>
                </li>
            </ul>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li><strong>Conical pendulum</strong>: horizontal component of <strong>tension</strong> provides centripetal force</li>
                </ul>
                <img src={circMotion1} alt="Conical pendulum diagram"/>
                <ul>
                    <li><strong>Curved</strong> roads: <strong>friction</strong> provides centripetal force<ul>
                        <li>Car does not skid when <TeX math="F<em>{centripetal}&lt;F</em>{friction}"/>, i.e. when <strong><TeX math="{mv ^ 2 \over r} &lt; \mu mg"/></strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={circMotion2} alt="Circling car"/>
                <ul>
                    <li><strong>Banked road without friction</strong>: horizontal component of normal reaction force provides centripetal force<ul>
                        <li><strong>Vertical</strong> component of normal force equal to weight: <TeX math="N\cos \theta =mg"/></li>
                        <li><strong>Horizontal</strong> component of normal force <TeX math="F_{centripetal} = N\sin \theta"/></li>
                        <li>Rearrange: <TeX math="F_{centripetal}={mg \over \cos \theta}\times \sin \theta=mg\tan \theta={mv ^ 2 \over r}"/></li>
                        <li><strong>Critical velocity <TeX math="v=\sqrt{rg\tan \theta}"/></strong></li>
                    </ul>
                    </li>
                </ul>
                <img src={circMotion3} alt="Diagram of banked road"/>
                <ul>
                    <li><strong>Banked curve with friction</strong><ul>
                        <li><strong>Required</strong> centripetal force: depends on speed</li>
                        <li><strong>Available</strong> centripetal force: fixed to mass and bank angle, <TeX math="mg \tan \theta"/></li>
                        <li>If <strong>speed &lt; ideal speed</strong>: horizontal component of normal is greater than required force, car slides <strong>down</strong> bank, opposed by friction</li>
                    </ul>
                    </li>
                </ul>
            </>
        )
    }
}
