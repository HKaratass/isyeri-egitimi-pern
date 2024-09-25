import styled from "styled-components";
import { devices } from "../../../style/devices";

export const AnnouncementSide = styled.aside`
    background-color: ${({ theme }) => theme.duyurular_side_frame};
    width: calc(35% - 5px);
    height: 100%;
    margin: 0 5px 0 0;
    border-radius: 2px;

    @media ${devices.mainbrk} {
        width: 40%;
    }

    @media ${devices.scdbrk} {
        width: 50%;
    }

    @media ${devices.my} {
        width: 100%;
        height: 50%;
    }
`;

export const AnnouncementSideHead = styled.h3`
    padding: 0;
    margin: 0 0 0 4px;
    width: calc(100% - 8px);
    height: 27px;
    position: relative;
    color: ${({ theme }) => theme.duyurular_side_head};
    user-select: none;
`;

export const ShowAll = styled.a`
    position: absolute;
    right: 3px;
    top: 3px;
    color: ${({ theme }) => theme.show_all_label};
    text-decoration: underline;
    user-select: none;
    cursor: pointer;
    font-size: .8em;
    font-weight: 400;
`;

export const AnnouncementSideScroll = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 27px);
`;


export const FlexWrapper = styled.div`
    display: flex;
    margin-top: 5px;
    height: calc(100% - 205px - 10vw - 5px);
    width: 100%;

    @media ${devices.my} {
        flex-direction: column-reverse;
        height: calc(100% - 150px - 5vw - 5px);
    }
`;