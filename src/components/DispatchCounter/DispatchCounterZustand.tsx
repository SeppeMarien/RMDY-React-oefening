import React, { useState } from 'react';
import { Container, Controls, Reset, CustomInput } from './Counter.styles';
import create from 'zustand';

const initialState = 12;

type CounterStore = {
  count: number;
  calculateValue: (value: number) => void;
  reset: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
  count: initialState,
  calculateValue: (value: number) =>
    set((state) => {
      const newValue = state.count + (value || 0);
      if (newValue % 11 === 0)
        return {
          count: 0,
        };
      state.count = newValue;
      return {
        count: newValue,
      };
    }),
  reset: () =>
    set(() => {
      return { count: initialState };
    }),
}));

const DispatchCounterZustand: React.FC = () => {
  const { count, calculateValue, reset } = useCounterStore();
  const [freeFieldValue, setFreeFieldValue] = useState<string>();

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
      <Reset onClick={() => reset()}>RESET</Reset>
      <CustomInput>
        <input type="number" onChange={(e) => setFreeFieldValue(e.target.value)} />
        <button onClick={() => calculateValue(Number(freeFieldValue))}>ADD</button>
      </CustomInput>
    </Container>
  );
};

export default DispatchCounterZustand;
