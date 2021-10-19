import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 45px;
  font-size: 1.2rem;
  border: 2px solid ${(props) => (props.whiteSchema ? "#201F1F" : "#0B1256")};
  border-radius: 8px;
  background-color: ${(props) => (props.whiteSchema ? "#E6EFF3" : "#0B1256")};
  color: ${(props) => (props.whiteSchema ? "#201F1F" : "#DBDBDB")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.whiteSchema ? "#DBDBDB" : "#0B1839")};
    border: 2px solid ${(props) => (props.whiteSchema ? "#201F1F" : "#0B1839")};
    color: ${(props) => (props.whiteSchema ? "#201F1F" : "#DBDBDB")};
    animation: 2s ease-in step-end sliden;
  }
`;
