import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IconStyle = styled(FontAwesomeIcon)`
    font-size: 5em;
    color: ${props => props.$COLOR}
`;