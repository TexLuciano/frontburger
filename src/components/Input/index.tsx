import { InputContainer } from './style';

import React, { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {

  return <InputContainer ref={ref} {...props} />;

});


