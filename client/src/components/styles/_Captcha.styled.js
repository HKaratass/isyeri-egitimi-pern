import styled, { keyframes } from "styled-components";

export const Frame = styled.div`
    background-color: lightgray;
    width: 70%;
    height: calc(58% - 1.5dvh - 2vw - 20%);
    margin: 5px 15% 5px 15%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
`;

export const Input = styled.input.attrs({ type: "text", maxLength: 6 })`
    width: 70%;
    border: 0;
    text-align: center;
    outline: none;
    background-color: #f2f2f2fa;
    color: #343434;
    position: absolute;
    left: 15%;
    bottom: 8px;
    font-size: 1.2em;
    height: 1.27em;
    font-weight: 700;
    border-radius: 5px;
    padding: .1em 0;
    z-index: 8;
`;

export const TimerFrame = styled.div`
    width: calc(100% - 2px);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 1px;
    background-color: #2691d9aa;
    height: 4px;
    border-radius: 5px;
`;

export const TimerAnimBar = styled.div`
    width: ${props => `calc(${props.$SECOND}% - 2px)`};
    left: 1px;
    top: 0;
    background-color: #002369;
    height: 4px;
    border-radius: 5px;
    position: absolute;
    z-index: 2;
    transition: .95s;

`;

const r1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 361));
const w1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 61) + 40);
const d1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
const mixerAnim1 = keyframes`
    0% { 
        width: ${w1[0]}%;
        transform: rotate(${r1[0]}deg);
        left: ${d1[0]}%;
        top: ${d1[0]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    10% { 
        width: ${w1[1]}%; 
        transform: rotate(${r1[1]}deg);
        left: ${d1[1]}%;
        top: ${d1[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    20% { 
        width: ${w1[2]}%; 
        transform: rotate(${r1[2]}deg);
        left: ${d1[2]}%;
        top: ${d1[2]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    30% { 
        width: ${w1[3]}%;  
        transform: rotate(${r1[3]}deg);
        left: ${d1[3]}%;
        top: ${d1[3]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    40% { 
        width: ${w1[4]}%;  
        transform: rotate(${r1[4]}deg);
        left: ${d1[4]}%;
        top: ${d1[4]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    50% { 
        width: ${w1[5]}%;  
        transform: rotate(${r1[5]}deg);
        left: ${d1[5]}%;
        top: ${d1[5]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    60% { 
        width: ${w1[6]}%;  
        transform: rotate(${r1[6]}deg);
        left: ${d1[6]}%;
        top: ${d1[6]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    70% { 
        width: ${w1[7]}%;  
        transform: rotate(${r1[7]}deg);
        left: ${d1[7]}%;
        top: ${d1[7]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    80% { 
        width: ${w1[8]}%;  
        transform: rotate(${r1[8]}deg);
        left: ${d1[8]}%;
        top: ${d1[8]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    90% { 
        width: ${w1[9]}%;  
        transform: rotate(${r1[9]}deg);
        left: ${d1[9]}%;
        top: ${d1[9]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    100% { 
        width: ${w1[1]}%;  
        transform: rotate(${r1[1]}deg);
        left: ${d1[1]}%;
        top: ${d1[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
`;

const r2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 361));
const w2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 61) + 40);
const d2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
const mixerAnim2 = keyframes`
    0% { 
        width: ${w2[0]}%;
        transform: rotate(${r2[0]}deg);
        left: ${d2[0]}%;
        top: ${d2[0]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    10% { 
        width: ${w2[1]}%; 
        transform: rotate(${r2[1]}deg);
        left: ${d2[1]}%;
        top: ${d2[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    20% { 
        width: ${w2[2]}%; 
        transform: rotate(${r2[2]}deg);
        left: ${d2[2]}%;
        top: ${d2[2]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    30% { 
        width: ${w2[3]}%;  
        transform: rotate(${r2[3]}deg);
        left: ${d2[3]}%;
        top: ${d2[3]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    40% { 
        width: ${w2[4]}%;  
        transform: rotate(${r2[4]}deg);
        left: ${d2[4]}%;
        top: ${d2[4]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    50% { 
        width: ${w2[5]}%;  
        transform: rotate(${r2[5]}deg);
        left: ${d2[5]}%;
        top: ${d2[5]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    60% { 
        width: ${w2[6]}%;  
        transform: rotate(${r2[6]}deg);
        left: ${d2[6]}%;
        top: ${d2[6]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    70% { 
        width: ${w2[7]}%;  
        transform: rotate(${r2[7]}deg);
        left: ${d2[7]}%;
        top: ${d2[7]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    80% { 
        width: ${w2[8]}%;  
        transform: rotate(${r2[8]}deg);
        left: ${d2[8]}%;
        top: ${d2[8]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    90% { 
        width: ${w2[9]}%;  
        transform: rotate(${r2[9]}deg);
        left: ${d2[9]}%;
        top: ${d2[9]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    100% { 
        width: ${w2[1]}%;  
        transform: rotate(${r2[1]}deg);
        left: ${d2[1]}%;
        top: ${d2[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
`;

