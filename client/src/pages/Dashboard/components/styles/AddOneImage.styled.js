import styled from "styled-components";

export const LoadImage = styled.label`
    width: ${props => props.$SLIDE ? "calc(100% - 40px)" : "200px"};
    height: ${props => props.$SLIDE ? (props.$CROP ? "calc(200px + 7vw)" : "calc(205px + 10vw)") : (props.$CROP ? "165px" : "200px")};
    background-color: white;
    padding: 10px;
    color: #B6E7D855;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.$SLIDE ? "calc(5em + 10vw)" : "5em"};
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
    margin: 5px 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    max-height: ${props => props.$SLIDE && "350px"};
    &:hover {
        font-size: ${props => props.$SLIDE ? "calc(5.1em + 10vw)" : "5.1em"};
        color: #B6E7D8;

    }

    &:active {
        font-size: ${props => props.$SLIDE ? "calc(4.9em + 10vw)" : "4.9em"};
    }


`;

export const ShowImageFrame = styled.div`
    width: ${props => props.$SLIDE ? "calc(100% - 40px)" : "200px"};
    height: ${props => props.$SLIDE ? (props.$CROP ? "calc(200px + 7vw)" : "calc(205px + 10vw)") : (props.$CROP ? "165px" : "200px")};
    max-height: ${props => props.$SLIDE && "350px"};
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    margin: 5px 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
`;


export const ShowImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

`;

export const RemovedButton = styled.div`
    position: absolute;
    background-color: #b20000;
    width: 1.2em;
    height: 1.2em;
    border-radius: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2f2f2;
    padding: .2em;
    font-size: .8em;
    top: -.3em;
    right: -.3em;
    transition: .3s;
    cursor: ${props => props.$PENDING ? 'progress' : 'pointer'};

    &:hover {
        background-color: #7f0000;
        transform: scale(1.1);
    }

    &:active {
        background-color: #4c0000;
        transform: scale(1.05);
    }


`;