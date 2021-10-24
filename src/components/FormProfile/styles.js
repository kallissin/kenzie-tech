import styled from "styled-components";

export const Form = styled.form`
  div {
    input {
      border-bottom: 2px solid var(--blue);
      transition: 250ms all ease-in-out;
      &:focus {
        padding-left: 15px;
        border-bottom: 2px solid var(--background-gray);
      }
    }

    textarea {
      height: 3.2rem;
      border: 2px solid var(--blue);
    }

    .form-input {
      padding: 0.5rem;
      width: 100%;
      font-size: 1rem;
      background-color: #f0f0f0;
    }
  }
`;
