import styled from "styled-components";

export const InputTextArea = styled.textarea`
    width: 100%;
    padding: .3em;
    outline: none;
    margin: 2px;
    height: 8em;
    resize: none;
`;

export const Head = styled.h4`
    margin: 3px 0 5px 0;
    display: flex;
    align-items: center;
    user-select: none;

`;

export const SubHead = styled.h5`
    margin: 3px 0 5px 0;
    display: flex;
    align-items: center;

`;

export const CommitteeContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    /* min-height: 250px; */
    max-height: 250px;
    overflow-y: auto;
    margin-bottom: 10px;
`;

export const AddCommitteeWrap = styled.div`
    background-color: ${({ theme }) => theme.detai_kurul_card_wrapper};
    width: calc(100% - 20px);
    height: 60px;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;