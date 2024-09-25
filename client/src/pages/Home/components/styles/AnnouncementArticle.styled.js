import styled from "styled-components";
import { devices } from "@/style/devices";
import { SkeletonBase } from "@/style/Skeleton.styled";

export const SkeletonAnnouncementImage = styled(SkeletonBase)`
    height: 86px;
    width: 86px;
    margin: 2px;
    border-radius: 4px;

    @media ${devices.d4l} {
        height: 91px;
        width: 91px;
    }

    @media ${devices.mainbrk} {
        height: calc(6vw + 28.5px);
        width: calc(6vw + 28.5px);
    }

    @media ${devices.scdbrk} {
        height: calc(180px - 12vw);
        width: calc(180px - 12vw);
    }

    @media ${devices.my} {
        height: calc(270px - 40vw);
        width: calc(270px - 40vw);
    }
`;

export const Wrapper = styled.article`
    display: flex;
    background-color: ${({ theme }) => theme.duyurular_wrapper};
    border-color: none;
    border-bottom: 1px;
    border-top: 0;
    border-style: solid;
    border-image: radial-gradient(
        circle, 
        #0009 70%, 
        #0002 100%) 100% 1;
    /* border-radius: 10px; */
    width: calc(100% - 8px);
    height: auto;//90px;
    margin: 8px 4px;
    transition: .5s;
    cursor: ${props => props.$clickable && "pointer"};

    
    @media ${devices.d4l} {
        /* height: 95px; */
    }

    @media ${devices.mainbrk} {
        /* height: calc(6vw + 33px); */
        margin: calc(1vw - 8px) 4px;
    }

    @media ${devices.scdbrk} {
        /* height: 160px;
        margin: calc(1vw - 8px) 4px; */
        /* height: calc(300px - 22vw); */
        margin: 3px 4px;
    }

    @media ${devices.my} {
        /* height: calc(275px - 40vw); */
        margin: 3px 4px;
    }


`;

export const Continue = styled.i`
    cursor: pointer;
    color: #6fa8dc;
`;

export const Image = styled.img`
    height: 86px;
    width: 86px;
    margin: 2px;
    border-radius: 4px;
    transition: .5s;
    display: ${props => props.$LOADING && "none"};

    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media ${devices.d4l} {
        height: 91px;
        width: 91px;
    }

    @media ${devices.mainbrk} {
        height: calc(6vw + 28.5px);
        width: calc(6vw + 28.5px);
    }

    @media ${devices.scdbrk} {
        height: calc(180px - 12vw);
        width: calc(180px - 12vw);
    }

    @media ${devices.my} {
        height: calc(270px - 40vw);
        width: calc(270px - 40vw);
    }
`;

export const InfoContainer = styled.div`
    /* background-color: lightgray; */
    margin: 2px;
    /* height: 86px; */
    height: 100%;
    width: calc(100% - 90px - 4px - 4px);
    overflow: hidden; //test
    

`;

export const InfoHeader = styled.header`
    font-weight: 500;
    font-size: .9em;

`;

export const Info = styled.p`
    margin: 0;
    font-size: .8em;

`;
