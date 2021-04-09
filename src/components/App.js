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
    };
  }

  handleClick = (btnName) => {
    const { total, next, operation } = calculate(this.state, btnName);
    this.setState({
      total,
      next,
      operation,
    });
    console.log('Clicked', btnName, this.state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
