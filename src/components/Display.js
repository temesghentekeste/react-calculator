import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="displayContainer">
      <h1 data-testid="result" className="displayContainer__result">{result}</h1>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
