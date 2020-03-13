import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // can be used in class based component.
    static contextType = AuthContext;

    // Focuses in first input html tag.
    // componentDidMount(){
    //     document.querySelector('input').focus();
    // }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        console.log(this.props.isAuth);
        return (
            <Auxiliary>
                {this.context.authenticated? <p>Authenticated!</p>:<p>Please log in</p>}
                <p key="i1" onClick={this.props.click}>I'm a person name {this.props.name} and age {this.props.age}!.</p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}></input>
            </Auxiliary>);
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);