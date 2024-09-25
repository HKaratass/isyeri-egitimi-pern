import styled from "styled-components";
import { AcceptButton, CommonInfoFrame, CommonTextArea } from "../../../styles/CommonStyle";

export const SubHead = styled.h5`
    margin: 3px 10px 5px 14px;
    display: flex;
    align-items: center;

`;

export const TextArea = styled(CommonTextArea)`
    height: calc(100% - 10px - 1em);
`;

export const DatesArea = styled.div`
    padding: .5em;
    margin: 4px 10px;
    max-height: 175px;
    width: calc(100% - 1em - 20px);
    overflow-y: auto;
`;

export const DateInfoLabel = styled.label`
    font-size: 1.1em;
    width: 300px;
    margin: 3px 5px;
    margin-left: 10px;
    border-radius: 4px;
    padding: .1em .3em;
    background-color: ${(props) => {
        if (props.$COLOR)
            return props.$COLOR
        else if (props.$UPDATE)
            return "#d9dbf2"
        else if (props.$ADD)
            return "#eafde8"

        else
            return '#fff'
    }};


`;

export const DateLine = styled.div`
    height: auto;
    border-radius: 4px;
    margin: 2px 0;
    padding: 1ch;
    background-color: #fff9;

`;

export const DateInfoFrame = styled(CommonInfoFrame)`
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: start;
    }
`;

export const DateInfoFrameInner = styled(CommonInfoFrame)`
    width: 50%;
    margin: ${props => props.$SCD ? "" : "5px 10px"};
    @media (max-width: 850px) {
        width: calc(100% - 10px);
        margin: 5px 10px;
    }
`;
/**
 * style={{
                    border: "none",
                    backgroundColor: "green",
                    height: "calc(100% - 6px)",
                    margin: "3px",
                    borderRadius: "5px",
                    color: "white",
                    width: "110px"
                }}
 */
export const AcceptDateButton = styled(AcceptButton)`
    margin: 3px;
    width: 110px;
    font-size: 0.9em;
    font-weight: normal;
    height: calc(100% - 6px);
    padding: 5px 5px;

`;