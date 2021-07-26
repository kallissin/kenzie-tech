import styled from "styled-components";
import NotFound from "../../assets/notFound.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;

  h1 {
    color: var(--blue);
    text-align: center;
  }

  button {
    width: 260px;
  }
`;

export const Background = styled.div`
  height: 200px;
  width: 340px;
  background: url(${NotFound}) no-repeat center;
  background-size: contain;

  @media all and (min-width: 768px) {
    height: 450px;
    width: 700px;
  }
`;
