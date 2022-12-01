import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --textTop       : #44d2ce;
        --detailcolor   : #b7ffff;
        --blueop        : #7ee9e7;
        --hoverbutton   :   #00a7a2
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
        background-color: #000;
        color           : white;
        height          : 100vh;
        width           : 100%;
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
    }
`