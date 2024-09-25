import styled from "styled-components";
import { CommonInputText, CommonTextArea } from "../../../styles/CommonStyle";

export const TextArea = styled(CommonTextArea)`
    height: ${props => props.$FEEDBACK ? 'calc(100% - 75px - 20px - 1.6em - 34px)' : 'calc(100% - 75px - 20px - 1.6em)'};
`;

export const Indicator = styled(CommonInputText)`
    font-weight: 600;
`;