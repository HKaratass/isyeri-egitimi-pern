import styled from "styled-components";

export const Image = styled.img.attrs({alt: "Oturum Takvimi"})`
    margin-top: 2em;
    margin-left: 1px;
    width: calc(100% - 2px);

    &:hover {
        cursor: zoom-in;
    }
`;