import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  text: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
}

const Button: FC<ButtonProps> = ({ text, onClick, id }) => {
  return (
    <button id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;