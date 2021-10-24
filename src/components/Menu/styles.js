import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  position: fixed;
  top: 5px;
  left: 20px;
  z-index: 2;
  background-color: transparent;
  border: none;

  @media all and (min-width: 1000px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  background-color: var(--gray-Light);
  display: flex;
  flex-direction: column;
  padding: 5rem 1rem 1rem 1rem;
  align-items: center;
  height: 100vh;
  width: 85vw;
  transform: translate(-100%);
  transition: 500ms all ease-in-out;
  &.open {
    transform: translate(0);
    color: #000;
  }
  @media all and (min-width: 1000px) {
    max-width: 1064px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    transform: translate(0);
  }
`;

export const LogoNavigation = styled(Link)`
  color: var(--blue);
  text-shadow: 2px 2px #e8e8e8;
  font-weight: bold;
  font-size: 1.7rem;

  @media all and (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export const Nav = styled.nav`
  padding-top: 3rem;
  flex-basis: 80%;

  ul {
    gap: 0.5rem;

    li {
      padding: 1rem 0.5rem;
      font-size: 1.2rem;
      border-bottom: 1px solid var(--blue);

      &:last-child {
        border: none;
      }

      a {
        color: var(--blue);
        font-weight: bold;
        display: flex;
        align-items: center;
        flex-direction: row;
      }
    }
  }

  @media all and (min-width: 1000px) {
    padding-top: 0;

    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      li {
        border: none;
        line-height: 0;
        transition: 300ms all ease-in-out;
        padding: 1rem;

        &:hover {
          border-radius: 6px;
          background-color: var(--background-gray);
        }
      }
    }
  }
`;

export const Icon = styled.span`
  padding-right: 2rem;

  svg {
    font-size: 2rem;
  }
  @media all and (min-width: 1000px) {
    padding-right: 0;
    svg {
      display: none;
    }
  }
`;
