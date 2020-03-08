import React, { Component } from "react";


class UserInput extends Component{

    render(){
        return(
            <div>
                <label>Please enter text into User input.: {this.props.userName}</label>
                <input type='text' placeholder='username' onChange={this.props.changed} value={this.userName}></input>
            </div>
        );
    };
}

export default UserInput;