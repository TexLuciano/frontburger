import React, { useEffect, useState } from 'react';
import * as C from './style';
import { ProductType } from '../../types/types';
import { formateCurrency } from '../../utils/FormateValue';
import { Button } from '../Button';
import { useCart } from '../../context/CartContext';
import api from '../../services/api';
import { toast } from 'react-toastify';

export const ResumeCart = () => {
  const { cartProducts } = useCart();
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [deliveryTax, setDeliveryTax] = useState(5);

  useEffect(() => {
    const sumAllItens = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

 
    
    setFinalPrice(sumAllItens);
    
  }, [cartProducts]);

  const submitOrder = async()=>{
    const order = cartProducts.map(product => {
      return {id:product.id , quantity:product.quantity}
    })

   await  toast.promise(api.post('orders', {products: order}),{
    pending:'Realizando Pedido...',
    success:'pedido realizado!',
    error:'Falha ao tentar realizar o pedido'
   }) 

  
  }


  return (
    <C.Container>
      <C.ContainerItems>
        <h2>Resumo do pedido</h2>
        <div className='items'>
          <p>Itens</p>
          <p>{formateCurrency(finalPrice)}</p>
        </div>
        <div className='items'>
          <p>Taxa de entrega</p>
          <p>{formateCurrency(deliveryTax)}</p>
        </div>
      </C.ContainerItems>
      <C.Body>
        <p>Total</p>
        <p>{ formateCurrency(deliveryTax + finalPrice)}</p>
      </C.Body>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </C.Container>
  );
};
