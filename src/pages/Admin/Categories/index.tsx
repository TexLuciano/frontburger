import {  useEffect, useState } from 'react';
import * as C from './style';
import api from '../../../services/api';
import {  CreateCategoryType } from '../../../types/types';
import { ListCategories } from './ShowCategory';
import ModalCreateCategory from './NewCategory';

export const Categories = () => {
  const [category, setCategory] = useState<CreateCategoryType[] | []>([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategory(data);
    }
    loadCategories();
  }, []);

  return (
    <C.Container>
      <ModalCreateCategory  setCategory={setCategory}/>
      <ListCategories category={category} setCategory={setCategory} />
    </C.Container>
  );
};
