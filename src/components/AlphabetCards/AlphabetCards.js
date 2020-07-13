import React from 'react';
import classes from './AlphabetCards.css';
const alphabetCards = (props) =>{
    	return (
            <div className={classes.AlphabetCards}
                style={{
                    backgroundColor:props.backColor
                }}>
                {props.alphabet}
            </div>
        )
};

export default alphabetCards;