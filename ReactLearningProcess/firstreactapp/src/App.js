import React, { Component } from 'react';

import classes from './App.module.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id: 'dknf', name: 'Max', age: 28 },
      { id: 'adsd', name: 'Manu', age: 29 },
      { id: 'wewq', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    // DON'T DO THIS : this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
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

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1x solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let person = null;
    let btnClass = '';

    if (this.state.showPersons) {
      person = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        }
        )}
      </div>);

      btnClass = classes.Red;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>This is Root.</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
            </button>
        {person}
      </div>
    );
  }
}

export default App;
