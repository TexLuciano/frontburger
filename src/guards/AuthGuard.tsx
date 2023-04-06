
import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext";


interface Props {
    children: React.ReactNode;
}


export default function AuthGuard({ children }: Props) {

    const {userData} = useUser()

    if(userData !== undefined && !userData) {
        return <Navigate to="/auth/login"/>
    }

    return children
}