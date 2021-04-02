import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    const btnClasses = [classes.Button];
    console.log('AAA');
    if (props.showPersons) {
        btnClasses.push(classes.Red);
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>And it works ;)</p>
            <button className={btnClasses.join(' ')} onClick={props.clicked}>
                Show/Hide people
            </button>
        </div>
    );
}

export default cockpit;
