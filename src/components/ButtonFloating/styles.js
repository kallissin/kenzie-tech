import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background-color: #088308;
  border-radius: 50%;
  box-shadow: 1px 4px 4px var(--black);

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    button {
      background-color: transparent;
      scroll-behavior: smooth;
      width: 100%;
      height: 100%;
      svg {
        font-size: 30px;
        color: white;
      }
    }
  }

  @media all and (min-width: 1000px) {
    display: none;
  }
`;
