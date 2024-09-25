import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    border-bottom: 2px solid ${({ theme }) => theme.login_text_box_underline};
    margin: calc(1.5vh + 2vw) 0;
`;

export const PlaceHolder = styled.label`
    position: absolute;
    top: 50%;
    left: 5px;
    color: ${({ theme }) => theme.login_text_box_underline};
    transform: translateY(-50%);
    font-size: calc(0.75vh + 1vw);
    pointer-events: none;


`;



export const UnderLine = styled.span`
    &::before{
        content: '';
        position: absolute;
        /* top: 40px; */
        top: 100%;
        left: 0;
        width: 0%;
        height: 2px;
        background: ${({ theme }) => theme.login_submit_but}; /**#2691d9 */
        transition: .5s;
    }

`;


export const Input = styled.input.attrs(props => ({ type: props.$t }))`
    width: 100%;
    padding: 0 5px;
    /* height: 40px; */
    height: 5%;
    font-size: calc(0.75vh + 1vw);
    /* font-size: 16px; */
    border: none;
    background: none;
    outline: none;

    color: black;//${({ theme }) => theme.girdi_color};

    &:focus ~ ${PlaceHolder}{
        transition: 0.5s;
    }
    &:focus ~ ${PlaceHolder}, &:valid ~${PlaceHolder}{
        /* top: 5px; */
        top: calc(42% - calc(0.75vh + 1vw));
        color: ${({theme}) => theme.login_submit_but};
    }
    &:focus ~ ${UnderLine}::before, &:valid ~${UnderLine}::before{
        width: 100%;
    }

`;