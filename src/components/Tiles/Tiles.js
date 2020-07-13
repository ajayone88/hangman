import React from 'react';
import classes from './Tiles.css';

const tiles = (props) =>{
    return (
        <div className={classes.Tiles} style={
            {
                backgroundColor: props.backColor
            }
        }>
               {props.categorieName} 
        </div>
    )
};

export default tiles;