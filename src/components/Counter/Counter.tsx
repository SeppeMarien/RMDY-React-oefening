import React, { useState } from 'react';
import { Container, Controls, Reset, CustomInput } from './Counter.styles';

const intialCount = 12;

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number>(intialCount);
  const [freeFieldValue, setFreeFieldValue] = useState<string>();

  const calculateValue = (number: number) => {
    setCount((prev) => {
      const newValue = prev + number;
      if (newValue % 11 === 0) return 0;
      return newValue;
    });
  };

  return (
    <Container>
      <div>
        <p>{count}</p>
      </div>
      <Controls>
        <button onClick={() => calculateValue(-5)}> -5 </button>
        <button onClick={() => calculateValue(-1)}> -1 </button>
        <button onClick={() => calculateValue(1)}> +1 </button>
        <button onClick={() => calculateValue(5)}> +5 </button>
      </Controls>
      <Reset onClick={() => setCount(intialCount)}>RESET</Reset>
      <CustomInput>
        <input type="number" onChange={(e) => setFreeFieldValue(e.target.value)} />
        <button onClick={() => calculateValue(Number(freeFieldValue))}>ADD</button>
      </CustomInput>
    </Container>
  );
};

export default Counter;
