import styled from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  max-width: 100%;
  transform: translateX(50px);
  animation: scale 0.5s forwards;

  @keyframes scale {
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

`;

export const ContainerComponents = styled.div`
margin-top: 50px;
margin-bottom: 200px;
place-content: center;
display: flex;
gap: 30px;
flex-wrap: wrap;

`;


export const Hero = styled.img`
  max-width: 100%;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-top: 20px;
  display: grid;
  place-content: center;
  color: #fff;
  text-transform: uppercase;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #9758a6;
`;
