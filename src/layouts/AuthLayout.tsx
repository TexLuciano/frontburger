
import { Outlet } from 'react-router-dom';



 const AuthLayout=():JSX.Element => {
  return (
    <>
      <h1>nav</h1>
      <Outlet />
    </>
  );
}

export default AuthLayout