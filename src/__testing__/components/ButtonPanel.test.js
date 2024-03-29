import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../../components/ButtonPanel';
import Button from '../../components/Button';

const handleClick = () => 'Clicked';

it('renders the ButtonPanel component with child Button element', () => {
  render(
    <ButtonPanel clickHandler={handleClick}>
      <Button name="AC" clickHandler={handleClick} isLast />
    </ButtonPanel>,
  );

  expect(screen.queryByText('AC')).toBeTruthy();
});

it('renders the ButtonPanel component', () => {
  const component = renderer
    .create(<ButtonPanel clickHandler={handleClick} />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
