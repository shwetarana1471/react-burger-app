import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../BackDrop/BackDrop';

//UNSAFE_componentWillUpdate instead of componentWillUpdate for react 17 and greater version
class Modal extends Component {
    shouldComponentUpdate(nextProps , nextState) {
        return nextProps.show !== this.props.show;
    }

    UNSAFE_componentWillUpdate  () {
        console.log('[Modal] will Update');
    }

    render () {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                className={classes.Modal}
                style={{transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                opacity:this.props.show ? '1' : '0' }} >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
    
}

export default Modal;