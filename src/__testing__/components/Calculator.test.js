import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../../components/Calculator';

let getByTestId;

beforeEach(() => {
  const component = render(<Calculator />);
  getByTestId = component.getByTestId;
});

it('renders the Calculator component', () => {
  const component = renderer.create(<Calculator />).toJSON();

  expect(component).toMatchSnapshot();
});

it('renders the Calculator component with correct heading', () => {
  const headingEl = getByTestId('heading');

  expect(headingEl).toBeTruthy();
});

test('should give correct subtraction operation', () => {
  const subtractBtn = getByTestId('-');
  const equalsBtn = getByTestId('=');
  const numberOnebtn = getByTestId('1');
  const numberTwobtn = getByTestId('2');
  const resultHeading = getByTestId('mainResult');

  expect(subtractBtn.textContent).toBe('-');

  fireEvent.click(numberOnebtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  expect(resultHeading.textContent).toBe('-1');
});

test('should give correct addition operation', () => {
  const additionBtn = getByTestId('+');
  const equalsBtn = getByTestId('=');
  const numberOnebtn = getByTestId('1');
  const numberTwobtn = getByTestId('2');
  const resultHeading = getByTestId('mainResult');

  expect(additionBtn.textContent).toBe('+');

  fireEvent.click(numberOnebtn);
  fireEvent.click(additionBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  expect(resultHeading.textContent).toBe('3');
});

test('should give correct multiply operation', () => {
  const multiplyBtn = getByTestId('X');
  const equalsBtn = getByTestId('=');
  const numberNineBtn = getByTestId('9');
  const numberTwobtn = getByTestId('2');
  const resultHeading = getByTestId('mainResult');

  expect(multiplyBtn.textContent).toBe('X');

  fireEvent.click(numberNineBtn);
  fireEvent.click(multiplyBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  expect(resultHeading.textContent).toBe('18');
});

test('should give correct division operation', () => {
  const divideBtn = getByTestId('÷');
  const equalsBtn = getByTestId('=');
  const numberNineBtn = getByTestId('9');
  const numberTwobtn = getByTestId('2');
  const resultHeading = getByTestId('mainResult');

  expect(divideBtn.textContent).toBe('÷');

  fireEvent.click(numberNineBtn);
  fireEvent.click(divideBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  expect(resultHeading.textContent).toBe('4.5');
});

test('should give correct percentage operation', () => {
  const percentageBtn = getByTestId('%');
  const numberNineBtn = getByTestId('9');
  const resultHeading = getByTestId('mainResult');

  expect(percentageBtn.textContent).toBe('%');

  fireEvent.click(numberNineBtn);
  fireEvent.click(percentageBtn);
  expect(resultHeading.textContent).toBe('0.09');
});

test('should give correct percentage +/-', () => {
  const plusMinusBtn = getByTestId('+/-');
  const numberNineBtn = getByTestId('9');
  const resultHeading = getByTestId('mainResult');

  expect(plusMinusBtn.textContent).toBe('+/-');

  fireEvent.click(numberNineBtn);
  fireEvent.click(plusMinusBtn);
  expect(resultHeading.textContent).toBe('-9');
});

test('should give correct appended number', () => {
  const numberOneBtn = getByTestId('1');
  const numberNineBtn = getByTestId('9');
  const numberZeroBtn = getByTestId('0');
  const resultHeading = getByTestId('mainResult');

  fireEvent.click(numberNineBtn);
  fireEvent.click(numberZeroBtn);
  fireEvent.click(numberOneBtn);
  expect(resultHeading.textContent).not.toBe('109');
  expect(resultHeading.textContent).toBe('901');
});
