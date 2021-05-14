import React from 'react';
import { render, screen } from '@testing-library/react';
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
