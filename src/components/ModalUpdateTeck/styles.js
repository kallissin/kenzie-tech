import styled from "styled-components";

export const Display = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 400px;

  svg {
    color: var(--blue);
    position: absolute;
  }

  .content__header {
  }

  .box-title {
    position: relative;
    background-color: var(--blue);
    border-radius: 8px 8px 0 0;
    padding: 1rem;
    height: 60px;
  }

  .icon-close {
    top: 10px;
    right: 20px;
    cursor: pointer;

    path {
      stroke: var(--white);
    }
  }

  .text {
    font-weight: lighter;
    color: var(--white);
  }

  .content__main {
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
  }

  h4 {
    color: var(--black);
    font-size: 1.5rem;
    text-align: center;

    span {
      font-weight: lighter;
      color: var(--blue);
    }
  }

  form {
    /*height: 340px;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    button {
      width: 120px;
    }
  }
`;

export const ContainerInputSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;

  .containerIcon {
    position: relative;
    width: 30px;
    height: 100%;
    margin-right: 0.5rem;

    svg {
      bottom: 6px;
    }
  }

  .contentInputSelect {
    width: 100%;
    div {
      padding-bottom: 0.25rem;
    }

    select {
      height: 40px;
      width: 100%;
      border-radius: 6px;
      border: 2px solid var(--black);
      background-color: var(--gray-Light);
      padding-left: 1rem;
      color: var(--black);
      font-size: 1.2rem;
    }
  }
`;
