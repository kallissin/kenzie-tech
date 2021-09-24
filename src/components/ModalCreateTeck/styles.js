import styled from "styled-components";

export const Display = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: white;
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 350px;
`;

export const ContainerInput = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;

  div {
    width: 100%;
  }

  button {
    margin-top: 1rem;
    width: 120px;
    font-size: 1rem;
  }
`;

export const ContainerInputSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .containerIcon {
    position: relative;
    width: 30px;
    height: 100%;
    margin-right: 0.5rem;

    svg {
      position: absolute;
      bottom: 6px;
    }
  }

  .contentInputSelect {
    div {
      padding-bottom: 0.25rem;
    }

    select {
      height: 40px;
      /*width: 240px;*/
      width: 100%;
      border-radius: 6px;
      border: 2px solid var(--black);
      background-color: var(--gray-Light);
      padding-left: 1rem;
      color: var(--black);
    }
  }
`;
