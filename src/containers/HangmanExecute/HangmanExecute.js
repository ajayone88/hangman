import React, { Component } from 'react';
import classes from './HangmanExecute.css';
import Tiles from '../../components/Tiles/Tiles';
import AlphabetCards from '../../components/AlphabetCards/AlphabetCards';
import Answer from '../../components/Answer/Answer';
import HangmanStage from '../../components/HangmanStage/HangmanStage';

class HangmanExecute extends Component {

    state = {
        alphabets: Array(11).fill('A'),
        stage: 0,
        width:115,
        answer:["_","A","_"]
    }

    stageIncreaseHandler = () =>{
        this.setState((currentState)=>{
            return {
                stage: currentState.stage + 1
            }
        });
        console.log(this.state.stage);
    }

    stageDecreaseHandler = () =>{
        this.setState((currentState)=>{
            return {
                stage: currentState.stage - 1
            }
        });
    }

    render(){
        const cards = this.state.alphabets.map((alpha, index) =>{
            return <AlphabetCards key={index} alphabet={'A'} backColor={'pink'}/>
        });

        return(
            <div className={classes.HangmanExecute}>
                 <h1>HANG MAN</h1>
                    <main className={classes.Main}>
                        <div className={classes.UpperSection}>
                            <Tiles key={'abc'} categorieName={'3 letter words'} backColor={'pink'} />
                            <HangmanStage stage={this.state.stage} />
                            <button onClick={this.stageDecreaseHandler}>Previous</button>
                            <button onClick={this.stageIncreaseHandler}>Next</button>
                            <Answer answer={this.state.answer} color={'pink'}/>
                        </div>
                        <h2>Usually powdered, a peruke was a man's one of these in the 18th century</h2>
                        <div className={classes.AlphabetCards}>
                            {cards}
                        </div> 
                    </main>
            </div>
        )
    }
}

export default HangmanExecute;