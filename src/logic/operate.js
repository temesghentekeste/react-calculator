/* eslint-disable no-param-reassign */

import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = null;
  numberOne = new Big(numberOne);
  numberTwo = new Big(numberTwo);

  switch (operation) {
    case '+':
      result = numberOne.plus(numberTwo);
      break;
    case '-':
      result = numberOne.minus(numberTwo);
      break;
    case 'X':
      result = numberOne.times(numberTwo);
      break;
    case '÷':
      result = numberTwo !== 0 ? numberOne.div(numberTwo) : '∞';
      break;
    case '%':
      result = numberOne === null
        ? numberTwo.div(100)
        : numberOne.times(numberTwo).div(100);
      break;
    default:
      break;
  }

  return result && result.toString();
};

export default operate;
