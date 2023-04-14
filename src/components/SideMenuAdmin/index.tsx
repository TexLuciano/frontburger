import React from 'react';
import * as C from './style';
import { list } from './menu-list';
import { Link , useLocation} from 'react-router-dom';
import { SlLogout } from 'react-icons/sl';

export const SideMenu = () => {
  const location = useLocation()

  const logout = async () => {
    await localStorage.removeItem('chicoburguer:userData');
  };




  return (
    <C.Container>
      <C.ContainerMenu>
        <hr></hr>
        {list.map((item) => (
          <C.ContainerItem
            key={item.id}
            isOn={location.pathname === item.link}
          >
            <item.icon />
            <Link to={item.link} className="link-admin">
              {item.label}
            </Link>
          </C.ContainerItem>
        ))}
        <hr></hr>
      </C.ContainerMenu>
      <C.ContainerLogout>
        <SlLogout />
        <Link to="/login" className="link-admin" onClick={logout}>
          Sair
        </Link>
      </C.ContainerLogout>
    </C.Container>
  );
};
