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
