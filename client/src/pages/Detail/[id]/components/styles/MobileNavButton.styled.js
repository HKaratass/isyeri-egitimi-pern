import styled from "styled-components";

export const Wrapper = styled.div`  
    list-style: none;
    margin: 5px 1vw;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    cursor: pointer;
    padding: 3px;
    background-color: ${props => props.$Selected ? ({ theme }) => theme.detail_nav_button_bc_selected : ({ theme }) => theme.detail_nav_button_bc};;
    transition: .7s;
    color: black;
    border-radius: 3px;
    overflow: hidden;
    user-select: none;
    width: ${props => props.$Selected ? "120px" : "30px"};
    height: 30px;
    color: #f2f2f2;



`;