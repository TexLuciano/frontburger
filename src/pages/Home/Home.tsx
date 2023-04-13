import React, { useEffect, useState } from 'react';
import * as C from './style';
import {Offer,Category} from '../../components/';



const Home = () => {

  return (
    <C.Container>
      <C.Title>categorias</C.Title>
      <Category  />
      <C.Title>ofertas</C.Title>
      <Offer />
    </C.Container>
  );
};

export default Home;
