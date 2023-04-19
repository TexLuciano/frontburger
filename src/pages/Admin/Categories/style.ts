import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #565656;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`;

export const ContainerItems = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  place-content: center;
  background: #3c3c3c;
  padding: 20px;
  border-radius: 15px;
`;

export const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  color: #fff;
  
  input{
    color: black;
    opacity: 0;
    width: 1px;
    height: 1px;
  }
`;


export const Input = styled.input`
  color: black;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 5px;
`;

export const Button = styled.button`
margin-top: 25px;
  width: 200px;
  font-size: 1.3rem;
  align-self: center;
  background: #9758a6;
  border: 0;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #07bc0c;
  }
`;

export const ContainerIput = styled.div`
margin-top: 10px;
  label {
    color: #fff;
  }
  input{
    font-size: 1.3rem;
  }
`;
