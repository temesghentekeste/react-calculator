import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../../components/Quote';

let getByTestId;

beforeEach(() => {
  const component = render(<Quote />);
  getByTestId = component.getByTestId;
});

it('renders the Quote component', () => {
  const component = renderer.create(<Quote />).toJSON();

  expect(component).toMatchSnapshot();
});

test('should render Quote component with correct text', () => {
  // First we need to render our component using the render function
  const headerEl = getByTestId('quote');

  expect(headerEl.textContent).toBe('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston');
});
