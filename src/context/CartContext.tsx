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
  putProductInCart: (product: ProductType) => void;
  increaseProducts: (productId: number) => void;
  decreaseProducts: (productId: number) => void;
  deleteProducts: (productId: number) => void;
}

export const CartContext = createContext<UserContextType>({
  cartProducts: [],
  setCartProducts: () => {},
  putProductInCart: (product: ProductType) => [],
  increaseProducts: (productId: number) => {},
  decreaseProducts: (productId: number) => {},
  deleteProducts: (productId: number) => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  const stake = async (products: ProductType[]) => {
    await localStorage.setItem(
      'chicoburguer:useCart',
      JSON.stringify(products),
    );
  };

  const putProductInCart = async (product: ProductType) => {
    const cartIndex = cartProducts.findIndex((prod) => prod.id === product.id);
    let newCartProducts: ProductType[] = [];

    if (cartIndex >= 0) {
      newCartProducts = cartProducts;
      newCartProducts[cartIndex].quantity += +1;

      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }

    stake(newCartProducts);
  };

  const increaseProducts = async (productId: number) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);

    stake(newCart);
  };

  const deleteProducts = async (productId: number) => {
    const newCart = cartProducts.filter((product) => product.id !== productId);

    setCartProducts(newCart);
    stake(newCart);
  };

  const decreaseProducts = async (productId: number) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });

      setCartProducts(newCart);
      stake(newCart);
    } else {
      deleteProducts(productId);
    }
  };
  useEffect(() => {
    async function loadUserData() {
      const clientInfo: string | null = await localStorage.getItem(
        'chicoburguer:useCart',
      );

      clientInfo && setCartProducts(JSON.parse(clientInfo));
    }
    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        setCartProducts,
        increaseProducts,
        decreaseProducts,
        deleteProducts,
      }}
    >
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