const r3 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 361));
const w3 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 61) + 40);
const d3 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
const mixerAnim3 = keyframes`
    0% { 
        width: ${w3[0]}%;
        transform: rotate(${r3[0]}deg);
        left: ${d3[0]}%;
        top: ${d3[0]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    10% { 
        width: ${w3[1]}%; 
        transform: rotate(${r3[1]}deg);
        left: ${d3[1]}%;
        top: ${d3[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    20% { 
        width: ${w3[2]}%; 
        transform: rotate(${r3[2]}deg);
        left: ${d3[2]}%;
        top: ${d3[2]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    30% { 
        width: ${w3[3]}%;  
        transform: rotate(${r3[3]}deg);
        left: ${d3[3]}%;
        top: ${d3[3]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    40% { 
        width: ${w3[4]}%;  
        transform: rotate(${r3[4]}deg);
        left: ${d3[4]}%;
        top: ${d3[4]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    50% { 
        width: ${w3[5]}%;  
        transform: rotate(${r3[5]}deg);
        left: ${d3[5]}%;
        top: ${d3[5]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    60% { 
        width: ${w3[6]}%;  
        transform: rotate(${r3[6]}deg);
        left: ${d3[6]}%;
        top: ${d3[6]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    70% { 
        width: ${w3[7]}%;  
        transform: rotate(${r3[7]}deg);
        left: ${d3[7]}%;
        top: ${d3[7]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    80% { 
        width: ${w3[8]}%;  
        transform: rotate(${r3[8]}deg);
        left: ${d3[8]}%;
        top: ${d3[8]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    90% { 
        width: ${w3[9]}%;  
        transform: rotate(${r3[9]}deg);
        left: ${d3[9]}%;
        top: ${d3[9]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    100% { 
        width: ${w3[1]}%;  
        transform: rotate(${r3[1]}deg);
        left: ${d3[1]}%;
        top: ${d3[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
`;

const r4 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 361));
const w4 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 61) + 40);
const d4 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
const mixerAnim4 = keyframes`
    0% { 
        width: ${w4[0]}%;
        transform: rotate(${r4[0]}deg);
        left: ${d4[0]}%;
        top: ${d4[0]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    10% { 
        width: ${w4[1]}%; 
        transform: rotate(${r4[1]}deg);
        left: ${d4[1]}%;
        top: ${d4[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    20% { 
        width: ${w4[2]}%; 
        transform: rotate(${r4[2]}deg);
        left: ${d4[2]}%;
        top: ${d4[2]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    30% { 
        width: ${w4[3]}%;  
        transform: rotate(${r4[3]}deg);
        left: ${d4[3]}%;
        top: ${d4[3]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    40% { 
        width: ${w4[4]}%;  
        transform: rotate(${r4[4]}deg);
        left: ${d4[4]}%;
        top: ${d4[4]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    50% { 
        width: ${w4[5]}%;  
        transform: rotate(${r4[5]}deg);
        left: ${d4[5]}%;
        top: ${d4[5]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    60% { 
        width: ${w4[6]}%;  
        transform: rotate(${r4[6]}deg);
        left: ${d4[6]}%;
        top: ${d4[6]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    70% { 
        width: ${w4[7]}%;  
        transform: rotate(${r4[7]}deg);
        left: ${d4[7]}%;
        top: ${d4[7]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    80% { 
        width: ${w4[8]}%;  
        transform: rotate(${r4[8]}deg);
        left: ${d4[8]}%;
        top: ${d4[8]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    90% { 
        width: ${w4[9]}%;  
        transform: rotate(${r4[9]}deg);
        left: ${d4[9]}%;
        top: ${d4[9]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
    100% { 
        width: ${w4[1]}%;  
        transform: rotate(${r4[1]}deg);
        left: ${d4[1]}%;
        top: ${d4[1]}%;
        height: ${Math.floor(Math.random() * 4) + 4}%;
        background-color: #${Math.random().toString(16).substring(2, 8)};
    }
`;


export const Mixer = styled.div`
    /* width: 100%; */
    /* background-color: bisque; */
    /* transform: rotate(30deg); */
    position: absolute;
    height: 5px;
    left: 0;
    top: 20px;
    z-index: 0;
    transition: 1s;
    border-radius: 4px;
    box-shadow: 0 0 20px 5px #888888;
    animation-name: ${mixerAnim1};
    animation-duration: 5s;
    animation-iteration-count: infinite;
`;
export const Mixer2 = styled(Mixer)`
    animation-name: ${mixerAnim2};
`;
export const Mixer3 = styled(Mixer)` 
    animation-name: ${mixerAnim3};
`;
export const Mixer4 = styled(Mixer)` 
    animation-name: ${mixerAnim4};
`;

export const SelectCover = styled.div`
    width: 100%;
    height: calc(100% - 1.27em - 20px - 0.2em);
    position: absolute;
    z-index: 8;
`;

export const MixerArea = styled.div`
    width: 100%;
    height: calc(100% - 1.27em - 20px - 0.2em);
    position: absolute;
    z-index: 0;
    overflow: hidden;
`;

export const CaptchaImage = styled.img.attrs(props => ({
    src: `${!props.$WAIT && `${import.meta.env.VITE_CAPTCHA_URL}/generate?token=${props.$TOKEN}`}`
}))`
    width: 100%;
    height: calc(100% - 1.27em - 20px - 0.2em);
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;


