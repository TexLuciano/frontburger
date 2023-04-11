import React, { useEffect, useState } from 'react';
import * as C from './style';
import hero from '../../imgs/hero.png';
import { CartItems, ResumeCart } from '../../components';

const Cart = () => {
  return (
    <C.Container>
      <C.Hero src={hero} />
      <C.ContainerComponents>
        <CartItems />
        <ResumeCart />
      </C.ContainerComponents>
    </C.Container>
  );
};

export default Cart;
