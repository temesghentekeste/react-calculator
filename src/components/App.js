/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
import calculate from '../logic/calculate';

const App = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
    currentDisplay: '0',
    calculated: false,
  });

  const handleClick = (btnName) => {
    const currentOperation = calculate(calculatorData, btnName);
    setCalculatorData(currentOperation);
  };

  const { currentDisplay } = calculatorData;
  return (
    <>
      <Display result={currentDisplay} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
