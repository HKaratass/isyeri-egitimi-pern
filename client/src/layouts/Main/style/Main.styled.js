import styled from "styled-components";
import { devices } from "@/style/devices";
import { MiddleOrWide } from "@/data/common";

export const Main = styled.main`
    width: calc(100% - 4px - 10px); //padding -10px
    padding: 5px;
    ${MiddleOrWide && "max-width: 1070px;"}
    margin: auto;
    height: calc(100dvh - 75px - 3px - 8px); //-4 silindi
    overflow: auto;
    border-radius: 4px;
    /* position: relative; */

    &::-webkit-scrollbar {
        /* display: none; */
    }

    @media ${devices.my} {
        width: calc(100vw - 14px);
        /* background-color: black;  */
    }

    @media (orientation: portrait) {
        /* min-height: 130vh; */
        /* width: 100vw; */

    }

`;