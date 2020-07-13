import React, { useRef, useEffect, useState} from 'react';
import classes from './HangmanStage.css';
const hangmanStage = (props) =>{
    const ref = useRef(null);
    const [currentPositionState, setPositionState] = useState({
        position: { backgroundPosition: '0px 0px' }
    })
    useEffect(() => {
        setPositionState({
            position:{ 
                backgroundPosition: `-${(props.stage * ref.current.offsetWidth) + (props.stage * 4.2)}px 0px`
            }
        });
    },[ref.current, props.stage]);

    return (
        <div className={classes.HangmanStage}>
            <div ref={ref} className={classes.ImageBox}>
                <div className={classes.CropedImage} style={currentPositionState.position}></div>
            </div>
        </div>
    )
};

export default hangmanStage;


/*<div className={classes.HangmanStage}>
    <div className={classes.UpperPart}>
        <div className={classes.Man}>
            <div className={classes.Head}>
                <div className={classes.InnerHead}></div>
            </div>
            <div className={classes.Hands}>
                <div className={classes.LeftHand}></div>
                <div className={classes.Stomach}></div>
                <div className={classes.RightHand}></div>
            </div>
            <div className={classes.Legs}>
                <div className={classes.LeftLeg}></div>
                <div className={classes.RightLeg}></div>
            </div>
        </div>
        <div className={classes.StandAndRope}>
            <div className={classes.Part1}></div>
            <div className={classes.Part2}></div>
            <div className={classes.Part3}></div>
        </div> 
    </div>
    <div className={classes.LowerPart}></div>
</div>*/