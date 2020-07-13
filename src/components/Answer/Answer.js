import React from 'react';
import classes from './Answer.css';


const answer = (props) =>{
    const answerEle = props.answer.map((alpha, index) =>{
        return (
            <div className={classes.Alpha} key={index} style={{
                color:props.color
            }}>{alpha}</div>
        )
    });

    return(
        <div className={classes.Answer}>{answerEle}</div>
    )
};

export default answer;