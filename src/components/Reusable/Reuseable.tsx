import React, { HTMLProps } from 'react';
import { Container } from './Reuseable.styles';

interface Props extends HTMLProps<HTMLButtonElement> {
  label: string;
}

const LabelButton: React.FC<Props> = (props) => {
  return (
    <>
      <p>{props.label.toLocaleUpperCase()}</p>
      <button>OVER HERE</button>
    </>
  );
};

const Reuseable: React.FC = () => {
  return (
    <Container>
      <LabelButton label="Click the button below" />
    </Container>
  );
};

export default Reuseable;
