import { RouteObject } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import AuthGuard from './guards/AuthGuard';
import AuthLayout from './layouts/AuthLayout';


const routes: RouteObject[] = [
    {
        path: "/",
        element:
            <AuthGuard>
                <Home />
            </AuthGuard>,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
        ]
    }
]

export default routes

