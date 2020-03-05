import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: "",
    length: 0
  };

  onChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
      length: event.target.value.length
    });
  };

  deleteCharacterHandler = (characterIndex) => {
    const charArray = this.state.text.split('');
    charArray.splice(characterIndex, 1);
    this.setState({
      text: charArray.join("")
    });
  };

  render() {
    let characters = null;

    characters = <div>
      {this.state.text.split('').map((ch, index) => {
        return <CharComponent
          key={index}
          character={ch}
          click={() => this.deleteCharacterHandler(index)}
        />
      })}
    </div>

    return (
      <div className="App">
        <label>Length of Paragraph is : {this.state.length}</label>
        <input
          type='text'
          onChange={this.onChangeHandler}
          value = {this.state.text} />
        <ValidationComponent
          length={this.state.length} />
        {characters}
      </div>
    );
  };
}

export default App;
