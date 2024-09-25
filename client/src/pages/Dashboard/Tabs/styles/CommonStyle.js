import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { RemovedButton } from "../../components/styles/AddOneImage.styled";

const popupAnim = keyframes`
 0% { right: -250px; padding: 5px 0; }
 15% { right: 0px; padding: 5px 10px; opacity: 1; }
 90% { right: 0px; padding: 5px 10px; opacity: 1; }
 100% { right: -250px; padding: 5px 0; opacity: 0.3; }
`

export const CommonToast = styled.div`
    position: absolute;
    width: 250px;
    background-color: ${props => props.$ERROR ? "darkred" : "darkgreen"};
    color: #f2f2f2;
    right: -250px;
    padding: 5px 10px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    animation-name: ${popupAnim};
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    z-index: 5;
`;

export const Chooser = styled.select`
    width: calc(100% - 15px);
    height: 60px;
    font-size: 1.1em;
    margin: 5px 10px;
    border-radius: 8px;
    outline: none;

    padding-left: 5px;
    display: block;
    color: #808080;

    background-color: ${(props) => {
        if (props.$COLOR)
            return props.$COLOR
        else if (props.$UPDATE)
            return "#b0b4e5"
        else if (props.$ADD)
            return "#adf6a1"

        else
            return '#fff'
    }};

`;

export const ChooserOption = styled.option`
    background-color: ${(props) => {
        if (props.$BCOLOR)
            return props.$COLOR
        else if (props.$UPDATE)
            return "#3943ac"
        else if (props.$ADD)
            return "#2dd214"

        else
            return '#fff'
    }};
    color: ${(props) => {
        if (props.$COLOR)
            return props.$COLOR
        else if (props.$UPDATE)
            return "#f2f2f2"
        else if (props.$ADD)
            return "#050505"

        else
            return '#000'
    }};

`;

export const ScrollArea = styled.div`
    overflow-y: auto;
    height: 100%;
`;

export const CommonButton = styled.button`
    display: block;
    margin: 5px auto 5px auto;
    background-color: black;
    height: 55px;
    font-weight: 700;
    color: #f2f2f2;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 1.3em;
    padding: 5px 20px;
    cursor: ${props => props.$PENDING ? 'progress' : 'pointer'};
    transition: all .3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: darkgray;

    }

    &:active {
        transform: scale(1);
        background-color: gray;

    }

`;

export const CommonTextArea = styled.textarea`
    width: calc(100% - 1em - 20px);
    padding: .5em;
    outline: none;
    margin: 5px 10px;
    font-size: 1.1em;
    resize: none;
    display: block;
    border-radius: 4px;
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

export const CommonInfoHead = styled.h4`
    margin: 3px 10px;
    height: 1.35em;
    display: flex;
    align-items: center;

`;

export const CommonProgressFrame = styled.div`
    text-align: center;
    background-color: white;
    color: white;
    margin: 5px;
    border-radius: 8px;
    padding: 4px;
    color: black;
    position: relative;
    overflow: hidden;
    z-index: 1;
    height: 1.18em;
`;
export const CommonProgressAnimBar = styled.div`
    position: absolute;
    background-color: #A8D7DF;
    z-index: 0;
    transition: .2s;
    width: ${props => props.$PROGRESS / 10}%;
    height: 100%;
    left: 0;
    top: 0;
`
export const CommonProgressInfo = styled.div`
    position: absolute;
    text-align: center;
    z-index: 1;
    font-size: 1.1em;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    font-weight: 700;
`;

export const CommonInputText = styled.input.attrs({ type: "text" })`
    width: calc(100% - .6em - 20px);
    font-size: 1.1em;
    display: block;
    padding: .3em;
    outline: none;
    border: .2px solid gray;
    margin: 5px 10px;
    border-radius: 4px;
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

export const CommonInputDate = styled.input.attrs({ type: "date" })`
    margin: 2px;
    outline: none;
    text-align: center;
`;


export const OnAirButton = styled(RemovedButton)`
    right: 2em;
    background-color: ${props => props.$onAir ? "green" : "red"};
    transition: background-color .5s;

    &:hover {
        background-color: ${props => props.$onAir ? "green" : "red"};
        transform: scale(1.1);
    }

    &:active {
        background-color: black;
        transform: scale(1.05);
    }

`;

export const CommonInfoFrame = styled.div`
    display: flex;
    align-items: center;
`;

export const ShowInfo = styled(FontAwesomeIcon).attrs({ icon: faCircleQuestion })`
    cursor: pointer;
    margin-right: 10px;
    color: #92BDE4;
    font-size: 1.5em;


`;

export const ShowError = styled.div`
    text-align: center;
    background-color: black;
    color: red;
    font-size: 1.1em;
    margin: 5px;
    border-radius: 8px;
    padding: 4px;
    word-wrap: break-word;
`;

export const ShowSuccess = styled.div`
    text-align: center;
    background-color: darkgreen;
    color: white;
    font-size: 1.1em;
    margin: 5px;
    border-radius: 8px;
    padding: 4px;
    word-wrap: break-word;
`;



export const DelChooser = styled(Chooser)`
    background-color: #e5b0b2;
    color: #808080;
`;

export const DelChooserOption = styled.option`
    background-color: #ac393d;
    color: #f2f2f2;
`;

export const DelButton = styled(CommonButton)`
    background-color: #b20000;
    padding: 5px 40px;
    &:hover {
        background-color: #8B0000;
    }
    &:active {
        background-color: #370000;
    }

`;

export const AddChooser = styled(Chooser)`
    background-color: #adf6a1;
    color: #808080;
`;
export const AddChooserOption = styled.option`
    background-color: #2dd214;
    color: #050505;
`;

export const AcceptButton = styled(CommonButton)`
    background-color: #008000;
    &:hover {
        background-color: #006600;
    }
    &:active {
        background-color: #004c00;
    }
`;

export const UpdateChooser = styled(Chooser)`
    background-color: #b0b4e5;
    color: #808080;
`;

export const UpdateChooserOption = styled.option`
    background-color: #3943ac;
    color: #f2f2f2;
`;

export const UpdateButton = styled(CommonButton)`
    background-color: #262d73;
    padding: 5px 40px;
    &:hover {
        background-color: #191e4d;
    }
    &:active {
        background-color: #060713;
    }

`;