import React, { useEffect, useState } from 'react';
import * as C from './style';
import hero from '../../imgs/hero.png';
import api from '../../services/api';
import { Categorytype, ProductType } from '../../types/types';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { formateCurrency } from '../../utils/FormateValue';
// interface Categoryy{
//   data:Categorytype[]

// }

const Offer = () => {
  const [offers, setOffers] = useState<ProductType[]>([]);

  // let arrMatriz = [];
  // if (categories) {
  //   for (let i = 0; i < categories.length; i += 2) {
  //     let arrMenor = categories.slice(i, i + 2);
  //     arrMatriz.push(arrMenor);
  //   }
  // }
  useEffect(() => {
    async function loadOffers() {
      const { data }: { data: ProductType[] } = await api.get('products');
      const onlyOffers = data.filter((product) => product.offer);

      setOffers(onlyOffers);
    }

    loadOffers();
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
        {offers.map((i) => (
          <C.SliderContainer key={i.id}>
            <C.Slider>
              <img src={i.url} />
              <p>{i.name}</p>
              <p>{formateCurrency(i.price)}</p>
              <C.Button>Peça agora</C.Button>
            </C.Slider>
          </C.SliderContainer>
        ))}
      </Glider>
    </C.Container>
  );
};

export default Offer;