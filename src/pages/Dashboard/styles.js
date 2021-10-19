import styled from "styled-components";
export const Header = styled.header`
  padding: 1rem 0;
  background-color: var(--background-gray);
  position: relative;

  > svg {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 25px;
    color: var(--red);
    cursor: pointer;
  }
`;

export const MenuContainer = styled.div`
  max-width: 1064px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    div {
      svg {
        color: var(--blueLight);
      }
    }
  }

  div {
    h1 {
      font-size: 2rem;
      color: var(--blue);
      text-shadow: 2px 2px #e8e8e8;
    }
  }

  @media all and (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;

    div {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export const TextContainer = styled.div`
  overflow: auto;
  height: 100vh;
  padding-top: 80px;
  background-image: linear-gradient(
    45deg,
    var(--background-blue),
    var(--background-gray),
    var(--blue)
  );
  section {
    max-width: 1064px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media all and (min-width: 1000px) {
    section {
      justify-content: flex-start;
    }
  }
`;
