import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ButtonDelete = styled.button`

  background: #9758a6;
  border: 0;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 15px;

  &:hover{
    background: #07BC0C;
  }

`;

export const ButtonOpen = styled(Button)`

svg{
  color: black;
}

`;
