import React, { useState } from 'react';
import { Container, Controls, Reset, CustomInput } from './Counter.styles';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const initialState = 12;

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: initialState,
  },
  reducers: {
    calculateValue: (state, action) => {
      const newValue = state.count + (action?.payload || 0);
      if (newValue % 11 === 0) {
        state.count = 0;
        return;
      }
      state.count = newValue;
    },
    reset: (state) => {
      state.count = initialState;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

const { calculateValue, reset } = counterSlice.actions;

const DispatchCounterReduxWithoutStore: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  const [freeFieldValue, setFreeFieldValue] = useState<string>();

  const handleCalculateValueClick = (number: number) => {
    dispatch(calculateValue(number));
  };

  return (
    <Container>
      <div>
        <p>{count}</p>
      </div>
      <Controls>
        <button onClick={() => handleCalculateValueClick(-5)}> -5 </button>
        <button onClick={() => handleCalculateValueClick(-1)}> -1 </button>
        <button onClick={() => handleCalculateValueClick(1)}> +1 </button>
        <button onClick={() => handleCalculateValueClick(5)}> +5 </button>
      </Controls>
      <Reset onClick={() => dispatch(reset())}>RESET</Reset>
      <CustomInput>
        <input type="number" onChange={(e) => setFreeFieldValue(e.target.value)} />
        <button onClick={() => calculateValue(Number(freeFieldValue))}>ADD</button>
      </CustomInput>
    </Container>
  );
};

const DispatchCounterRedux = () => {
  return (
    <Provider store={store}>
      <DispatchCounterReduxWithoutStore />
    </Provider>
  );
};

export default DispatchCounterRedux;
