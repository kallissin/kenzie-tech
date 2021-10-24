import styled from "styled-components";

export const TextContainer = styled.div`
  overflow: auto;
  height: 100vh;
  padding-top: 60px;
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
