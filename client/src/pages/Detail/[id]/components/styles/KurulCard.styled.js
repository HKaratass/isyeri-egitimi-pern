import styled from "styled-components";
import { devices } from "../../../../../style/devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
    /* width: 350px; */
    width: calc(100% - 20px);
    height: 60px;
    background-color: ${({ theme }) => theme.detai_kurul_card_wrapper};
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    position: relative;
    @media (max-width: 1390px) {
        width: calc(100% - 20px);
    }

    @media ${devices.my} {
        width: calc(100% - 20px);
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    height: 50px;
    width: 50px;
    font-size: 100%;
    margin: 5px;
    color: #f2f2f2;
`;

export const Image = styled.img`
    width: 60px;
    height: 60px;
    /* background-color: red; */
    border-radius: 4px;

`;

export const TextContainer = styled.div`
    padding: 5px 5px;


`;

export const Name = styled.label`
    color: ${({ theme }) => theme.detai_kurul_card_name_color};;
    display: block;
    font-size: 1.05em;
    transition: 1s;
    @media (max-width: 680px) {
        margin-top: -8px;
        font-size: .95em;
    }
`;

export const Title = styled(Name)`
    color: ${({ theme }) => theme.detai_kurul_card_title_color};;
    font-size: .8em;
    transition: 1s;
    @media (max-width: 680px) {
        margin-top: 0px;
        font-size: .65em;
    }

`;