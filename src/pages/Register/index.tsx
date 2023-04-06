import React, { useContext } from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';
import { AiFillMail, AiOutlineUserAdd } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import logo from '../../imgs/logow.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useUser } from '../../context/UserContext';
import { Input, Button } from '../../components';
import { DataType, InputsTypes } from '../../types/types';

export const Register = () => {
  //const {state, setState}= useContext(UserContext)

  const users = useUser();

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter ao menos 6 digítos'),
    confirmPassword: yup
      .string()
      .required('A senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
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
      const { status } = await api.post(
        'users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );
      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso');
      }
      if (status === 409) {
        toast.error('Email já cadastrado!');
      }
    } catch (err) {
      toast.error('Tente novamente mais tarde');
    }
  };

  return (
    <C.Container>
      <C.ContainerForm error={errors.email?.message}>
        <C.Img src={logo} alt="hamburger" />
        <C.Title>Cadatre-se</C.Title>
        <C.Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <C.Icon error={errors.name?.message}>
            <AiOutlineUserAdd />
            <Input
              type="text"
              {...register('name')}
              placeholder="Digite seu nome"
            />
            <p>{errors.name?.message}</p>
          </C.Icon>

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
          <C.Icon error={errors.confirmPassword?.message}>
            <RiLockPasswordFill />
            <Input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirme sua senha"
            />
            <p>{errors.confirmPassword?.message}</p>
          </C.Icon>
          <Button type={'submit'}>Sign Up</Button>
        </C.Form>

        <C.SignInLink>
          Já possui conta? <Link to="/login">Sign In</Link>
        </C.SignInLink>
      </C.ContainerForm>
    </C.Container>
  );
};
