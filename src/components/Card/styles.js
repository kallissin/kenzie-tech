import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 250px;
  border-radius: 8px;
  width: 250px;
  padding: 1rem 1rem;
  box-shadow: 2px 5px 5px var(--black);
  background-color: var(--gray-Light);
  margin: 0.5rem;

  .icon-edit {
    position: absolute;
    top: 10px;
    right: 20px;

    button {
      background-color: transparent;
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

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .content__title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .content__status {
    font-size: 1rem;
  }
`;
