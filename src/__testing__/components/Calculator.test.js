import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../../components/Calculator';
import ButtonPanel from '../../components/ButtonPanel';
import Display from '../../components/Display';
import calculate from '../../logic/calculate';

it('renders the Calculator component', () => {
  const component = renderer
    .create(<Calculator/>)
    .toJSON();

  expect(component).toMatchSnapshot();
});