import React, { useEffect, useState } from 'react';
import * as C from './style';
import hero from '../../imgs/hero.png';
import Category from '../../components/Category';
import Offer from '../../components/Offers';

const Home = () => {

  return (
    <C.Container>
      <C.Hero src={hero} />
      <C.Title>categorias</C.Title>
      <Category  />
      <C.Title>ofertas</C.Title>
      <Offer />
    </C.Container>
  );
};

export default Home;
