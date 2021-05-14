import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../components/App';

let getByTestId;

beforeEach(() => {
  const component = render(<App />);
  getByTestId = component.getByTestId;
});

it('renders the App component', () => {
  const component = renderer.create(<App />).toJSON();

  expect(component).toMatchSnapshot();
});


