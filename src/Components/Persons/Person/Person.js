import React, { Component } from 'react';
import classes from './Person.css'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
    constructor(props) {
        super(props); //must write
        console.log("Person.js constructor", props);
    }

    componentWillMount() {
        console.log("Person.js componentWillMount");
    }

    componentDidMount() {
        console.log('Person.js componentDidMount');
    }

    render() {
        console.log('Person.js render');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
                {/* <input type='text' value={this.props.name}/>    cannot type         */}
            </WithClass>
        )
    }
}

export default Person;