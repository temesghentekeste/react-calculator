/* eslint-disable no-use-before-define */
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../../components/Button';

let component;

beforeEach(() => {
  component = render(
    <Button name="+" clickHandler={handleClick} isLast />,
  );
});

const handleClick = () => {
  'Clicked';
};

it('renders the Button component', () => {
  component = renderer
    .create(<Button name="+" clickHandler={handleClick} isLast />)
    .toJSON();

  expect(component).toMatchSnapshot();
});

it('renders the Button component with correct text content', () => {
  const { getByTestId } = render(
    <Button name="-" clickHandler={handleClick} isLast />,
  );

  expect(getByTestId('-')).toHaveTextContent('-');
});

it('renders the Button component with correct text content', () => {
  const { getByTestId } = render(
    <Button name="-" clickHandler={handleClick} isLast />,
  );

  expect(getByTestId('-')).not.toHaveTextContent('AC');
});

it('renders the Button component with correct name', () => {
  const { getByTestId } = render(
    <Button name="AC" clickHandler={handleClick} isLast />,
  );

  expect(getByTestId('AC')).toHaveTextContent('AC');
});

it('renders the Button component with correct role; i.e, button', () => {
  const { getAllByRole } = render(
    <Button name="AC" clickHandler={handleClick} isLast />,
  );

  const btnRoles = getAllByRole('button');

  expect(btnRoles[0]).toBeInTheDocument();
});
