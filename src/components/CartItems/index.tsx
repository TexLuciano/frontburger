import React from 'react';
import * as C from './style';
import { ProductType } from '../../types/types';
import { formateCurrency } from '../../utils/FormateValue';
import { Button } from '../Button';
import { useCart } from '../../context/CartContext';
import { BsFillTrashFill } from 'react-icons/bs';

export const CartItems = () => {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } = useCart();

  return (
    <C.Container>
      <C.ContainerItems>
        <C.Li>
          <p></p>
        </C.Li>
        <C.Li>
          <p>Itens</p>
        </C.Li>
        <C.Li>
          <p>Preço</p>
        </C.Li>
        <C.Li>
          <p>Quantidade</p>
        </C.Li>
        <C.Li>
          <p>Total</p>
        </C.Li>
      </C.ContainerItems>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((item) => (
          <C.Body key={item.id}>
            <img src={item.url} alt="" />
            <C.Name>{item.name}</C.Name>
            <C.Price>{formateCurrency(item.price)}</C.Price>
            <C.Quantity>
              <button onClick={() => decreaseProducts(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => increaseProducts(item.id)}>+</button>
              <C.ButtonTrash  onClick={() => deleteProducts(item.id)}><BsFillTrashFill/></C.ButtonTrash>
            </C.Quantity>

            <C.Price>{formateCurrency(item.price * item.quantity)}</C.Price>
          </C.Body>
        ))
      ) : (
        <C.Empy>Carrinho Vazio</C.Empy>
      )}
    </C.Container>
  );
};
