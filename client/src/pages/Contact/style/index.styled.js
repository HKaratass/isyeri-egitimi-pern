import styled from "styled-components";

export const Frame = styled.div`
    background-color: #34343435;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    padding: 10px;
    border-radius: 5px;
    overflow-y: auto;
`;

export const TagContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    place-items: center;
    @media (max-width: 599.5px) {
        grid-template-columns: auto;
    }
`;

export const Tag = styled.div`
    width: 450px;
    background-color: #fff5;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 205px;
    border-radius: 5px;
    overflow: hidden;
    @media (max-width: 950px) {
        width: 98%;
    }
    @media (max-width: 599.5px) {
        width: 100%;
        height: 85px;
        margin: 5px 0;
    }
    @media (max-width: 520px) {
        height: 95px;
    }
    @media (max-width: 380px) {
        height: 125px;
    }
`;


export const Map = styled.iframe.attrs({
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.1282836834885!2d32.819285471461775!3d39.938585593080305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34eda2bd572e3%3A0xc4944b9ae7b9927!2sGazi%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1726845282065!5m2!1str!2str",
    width: "100%",
    height: "100%",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: ""
})`
    border: none;
`;

export const CenterInfo = styled.div`
    text-align: center;
    background-color: #fff5;
    border-radius: 5px;
    margin: 5px 0;
    height: 1.5em;
    overflow: hidden;
    @media (max-width: 599.5px) {
        height: 2.9em;
    }
`;

export const MapFrame = styled.div`
    border-radius: 5px;
    overflow: hidden;
    border-bottom: -20px;
    background-color: #f2f2f2;
    width: 100%;
    height: calc(100% - 205px - 1.5em - 10px);
    @media (max-width: 599.5px) {
        height: calc(100% - 190px - 2.9em - 10px);
    }
    @media (max-width: 520px) {
        height: calc(100% - 210px - 2.9em - 10px);
    }
    @media (max-width: 380px) {
        height: calc(100% - 270px - 2.9em - 10px);
    }
`;