import React, { Component } from 'react';
import classes from './HangmanCategories.css'; 
import Searchbox from '../../components/Searchbox/Searchbox';
import Tiles from '../../components/Tiles/Tiles';

class HangmanCategories extends Component{

        state = {
            categories:[
                {
                    name:'3 letter words',
                    color:'pink'
                },
                {
                    name:'Telivision',
                    color:'gold'
                },
                {
                    name:'Sports',
                    color:'lightgreen'
                },
                {
                    name:"Food",
                    color:'lightblue'   
                },
                {
                    name:"3 letter words",
                    color:'purple'   
                },
                {
                    name:"3 letter words",
                    color:'silver'   
                },
                {
                    name:"3 letter words",
                    color:'green'   
                },
                {
                    name:"3 letter words",
                    color:'red'   
                }
            ]
        }

        render(){
            const tiles = this.state.categories.map((catItem, index)  =>{
                return (
                    <Tiles key={index} categorieName={catItem.name} backColor={catItem.color} />
                )
            });
            return(
                <div className={classes.HangmanCategories}>
                    <h1>HANG MAN</h1>
                    <main className={classes.Main}>
                        <Searchbox />
                        <h2>Categories</h2>
                        <div className={classes.BoxContainer}>
                            {tiles}
                        </div>
                    </main>
                </div>
            )
        }
}

export default HangmanCategories