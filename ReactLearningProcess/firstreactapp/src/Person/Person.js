import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {

    const personStyle = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };

return (
    <div className = "Person" style={personStyle}>
        <p onClick={props.click}>I'm a person name {props.name} and age {props.age}!. Random number {Math.random()}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value = {props.name}></input>
    </div>
)
}

export default Radium(person);