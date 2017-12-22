import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

<<<<<<< HEAD
class App extends PureComponent {
=======
class App extends Component {
>>>>>>> 45c6efaf4c35aeeda6ab7d28d92d2113a1ddbaf7
  constructor(props) {
    super(props); //must write
    console.log("[App.js] constructor", props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log("[App.js] componentWillMount");
<<<<<<< HEAD
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('update App.js shouldComponentUpdate', nextProps, nextState);
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate() {
    console.log('update App.js componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('update App.js componentDidUpdate');
=======
>>>>>>> 45c6efaf4c35aeeda6ab7d28d92d2113a1ddbaf7
  }
  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

<<<<<<< HEAD
=======
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

>>>>>>> 45c6efaf4c35aeeda6ab7d28d92d2113a1ddbaf7
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title} //this.props demo
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
