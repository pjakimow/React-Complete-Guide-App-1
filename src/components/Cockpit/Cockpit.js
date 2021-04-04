import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authContext = useContext(AuthContext);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toggleBtnRef = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect!');
        }
    }, []); // effect runs only for the first time and never again
    // cleanup runs only when the component gets destroyed

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect!');
        }
    }); // no dependencies, effect runs always
    // cleanup runs on every update cycle and when the component get destroyed

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js] 3rd useEffect');
        return () => {
            console.log('[Cockpit.js] 3rd cleanup work in useEffect!');
        }
    }, [props.personsLength]); // effect runs when a given prop change
    // cleanup runs on every prop update cycle and when the component get destroyed

    const assignedClasses = [];
    const btnClasses = [classes.Button];
    if (props.showPersons) {
        btnClasses.push(classes.Red);
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>And it works ;)</p>
            <button ref={toggleBtnRef} className={btnClasses.join(' ')} onClick={props.clicked}>
                Show/Hide people
            </button>
            <button onClick={authContext.login}> Log in</button>
        </div>
    );
}

export default React.memo(cockpit);
