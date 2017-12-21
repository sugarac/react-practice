import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '11', name: 'Max', age: 21 },
      { id: '21', name: 'Manu', age: 22 },
      { id: '31', name: 'S', age: 28 }
    ],
    otherState: 'aaa',
    showPersons: false
  }

  swithNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON"T DO THIS: this.state.persons[0].name='Maxi';
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Manu', age: 23 },
        { name: 'S', age: 20 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person =Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
    // this.setState({
    //   persons: [
    //     { name: 'MAX', age: 21 },
    //     { name: event.target.value, age: 23 },
    //     { name: 'S', age: 20 }
    //   ]
    // })
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHanlder = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // const style = {
    //   backgroudColor: 'green',
    //   color: 'red',
    //   font: 'inherit',
    //   border: '1x solid blue',
    //   padding: '8px',
    //   cursor: 'Pointer',
    //   // ':hover': {
    //   //   backgroudColor: 'salmon',
    //   //   color: 'black'
    //   // }
    // }

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.swithNameHandler.bind(this, 'MAX!!!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
      btnClass = classes.Red;
      // style.backgroudColor = 'red';
      // style[':hover'] = {
      //   backgroudColor: 'lightred',
      //   color: 'black'
      // };
    }

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (

        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This works</p>
          <button
            className={classes.App}
            // style={style}
            onClick={this.togglePersonHanlder}>Toggle Persons
          </button>
          {persons}
        </div>

    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work ? Hi, I\'m a React App!!!'));    
  }
}

export default App;
