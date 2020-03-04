import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className = "UserOutput">
        <p>UserName is :. {props.userName}</p>
        <p>This is second paragraph.</p>
    </div>
    );
};

export default UserOutput;