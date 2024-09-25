import styled from "styled-components";
import { devices } from "@/style/devices"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkeletonBase } from '@/style/Skeleton.styled'

export const ReportFrame = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    height: 90%;
    padding: 15px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.detail_report_frame};
    position: relative;

    @media (max-width: 810px) {
        padding: 15px 10px;
        margin: 5px;
    }

    @media ${devices.my} {
        padding: 15px 5px;
    }
`;

export const InputText = styled.input.attrs({ type: "text" })`
    background-color: ${({ theme }) => theme.detail_report_input_bc};
    outline: 0;
    border: none;
    padding: 4px;
    font-size: 1em;
    margin: 2px;
    border-radius: 3px;
    width: 100%;

`;


export const InputIcon = styled(FontAwesomeIcon)`
    transition: color 1s;
    width: 100%;
    color: ${props => props.$REGEX ? "darkgreen" : props.$C || "black"};
`;
export const IconContainer = styled.label`
    margin: ${props => props.$VALID ? "2px" : "0"};
    width: ${props => props.$VALID ? "25px" : "0"};
    transition: width .7s;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;


`;

export const TextArea = styled.textarea`
    background-color: ${({ theme }) => theme.detail_report_input_bc};;
    resize: none;
    margin: 2px;
    width: calc(100% - 12px);
    height: calc(100% - 225px);
    border-radius: 3px;
    padding: 4px;
    outline: 0;
    border: none;
    transition: 1s;

    @media (max-width: 668px) and (min-width: 500px) {
        height: calc(100% - 265px);
        
    }
    @media (max-width: 415px) {
        height: calc(100% - 265px);
    }

`;

export const SendButton = styled.button`
    background-color: ${({ theme }) => theme.detail_report_send_button};
    outline: 0;
    border: none;
    position: absolute;
    right: 15px;
    bottom: 12px;
    padding: 5px;
    color: white;
    height: 32px;
    font-size: 1em;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
    transition: scale 1s;
    cursor: ${props => props.$PENDING && 'progress'};

    &:hover {
        background-color: darkgreen;
        transform: scale(1.03);
    }
`;

export const RemoveFile = styled.div`
    background-color: #b20000;
    color: #f2f2f2;
    margin-top: 3px;
    margin-right: ${props => props.$VALID ? "2px" : "0"};
    border-radius: 3px;
    user-select: none;
    cursor: pointer;
    transition: all .2s, width .4s;
    width: ${props => props.$VALID ? "70px" : "0"};
    text-align: center;
    overflow: hidden;
    cursor: ${props => props.$PENDING && 'progress'};

    &:hover {
        transform: scale(1.005);
        background-color: #7f0000;
        box-shadow: 3px 5px 8px #888888;
    }
`;

export const AttachFile = styled.label`
    user-select: none;
    display: block;
    height: 1.4em;
    text-align: center;
    background-color: ${props => props.$LOADED ? "green" : "orange"};
    color: ${props => props.$LOADED ? "white" : "black"};
    margin-top: 3px;
    margin-left: 2px;
    margin-right: 2px;
    line-height: 1.3em;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    transition: .2s;
    cursor: ${props => props.$PENDING && 'progress'};

    &:hover {
        transform: scale(1.005);
        box-shadow: 3px 5px 8px #888888;
        ${props => props.$LOADED && `
            background-color: #800E34;
            &::after {
                content: " (DEĞİŞTİR) ";
            }
        `}
       
    }


`;

export const CaptchaInput = styled.input.attrs({ type: "text", maxLength: 5 })`
    width: 135px;
    border: 0;
    text-align: center;
    outline: none;
    background-color: #f2f2f2fa;
    color: #343434;
    position: absolute;
    left: 200px;
    bottom: 11px;
    font-size: 1em;
    height: 1.6em;
    font-weight: 700;
    border-radius: 5px;
    padding: .1em 0;
    z-index: 8;
    transition: 1s;

    @media (max-width: 700px) and (min-width: 668px) { //500
        left: 170px;
    }
    @media (max-width: 631px) and (min-width: 600px) { //500
        left: 170px;
    }
    @media (max-width: 446px) and (min-width: 415px) { //500
        left: 170px;
    }
    @media (max-width: 600px) and (min-width: 500px) { //500
        left: 18px;
    }
    @media (max-width: 344px) { //500
        left: 18px;
    }
    @media (max-width: 372px) and (min-width: 344px) { //500
        left: 170px;
    }
    @media (max-width: 668px) and (min-width: 600px) {
        bottom: 51px;
    }
    @media (max-width: 415px) and (min-width: 344px) {
        bottom: 51px;
    }
`;

export const CaptchaImage = styled.img.attrs(props => ({
    src: `${!props.$WAIT && `${import.meta.env.VITE_CAPTCHA_URL}/generate_paper?token=${props.$TOKEN}`}`
}))`
    position: absolute;
    bottom: 5px;
    left: 18px;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    z-index: 2;

    transition: 1s;

    @media (max-width: 668px) and (min-width: 500px) {
        bottom: 46px;
    }
    @media (max-width: 415px) {
        bottom: 46px;
    }
`;
// <SkeletonBase style={{ position: "absolute", bottom: "5px", left: "18px" }} $CLR={(isError || err) && "#b96060"} $WIDTH={"150px"} $HEIGHT={"40px"} $BR={"5px"} />

export const CaptchaSkeleton = styled(SkeletonBase)`
    position: absolute;
    bottom: 5px;
    left: 18px;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    background-color: ${props => props.$ERR && "#b96060"};

    transition: 1s;

    @media (max-width: 668px) and (min-width: 500px) {
        bottom: 46px;
    }
    @media (max-width: 415px) {
        bottom: 46px;
    }
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

export const ShowErrorAbs = styled(ShowError)`
    position: absolute;
    width: calc(100% - 41px);
    right: 11px;
    bottom: 77px;
    transition: 1s;
    @media (max-width: 668px) and (min-width: 500px) {
        bottom: 117px;
        
    }
    @media (max-width: 415px) {
        bottom: 117px;
    }
`;

export const ShowSuccess = styled(ShowErrorAbs)`
    background-color: darkgreen;
    color: white;

`;