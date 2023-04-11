import { RouteObject } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound/NaoEncontrada';
import AuthGuard from './guards/AuthGuard';
import AuthLayout from './layouts/AuthLayout';
import Products from './pages/Products';
import Cart from './pages/Cart';
import AuthAdmin from './guards/AuthAdmin';
import AdminLayout from './layouts/AdminLayout';
import Admin from './pages/Admin';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <AuthLayout />
      </AuthGuard>
    ),
    children: [
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
    ],
  },
  {
    path: '/',
    element: (
      <AuthAdmin>
        <AdminLayout />
      </AuthAdmin>
    ),
    children: [
      {
        path: '/pedidos',
        element: <Admin />,
      },
    ],
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
