import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.detai_kurul_card_wrapper};
    width: calc(100% - 20px);
    height: 60px;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
    height: 60px;
    width: 60px;
    font-size: 100%;
    margin: 5px;
    color: #f2f2f2;
`;