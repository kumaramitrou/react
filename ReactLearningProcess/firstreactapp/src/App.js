import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    userName: ''
  }

userNameChangeHandler = (event) => {
this.setState({userName: this.state.userName+event.target.value});
console.log(this.state);
};

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

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 26 }
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is Root.</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!')}
          changed={this.nameChangedHandler}>This is Children Message.</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <UserOutput 
        userName = {this.state.userName} 
        message='This is first Message.'>This is Message in children section.</UserOutput>
        <UserInput
        changed = {this.userNameChangeHandler}
        userName = {this.state.userName}/>
      </div>
    );
  }
}

export default App;
