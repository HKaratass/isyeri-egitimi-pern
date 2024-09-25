import styled from "styled-components";
import { devices } from '@/style/devices';
import { MiddleOrWide } from "@/data/common";

export const Header = styled.header`
    background-color: ${({ theme }) => theme.navbar_bc};
    /* width: calc(100% - 4px); */
    width: 100%;
    /* border-radius: 6px; */
    /* margin: 2px auto 2px auto; */
    height: 75px;

    /* @media ${devices.my} { */
        /* width: calc(100vw - 4px); */
    /* } */

`;

export const Nav = styled.nav`
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 1450px;
    ${MiddleOrWide && "max-width: 1080px;"}
    height: 75px;
    margin: auto;
    display: flex;
    /* position: relative; */ //gereklilik nedeni nedir ?
    
    
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    @media ${devices.my} {
        justify-content: center;
        align-items: center;
    }
`;

export const NavButtonContainer = styled.ul`
    list-style: none;
    display: flex;
    /* margin-right: 45px; */
    margin-right: 5px;
    margin-left: auto;
    overflow: hidden;//sıkıntı
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width: 1080px) {
        margin-right: 7.5px;
    }
    @media ${devices.my} {
        position: absolute;
        width: 295px;
        height: calc(100%);
        top: -10px;
        padding-top: 55px;
        transition: left 1s;
        left: ${props => props.$OPEN ? "0px" : "-295px"};
        background-color: ${({ theme }) => theme.mobile_nav_open_bc_open_state};
        flex-direction: column;
        z-index: 8;
    }
`;



export const Logo = styled.img`
    width: 60px;
    height: 60px;
    margin: 7.5px;
    /* margin-left: 45px; */
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
`;
export const LogoNameContainer = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    @media ${devices.my} {
        width: calc(calc(100% - 60px)/2);
    }
`;

export const LogoLeftNameContainer = styled.div`//only <= 500px
    user-select: none;
    width: calc(calc(100% - 60px)/2);
    font-size: .8em ;
    text-align: center;
`;

export const LogoNameSub = styled.div`
    color: white;
    text-align: left;
    cursor: pointer;
    font-size: calc(.5em + .5vw);
    @media ${devices.my} {
        font-size: .8em;
        text-align: center;

    }
`;
export const TC_Container = styled.div`
    color: #f00;
    font-size: calc(.5em + .5vw);
    @media ${devices.my} {
        font-size: 1em;
    }
    /* font-weight: 500; */

`;

export const NavButton = styled.li`
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-size: 13.3333px;
    font-weight: bold;
    cursor: pointer;
    height: 13px;
    margin-top: 10px;
    margin-right: 3px;
    transition: .4s border;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    &:focus {
        outline: 0;
    }

    &:hover {
        background-color: ${({ theme }) => theme.navbutton_hover};
        border-color: ${({ theme }) => theme.navbutton_hover_border};
    }

    &:active {
        -webkit-transition: background-color 2s ease-out;
        -moz-transition: background-color 2s ease-out;
        -o-transition: background-color 2s ease-out;
        transition: background-color 2s ease-out;
        background-color: ${({ theme }) => theme.navbutton_active};
        transition: .1s border;
        border-color: ${({ theme }) => theme.navbutton_active};
    }

    &:first-child {

    }

    &:last-child {
        margin-right: 0;
      
        
    }

`;

export const AdminNavButton = styled(NavButton)`
    background-color: ${({ theme }) => theme.adminbut};
    border-color: ${({ theme }) => theme.adminbut};
    &:hover {
        background-color: ${({ theme }) => theme.adminbut_hover};
        border-color: ${({ theme }) => theme.adminbut_hover};
    }
    &:active {
        background-color: ${({ theme }) => theme.adminbut_active};
    }
`;

