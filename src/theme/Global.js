import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #FFF;
        font-family: 'Arial', sans-serif;
        padding-top: 60px;
        overflow: scroll;

        @media (min-width: 965px) {
            padding-top: 80px;
        }
    }
    body * {
        box-sizing: border-box;
    }
`