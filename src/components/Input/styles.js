import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  width: 340px;

  > div:first-child {
    position: relative;
    width: 30px;
    margin-right: 0.5rem;

    svg {
      position: absolute;
      bottom: 6px;
    }
  }

  ${(props) =>
    props.error &&
    css`
      svg {
        color: var(--red);
      }
    `};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  input {
    width: 100%;
    margin-top: 0.25rem;
    height: 40px;
    border-radius: 6px;
    border: 2px solid var(--black);
    background-color: var(--gray-Light);
    padding-left: 1rem;
    color: var(--black);

    &::placeholder {
      color: var(--gray);
    }
  }
`;
