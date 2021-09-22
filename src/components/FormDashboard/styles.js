import styled from "styled-components";

export const Form = styled.form``;

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
