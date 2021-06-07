import React from 'react'
import { Button } from 'reactstrap'
import * as notesCSS from "./notes.module.css"

function ToggleCard(props) {
    let question = props.question;
    let answer = props.answer;
    let index = props.index;
    let topic = props.topic;

    const cardHeaderID = `heading${topic}${index}`
    const cardHeaderDataTarget = `#collapse${topic}${index}`
    const cardHeaderAriaControls = `collapse${topic}${index}`

    return (
        <div className={notesCSS.card} style={{border:"none"}}>
            <div id={cardHeaderID}>
                <Button block outline color="default" type="button" data-toggle="collapse" data-target={cardHeaderDataTarget} aria-expanded="false" aria-controls={cardHeaderAriaControls}>
                    {question}
                </Button>
            </div>

            <div id={cardHeaderAriaControls} className="collapse" aria-labelledby={cardHeaderID} data-parent="#accordion">
                <div className="card-body">
                    {answer}
                </div>
            </div>
        </div>

    )
}

export default ToggleCard
