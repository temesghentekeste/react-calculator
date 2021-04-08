import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
