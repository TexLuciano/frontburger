import React from 'react';

import { UserProvider } from './UserContext';
import { CartProvider } from './CartContext';
type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};
