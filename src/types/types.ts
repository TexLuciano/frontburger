import {SetStateAction, Dispatch} from 'react'

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
  offer:boolean
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
  id: number ;
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
  price: string;
  updatedAt: string;
  url: string;
  quantity: number;
}

interface Product {
  category: string;
  id: number;
  name: string;
  price: string;
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

export  type SlipeProps ={
  hasArrows: boolean,
  hasDots: boolean,
}

export interface CreateCategoryType{
    url:string,
    id:number,
    name:string,
    path:string,
    createdAt:string,
    updatedAt:string
}

export interface PopupProps {
  id: number;
  setCategory: Dispatch<SetStateAction<[] | CreateCategoryType[]>>;
}