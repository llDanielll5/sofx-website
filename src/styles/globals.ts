import { createGlobalStyle } from "styled-components";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
  WEIGHTFONT,
} from "../constants/cssVariables";

export const GlobalStyles = createGlobalStyle`
    *{
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
    .active-link{
        background: linear-gradient(101deg, hsl(228,66%,53%), hsl(228,66%,47%));
        color: white;
        box-shadow: 0 4px 8px hsla(228,66%,45%,.25);
     }
     ::-webkit-scrollbar{
        width: .6rem;
        border-radius: .5rem;
        background-color: hsl(228,8%,76%);
     }
     ::-webkit-scrollbar-thumb{
        background-color: hsl(228,8%,64%);
        border-radius: .5rem;
        transition: .5s;
     }
     ::-webkit-scrollbar-thumb:hover{
        background-color: hsl(228,8%,54%);
        
     }

     .scrollup{
        position: fixed;
        right: 1rem;
        bottom: -30%;
        background-color: white;
        box-shadow: 0 8px 12px hsla(228, 66%, 45%,.1);
        display: inline-flex;
        padding: .35rem;
        border-radius: .25rem;
        color: hsl(228,57%,28%);
        font-size: 1.25rem;
        z-index: 10;
        transition: .3s;
     }

     .scrollup:hover{
        transform: translateY(-.25rem);
        color: hsl(228, 66%, 53%);
     }
     .show-scroll{
        bottom: 8rem;
     }
`;
