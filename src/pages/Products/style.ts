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



export const Nav = styled.nav`
  margin-top: 25px;
  display: grid;
  place-content: center;

  padding: 0 20px;
  @media (max-width: 600px) {
    padding:0px;
  }
`;
export const Ul = styled.ul`
  place-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Li = styled.li`
  list-style: none;

`;

export const Button = styled.button<{ active: boolean }>`
  font-size: 1.2rem;
  border: none;
  color: ${({ active }) => (active ? '#9758a6' : '#9A9A9D')};
  border-bottom: ${({ active }) => active && '2px solid #9758a6'};
  cursor: pointer;
`;

export const ContainerProducts = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  margin-bottom: 100px;
  padding: 40px;
  justify-content: center;
  place-items: center;
  gap: 25px 0;

  @media (max-width: 1270px) {

    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 870px) {
    padding: 0px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
