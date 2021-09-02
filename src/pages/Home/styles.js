import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-gray);
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding: 1rem;

  h1 {
    color: var(--blue);
    font-size: 3.5rem;
    padding: 1rem 0;
  }

  p {
    color: var(--black);
    font-size: 2rem;
  }
  div {
    flex: 1;
    display: flex;
    padding-top: 1.5rem;

    button + button {
      margin-left: 2rem;
    }
  }

  @media all and (min-width: 1000px) {
    max-width: 620px;

    h1 {
      font-size: 4.5rem;
    }

    p {
      font-size: 2.5rem;
    }

    div {
      button {
        font-size: 1.5rem;
        height: 60px;
      }
    }
  }

  @media all and (min-height: 1080px) {
    max-width: 800px;

    h1 {
      font-size: 6rem;
    }

    p {
      font-size: 3rem;
    }

    div {
      button {
        font-size: 2.2rem;
        height: 80px;
      }
    }
  }
`;
