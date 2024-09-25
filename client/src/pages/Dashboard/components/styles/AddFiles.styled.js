import styled from "styled-components";

export const LoadFile = styled.label`
    width: 200px;
    height: 200px;
    background-color: white;
    padding: 10px;
    color: #FFA50055;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5em;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
    margin: 5px 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        font-size: 5.1em;
        color: #FFA500ab;

    }

    &:active {
        font-size: 4.9em;
    }


`;

export const LoadedFile = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    padding: 10px;
    /* color: #FFA50055; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* font-size: 5em; */
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
    margin: 5px 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);

`;

