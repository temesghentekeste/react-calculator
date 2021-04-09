import operate from './operate';

const calculate = (calculatorData, btnName) => {
  console.log(calculatorData, btnName);
  const newCalculatorData = { ...calculatorData };
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const { total, next, operation } = calculatorData;

  let digit = null;

  if (digits.includes(btnName)) {
    digit = btnName;
  }

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

    case digit:
      if (!calculatorData.operation) {
        newCalculatorData.total = newCalculatorData.total
          ? newCalculatorData.total + digit
          : digit;
      }
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
