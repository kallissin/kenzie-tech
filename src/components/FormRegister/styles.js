import styled from "styled-components";

export const Form = styled.form`
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
`;
