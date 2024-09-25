import styled from "styled-components";

export const Frame = styled.div`
    width: 200px;
    height: 200px;
    background-color: #f2f2f2;
    margin: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    color: ${props => props.$COLOR}55;
    user-select: none;

    &:hover {
        font-size: 1.1em;
        color: ${props => props.$COLOR}ab;

    }

    &:active {
        font-size: 0.9em;
    }

    @media (max-width: 950px) {
        width: calc(100% - 30px);
        height: calc(100% - 30px);
    }

`;

export const InnerNavButtonContainer = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 950px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }

`;