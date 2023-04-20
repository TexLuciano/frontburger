import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  width: 100vw;
  padding: 5px 20px;
  background: #f7f7f7;
  overflow: auto;
  .selectstyle {
    width: 250px;
  }
  .css-13cymwt-control {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`;
export const LinkMenu = styled.a<{ active: boolean }>`
  border-bottom: ${({ active }) => active && '2px solid #9758a6'};
  cursor: pointer;
  font-weight: bold;
`;
export const ProductImg = styled.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
`;
export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;
  cursor: pointer;
`;
export const Button = styled.button`
  cursor: pointer;
  background: #9758a6;
  border: 0;
  padding: 5px;
  border-radius: 3px;
  margin-left: 15px;

  &:hover{
    background: #07BC0C;
  }
`;
