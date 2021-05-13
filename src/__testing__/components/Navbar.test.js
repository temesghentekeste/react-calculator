import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

let getByTestId;

it('renders the Navbar component', () => {
  const component = renderer
    .create(
      <Router>
        <Navbar />
      </Router>
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
