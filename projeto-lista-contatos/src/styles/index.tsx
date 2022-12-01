import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --textGrey      : #585F69;
        --bodymodal1    : #1E2430;
        --bodymodal2    : #161E27;
        --fundopage     : #141519;
        --detailBlue    : #212832;
        --orangeDetail  : #FC7613;
        --hoverbutton   : #cf5905;
        --whitetext     : #FBFDFD;

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
        background-color: var(--fundopage);
        color           : white;
        height          : 100vh;
        width           : 100%;
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
    }
`