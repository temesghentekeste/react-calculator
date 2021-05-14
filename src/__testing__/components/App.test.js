import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
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

test('should render App component with correct heading text', () => {
  // First we need to render our component using the render function
  const headerEl = getByTestId('mainHeading');

  expect(headerEl.textContent).toBe('Welcome to our page!');
});

it('renders the App component without AC text', () => {
  render(<App />);

  expect(screen.queryByText('AC')).toBeFalsy();
});

it('renders the App component with Lorem ipsum  text', () => {
  const mainText = getByTestId('mainText');

  expect(mainText.textContent.includes('Lorem ipsum')).toBe(true);
});
