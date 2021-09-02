import styled from "styled-components";
import RegisterBackground from "../../assets/register.svg";

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: var(--background-gray);
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      font-family: "Karla", sans-serif;
      // padding-bottom: 3rem;
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
    //height: 100vh;
    background: url(${RegisterBackground}) no-repeat center, var(--blue);
    background-size: contain;
  }
`;
