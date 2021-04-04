import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons || nextProps.isAuthenticated !== this.props.isAuthenticated; // array is reference type, we compare the pointers
        // but we copied the array while updating state, so the pointer changed and we can do it like this
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person key={person.id}
                            name={person.name}
                            age={person.age}
                            click={() => this.props.clicked(index)}
                            changed={(event) => this.props.changed(event, person.id)}/>
                );
            })
        )
    }
}

export default Persons;
