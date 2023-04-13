import styled from 'styled-components';

export const Container = styled.div`

  background: #e6e6e6;
  box-shadow: 20px 20px 60px #c4c4c4, -20px -20px 60px #ffffff;
  width: max-content;
  border-radius: 15px;
  padding: 15px;
`;
export const ContainerItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom:  2px solid rgba(0,0,0,0.2);
`;

export const Li = styled.li`
color:  rgba(0,0,0,0.2);
list-style: none;
font-weight: bold;
`;
export const Body = styled.div`
  font-weight: bold;
 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin: 10px 0;

  img{
    border-radius: 15px;
    display: block;
    width: 120px;
    height: 100px;
    object-fit: cover;
  }
`;
export const Price = styled.p`
  font-weight: bold;
`;
export const Name = styled.p`
  font-weight: bold;
`;
export const Empy = styled.p`
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;
export const Quantity = styled.div`
display: flex;
gap: 5px;
button{
  font-weight: bold;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background:#9758a6 ;
  border: 0;
  outline: none;
  transition: 0.3s;
  border-radius: 5px;
  &:hover{
    background: #07BC0C;
   
  }
}

p{
  margin-top: 5px;
}
`;