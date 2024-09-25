import styled from "styled-components";

export const Frame = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    max-height: 560px;
    overflow-y: auto;



`;

export const LoadImage = styled.label`
    width: 200px;
    height: 200px;
    background-color: white;
    padding: 10px;
    color: #B6E7D855;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.$SLIDE ? "calc(5em + 10vw)" : "5em"};
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
    margin: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        font-size: 5.1em;
        color: #B6E7D8;

    }

    &:active {
        font-size: 4.9em;
    }


`;