import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  overflow: auto;
`;

export const ProductImg = styled.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: #9758a6;
  border: 0;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover{
    background: #07BC0C;
  }
`;
