import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer , classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer , classes.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;