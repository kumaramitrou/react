import React, {Component} from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: "supermax"
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username:event.target.value
    });
  }

  render() {
    return (
    <div className="App">
      <UserInput 
      changed={this.usernameChangedHandler}
      currentName={this.state.username}></UserInput>
      <UserOutput userName={this.state.username}></UserOutput>
      <UserOutput userName={this.state.username}></UserOutput>
      <UserOutput userName='Ranu'></UserOutput>
    </div>
  );
  };
}

export default App;
