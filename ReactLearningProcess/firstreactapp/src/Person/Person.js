import React from 'react';

const person = (props) => {
return (
    <div>
        <p onClick={props.click}>I'm a person name {props.name} and age {props.age}!. Random number {Math.random()}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value = {props.name}></input>
    </div>
)
}

export default person;