import React, {Component} from 'react';
import Frag from '../../hoc/Frag/Frag';
import classes from './Layout.css';

class Layout extends Component{
    render(){
        return(
            <Frag>
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </Frag>
        )
    }
}

export default Layout;