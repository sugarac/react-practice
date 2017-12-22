import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Auxi from '../../../hoc/Auxi'


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
        if (this.props.positoin === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log('Person.js render');
        return (
            <Auxi>
                <p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => {this.inputElement = inp}}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxi>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);