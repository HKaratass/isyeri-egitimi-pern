import styled from "styled-components";

export const BackButton = styled.button`
    background-color: ${({ theme }) => theme.detail_nav_bc};
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    font-size: 1.5em;
    color: ${({ theme }) => theme.detail_nav_color};
    cursor: pointer;
    transition: all .3s ease;
    margin-right: 5px;
    margin-left: auto;

    &:hover {
        background-color: ${({ theme }) => theme.detail_nav_back_button_bc_hover};
        transform: scale(1.05);
    }

    &:active {
        background-color: ${({ theme }) => theme.detail_nav_bc};
        transform: scale(1);
    }

`;