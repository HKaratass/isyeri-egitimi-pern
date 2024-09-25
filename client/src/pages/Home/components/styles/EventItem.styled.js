import styled from "styled-components";
import { devices } from "../../../../style/devices";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.event_item_bc};
    position: relative;
    width: calc(100% - 8px);
    height: auto;
    margin: 2px;
    padding: 2px;
    border-radius: 2px;
    display: flex;
    
    @media ${devices.scdbrk} {
        /* height: 4em; */
        text-align: center;
        justify-content: center;
    }

    @media ${devices.my} {
        /* height: 4em; */
        /* text-align: center; */
        /* justify-content: center; */
    }

`;

export const OpenButton = styled.button`
    background: none;
    width: 10%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6em;
    border-left: 1px solid black;

    cursor: pointer;
    color: ${({ theme }) => theme.event_go_button};
    &:hover {
        color: ${({ theme }) => theme.event_go_button_hover};
    }
    &:active {
        color: ${({ theme }) => theme.event_go_button_active};
    }


`;

export const Common = styled.div`
    font-size: calc(.65em + .15vw);
    /* font-size: .75em; */
    font-weight: 500;
    /* background-color: #898989; */
    display: flex;
    align-items: center;
    padding: 0 6px;
    user-select: none;

    @media ${devices.my} {
        text-align: center;
        justify-content: center;
    }
`;

export const Header = styled(Common)`
    width: 37.5%;
    

`;
export const Content = styled(Common)`
    width: 37.5%;
    border-left: 1px solid black;
`;

export const DateStyle = styled(Common)`
    width: 15%;
    border-left: 1px solid black;
`;