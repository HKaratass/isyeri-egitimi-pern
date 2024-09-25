import styled, { keyframes } from 'styled-components'

const skeleton = keyframes`
    100% {
      transform: translateX(100%);
    }
`;

export const SkeletonBase = styled.div`
    width: ${props => props.$WIDTH};
    height: ${props => props.$HEIGHT};
    border-radius: ${props => props.$BR};
    /* display: inline-block; */ //gerek yoksa böyle kalsın
    position: relative;
    overflow: hidden;
    transition: background-color 1s;
    background-color: ${props => props.$CLR || "#9a9a9a"};

    &::after{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
            90deg,
            rgba(255,255,255, 0) 0,
            rgba(255,255,255, 0.2) 20%,
            rgba(255,255,255, 0.5) 60%,
            rgba(255,255,255, 0) 100%
        );
        animation: ${skeleton} 5s infinite;
        content: '';
    }
`;

