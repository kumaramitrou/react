import React from 'react';

const ValidationComponent = (props) => {

    let message = "Text long enough.";

    if (props.length <= 5) {
        message = "Text too short.";
    }

    return (
        <div>
            {message}
        </div>
    );
};

export default ValidationComponent;