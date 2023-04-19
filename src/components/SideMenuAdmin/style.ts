import styled from 'styled-components';

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  padding: 15px;
  display: grid;


  hr {
    margin: 50px 15px;
  }
`;

export const ContainerItem = styled.div<{ isOn: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;

  border-radius: 3px;
  margin: 8px;
  gap: 10px;
  padding: 0 10px;
  background: ${({ isOn }) => isOn && '#565656'};

  svg {
    color: #fff;
  }

  .link-admin {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
  }
`;
export const ContainerLogout = styled.div`
 
  align-self: end;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  margin: 8px;
  gap: 10px;
  padding: 0 10px;

  svg {
    color: #fff;
  }
  .link-admin {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
  }
`;

export const ContainerMenu = styled.div``;
