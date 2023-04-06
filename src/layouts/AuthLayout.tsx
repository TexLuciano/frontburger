import { Outlet } from "react-router-dom"

interface Props {
    children: React.ReactNode;
}


export default function Auth(props: Props) {
    return (
        <div>
            {props.children}
            <Outlet/>
        </div>
    )
}