import styled from "styled-components";
import RegisterBackground from "../../assets/register.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-gray);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      font-family: "Karla", sans-serif;
      padding-bottom: 3rem;
    }

    button {
      width: 250px;
      margin-top: 3rem;
    }

    a {
      color: var(--black);
      padding-top: 1rem;

      span {
        color: var(--red);
      }
    }
  }
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    height: 100vh;
    background: url(${RegisterBackground}) no-repeat center, var(--blue);
    background-size: contain;
  }
`;
