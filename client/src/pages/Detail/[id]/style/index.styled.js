import styled from "styled-components";
import { devices } from "@/style/devices"

export const DetailHeader = styled.header`
    display: flex;
    width: 100%;
    height: 70px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    align-items: center;
    overflow: hidden;
    background-color: ${({ theme }) => theme.detail_nav_button_bc_selected};//272e38;
`;
export const HeaderName = styled.div`
    //background-color: #454d58;
    color: #f8f8f8;
    height: 50px;
    font-weight: 500;
    /* line-height: 50px; */
    display: flex;
    align-items: center;
    padding-left: calc(10vw - 20px);
    font-size: calc(0.5em + .7vw);
    width: calc(80% - 10vw);
    border-top-right-radius: 2px; //50
    border-bottom-right-radius: 2px; //50
    user-select: none;

`;
export const HeaderDate = styled.div`
    color: white;
    margin-right: 10px;
    margin-left: auto;
    /* background-color: black; */
    text-align: right;
    width: 20%;

`;

export const FlexWrap = styled.div`
    display: flex;
    width: calc(100% - 4px - 2px);
    padding: 3px;
    height: calc(100% - 70px - 6px);
    background-color: ${({ theme }) => theme.detail_main_wrap};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;

    @media ${devices.my} {
        height: calc(100% - 70px - 6px - 50px);
    }
`;

export const DetailNav = styled.aside`
    background-color: ${({ theme }) => theme.detail_nav_bc};
    width: 253px; //+3px
    margin-top: -3px;
    margin-left: -3px;
    height: calc(100% - 1px + 3px);
    /* border-radius: 5px; */
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow-y: auto;
`;
export const MobilDetailNav = styled.nav`
    background-color: ${({ theme }) => theme.detail_nav_bc};
    display: flex;
    height: 48px;
    width: 100%;
    font-size: 1.6em;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    border-radius: 4px;
`;

export const ContentArea = styled.div`
    width: calc(100% - 250px);
    margin-top: 1px;
    height: calc(100% - 2px);
    /* background-color: black; */
    @media ${devices.my} {
        width: 100%;
    }
    /* background-color: #0008; */
`;
export const ContentHead = styled.label`
    display: block;
    background-color: ${({ theme }) => theme.detail_content_head_bc};
    margin-top: 1px;
    padding-left: 10ch;
    padding-bottom: 3px;
    font-size: 1.2em;
    font-weight: 500;
    height: 1.35em;
    margin-left: 3px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    @media (max-width: 682px) {
        padding-left: 1ch;
    }
    @media ${devices.my} {
        margin-left: 0;
    }
`;
export const ContentHeadII = styled(ContentHead)`
    margin-top: 5px;

`;

export const ContentPurpose = styled.p`
    background-color: ${({ theme }) => theme.detail_content_purpose_bc};
    margin-top: 1px;
    padding-left: 6ch;
    padding-bottom: 1em;
    font-size: 1em;
    height: 8em;
    overflow-y: auto;
    margin-bottom: 0;
    padding-top: 1em;
    margin-left: 3px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: calc(100% - 6ch - 3.5px);
    @media ${devices.my} {
        margin-left: 0;
        width: calc(100% - 3.5px);
        padding-left: 2px;
    }
`;
export const ContentPurposeForSkeleton = styled.div`
    background-color: ${({ theme }) => theme.detail_content_purpose_bc};
    margin-top: 1px;
    padding-left: 6ch;
    padding-bottom: 1em;
    font-size: 1em;
    height: 8em;
    overflow-y: auto;
    margin-bottom: 0;
    padding-top: 1em;
    margin-left: 3px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: calc(100% - 6ch - 3.5px);
    @media ${devices.my} {
        margin-left: 0;
        width: calc(100% - 3.5px);
        padding-left: 2px;
    }
`;



export const FullContentArea = styled.div`
    background-color: ${({ theme }) => theme.detail_content_purpose_bc};
    margin-top: 1px;
    /* padding-left: 6ch; */
    padding-bottom: 1em;
    font-size: 1em;
    overflow-y: auto;
    margin-bottom: 0;
    margin-left: 3px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    /* height: calc(100% - 2px - 1.35em - 1em); */
    height: calc(100% - 2px - 1em - 1.35em - 5px - 3px);
    /* width: calc(100% - 6ch - 3px); */
    width: calc(100% - 3px);
    @media ${devices.my} {
        width: 100%;
        padding-left: 0;
        margin-left: 0;
    }
`;

export const GridContent = styled(FullContentArea)`
    display: grid;
    grid-template-columns: auto auto auto;

    @media ${devices.mainbrk} {
        grid-template-columns: auto auto;

    }
    @media (max-width: 830px) {
        grid-template-columns: auto;
    }
`;

