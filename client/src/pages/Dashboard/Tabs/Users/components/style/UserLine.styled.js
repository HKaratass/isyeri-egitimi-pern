import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 3px;
    border-radius: 4px;
    padding: 4px 6px;
    width: calc(100% - 18px);
    background-color: #fffb;
    position: relative;
    display: flex;
    align-items: center;
`;

export const DeleteButton = styled.button`
    position: absolute;
    right: 7px;
    cursor: ${props => props.$PENDING ? 'progress' : 'pointer'};

`;

export const TagDiv = styled.div`
    background-color: bisque;
    padding: 1px 5px;
    margin: 0 4px;
    border-radius: 3px;

    @media (max-width: 1100px) {
        width: calc(100% - 18px);
    }
`;

export const SecondTagDiv = styled(TagDiv)`
    background-color: #704b5b;
    color: #f2f2f2;
`;

export const FlexArea = styled.div`
    display: flex;
    align-items: center;
    margin: 3px 0;

    @media (max-width: 1100px) {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 4px 0;
    }
    @media (max-width: 750px) {
        display: grid;
        grid-template-columns: auto;
        grid-gap: 4px 0;
    }
`;