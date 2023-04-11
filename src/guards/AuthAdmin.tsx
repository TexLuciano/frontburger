import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext";


interface Props {
    children: JSX.Element;
}


export default function AuthAdmin({ children }: Props) {

    const {userData} = useUser()

    if(userData !== undefined && !userData) {
        return <Navigate to="/login"/>
    }else if(!userData?.admin){
      return <Navigate to="/"/>
    }

   
    return  children
}