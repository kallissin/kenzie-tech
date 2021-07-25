import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
    }

    body {
        font-size: 1rem;
        font-family: 'Karla', sans-serif; 
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Arvo', serif;
    }

    button {
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    :root {
        --black: #201F1F;
        --red: #FA1616;
        --blueLight: #03776F;
        --gray: #363535;
        --gray-Light: #DBDBDB;
        --blue: #0B1256;
        --background-gray: #ACB9BE;
        --background-blue: #0B1839;
    }
`;

export default GlobalStyle;
