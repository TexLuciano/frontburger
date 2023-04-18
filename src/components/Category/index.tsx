import React, { useEffect, useState } from 'react';
import * as C from './style';
import hero from '../../imgs/hero.png';
import api from '../../services/api';
import { Categorytype,SlipeProps } from '../../types/types';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { Link } from 'react-router-dom';
// interface Categoryy{
//   data:Categorytype[]

// }

export const Category = ({ screen }: { screen: number }) => {
  // let arrMatriz = [];
  // if (categories) {
  //   for (let i = 0; i < categories.length; i += 2) {
  //     let arrMenor = categories.slice(i, i + 2);
  //     arrMatriz.push(arrMenor);
  //   }
  // }

  const [categories, setCategories] = useState<Categorytype[]>([]);
  const [propsSlider, setPropsSlider] = useState<SlipeProps>({
    hasArrows: true,
    hasDots: true,
  });

 


  useEffect(() => {
    async function loadCategories() {
      const { data }: { data: Categorytype[] } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    if (screen < 550) {
      setPropsSlider({
        hasArrows: false,
        hasDots: false,
      });
    }
  }, [screen]);

  return (
    <C.Container>
      <Glider
        draggable
        hasArrows={propsSlider.hasArrows}
        hasDots={propsSlider.hasDots}
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
              <C.Button>
                <Link to={'/produtos'} state={{ id: i.id }}>
                  {i.name}
                </Link>
              </C.Button>
            </C.Slider>
          </C.SliderContainer>
        ))}
      </Glider>
    </C.Container>
  );
};
