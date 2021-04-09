import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, clickHandler }) {
  return (
    <div>
      <button type="button" onClick={() => clickHandler(name)}>
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
