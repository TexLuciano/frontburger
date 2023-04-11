import styled from 'styled-components';

export const Container = styled.div`
  background: #e6e6e6;
  box-shadow: 20px 20px 60px #c4c4c4, -20px -20px 60px #ffffff;
  width: max-content;
  height: 340px;
  border-radius: 15px;
  padding: 15px;
  display: grid;
  place-items: center;
`;
export const ContainerItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .items {
    display: flex;
    justify-content: space-between;
  }
`;

export const Body = styled.div`
  margin-top: 50px;
  display: flex;
  align-self: end;
  gap: 50px;
  justify-content: space-between;
  margin-bottom: 0px;
  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
export const Price = styled.p`
  font-weight: bold;
`;
export const Name = styled.p`
  font-weight: bold;
`;
export const Empy = styled.p`
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;
