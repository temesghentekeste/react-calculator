import operate from './operate';

const calculate = (calculatorData, btnName) => {
  const newCalculatorData = { ...calculatorData };
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', 'X', '÷', '%'];
  const {
    total, next, operation, calculated,
  } = calculatorData;

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
        try {
          newCalculatorData.currentDisplay = operate(
            newCalculatorData.total,
            newCalculatorData.next,
            newCalculatorData.operation,
          );
          newCalculatorData.total = parseFloat(
            newCalculatorData.currentDisplay,
          );
        } catch (error) {
          newCalculatorData.currentDisplay = 'ERROR';
          newCalculatorData.total = null;
        } finally {
          newCalculatorData.next = null;
          newCalculatorData.operation = null;
          newCalculatorData.calculated = true;
        }
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
        newCalculatorData.total = newCalculatorData.total && !calculated
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
      newCalculatorData.calculated = false;
      break;

    case '.':
      if (!calculatorData.operation && calculatorData.total) {
        newCalculatorData.total = newCalculatorData.total.toString().includes('.')
          ? `${newCalculatorData.total}`
          : `${newCalculatorData.total}.`;
        newCalculatorData.currentDisplay = `${newCalculatorData.total}`;
        console.log(newCalculatorData);
      }

      if (calculatorData.total && calculatorData.operation) {
        console.log('**************');
        newCalculatorData.next = newCalculatorData.next.toString().includes('.')
          ? newCalculatorData.next
          : `${newCalculatorData.next}.`;
        newCalculatorData.currentDisplay = newCalculatorData.next;
        console.log(newCalculatorData);
      }
      newCalculatorData.calculated = false;
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
