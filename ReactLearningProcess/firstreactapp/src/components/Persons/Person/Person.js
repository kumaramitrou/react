import React, { Component, Fragment } from 'react';

import classes from './Person.module.css';
import Auxiliary from  '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
        <Auxiliary>
            <p key="i1" onClick={this.props.click}>I'm a person name {this.props.name} and age {this.props.age}!.</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type='text' onChange={this.props.changed} value={this.props.name}></input>
        </Auxiliary>);
    }
}

export default Person;