import React from 'react';
import classes from './Searchbox.css';
const searchbox = (props) =>{
    return (
        <div className={classes.Searchbox}>
            <input type="text" placeholder={'Search'}></input>
        </div>
    )
}

export default searchbox;