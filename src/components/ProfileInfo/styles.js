import styled from "styled-components";

export const Display = styled.div`
  height: 100vh;
  width: 100%;
  padding: 95px 0 0 0;
  background-image: linear-gradient(
    45deg,
    var(--background-blue),
    var(--background-gray),
    var(--blue)
  );

  @media all and (min-width: 1000px) {
    padding: 95px 0 15px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--gray-Light);
  .content-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 0.5rem;
    height: 100%;
    width: 100%;
  }

  @media all and (min-width: 1000px) {
    margin: 0 auto;
    max-width: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    .content-box {
      height: 100%;
      width: 600px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 1rem 0;

  figure {
    width: 170px;

    img {
      width: 100%;
      border-radius: 50%;
    }

    figcaption {
      display: none;
    }
  }

  div {
    position: relative;
    width: 170px;

    .header__icon {
      position: absolute;
      top: -12px;
      right: 10px;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;

export const Content = styled.div`
  div {
    padding: 0.6rem;

    p {
      font-size: 1rem;
      color: var(--blue);

      span {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    .form-input {
      padding: 0.5rem;
      width: 100%;
      font-size: 1rem;
    }

    .textarea {
      height: 3.2rem;
    }
  }
  .container-button {
    padding-top: 1.5rem;
  }

  @media all and (min-width: 1000px) {
    div {
      p {
        font-size: 1.3rem;
        font-weight: 200;

        span {
          font-size: 1.5rem;
        }
      }

      .form-input {
        font-size: 1.2rem;
      }
    }
  }
`;
