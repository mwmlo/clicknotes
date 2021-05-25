import React from 'react'
import ToggleCard from './ToggleCard';
import "./notes.module.css"

// Input: array of questions and answers for a topic
// Example input: [["Define the quantities of motion", Motion(1)], [...], ...]
// Returns an accordion of toggle cards
function Accordion(props) {

    let questionAnswerArray = props.questionAnswer;
    let topic = props.topic;
    
    return (
        <div id="accordion">
            {questionAnswerArray.map(function(questionAnswer, index){
                let question = questionAnswer[0]
                let answer = questionAnswer[1]
                // console.log("Card number ", index, ", Q&A: ", question, answer)
                return <ToggleCard question={question} answer={answer} index={index} topic={topic}/>
            })}
        </div>
    )
}

export default Accordion
