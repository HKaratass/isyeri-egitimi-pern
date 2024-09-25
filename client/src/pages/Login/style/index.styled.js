import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { devices } from "../../../style/devices";

export const Logo = styled.img`
    width: 25%;
    /* background-color: yellow; */
`;

export const Container = styled.div`
    text-align: center;
    background-color: ${({ theme }) => theme.offWhite};
    min-width: 400px;
    width: 40%;
    margin: 10.25dvh auto 10.25dvh auto;
    height: 80.5dvh;
    padding: .5rem;
    overflow-y: auto;
    border-radius: calc(.2dvh + .3vw);
    box-shadow: 0 2px 6px 2px #6c6c6c;

    @media (orientation: portrait) {
        //keyboard escape
        /* height: 70vh;
        margin-top: 15vh; */

    }
    @media (max-width: 1420px) {
        margin: 15.5dvh auto 15.5dvh auto;
        height: 69dvh;
    }
    @media (max-width: 1050px) {
        margin: 22dvh auto 22dvh auto;
        height: 56dvh;
    }
    @media ${devices.sm} {
        margin: 25.5dvh auto 25.5dvh auto;
        height: 49dvh;
    }
    @media ${devices.xs} {
        min-width: 320px;
    }
`;

export const Form = styled.form.attrs({ method: "post" })`
    padding: 0 20px;
    box-sizing: border-box;
    text-align: left;
`;

export const ForgotPass = styled.div`
    user-select: none;
    margin: calc(-1dvh - 1.5vw) auto calc(1dvh + 1.5vw) 5px;
    /* margin-left: 5px; */
    /* margin-bottom: 500px; */
    color: ${({ theme }) => theme.forgot_pass_color};
    cursor: pointer;
    font-size: calc(0.5dvh + 0.75vw);
    &:hover {
        text-decoration: underline;
    }
`;

//---------------
export const FABLogo = styled(FontAwesomeIcon)`
    padding-right: 1vw;
    padding-left: 1.5vw;
    padding-top: 0.3dvh;
    font-size: calc(1dvh + 1.5vw);
`;
export const FaceLogoSpecial = styled(FABLogo)`
    padding-right: 1.62vw;
`;


export const WithOther = styled.div`
    font-size: calc(0.75dvh + 1vw);
    text-align: center;
    margin-top: 2dvh;
    margin-bottom: 1dvh;

    /* color: ${({ theme }) => theme.girdi_color}; */
    color: #000;
`;


export const WithOtherButton = styled.div`
    border-radius: calc(0.2dvh + 0.3vw);
    & a {
        align-items: center;
        display: block;
        height: calc(1.5dvh + 2vw);
        width: 100%;
        font-size: calc(0.75dvh + 1vw);
        text-decoration: none;
        /* line-height: 45px; */
        /* line-height: 5dvh; */
        color: ${({ theme }) => theme.girdi_color};
        /* border-radius: 5px; */
        transition: all 0.3s ease;
        margin: 1.5dvh 0 1.5dvh 0;

        
    }
    

`;



export const WithFacebookButton = styled(WithOtherButton)`
    background: ${({ theme }) => theme.facebook_before};
    &:hover {
            background: ${({ theme }) => theme.facebook_after};
            /* margin: 200px 0 500px 0; */
        }
`;



export const WithTwitterButton = styled(WithOtherButton)`
    background: ${({ theme }) => theme.twitter_before};
    &:hover {
            background: ${({ theme }) => theme.twitter_after};
            /* margin: 20px 0 50px 0; */
        }
`;



export const WithGoogleButton = styled(WithOtherButton)`
    background: ${({ theme }) => theme.google_before};
    &:hover {
            background: ${({ theme }) => theme.google_after};
            /* margin: 20px 0 50px 0; */
        }
`;

export const SubmitBut = styled.input.attrs(props => ({ type: "button", value: `${props.$v}` }))`

    width: 100%;
    height: calc(1.5dvh + 2vw);
    border: calc(0.03dvh + 0.05vw) solid;

    border-color: ${({ theme }) => theme.login_container_bg};

    background: ${({ theme }) => theme.login_submit_but};
    /* border-radius: calc(1dvh + 1.25vw); */
    border-radius: calc(.5dvh + .75vw);
    /* font-size: 18px; */
    font-size: calc(1dvh + 1.25vw);
    color: ${({ theme }) => theme.login_submit_but_color};
    font-weight: 700;
    cursor: pointer;
    outline: none;

    &:hover{
        border-color: ${({ theme }) => theme.login_submit_but};
        transition: .5s;
    }
`;

export const SignUp = styled.span`
    color: ${({ theme }) => theme.login_submit_but};
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;


export const SignUpLink = styled.div`
    user-select: none;
    margin: 1dvh 0;
    text-align: center;
    font-size: calc(0.5dvh + 0.75vw);
    color: ${({ theme }) => theme.forgot_pass_color};
    & a {
        color: ${({ theme }) => theme.login_submit_but};
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;

export const NoMatch = styled.div`
    width: 100%;
    margin-bottom: calc(0.25dvh + 0.375vw);
    margin-top: calc(-0.75dvh - 1.125vw);
    color: ${({ theme }) => theme.no_match_line_color};
    font-size: calc(0.5dvh + 0.75vw);
    text-align: center;

`;
