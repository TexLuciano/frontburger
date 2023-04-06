import React from 'react';
import * as C from './style';
import { ProductType } from '../../types/types';
import { formateCurrency } from '../../utils/FormateValue';
import {Button} from '../Button';

export const CardProducts = ({ product }: { product: ProductType }) => {
  return (
    <C.Container>
      <C.Image src={product.url} />
      <C.ContainerItems>
        <C.Name>{product.name}</C.Name>
        <C.Price>{formateCurrency(product.price)}</C.Price>
        <Button>Adicionar</Button>
      </C.ContainerItems>
    </C.Container>
  );
};
