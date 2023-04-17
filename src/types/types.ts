export interface DataType {
  data: {
    admin?: boolean;
    email: string;
    id: string;
    name: string;
    token: string;
    error?: string;
  };
}

export type InputsTypes = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type InputsTypesProduct = {
  name: string;
  price: string;
  file: string;
  category: string
};

export interface UserType {
  admin?: boolean;
  email: string;
  id: string;
  name: string;
  token: string;
  error?: string;
}

export interface Categorytype {
  url?: string;
  id: number;
  name: string;
  path?: string;
  createdAt?: string;
}

export interface ProductType {
  category: {
    id: number;
    name: string;
  };
  category_id: number;
  createdAt: string;
  id: number;
  name: string;
  offer: boolean;
  path: string;
  price: number;
  updatedAt: string;
  url: string;
  quantity: number;
}

interface Product {
  category: string;
  id: number;
  name: string;
  price: number;
  url: string;
  quantity: number;
  _id: string;
}

export interface OrdersType {
    createdAt: string;
    products: Product[];
    status?: string;
    updatedAt: string;
    user: {
      id: string;
      name: string;
    };
    __v: number;
    _id: string;
}

export interface OrderFormated{
  name: string
  orderId:string
  date:string
  status?:string
  products:Product[]
}