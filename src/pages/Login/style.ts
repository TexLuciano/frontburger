import styled from 'styled-components';
import background from '../../imgs/background.png';
/* color: #9758A6; */
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  place-content: center;
`;

export const ContainerForm = styled.div`
  width: 500px;
  height: 600px;
  border-radius: 15px;
  background: transparent;
  border: 3px solid #fff;
  backdrop-filter: blur(15px);

  @media (max-width: 600px) {
    width: 290px;
    height: 430px;
    img {
      max-width: 100px;
    }
    h1 {
      font-size: 1.5rem;
    }
    form {
      width: 280px;
    }

    input {
      width: 200px;
    }
  }
`;
export const Img = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  margin-top: 25px;
`;
export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 15px;
  width: 350px;
  gap: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2rem;
`;

export const SignInLink = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #fff;

  a {
    color: #fff;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid #fff;
    }
  }
`;

export const Input = styled.input`
  width: 320px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 5px 25px;
  transition: 0.4s;
`;

export const Icon = styled.div<{ error: string | undefined }>`
  place-self: center;
  position: relative;
  transition: 1s;
  svg {
    position: absolute;
    top: 8px;
    left: 5px;
  }

  input {
    &:focus {
      box-shadow: ${({ error }) =>
        error ? '0 0 10px 0 red' : '0 0 10px 0 #9758a6'};
      border-radius: 15px;
    }
  }

  &:hover {
    svg {
      color: #9758a6;
    }
  }

  p {
    color: #fff;
  }
`;
