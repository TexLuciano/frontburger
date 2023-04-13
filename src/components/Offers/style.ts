import styled from 'styled-components';



export const Container = styled.div`

  margin: 50px 100px;
  max-width: 100%;
`;

export const Slider = styled.div`
  background: #f7f7f7;
  padding: 10px 20px;
  border-radius: 15px;
  img {
    border-radius: 15px;
    display: block;
    width: 200px;
    height: 150px;
    object-fit: cover;
  }
  p{
    margin-top: 5px;
  }
`;
export const SliderContainer = styled.div`
  display: grid;
  place-content: center;
  width: 200px;
`;
export const Button = styled.button`
  width: 200px;
  padding: 5px;
  margin: 0px;
  margin-top: 10px;
  border-radius: 8px;
  background: #9758a6;
  text-align: center;
  font-size: 1.3rem;
  outline: none;
  border: 0px;
  cursor: pointer;
transition: 0.3s;
  &:hover{
   background:#07BC0C;
  }

`;
