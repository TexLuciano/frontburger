import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 100px;
  max-width: 100%;
`;

export const Slider = styled.div`
  background: #f7f7f7;
  padding: 10px 20px;
  border-radius: 15px;
  display: grid;
  gap: 10px;
  img {
    border-radius: 15px;
    display: block;
    width: 200px;
    height: 150px;
    object-fit: cover;
  }
`;
export const SliderContainer = styled.div`
  display: grid;
  place-content: center;
  width: 200px;
`;
export const Button = styled.button`
border: 0;
  a {
   font-size: 1.3rem;
   border-radius: 8px;
   padding: 5px;
   display: block;
   background: #9758a6;
    align-self: center;
    color: black;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      background:#07BC0C ;
    }
  }

`;
