export interface DataType {
  data: {
    admin: boolean;
    email: string;
    id: string;
    name: string;
    token: string;
  };
}

export type InputsTypes = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type UserType = {
  admin: boolean;
  email: string;
  id: string;
  name: string;
  token: string;
};

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
}
