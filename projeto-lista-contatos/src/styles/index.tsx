import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
    }
    *{
        margin          : 0;
        padding         : 0;
        box-sizing      : border-box;
    }
    button {
        cursor          : pointer;
    }
    li,ul {
        list-style      : none;
    }
    a{
        text-decoration : none;
    }
    img{
        max-width       : 100%;
    }
    body{
        background-color: #2e2e2e;
        color           : white;
        height          : 100vh;
        width           : 100%;
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
    }
`