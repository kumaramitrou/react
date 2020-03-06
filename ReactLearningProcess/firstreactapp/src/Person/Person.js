import React from 'react';

import classes from './Person.module.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a person name {props.name} and age {props.age}!.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    );
};

export default person;