import styled from "styled-components";

export const Float = styled.div`
    position: absolute;
    transition: left 1s;
    left: ${props => props.$OPEN ? "245px" : "-55px"};
    top: 55px;
    border-radius: 60px;
    height: 39px;

    overflow: hidden;
    /* width: ; */
    padding-left: 50px;
    z-index: 9;

`;

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    /* float: left; */
    width: 40px;
    height: 39px;
    cursor: pointer;
    background-color: ${props => props.$OPEN ? ({ theme }) => theme.mobile_nav_open_bc_open_state : ({ theme }) => theme.mobile_nav_open_bc};


`;

export const Button = styled.button`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    appearance: none;
    cursor: pointer;

`;

export const BarConatiner = styled.span`
    display: block;
    position: absolute;
    width: 27.2px;
    height: 27.2px;
    margin: auto;
    cursor: pointer;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transition: .3s;
`;

const OneBar = styled.span`
    width: 100%;
    height: 3px;
    right: 0;
    background-color: ${({ theme }) => theme.mobile_nav_open_one_bar};
    position: absolute;
    border-radius: 3px;
    transition: .5s;

`;

export const TopBar = styled(OneBar)`
    top: ${props => props.$OPEN ? "0" : "4px"};
    transform: ${props => props.$OPEN && "rotate(45deg) translate(8px, 7px)"};

`;

export const MiddleBar = styled(OneBar)`
    top: calc(50% - 1px);
    opacity: ${props => props.$OPEN && "0"};
`;

export const BottomBar = styled(OneBar)`
    bottom: ${props => props.$OPEN ? "2px" : "3px"};
    transform: ${props => props.$OPEN && "rotate(-45deg) translate(8px, -7px)"};
`;
