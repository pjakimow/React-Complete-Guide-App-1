import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
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
  state = {
    persons: [
      {id: 'asdw1', name: 'Leonia', age: 18},
      {id: 'ikjh2', name: 'Leon', age: 23},
      {id: 'irzn3', name: 'Leonardo', age: 70}
    ],
    showPersons: false
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    const buttonClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person key={person.id}
                             name={person.name}
                             age={person.age}
                             click={() => this.deletePersonHandler(index)}
                             changed={(event) => this.nameChangeHandler(event, person.id)}/>
            })}
          </div>
      );
      /**
       * btnStyle.backgroundColor = 'red';
       * btnStyle[':hover'] = {
       *  backgroundColor: 'salmon',
       *  color: 'black'
       *  }
       *  **/
      buttonClasses.push(classes.Red)
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
        <div className={classes.App}>
          <h1>Welcome! It's my first React App!</h1>
          <p className={assignedClasses.join(' ')}>And it works ;)</p>
          <button className={buttonClasses.join(' ')} onClick={this.togglePersonsHandler}>
            Show/Hide people
          </button>
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
