import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #FFF;
        font-family: 'Arial', sans-serif;
        padding-top: 60px;

        @media (min-width: 768px) {
            padding-top: 80px;
        }
    }
    * {
        box-sizing: border-box;
    }
`