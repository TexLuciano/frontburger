import { SetStateAction, Dispatch, useState } from 'react';
import * as C from './style';
import api from '../../../../../services/api';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdCloudUpload } from 'react-icons/io';
import {
  CreateCategoryType,
  InputsTypesProduct,
} from '../../../../../types/types';
import { toast } from 'react-toastify';

export interface PopupProps {
  setCategory: Dispatch<SetStateAction<[] | CreateCategoryType[]>>;
}

export const NewCategory = ({ setCategory }: PopupProps) => {
  const [fileName, setFileName] = useState<FileList | null>(null);

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    file: yup
      .mixed()
      .test('required', 'Carregue um arquivo', (value: any) => {
        return value?.length > 0;
      })
      .test('fileSize', 'Carregue arquivos de até 2mb', (value: any) => {
        return value[0]?.size <= 2000000;
      }),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<InputsTypesProduct>({
    resolver: yupResolver(schema),
  });

  async function loadCategories() {
    const { data } = await api.get('categories');

    setCategory(data);
  }

  const onSubmit: SubmitHandler<InputsTypesProduct> = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('file', data.file[0]);

    await toast.promise(api.post('categories', productDataFormData), {
      pending: 'Criando nova categoria...',
      success: 'Categoria criada com sucesso',
      error: 'falha ao criar categoria',
    });

    resetField('name');

    resetField('file');

    setFileName(null);
    loadCategories();
  };

  return (
    <C.Container>
      <C.ContainerItems noValidate onSubmit={handleSubmit(onSubmit)}>
        <C.Label>
          Nome
          <C.Input type="text" autoComplete="off" {...register('name')} />
          <p>{errors.name?.message}</p>
        </C.Label>

        <C.LabelUpload>
          {fileName ? (
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

        <C.Button type="submit">Adicionar categoria</C.Button>
      </C.ContainerItems>
    </C.Container>
  );
};
