import React from 'react'
import ToggleCard from './ToggleCard';
import "./notes.module.css"

function Accordion(props) {
    let questionAnswerArray = props.questionAnswer;
    let topic = props.topic;
    return (
        <div id="accordion">
            {questionAnswerArray.map(function (questionAnswer, index) {
                let question = questionAnswer[0]
                let answer = questionAnswer[1]
                return <ToggleCard question={question} answer={answer} index={index} topic={topic} />
            })}
        </div>
    )
}

export default Accordion
