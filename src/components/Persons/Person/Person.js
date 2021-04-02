import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    return (
        // option 1: <div className='Person' style={style}>
        // option 2: <StyledDiv>
        <div className={classes.Person}>
            <p onClick={props.click}>Name: {props.name}, age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    )
}

export default person;
