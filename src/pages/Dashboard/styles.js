import styled from "styled-components";

export const Menu = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--gray);
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  @media all and (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }

  div {
    h1 {
      font-size: 2rem;
      color: var(--blue);

      @media all and (min-width: 1100px) {
        font-size: 3rem;
      }
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: 1100px) {
    flex-direction: row;
  }

  > div {
    width: 200px;
    padding-top: 0;
    @media all and (min-width: 1100px) {
      margin-right: 1.2rem;
    }
  }

  button {
    margin-top: 1rem;
    width: 120px;
    font-size: 1rem;
  }
`;

export const TextContainer = styled.div`
  max-width: 1100px;
  margin: 5rem auto;
  padding: 1.5rem;
`;
