import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import hero from '../imgs/hero.png';

 const Hero = styled.img`
  max-width: 100%;
`;

 const AuthLayout=():JSX.Element => {
  return (
    <>
      <Header/>
      <Hero src={hero} />
      <Outlet />
    </>
  );
}

export default AuthLayout