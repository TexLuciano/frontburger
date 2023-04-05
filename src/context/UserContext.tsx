import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { number } from 'yup';
import { UserType } from '../types/types';

//export const UserContext = createContext({ state: '', setState: (newValue: string) => {} })

interface UserContextType {
  userData: {};
  setUserData: Dispatch<SetStateAction<{}>>;
  putUserData: (userIfo: UserType) => void;
}

export const UserContext = createContext<UserContextType>({
  userData: {},
  setUserData: () => {},
  putUserData: (userIfo: UserType) => {},
});

type Props = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState({});

  const putUserData = async (userIfo: UserType) => {
    setUserData(userIfo);

    await localStorage.setItem(
      'chicoburguer:userData',
      JSON.stringify(userIfo),
    );
  
  };

  useEffect(()=>{
   async function loadUserData(){
      const clientInfo :string | null = await localStorage.getItem('chicoburguer:userData')
    
     clientInfo && setUserData(JSON.parse(clientInfo))
      
   }
   loadUserData()
   
  },[])

  return (
    <UserContext.Provider value={{ userData, putUserData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext<UserContextType>(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
