import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props) {
        super(props); //must write
        console.log("Persons.js constructor", props);
    }

    componentWillMount() {
        console.log("Persons.js componentWillMount");
    }

    componentDidMount() {
        console.log('Persons.js componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('update Persons.js componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('update Persons.js shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate() {
        console.log('update Persons.js componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('update Persons.js componentDidUpdate');       
    }

    render() {
        console.log('Persons.js render');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        })
    }
}

export default Persons;