import React, { useEffect, useState } from 'react';
import * as C from './style';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useUser } from '../../context/UserContext';
import { useCart } from '../../context/CartContext';

export const Header = () => {
  const { userData } = useUser();
  const { cartProducts } = useCart();

  const navigate = useNavigate();


  const location = useLocation()


  const logout = async() => {
  await localStorage.removeItem('chicoburguer:userData')
    navigate('/login');
  };

  return (
    <C.Container>
      <C.ContainerItems>
        <div className="flexnav">
          <Link className={location.pathname === '/' ? 'ative' : ''} to={'/'}>Home</Link>
          <Link className={location.pathname === '/produtos' ? 'ative' : ''}to={'/produtos'}>Produtos</Link>
        </div>
        <div className="flexnav2">
          <div className="borda">
            <Link className={location.pathname === '/carrinho' ? 'ative' : ''}to={'/carrinho'}>
                
              <AiOutlineShoppingCart />
             { cartProducts.length < 1 ? null : <span>{cartProducts.length }</span>}
            </Link>
          </div>
          <div className="subdiv">
            <div>
              <BsFillPersonFill />
              <p>Olá, {userData?.name}</p>
            </div>
            <button onClick={logout}>Sair</button>
          </div>
        </div>
      </C.ContainerItems>
    </C.Container>
  );
};
