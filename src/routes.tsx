import { RouteObject } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import  { NotFound } from './pages/NotFound/NaoEncontrada';
import AuthGuard from './guards/AuthGuard';
import AuthLayout from './layouts/AuthLayout';
import Products from './pages/Products';
import Cart from './pages/Cart';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <AuthLayout />
      </AuthGuard>
    ),
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'produtos',
        element: <Products />,
      },
      {
        path: 'carrinho',
        element: <Cart />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registro',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
