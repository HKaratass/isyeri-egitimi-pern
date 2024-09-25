import styled from "styled-components";
import { devices } from "../../../../style/devices";

export const Wrapper = styled.div`
    width: 100%;
    height: calc(205px + 10vw);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media ${devices.my} {
        height: calc(150px + 5vw);
    }
`;

export const SliderArea = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: calc(0.9vh + 1.35vw);
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
`;
export const SlideCont = styled.div`
    display: flex;
    height: 100%;
    transition: transform ease-out 0.3s;
    /* width: ${props => props.$widthMultiply * 100}%; */
    /* position: absolute; */
    position: relative;
    width: 100%;
    /* transform: translateX( ${props => props.$n}% ); */
`;


export const MoveButton = styled.button`
    /* background-color: #232323; */
    background: none;
    width: 15%;
    height: 100%;
    color: white;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    z-index: 2;
    border: none;
    &:hover {
        /* background-color: #121212; */
    }
    position: absolute;
`;
export const MoveButtonLeft = styled(MoveButton)`
    left: 0px;
`;

export const MoveButtonRight = styled(MoveButton)`
    right: 0;
`;

export const DotCont = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    bottom: 0;
    left: 0;
    /* background: linear-gradient(0deg, #1115 0%, #1111 100%); */
    height: 50px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Dots = styled.div`
    margin: 0 0.2vw;
    cursor: pointer;
    user-select: none;
    font-size: calc(1.5vh + 2vw); /*h1 fontsize */
    /* color: ${({ theme }) => theme.slider_dot}; */
    color: ${props => props.$active ? ({ theme }) => theme.dot_selected : ({ theme }) => theme.dot};
`;

export const Imaj = styled.img`
    width: 100%;
    height: 100%;
    border-radius: calc(0.9vh + 1.35vw);
    cursor: pointer;
    transition: .1s;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    &:hover {
        transform: scale(1.02);
    }
    &:active {
        transform: scale(1);
    }
`;

export const OpacityDiv = styled.div`
    width: 100%;
    height: 100%;
    transition: opacity 1s, transform 3s ease-out;
    opacity: ${props => props.$OPEN ? "1" : "0"};
    z-index: ${props => props.$OPEN ? "0" : "-1"};
    position: absolute;
    /* transform: ${props => props.$OPEN ? "translateX(0%)" : "translateX(80%)"};; */
    transform: ${props => {
        switch (props.$ANIM) {
            case -1: return "translateX(-80%)";
            case 0: return "translateX(0%)";
            case 1: return "translateX(80%)";
        }
    }

    }
`;
