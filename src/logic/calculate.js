import operate from './operate';

const calculate = (calculatorData, btnName) => {
  const newCalculatorData = { ...calculatorData };
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', 'X', '÷', '%'];
  const { total, next, operation } = calculatorData;

  let digit = null;
  let operator = null;

  if (digits.includes(btnName)) {
    digit = btnName;
  }

  if (operators.includes(btnName)) {
    operator = btnName;
  }

  switch (btnName) {
    case 'AC':
      newCalculatorData.total = null;
      newCalculatorData.next = null;
      newCalculatorData.operation = null;
      newCalculatorData.currentDisplay = '0';
      break;

    case '=':
      if (total && next && operation) {
        newCalculatorData.currentDisplay = operate(
          newCalculatorData.total,
          newCalculatorData.next,
          newCalculatorData.operation,
        );
        newCalculatorData.next = null;
        newCalculatorData.operation = null;
      }
      break;

    case '%':
      if (total) {
        newCalculatorData.total /= 100;
        newCalculatorData.currentDisplay = newCalculatorData.total.toString();
      }
      break;

    case '+/-':
      if (newCalculatorData.total && !newCalculatorData.operation) {
        newCalculatorData.total *= -1;
        newCalculatorData.currentDisplay = newCalculatorData.total.toString();
      }

      if (newCalculatorData.total && newCalculatorData.operation) {
        newCalculatorData.next *= -1;
        newCalculatorData.currentDisplay = newCalculatorData.next.toString();
      }
      break;

    case digit:
      if (!calculatorData.operation) {
        newCalculatorData.total = newCalculatorData.total
          ? newCalculatorData.total + digit
          : digit;
        newCalculatorData.currentDisplay = newCalculatorData.total;
        console.log(newCalculatorData);
      }

      if (calculatorData.total && calculatorData.operation) {
        console.log('**************');
        newCalculatorData.next = newCalculatorData.next
          ? newCalculatorData.next + digit
          : digit;
        newCalculatorData.currentDisplay = newCalculatorData.next;
        console.log(newCalculatorData);
      }
      break;

    case operator:
      newCalculatorData.total = total || '0';
      newCalculatorData.operation = total ? operator : null;
      newCalculatorData.next = null;
      newCalculatorData.currentDisplay = `${total} ${operator}`;
      break;

    default:
      break;
  }

  return newCalculatorData;
};

export default calculate;
