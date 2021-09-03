import styled from "styled-components";
import LoginBackground from "../../assets/login.svg";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: var(--background-gray);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${LoginBackground}) no-repeat center, var(--blue);
    background-size: contain;
  }
`;
