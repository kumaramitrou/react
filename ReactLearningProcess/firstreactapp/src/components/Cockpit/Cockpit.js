import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    // runs for every render cycle.
    // can have multiple useEffect.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // Http Request.
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        // It runs before the main useEffect function runs, but after the (first) render cycle!
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup process in useEffect.');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect.');
        return () => {
            console.log('[Cockpit.js] cleanup process in 2nd useEffect.')
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.Red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.Bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button
                className={btnClass}
                onClick={props.toggle}>Toggle Persons
            </button>
        </div>
    );
};

export default Cockpit;