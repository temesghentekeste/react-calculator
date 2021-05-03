/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from './Button';

function ButtonPanel(props) {
  const btns = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const renderedBtns = btns.map((btnGroup, index) => (
    <div key={index} className="calculatorButtons">
      { btnGroup.map((btn, index) => (
        <Button key={index} {...props} name={btn} />
      ))}
    </div>
  ));

  return <div>{renderedBtns}</div>;
}

export default ButtonPanel;
