import operate from './operate';

const calculate = (calculatorData, btnName) => {
  const newCalculatorData = { ...calculatorData };
  const { total, next, operation } = calculatorData;
  switch (btnName) {
    case 'AC':
      newCalculatorData.total = null;
      newCalculatorData.next = null;
      newCalculatorData.operation = null;
      break;

    case '=':
      if (total && next && operation) {
        newCalculatorData.total = operate(
          newCalculatorData.total,
          newCalculatorData.next,
          newCalculatorData.operation,
        );
        newCalculatorData.next = null;
        newCalculatorData.operation = null;
      }
      break;

    case '%':
      if (total && next && operation) {
        newCalculatorData.total /= 100;
        newCalculatorData.operation = null;
      }
      break;

    case '+/-':
      newCalculatorData.total *= -1;
      newCalculatorData.next *= -1;
      break;

    case calculatorData.operation:
      newCalculatorData.total = operate(
        newCalculatorData.total,
        newCalculatorData.next,
        newCalculatorData.operation,
      );
      break;

    default:
      break;
  }

  return newCalculatorData;
};

export default calculate;
