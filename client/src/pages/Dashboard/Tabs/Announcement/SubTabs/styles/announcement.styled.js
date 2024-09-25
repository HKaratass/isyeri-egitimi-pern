import styled from "styled-components";
import { CommonInputText, CommonTextArea } from "../../../styles/CommonStyle";

export const Head = styled(CommonInputText)`
    font-weight: 600;
`;

export const TextArea = styled(CommonTextArea)`
    height: calc(100% - 10px - 1em);
`;