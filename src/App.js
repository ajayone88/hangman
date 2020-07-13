import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import HangmanCategories from './containers/HangmanCategories/HangmanCategories';
import HangmanExecute from './containers/HangmanExecute/HangmanExecute';
class App extends Component{
    render(){
        return (
            <Layout>
                <HangmanCategories />
                <HangmanExecute />
            </Layout>
        )
    }
}

export default App;