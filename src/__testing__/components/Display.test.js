import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../../components/Display';

let getByTestId;
let component;

beforeEach(() => {
  component = render(<Display />);
  getByTestId = component.getByTestId;
});

it('renders the Display component', () => {
  const component = renderer.create(<Display />).toJSON();

  expect(component).toMatchSnapshot();
});

it('renders the Display component with a result', () => {
  const component = renderer.create(<Display result='100' />).toJSON();

  expect(component).toMatchSnapshot();
});
