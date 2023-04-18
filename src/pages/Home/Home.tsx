import React, { useEffect, useState } from 'react';
import * as C from './style';
import {Offer,Category} from '../../components/';



const Home = () => {

  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <C.Container>
      <C.Title>categorias</C.Title>
      <Category screen={screen} />
      <C.Title>ofertas</C.Title>
      <Offer screen={screen}/>
    </C.Container>
  );
};

export default Home;
