import React, { useContext } from 'react';
import * as C from './style';
import { Link, useNavigate} from 'react-router-dom';
import { AiFillMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import logo from '../../imgs/logow.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useUser } from '../../context/UserContext';
import { DataType, InputsTypes } from '../../types/types';
import {Input,Button} from '../../components/';

export const Login = () => {


  const { putUserData } = useUser();
  const navigate = useNavigate()


  
  
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter ao menos 6 digítos'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<InputsTypes> = async (data) => {
    

    try {
      const { data: res }: DataType = await api.post(
        'sessions',
        {
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      putUserData(res);

    
      navigate('/')
    

      if (res.name) {
        toast.success(`Bem vindo ${res.name}`);
      } else {
        throw new Error('no has user');
      }


    } catch (err) {
      console.log(err);
      toast.error(`Verifique seu e-mail e senha`);
    }
  };

  return (
    <C.Container>
      <C.ContainerForm>
        <C.Img src={logo} alt="hamburger" />
        <C.Title>Login</C.Title>
        <C.Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <C.Icon error={errors.email?.message}>
            <AiFillMail />
            <Input
              type="email"
              {...register('email')}
              placeholder="Digite seu e-mail"
            />
            <p>{errors.email?.message}</p>
          </C.Icon>
          <C.Icon error={errors.password?.message}>
            <RiLockPasswordFill />
            <Input
              type="password"
              {...register('password')}
              placeholder="Digite sua senha"
            />
            <p>{errors.password?.message}</p>
          </C.Icon>
          <Button type={'submit'}>Sign In</Button>
        </C.Form>
        <C.SignInLink>
          Não possui conta? <Link to='/registro'>Sign Up</Link >
        </C.SignInLink>
      </C.ContainerForm>
    </C.Container>
  );
};
