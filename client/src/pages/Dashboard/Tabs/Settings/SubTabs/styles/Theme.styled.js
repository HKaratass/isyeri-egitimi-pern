import styled from "styled-components";

export const ThemeFrame = styled.div`
    width: calc(100% - 20px);
    height: 500px;
    margin: 10px;
    
    @media (max-width: 635px) {
        margin: 3px;
        width: calc(100% - 6px);
    }
`;