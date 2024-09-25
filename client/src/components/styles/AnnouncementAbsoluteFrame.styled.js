import styled from "styled-components";
import { devices } from "@/style/devices";

export const Window = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: #0004;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Frame = styled.div`
    height: 80dvh;
    width: 50%;
    background-color: #f2f2f2;
    position: relative;
    border-radius: 8px;
    padding: 8px;

    @media ${devices.d4l} {
        width: 80%;
    }
    @media ${devices.my} {
        width: calc(100% - 40px);
    }

`;