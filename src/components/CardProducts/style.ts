import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: red;
  width: 400px;
  border-radius: 15px;
  padding: 15px;
  gap: 10px;
  background: #e6e6e6;
  box-shadow: 20px 20px 60px #c4c4c4, -20px -20px 60px #ffffff;

  @media (max-width:480px) {
    width: 300px;

   
  }


`;
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width:480px) {
    width: 100px;
    height: 75px;
  }
`;
export const Name = styled.p`
  font-weight: bold;
`;
export const Price = styled.p`
  font-weight: bold;
`;
