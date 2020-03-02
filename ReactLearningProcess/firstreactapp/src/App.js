import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{

  state = {
    persons: [
      { name: 'Max', age:28 },
      { name: 'Manu', age:29 },
      { name: 'Stephanie', age:26 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    // DON'T DO THIS : this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: newName, age:28 },
        { name: 'Manu', age:29 },
        { name: 'Stephanie', age:27 }
      ]
    })
  }

  nameChangedHandler =(event) => {
    this.setState(
      {
        persons: [
          { name: 'Max', age:28 },
          { name: event.target.value, age:29 },
          { name: 'Stephanie', age:26 }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
      <h1>This is Root.</h1>
      <button onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button>
      <Person 
      name = {this.state.persons[0].name} 
      age = {this.state.persons[0].age}
      />
      <Person 
      name = {this.state.persons[1].name} 
      age= {this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this, 'Max!!')}
      changed = {this.nameChangedHandler}>This is Children Message.</Person>
      <Person 
      name = {this.state.persons[2].name} 
      age = {this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;
