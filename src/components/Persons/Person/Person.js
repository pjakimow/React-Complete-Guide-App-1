import React, {Component} from 'react';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef(); // set class variable with a new approach
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            // option 1: <div className='Person' style={style}>
            // option 2: <StyledDiv>
            // option 3: <div className={classes.Person}>
            // option 4: <React.Fragment>
            <Auxiliary>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>Name: {this.props.name}, age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    //ref={(inputEl) => {this.inputElement = inputEl}} // set class variable with older approach
                    ref={this.inputElementRef}
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed}/>
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
