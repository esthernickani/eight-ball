import React, { useState } from "react";
import './EightBall.css'

const EightBall = ({answers}) => {
    const randIdx = Math.floor(Math.random() * answers.length)
    const genMessage = () => {
        return answers[randIdx]
    }
    const [message, setMessage] = useState({
        msg: "Think of a question",
        color: "Black"
    })

    console.log(randIdx)
    console.log(answers[randIdx])

    return (
        <div className="EightBall" onClick={() => setMessage(genMessage)}>
            <p className="EightBall-message" style={{backgroundColor: message.color}}>{message.msg}</p>
        </div>
    )
}

export default EightBall;