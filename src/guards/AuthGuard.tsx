import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext";


interface Props {
    children: JSX.Element;
}


export default function AuthGuard({ children }: Props) {

    const {userData} = useUser()

    if(userData !== undefined && !userData) {
        return <Navigate to="/login"/>
    }

   
    return  children
}