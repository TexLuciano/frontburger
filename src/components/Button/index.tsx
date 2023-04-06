import React, { ButtonHTMLAttributes } from 'react';
import { ContainerButton } from './style';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  
  return <ContainerButton {...rest}>{children}</ContainerButton>;
};


