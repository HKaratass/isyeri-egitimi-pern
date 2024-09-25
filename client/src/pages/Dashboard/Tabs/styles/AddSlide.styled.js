import styled from "styled-components";

export const CheckBoxLabel = styled.label`
    user-select: none;
    color: black;
    font-size: 1rem;
    margin: 5px;
`;

export const CheckBox = styled.input.attrs({type: "checkbox"})`
    margin-right: 5px;
`;