export const GridContentFile = styled(FullContentArea)`
    display: grid;
    grid-template-columns: auto auto auto auto;
    place-items: center;

    @media (max-width: 1236px) {
        grid-template-columns: auto auto auto;
    }
    @media (max-width: 998px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 759px) {
        grid-template-columns: auto;
    }
    /* @media ${devices.mainbrk} {
        grid-template-columns: auto auto;

    }
    @media (max-width: 830px) {
        grid-template-columns: auto;
    } */


`;

export const DateContent = styled(FullContentArea)`
    height: auto;
    border-radius: 4px;
    margin-top: 3px;
    padding: 1ch 1ch 1ch 6ch;
    width: calc(100% - 7ch - 3px);
    @media ${devices.my} {
        width: calc(100% - 2ch);
        padding: 1ch;
    }

`;

export const ContentText = styled(ContentPurpose)`
    height: calc(100% - 30px - 1.35em - 1.35em - 9em - 3.5px - 2em - 6px);
`;
export const ContentTextForSkeleton = styled(ContentPurposeForSkeleton)`
    height: calc(100% - 30px - 1.35em - 1.35em - 9em - 3.5px - 2em - 6px);
`;

export const ContentFull = styled(ContentPurpose)`
    height: calc(100% - 23px - 1.35em - 1em - 3px);
`;

export const ContentCouncil = styled(FullContentArea)`
    display: grid;
    grid-template-columns: auto auto auto;
    height: calc(calc(100% - 1.35em - 1.35em - 1.35em - 45px - 3px - 80px - 2em - 9px)/2);
    padding-left: 0;
    padding-top: 0;
    width: calc(100% - 3px);
    
    @media (max-width: 1390px){
        grid-template-columns: auto auto;
    }

    @media (max-width: 1018px){
        grid-template-columns: auto;
    }

    @media ${devices.my} {
        width: calc(100%);
    }
`;

export const ContentCouncilChairman = styled(ContentCouncil)`
    height: 80px;
    padding-bottom: 0;
`;

export const Diamond = styled.div`
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #0087aa;
    z-index: 0;
    top: calc(32px / 4 - 1.86px);
    left: calc(-32px / 2 - .5px);
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(45deg);
`;

export const NavList = styled.li`
    list-style: none;
    margin: 5px;
    padding: 0;
    width: calc(100% - 62px);
    background-color: ${props => props.$Selected ? ({ theme }) => theme.detail_nav_button_bc_selected : ({ theme }) => theme.detail_nav_button_bc};
    text-align: left;
    font-weight: 500;
    padding-left: 50px;
    /* padding-right: 20px; */
    height: 45px;
    line-height: 45px;
    border: 1px solid ${({ theme }) => theme.detail_nav_button_border};
    /* padding: 0 20px; */
    user-select: none;
    cursor: pointer;
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.detail_nav_color};

    /* ${props => props.$Selected ?
        `
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            border-left: 0;
            width: calc(100% - 11px);
        `
        :
        `
            border-radius: 6px;
        
        `
    } */
    


    &:hover{
        background-color: ${({ theme }) => theme.detail_nav_button_bc_hover};
        ${Diamond} {
            background-color: #026781;
        }
    }

    @media ${devices.mainbrk} {
        /* width: 100px; */
    }

`;

export const ImageContainer = styled.div`
    width: auto;
    height: calc(250px + 1.2em);
    padding: 5px;
    background-color: ${({ theme }) => theme.detail_galeri_image_container};
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;

    transition: .1s;
    &:hover {
        transform: scale(1.01);
    }

    
    
    /* ${props => props.$OPEN && `
        width: 90%;
        height: 90%;
        z-index: 9;
        left: 5%;
        top: 2%;
        position: absolute;
    `} */
`;

export const Image = styled.img`
    width: 100%;
    height: calc(100% - 1.25em);
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

export const ImageTitle = styled.div`
    text-align: center;
    user-select: none;

`;

export const ShowImageContainer = styled.div`
    position: absolute;
    width: calc(100% - 13px);
    height: calc(100% - 88px);
    background-color: ${({ theme }) => theme.show_image_bc};;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    border-radius: 4px;
`;
export const ShowImageContainerInnerRelative = styled.div`
    position: relative;
    padding: 10px;
    max-height: calc(100% - 40px);
    overflow: hidden;
    margin-top: 10px;
    /* background-color: black; */

`;

export const ShowImage = styled.img`
    width: 100%;
    max-height: 70dvh;
    background-color: #f2f2f2;
    border-radius: 5px;
    max-width: 1080px;

`;

export const ShowImageRemoveButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: red;
    border: none;
    outline: none;
    position: absolute;
    right: 2px;
    top: 2px;
    color: white;
    z-index: 3;

    &:hover {
        background-color: darkred;
    }


`;




