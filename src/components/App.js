/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      currentDisplay: '0',
      calculated: false,
    };
  }

  handleClick = (btnName) => {
    const currentOperation = calculate(this.state, btnName);
    this.setState(currentOperation);
  };

  render() {
    const {
      currentDisplay,
    } = this.state;
    return (
      <>
        <Display result={currentDisplay} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
