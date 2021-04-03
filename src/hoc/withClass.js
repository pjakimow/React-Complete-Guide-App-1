import React from 'react';

// 1st way of defining HOC
/**
 const withClass = props => (
  <div className={props.classes}>{props.children}</div>
);
**/

// 2nd way of defining HOC

const withClass = (WrappedComponent, className) => { // a normal JS function
 return props => (
     <div className={className}>
      <WrappedComponent {...props}/>
     </div>
 ); // it returns functional component
};

export default withClass;
