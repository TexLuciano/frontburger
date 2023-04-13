import React, { useEffect, useState } from 'react';
import * as C from './style';
import { CartItems, ResumeCart } from '../../components';

const Cart = () => {
  return (
    <C.Container>
     
      <C.ContainerComponents>
        <CartItems />
        <ResumeCart />
      </C.ContainerComponents>
    </C.Container>
  );
};

export default Cart;
