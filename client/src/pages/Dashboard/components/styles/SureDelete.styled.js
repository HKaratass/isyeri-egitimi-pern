import styled from "styled-components";

export const ModalFrame = styled.div`
    position: fixed;
    background-color: #1115;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.detail_nav_button_bc_selected};
    width: 340px;
    height: 120px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Button = styled.button`
    cursor: pointer;
    font-size: 1.1em;
    border: none;
    border-radius: 4px;
    background-color: #f2f2f2;
    margin: 10px;
    width: 90px;
    height: 30px;
    transition: transform .4s, background-color .2s;
    user-select: none;

    &:hover {
        background-color: ${props => props.$DEL ? "#aa1616" : "#191919"};
        color: white;
        transform: scale(1.01);
    }

    &:active {
        background-color: ${props => props.$DEL ? "#991616" : "#2f2f2f"};
        transform: scale(1);
    }
`;