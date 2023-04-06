import React, { useEffect, useState } from 'react';
import * as C from './style';
import hero from '../../imgs/hero.png';
import api from '../../services/api';
import { Categorytype } from '../../types/types';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
// interface Categoryy{
//   data:Categorytype[]

// }

export const Category = () => {
  // let arrMatriz = [];
  // if (categories) {
  //   for (let i = 0; i < categories.length; i += 2) {
  //     let arrMenor = categories.slice(i, i + 2);
  //     arrMatriz.push(arrMenor);
  //   }
  // }

  const [categories, setCategories] = useState<Categorytype[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const { data }: { data: Categorytype[] } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <C.Container>
      <Glider
        draggable
        hasArrows
        hasDots
        slidesToShow={1}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {categories.map((i) => (
          <C.SliderContainer key={i.id}>
            <C.Slider>
              <img src={i.url} />
              <C.Button>{i.name}</C.Button>
            </C.Slider>
          </C.SliderContainer>
        ))}
      </Glider>
    </C.Container>
  );
};


