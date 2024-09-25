import { createGlobalStyle } from "styled-components";
import bcimage from "../assets/pattern_bg.png";
import { devices } from "./devices";
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        /* font-size: 18px; */
        width: 100vw;
        height: 100dvh;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        background-image: url(${bcimage});


    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    button {
        &:focus {
            outline: 0;
        }
    }



    /** custom scroll /
    /* width */
    ::-webkit-scrollbar {
        width: 4px;
        height: 3px;
    }



    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${({ theme }) => theme.scrollbar_bc}; 
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.scrollbar}; 
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.scrollbar_hover}; 
    }
`;
