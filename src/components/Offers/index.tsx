import React, { useEffect, useState } from 'react';
import * as C from './style';
import hero from '../../imgs/hero.png';
import api from '../../services/api';
import { ProductType,SlipeProps } from '../../types/types';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { formateCurrency } from '../../utils/FormateValue';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';


export const Offer = ({screen}:{screen:number}) => {
  const [offers, setOffers] = useState<ProductType[]>([]);
  const {putProductInCart } = useCart()


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

  const handleProduct =(product:ProductType)=>{
    putProductInCart(product)
    toast.success(`+ ${product.name}`)
  }

  const [propsSlider, setPropsSlider] = useState<SlipeProps>({
    hasArrows: true,
    hasDots: true,
  });

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
        {offers.map((i) => (
          <C.SliderContainer key={i.id}>
            <C.Slider>
              <img src={i.url} />
              <p>{i.name}</p>
              <p>{formateCurrency( Number(i.price))}</p>
              <C.Button onClick={()=> handleProduct(i)}>Peça agora</C.Button>
            </C.Slider>
          </C.SliderContainer>
        ))}
      </Glider>
    </C.Container>
  );
};


