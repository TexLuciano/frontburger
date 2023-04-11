
import { Outlet } from 'react-router-dom';
import { Header } from '../components';



 const AuthLayout=():JSX.Element => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default AuthLayout