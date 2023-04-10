import React from 'react';
import * as C from './style';
import { ProductType } from '../../types/types';
import { formateCurrency } from '../../utils/FormateValue';
import {Button} from '../Button';
import { useCart } from '../../context/CartContext';

export const CardProducts = ({ product }: { product: ProductType }) => {

const { putProductInCart} = useCart()


  return (
    <C.Container>
      <C.Image src={product.url} />
      <C.ContainerItems>
        <C.Name>{product.name}</C.Name>
        <C.Price>{formateCurrency(product.price)}</C.Price>
        <button>-</button>
        <div></div>
        <button>+</button>
        <Button onClick={()=>putProductInCart(product)}>Adicionar</Button>
      </C.ContainerItems>
    </C.Container>
  );
};
