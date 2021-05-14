import React from 'react';
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../../components/ButtonPanel';
import Button from '../../components/Button';

const handleClick = () => 'Clicked';

it('renders the ButtonPanel component', () => {
  render(<ButtonPanel clickHandler={handleClick}>
    <Button name="AC" clickHandler={handleClick} isLast={true}/>
  </ButtonPanel>);

  expect(screen.queryByText('AC')).toBeTruthy();
});

it('renders the ButtonPanel component with child Button element', () => {
  const component = renderer
    .create(<ButtonPanel clickHandler={handleClick}></ButtonPanel>)
    .toJSON();

  expect(component).toMatchSnapshot();
});
