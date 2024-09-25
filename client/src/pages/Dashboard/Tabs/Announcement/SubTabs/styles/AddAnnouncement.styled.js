import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { devices } from "../../../../../../style/devices";

export const Frame = styled.div`
    width: calc(100% - 40px);
    height: calc(100dvh - 75px - 4px - 3px - 10px - 40px);
    background-color: #B6E7D855;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto;
    /* align-items: center; */

`;

export const InputFrame = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    /* color: #92BDE4; */
    /* background-color: black; */
    @media ${devices.d4l} {
        width: 100%;
    }
`;

export const ShowInfo = styled(FontAwesomeIcon).attrs({ icon: faCircleQuestion })`
    cursor: pointer;
    margin-right: 10px;
    color: #92BDE4;
    font-size: 1.5em;


`;

export const InputText = styled.input.attrs({ type: "text" })`
    width: 100%;
    padding: .3em;
    outline: none;
    margin: 2px;

`;

export const InputTextHead = styled(InputText)`
    height: 1.5em;
    font-size: 1.1em;
    font-weight: 700;
`;
export const InputTextDescription = styled.textarea`
    width: 100%;
    padding: .3em;
    outline: none;
    margin: 2px;
    height: 4.5em;
    resize: none;
`;

export const FrameHead = styled.h1`
    text-decoration: underline;
    user-select: none;
`;

export const AddImageHead = styled.h4`
    margin: 3px 0 5px 0;

`;

export const SubmitButton = styled.button`
    width: 200px;
    height: 50px;
    font-size: 1.2em;
    font-weight: 600;
    border-radius: 5px;
    background-color: #008000;
    border: none;
    margin: 10px auto 10px auto;
    cursor: pointer;
    color: #f2f2f2;

    &:hover {
        background-color: #006600;
    }

    &:active {
        background-color: #004c00;

    }



`;

export const ShowError = styled.div`
    color: #cc0000;
    text-align: center;



`;

export const SelectBox = styled.select`
    width: 100%;
    padding: .3em;
    height: 2.4em;
    margin: 2px;
    outline: 0;


`;