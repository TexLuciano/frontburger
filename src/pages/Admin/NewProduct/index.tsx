import {  useEffect, useState } from 'react';
import * as C from './style-new-product';
import api from '../../../services/api';
import Select from 'react-select';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdCloudUpload } from 'react-icons/io';
import { Categorytype, InputsTypesProduct } from '../../../types/types';
import { toast } from 'react-toastify';


export const NewProduct = () => {
  const [fileName, setFileName] = useState<FileList | null>(null);
  const [categories, setCategories] = useState<Categorytype[] | []>([]);
  const [change, setChange] = useState<Categorytype | null | undefined>(null);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    price: yup.string().required('O preço é obrigatória').matches(/^[^,]*$/, 'O preço deve ser um número válido'),
    file: yup
      .mixed()
      .test('required', 'Carregue um arquivo', (value: any) => {
        return value?.length > 0;
      })
    

  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<InputsTypesProduct>({
    resolver: yupResolver(schema),
  });




  const onSubmit: SubmitHandler<InputsTypesProduct> = async (data) => {

    
    const productDataFormData = new FormData();

    if (change) {
      const newData = { ...data, category: change.id };
      productDataFormData.append('name', newData.name);
      productDataFormData.append('price', newData.price);
      productDataFormData.append('category_id', newData.category.toString());
      productDataFormData.append('file', newData.file[0]);
      productDataFormData.append('offer', String(newData.offer));

      await toast.promise(api.post('products', productDataFormData), {
        pending: 'Criando novo produto...',
        success: 'Produto criado com sucesso',
        error: 'falha ao criar produto',
      });


   
        resetField('name');
        resetField('price');
        resetField('file');
        setFileName(null);
    
    } else {
      setChange(undefined);
    }
  };

  return (
    <C.Container>
      <C.ContainerItems noValidate onSubmit={handleSubmit(onSubmit)}>
        <C.Label>
          Nome
          <C.Input type="text" autoComplete='off'{...register('name')} />
          <p>{errors.name?.message}</p>
        </C.Label>
        <C.Label>
          Preço
          <C.Input type="number" {...register('price')} />
          <p>{errors.price?.message}</p>
        </C.Label>
        <C.LabelUpload>
          { fileName && fileName?.length > 0 ? (
            fileName[0]?.name
          ) : (
            <>
              <IoMdCloudUpload />
              Carregue a imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFileName(event?.target?.files);
            }}
          />
          <p>{errors.file?.message}</p>
        </C.LabelUpload>

        <Select
          options={categories}
          getOptionLabel={(cat) => cat.name}
          getOptionValue={(cat) => String(cat.id)}
          placeholder="Categorias"
          onChange={(e) => setChange(e)}
        />
        {change === undefined ? <p>Selecione uma categoria</p> : null}

        <C.ContainerIput>
          <input
            type="checkbox"
            defaultChecked={false}
            {...register('offer')}
          />
          <label>Produto em oferta?</label>
        </C.ContainerIput>
        <C.Button type="submit">Adicionar produto</C.Button>
      </C.ContainerItems>
    </C.Container>
  );
};
