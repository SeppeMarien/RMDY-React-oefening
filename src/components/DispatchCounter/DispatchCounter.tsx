import React from 'react';
import DispatchCounterRedux from './DispatchCounterRedux';
import DispatchCounterUseReducer from './DispatchCounterUseReducer';
import DispatchCounterZustand from './DispatchCounterZustand';

/**
 * Had de opdracht eerst gemaakt met de useReducer, maar bij het beter
 * lezen van de opdracht zag ik "useDispatch" deel. Aangezien dit een Redux
 * functionaliteit is heb ik de opdracht hermaakt met Redux. Dan dacht ik 
 * voor het compleet te maken toch nog een extra Zustand versie erbij te maken.
 */

const DispatchCounter: React.FC = () => {
  return (
    <>
      <h2>Exercise with useReducer</h2>
      <DispatchCounterUseReducer />
      <h2>Exercise with Redux</h2>
      <DispatchCounterRedux />
      <h2>Exercise with Zustand</h2>
      <DispatchCounterZustand />
    </>
  );
};

export default DispatchCounter;
