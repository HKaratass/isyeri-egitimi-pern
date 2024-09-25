import{i as t,s as o}from"./index-d7128c36.js";const r=t`
    100% {
      transform: translateX(100%);
    }
`,n=o.div`
    width: ${a=>a.$WIDTH};
    height: ${a=>a.$HEIGHT};
    border-radius: ${a=>a.$BR};
    /* display: inline-block; */ //gerek yoksa böyle kalsın
    position: relative;
    overflow: hidden;
    transition: background-color 1s;
    background-color: ${a=>a.$CLR||"#9a9a9a"};

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
        animation: ${r} 5s infinite;
        content: '';
    }
`;export{n as S};
