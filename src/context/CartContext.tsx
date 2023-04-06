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
  cartProducts: {};
  setCartProducts: Dispatch<SetStateAction<{}>>;
  putUserData: (userIfo: UserType) => void;
}

export const CartContext = createContext<UserContextType>({
  cartProducts: {},
  setCartProducts: () => {},
  putUserData: (userIfo: UserType) => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState({});

  const putUserData = async (userIfo: UserType) => {
    setCartProducts(userIfo);

    await localStorage.setItem(
      'chicoburguer:userData',
      JSON.stringify(userIfo),
    );
  
  };

  useEffect(()=>{
   async function loadUserData(){
      const clientInfo :string | null = await localStorage.getItem('chicoburguer:userData')
    
     clientInfo && setCartProducts(JSON.parse(clientInfo))
      
   }
   loadUserData()
   
  },[])

  return (
    <CartContext.Provider value={{ cartProducts, putUserData, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext<UserContextType>(CartContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
