import React from 'react'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// Import images
import circMotion4 from "../../../images/circMotionImg/circMotion4.png"
import circMotion5 from "../../../images/circMotionImg/circMotion5.png"
import circMotion6 from "../../../images/circMotionImg/circMotion6.png"

export default function VerticalCirc(props) {
    if (props === 1) {
        return (
            <>
                <ul>
                    <li>Net force, <strong>velocity</strong> and <strong>tension</strong> force are <strong>not constant</strong><ul>
                        <li>Constant downward force of <strong>gravity</strong></li>
                        <li><strong>Top</strong>: tension + weight, <TeX math="F_{centripetal}={mv ^ 2 \over r}=T+mg"/></li>
                        <li><strong>Bottom</strong>: tension - weight, <TeX math="F_{centripetal}={mv ^ 2 \over r}=T-mg"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={circMotion4} alt="Diagram of vertical circular motion" />
            </>
        )
    } else if (props === 2) {
        return (
            <>
                <ul>
                    <li>Tension is <strong>greatest</strong> at the <strong>bottom</strong> of the circle<ul>
                        <li><TeX math="F<em>{centripetal}=T</em>{bottom}-mg={mv ^ 2 \over r}"/></li>
                        <li>String breaks when tension is <strong>less</strong> than the centripetal force</li>
                        <li><TeX math="T_{break}={mv ^ 2 \over r}+mg"/></li>
                        <li>Maximum velocity <TeX math="v<em>{max}={r \over m}\times (T</em>{break}-mg)"/></li>
                    </ul>
                    </li>
                    <li><strong>Zero</strong> tension at top: <strong>slowest</strong> speed<ul>
                        <li>Centripetal force is equal to <strong>weight</strong>: <TeX math="{mv ^ 2 \over r} = mg"/></li>
                        <li>Minimum velocity <TeX math="v_{minimum}=\sqrt{gr}"/></li>
                    </ul>
                    </li>
                    <li><strong>Conservation of energy</strong>: kinetic and potential energy at top is equal to kinetic energy at bottom<ul>
                        <li><TeX math="E_k(top)+E_p(top)=E_k(bottom)"/></li>
                        <li><TeX math="E_p=mgr"/> and <TeX math="E_k={1\over 2}mv^2"/></li>
                        <li><TeX math="2mg={mv ^ 2 \over r}"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={circMotion5} alt="Velocity in a vertical circle" />
            </>
        )
    } else if (props === 3) {
        return (
            <>
                <ul>
                    <li><strong>Top</strong> of bump: net (centripetal) force is <strong>weight minus normal force</strong><ul>
                        <li><TeX math="{mv ^ 2 \over r}=mg-N"/></li>
                    </ul>
                    </li>
                    <li><strong>Critical speed</strong>: car loses contact with bump<ul>
                        <li><strong>No normal force</strong>, so <TeX math="{mv ^ 2 \over r}=mg"/></li>
                        <li>Critical speed when weight alone provides all centripetal force: <TeX math="v=\sqrt{rg}"/></li>
                    </ul>
                    </li>
                </ul>
                <img src={circMotion6} alt="Critical speed at top of vertical circle"/>
            </>
        )
    }
}
