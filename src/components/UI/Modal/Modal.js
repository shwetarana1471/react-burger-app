import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {
    

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