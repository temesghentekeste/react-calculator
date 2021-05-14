import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, clickHandler, isLast }) {
  return (
    <div
      className={`calculatorButtonContainer ${
        isLast && 'calculatorButtonContainer_last'
      }`}
    >
      <button
        type="button"
        onClick={() => clickHandler(name)}
        className="calculatorButtonContainer__button"
        data-testid={name}
      >
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  isLast: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
