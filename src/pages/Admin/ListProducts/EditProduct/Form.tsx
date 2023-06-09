import {  useEffect, useState } from 'react';
import * as C from '../../NewProduct/style-new-product';
import api from '../../../../services/api';
import Select from 'react-select';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdCloudUpload } from 'react-icons/io';
import { Categorytype, InputsTypesProduct } from '../../../../types/types';
import { toast } from 'react-toastify';
import { ProductType } from '../../../../types/types';


export const EditProduct = ({ product,loadProducts }: { product: ProductType, loadProducts:()=> void }) => {
  const [fileName, setFileName] = useState<FileList | null>(null);
  const [categories, setCategories] = useState<Categorytype[] | []>([]);
  const [change, setChange] = useState<Categorytype | null>(product.category);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const schema = yup.object().shape({
    name: yup.string(),
    price: yup.string(),
    file: yup.mixed(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsTypesProduct>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<InputsTypesProduct> = async (data) => {
    const productDataFormData = new FormData();

      if(change){
      const newData = { ...data, category: change.id };
      productDataFormData.append('name', newData.name);
      productDataFormData.append('price', newData.price);
      productDataFormData.append('category_id', newData.category.toString());
      productDataFormData.append('file', newData.file[0]);
      productDataFormData.append('offer', String(newData.offer));
      await toast.promise(
        api.put(`products/${product.id}`, productDataFormData),
        {
          pending: 'Atualizando produto...',
          success: 'Produto atualizado com sucesso',
          error: 'falha ao atualizar produto',
        },
      );

      loadProducts()
    }
  };

  return (
    <C.ContainerItems noValidate onSubmit={handleSubmit(onSubmit)}>
      <C.Label>
        Nome
        <C.Input
          type="text"
          {...register('name')}
          defaultValue={product.name}
        />
      </C.Label>
      <C.Label>
        Preço
        <C.Input
          type="number"
          {...register('price')}
          defaultValue={product.price}
        />
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
      </C.LabelUpload>

      <Select
        options={categories}
        getOptionLabel={(cat) => cat.name}
        getOptionValue={(cat) => String(cat.id)}
        defaultValue={change}
        placeholder="Categorias"
        onChange={(e) => setChange(e)
        }
      />
      <C.ContainerIput>
       
      <input type="checkbox" defaultChecked={product.offer} {...register('offer')}/>
      <label>Produto em oferta?</label>
      </C.ContainerIput>
      
      <C.Button type="submit">Editar produto</C.Button>
    </C.ContainerItems>
  );
};
