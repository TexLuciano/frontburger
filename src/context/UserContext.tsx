import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { UserType } from '../types/types';

//export const UserContext = createContext({ state: '', setState: (newValue: string) => {} })

interface UserContextType {
  userData: UserType | undefined | null;
  setUserData: Dispatch<SetStateAction<UserType | undefined | null>>;
  putUserData: (userIfo: UserType) => void;
}

export const UserContext = createContext<UserContextType>({
  userData: undefined,
  setUserData: () => {},
  putUserData: (userIfo: UserType | undefined | null) => {} ,
});

type Props = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserType | undefined | null>(undefined);

  const putUserData = async (userIfo: UserType) => {

    userIfo && setUserData(userIfo);

    await localStorage.setItem(
      'chicoburguer:userData',
      JSON.stringify(userIfo),
    );
  
  };

  useEffect(()=>{
   async function loadUserData(){
      const clientInfo :string | null = await localStorage.getItem('chicoburguer:userData')
    
      clientInfo ? setUserData(JSON.parse(clientInfo)) : setUserData(null)
      
   }
   loadUserData()
   
  },[])
  

  return (
    <UserContext.Provider value={{ userData, putUserData, setUserData }}>
        {userData !== undefined && children}
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
