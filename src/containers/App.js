import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// import styled from 'styled-components';

/**const StyledButton = styled.button`
 background-color: ${props => props.alt ? 'red': 'green'};
 color: white;
 font: inherit;
 border: 1px solid blue;
 padding: 8px;
 cursor: pointer;
 &:hover {
        background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
        color: black;
    }
 `;**/

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: 'asdw1', name: 'Leonia', age: 18},
            {id: 'ikjh2', name: 'Leon', age: 23},
            {id: 'irzn3', name: 'Leonardo', age: 70}
        ],
        showPersons: false,
        showCockpit: true
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        console.log('[App.js] render');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }

        return (
            <div className={classes.App}>
              <button onClick={() => this.setState({showCockpit: false})}>Clipboard</button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonsHandler}/>)
                    : null}
                {persons}
            </div>
        );
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => p.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    }
}

export default App;