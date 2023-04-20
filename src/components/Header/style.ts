import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  color: black;
  padding: 3px;
  .flexnav {
    gap: 30px;
    display: flex;

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    .ative {
      color: rgba(0, 0, 0, 0.5);
      border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    }
  }

  .flexnav2 {
    display: flex;
    gap: 5px;

    .borda {
      position: relative;
      border-right: 1px solid rgba(0, 0, 0, 0.5);

      span {
        font-weight: bold;
        color: black;
        position: absolute;
        background: #07bc0c;
        padding: 3px;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 50%;
        top: 0px;
        left: 2px;
      }

      .ative svg {
        color: rgba(0, 0, 0, 0.5);
        border-bottom: 2px solid rgba(0, 0, 0, 0.5);
      }
    }

    div {
      display: flex;
      place-items: center;
      padding: 0px 10px;

      svg {
        cursor: pointer;
        font-size: 1.7rem;
        transition: 0.3s;
        color: black;
      }
    }
  }

  .subdiv {
    display: flex;
    align-items: center;
    place-content: center;

    button {
      margin-left: 12px;
      align-self: start;
      cursor: pointer;
      font-weight: bold;
      border: none;
      outline: none;
      font-size: 1rem;
      border-bottom: 1px solid transparent;
      background: #fff;
      svg{
        &:hover{
         color: #07bc0c;
        }
      }
    }

   div{
      @media (max-width: 480px) {
       display: none;
      }
    }
  }
`;
export const ContainerItems = styled.nav`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
