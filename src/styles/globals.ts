import { createGlobalStyle } from "styled-components";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
  WEIGHTFONT,
} from "../constants/cssVariables";

export const GlobalStyles = createGlobalStyle`
    *{
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: white;
        color: ${COLORS.textColor};
        font-size: ${TYPOGRAPHY.normal};
        @media screen and (min-width: 1024px){
            font-size: ${TYPOGRAPHY1024.normal};
        }
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img{
        max-width: 100%;
        height: auto;
    }
    input,button{
        outline: none;
        border: none;
    }
    h1,h2,h3{
        font-weight: ${WEIGHTFONT.semibold};
        color: ${COLORS.titleColor}
    }
`;
