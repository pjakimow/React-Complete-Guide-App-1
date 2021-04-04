import React, {Component} from 'react';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            // option 1: <div className='Person' style={style}>
            // option 2: <StyledDiv>
            // option 3: <div className={classes.Person}>
            // option 4: <React.Fragment>
            <Auxiliary>
                <p onClick={this.props.click}>Name: {this.props.name}, age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed}/>
            </Auxiliary>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
