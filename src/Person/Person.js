import React from 'react';
import classes from './Person.css'
// import Radium from 'radium';

const person = (props) => { //function, not class
    // const style = {
    //     '@media (minWidth: 500px)': {
    //         width: '450px'
    //     }
    // }

    // const rnd = Math.random()
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong')
    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
            {/* <input type='text' value={props.name}/>    cannot type         */}
        </div>
    )
};

export default person;