import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  text: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;