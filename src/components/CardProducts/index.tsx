import React from 'react';
import * as C from './style';
import { ProductType } from '../../types/types';
import { formateCurrency } from '../../utils/FormateValue';
import {Button} from '../Button';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';

export const CardProducts = ({ product }: { product: ProductType }) => {

const { putProductInCart} = useCart()

const handleProduct =(product:ProductType)=>{
  putProductInCart(product)
  toast.success(`+ ${product.name}`)
}

  return (
    <C.Container>
      <C.Image src={product.url} />
      <C.ContainerItems>
        <C.Name>{product.name}</C.Name>
        <C.Price>{formateCurrency(Number(product.price))}</C.Price>
        <Button onClick={()=>handleProduct(product)}>Adicionar</Button>
      </C.ContainerItems>
    </C.Container>
  );
};
