import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../../components/Display';

let component;

beforeEach(() => {
  component = render(<Display />);
});

it('renders the Display component', () => {
  component = renderer.create(<Display result="100" />).toJSON();

  expect(component).toMatchSnapshot();
});

it('renders the Display component with a result', () => {
  const { getByText } = render(<Display result="100" />);

  const displayResult = getByText(/100/i);
  expect(displayResult).toBeInTheDocument();
});
