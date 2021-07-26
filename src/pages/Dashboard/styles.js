import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  background-color: var(--background-gray);
  position: relative;

  > svg {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 25px;
    color: var(--red);
    cursor: pointer;
  }
`;

export const MenuContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }

  form {
    div {
      svg {
        color: var(--blueLight);
      }
    }
  }

  div {
    h1 {
      font-size: 2rem;
      color: var(--blue);
      text-shadow: 2px 2px #e8e8e8;

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

  @media all and (min-width: 769px) {
    flex-direction: row;
  }

  > div {
    width: 240px;
    padding-top: 1rem;

    @media all and (min-width: 769px) {
      margin-right: 1.2rem;
      padding-top: 0;
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
  margin: 1rem auto;

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      margin: 0.5rem;
    }
  }
`;

export const ContainerInputSelect = styled.div`
  display: flex;
  flex-direction: column;

  div:last-child {
    margin-top: 0.25rem;
    select {
      height: 40px;
      width: 240px;
      border-radius: 6px;
      border: 2px solid var(--black);
      background-color: var(--gray-Light);
      padding-left: 1rem;
      color: var(--black);
    }
  }
`;
