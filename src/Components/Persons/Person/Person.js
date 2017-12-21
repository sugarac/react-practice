import React, { Component } from 'react';
import classes from './Person.css'
// import Radium from 'radium';

class Person extends Component {
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
                {/* <input type='text' value={this.props.name}/>    cannot type         */}
            </div>
        )
    }
}

export default Person;