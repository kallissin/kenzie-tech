import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    font-family: "Karla", sans-serif;
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

  @media all and (min-width: 1000px) {
    animation: ease-in 1s reverse both running slidein;

    @keyframes slidein {
      from {
        transform: translate(0);
        opacity: 1;
      }
      to {
        transform: translate(50px);
        opacity: 0;
      }
    }
  }
`;
