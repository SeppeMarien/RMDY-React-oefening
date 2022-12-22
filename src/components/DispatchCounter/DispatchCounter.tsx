import React, { useReducer, useState } from 'react';
import { Container, Controls, Reset, CustomInput } from './Counter.styles';

enum CounterActions {
  CALCULATE = 'CALCULATE',
  RESET = 'RESET',
}

type CounterAction = {
  type: CounterActions;
  payload?: number;
};

type CounterState = {
  count: number;
};

const initialState = 12;

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case CounterActions.CALCULATE:
      const newValue = state.count + (action?.payload || 0);
      if (newValue % 11 === 0) return { count: 0 };
      return { count: newValue };

    case CounterActions.RESET:
      return { count: initialState };
    default:
      return state;
  }
};

const DispatchCounter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: initialState });
  const [freeFieldValue, setFreeFieldValue] = useState<string>();

  const calculateValue = (number: number) => {
    dispatch({ type: CounterActions.CALCULATE, payload: number });
  };

  return (
    <Container>
      <div>
        <p>{state.count}</p>
      </div>
      <Controls>
        <button onClick={() => calculateValue(-5)}> -5 </button>
        <button onClick={() => calculateValue(-1)}> -1 </button>
        <button onClick={() => calculateValue(1)}> +1 </button>
        <button onClick={() => calculateValue(5)}> +5 </button>
      </Controls>
      <Reset onClick={() => dispatch({ type: CounterActions.RESET })}>RESET</Reset>
      <CustomInput>
        <input type="number" onChange={(e) => setFreeFieldValue(e.target.value)} />
        <button onClick={() => calculateValue(Number(freeFieldValue))}>ADD</button>
      </CustomInput>
    </Container>
  );
};

export default DispatchCounter;
