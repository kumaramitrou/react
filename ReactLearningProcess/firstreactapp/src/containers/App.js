import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    
  }

  state = {
    persons: [
      { id: 'dknf', name: 'Max', age: 28 },
      { id: 'adsd', name: 'Manu', age: 29 },
      { id: 'wewq', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps.');
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount.');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
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
console.log("comes..");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
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
    let person = null;

    if (this.state.showPersons) {
      person = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        toggle={this.togglePersonsHandler} />
        {person}
      </div>
    );
  }
}

export default App;
