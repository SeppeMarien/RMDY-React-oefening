import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './Reuseable.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const LabelButton: React.FC<Props> = ({ label, ...restProps }) => {
  return (
    <>
      <p>{label.toLocaleUpperCase()}</p>
      <button {...restProps}>OVER HERE</button>
    </>
  );
};

const Reuseable: React.FC = () => {
  return (
    <Container>
      <LabelButton
        disabled
        onClick={() => console.log('>>>>>>>>>>>>>>>>>>>>>>>')}
        label="Click the button below"
      />
    </Container>
  );
};

export default Reuseable;
