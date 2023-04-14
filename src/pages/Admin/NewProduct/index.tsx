import { ChangeEvent, useEffect, useState } from 'react';
import * as C from './style';
import api from '../../../services/api';
import Select from 'react-select';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';



export const NewProduct = () => {
  const [fileName, setFileName]  = useState<FileList | null>(null);

  useEffect(() => {
    async function addProduct() {
      const { data } = await api.post('products');
    }

    addProduct();
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    price: yup.number().required('O preço é obrigatória'),
    category_id: yup.number().required('A categoria é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });



  return (
    <C.Container>
      <C.ContainerItems>
        <C.Label>Nome</C.Label>
        <C.Input type="text" {...register('name')} />
        <C.Label>Preço</C.Label>
        <C.Input type="number" {...register('price')} />

        <C.LabelUpload>
          {fileName ? fileName[0].name : 'Carregue a imagem do produto'}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFileName(event?.target?.files);
            }}
          />
        </C.LabelUpload>
        <Select />

        <C.Button>Adicionar produto</C.Button>
      </C.ContainerItems>
    </C.Container>
  );
};
