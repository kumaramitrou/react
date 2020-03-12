import React from 'react';

// const WithClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    );//Functional component.
};

export default withClass;