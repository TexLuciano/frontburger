import React, { useEffect, useState } from 'react';
import * as C from './style';
import hero from '../../imgs/hero.png';
import api from '../../services/api';
import { Categorytype, ProductType } from '../../types/types';
import { CardProducts } from '../../components/CardProducts';

const Products = () => {
  const [categories, setCategories] = useState<Categorytype[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data }: { data: Categorytype[] } = await api.get('categories');

      const newCategory = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategory);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const { data }: { data: ProductType[] } = await api.get('products');

      setProducts(data);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFiltereds = products.filter(
        (item) => item.category_id === activeCategory,
      );
      setFilteredProducts(newFiltereds);
    }

  }, [activeCategory, products]);

  return (
    <C.Container>
      <C.Hero src={hero} />
      <C.Nav>
        <C.Ul aria-placeholder="navegação-categorias">
          {categories &&
            categories.map((item) => (
              <C.Li key={item.id}>
                <C.Button
                  onClick={() => setActiveCategory(item.id)}
                  active={activeCategory === item.id}
                >
                  {item.name}
                </C.Button>
              </C.Li>
            ))}
        </C.Ul>
      </C.Nav>
      <C.ContainerProducts>
        {filteredProducts &&
          filteredProducts.map((item) => (
            <CardProducts key={item.id} product={item} />
          ))}
      </C.ContainerProducts>
    </C.Container>
  );
};

export default Products;
