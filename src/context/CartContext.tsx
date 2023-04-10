import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { number } from 'yup';
import { ProductType } from '../types/types';

//export const UserContext = createContext({ state: '', setState: (newValue: string) => {} })

interface UserContextType {
  cartProducts: ProductType[];
  setCartProducts: Dispatch<SetStateAction<ProductType[]>>;
  putProductInCart: (userIfo: ProductType) => void;
}

export const CartContext = createContext<UserContextType>({
  cartProducts: [],
  setCartProducts: () => {},
  putProductInCart: (userIfo: ProductType) => [],
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  const putProductInCart = async (userIfo: ProductType) => {

    const cartIndex = cartProducts

    setCartProducts([userIfo]);
    console.log( userIfo);
    


    // await localStorage.setItem(
    //   'chicoburguer:useCart',
    //   JSON.stringify(userIfo),
    // );
  
  };

  useEffect(()=>{
   async function loadUserData(){
      const clientInfo :string | null = await localStorage.getItem('chicoburguer:userData')
    
     clientInfo && setCartProducts(JSON.parse(clientInfo))
      
   }
   loadUserData()
   
  },[])

  return (
    <CartContext.Provider value={{ cartProducts, putProductInCart, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): UserContextType => {
  const context = useContext<UserContextType>(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a UserProvider');
  }
  return context;
};
