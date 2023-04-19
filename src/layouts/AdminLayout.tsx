import { Outlet } from 'react-router-dom';
import { SideMenu } from '../components';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  
 
 
`;

const AdminLayout = (): JSX.Element => {
  return (
    <Container>
      <SideMenu />
      <Outlet />
    </Container>
  );
};

export default AdminLayout;
