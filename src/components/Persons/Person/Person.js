import React, {Component} from 'react';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            // option 1: <div className='Person' style={style}>
            // option 2: <StyledDiv>
            // <div className={classes.Person}>
            // <Auxiliary>
            <React.Fragment>
                <p onClick={this.props.click}>Name: {this.props.name}, age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed}/>
            </React.Fragment>
        )
    }
}

export default Person;
