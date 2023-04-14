import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  overflow: auto;
  display: grid;
  place-content: center;
`;

export const ContainerItems = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  place-content: center;
  background: #3c3c3c;
  padding: 20px;
`;

export const Label = styled.label`
  color: #fff;
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
    opacity: 0;
    width: 1px;
    height: 1px;
  }
`;


export const Input = styled.input`
  color: #fff;
  margin-bottom: 15px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 5px;
`;

export const Button = styled.button`
  width: 200px;
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
