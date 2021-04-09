/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from './Button';

function ButtonPanel(props) {
  return (
    <div>
      <div>
        <Button name="AC" {...props} />
        <Button name="+/-" {...props} />
        <Button name="%" {...props} />
        <Button name="÷" {...props} />
      </div>
      <div>
        <Button name="7" {...props} />
        <Button name="8" {...props} />
        <Button name="9" {...props} />
        <Button name="X" {...props} />
      </div>
      <div>
        <Button name="4" {...props} />
        <Button name="5" />
        <Button name="6" {...props} />
        <Button name="-" {...props} />
      </div>
      <div>
        <Button name="1" {...props} />
        <Button name="2" {...props} />
        <Button name="3" {...props} />
        <Button name="+" {...props} />
      </div>

      <div>
        <Button name="0" {...props} />
        <Button name="." {...props} />
        <Button name="=" {...props} />
      </div>
    </div>
  );
}

export default ButtonPanel;
