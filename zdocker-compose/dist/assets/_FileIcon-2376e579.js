import{s as o,d as r,j as t,i as h}from"./index-d7128c36.js";import{F as n}from"./index.es-ad781d3f.js";import{N as f,O as b,P as x,Q as w,R as $,S as k,U as v,V as C,W as _,X as y}from"./event-ab79c8ca.js";const N=o.header`
    display: flex;
    width: 100%;
    height: 70px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    align-items: center;
    overflow: hidden;
    background-color: ${({theme:e})=>e.detail_nav_button_bc_selected};//272e38;
`,T=o.div`
    //background-color: #454d58;
    color: #f8f8f8;
    height: 50px;
    font-weight: 500;
    /* line-height: 50px; */
    display: flex;
    align-items: center;
    padding-left: calc(10vw - 20px);
    font-size: calc(0.5em + .7vw);
    width: calc(80% - 10vw);
    border-top-right-radius: 2px; //50
    border-bottom-right-radius: 2px; //50
    user-select: none;

`,M=o.div`
    color: white;
    margin-right: 10px;
    margin-left: auto;
    /* background-color: black; */
    text-align: right;
    width: 20%;

`,U=o.div`
    display: flex;
    width: calc(100% - 4px - 2px);
    padding: 3px;
    height: calc(100% - 70px - 6px);
    background-color: ${({theme:e})=>e.detail_main_wrap};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;

    @media ${r.my} {
        height: calc(100% - 70px - 6px - 50px);
    }
`,G=o.aside`
    background-color: ${({theme:e})=>e.detail_nav_bc};
    width: 253px; //+3px
    margin-top: -3px;
    margin-left: -3px;
    height: calc(100% - 1px + 3px);
    /* border-radius: 5px; */
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow-y: auto;
`,W=o.nav`
    background-color: ${({theme:e})=>e.detail_nav_bc};
    display: flex;
    height: 48px;
    width: 100%;
    font-size: 1.6em;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    border-radius: 4px;
`,Q=o.div`
    width: calc(100% - 250px);
    margin-top: 1px;
    height: calc(100% - 2px);
    /* background-color: black; */
    @media ${r.my} {
        width: 100%;
    }
    /* background-color: #0008; */
`,O=o.label`
    display: block;
    background-color: ${({theme:e})=>e.detail_content_head_bc};
    margin-top: 1px;
    padding-left: 10ch;
    padding-bottom: 3px;
    font-size: 1.2em;
    font-weight: 500;
    height: 1.35em;
    margin-left: 3px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    @media (max-width: 682px) {
        padding-left: 1ch;
    }
    @media ${r.my} {
        margin-left: 0;
    }
`,K=o(O)`
    margin-top: 5px;

`,m=o.p`
    background-color: ${({theme:e})=>e.detail_content_purpose_bc};
    margin-top: 1px;
    padding-left: 6ch;
    padding-bottom: 1em;
    font-size: 1em;
    height: 8em;
    overflow-y: auto;
    margin-bottom: 0;
    padding-top: 1em;
    margin-left: 3px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: calc(100% - 6ch - 3.5px);
    @media ${r.my} {
        margin-left: 0;
        width: calc(100% - 3.5px);
        padding-left: 2px;
    }
`,z=o.div`
    background-color: ${({theme:e})=>e.detail_content_purpose_bc};
    margin-top: 1px;
    padding-left: 6ch;
    padding-bottom: 1em;
    font-size: 1em;
    height: 8em;
    overflow-y: auto;
    margin-bottom: 0;
    padding-top: 1em;
    margin-left: 3px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: calc(100% - 6ch - 3.5px);
    @media ${r.my} {
        margin-left: 0;
        width: calc(100% - 3.5px);
        padding-left: 2px;
    }
`,c=o.div`
    background-color: ${({theme:e})=>e.detail_content_purpose_bc};
    margin-top: 1px;
    /* padding-left: 6ch; */
    padding-bottom: 1em;
    font-size: 1em;
    overflow-y: auto;
    margin-bottom: 0;
    margin-left: 3px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    /* height: calc(100% - 2px - 1.35em - 1em); */
    height: calc(100% - 2px - 1em - 1.35em - 5px - 3px);
    /* width: calc(100% - 6ch - 3px); */
    width: calc(100% - 3px);
    @media ${r.my} {
        width: 100%;
        padding-left: 0;
        margin-left: 0;
    }
`,X=o(c)`
    display: grid;
    grid-template-columns: auto auto auto;

    @media ${r.mainbrk} {
        grid-template-columns: auto auto;

    }
    @media (max-width: 830px) {
        grid-template-columns: auto;
    }
`,Z=o(c)`
    display: grid;
    grid-template-columns: auto auto auto auto;
    place-items: center;

    @media (max-width: 1236px) {
        grid-template-columns: auto auto auto;
    }
    @media (max-width: 998px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 759px) {
        grid-template-columns: auto;
    }
    /* @media ${r.mainbrk} {
        grid-template-columns: auto auto;

    }
    @media (max-width: 830px) {
        grid-template-columns: auto;
    } */


`,q=o(c)`
    height: auto;
    border-radius: 4px;
    margin-top: 3px;
    padding: 1ch 1ch 1ch 6ch;
    width: calc(100% - 7ch - 3px);
    @media ${r.my} {
        width: calc(100% - 2ch);
        padding: 1ch;
    }

`,J=o(m)`
    height: calc(100% - 30px - 1.35em - 1.35em - 9em - 3.5px - 2em - 6px);
`,Y=o(z)`
    height: calc(100% - 30px - 1.35em - 1.35em - 9em - 3.5px - 2em - 6px);
`,ee=o(m)`
    height: calc(100% - 23px - 1.35em - 1em - 3px);
`,D=o(c)`
    display: grid;
    grid-template-columns: auto auto auto;
    height: calc(calc(100% - 1.35em - 1.35em - 1.35em - 45px - 3px - 80px - 2em - 9px)/2);
    padding-left: 0;
    padding-top: 0;
    width: calc(100% - 3px);
    
    @media (max-width: 1390px){
        grid-template-columns: auto auto;
    }

    @media (max-width: 1018px){
        grid-template-columns: auto;
    }

    @media ${r.my} {
        width: calc(100%);
    }
`,oe=o(D)`
    height: 80px;
    padding-bottom: 0;
`,I=o.div`
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #0087aa;
    z-index: 0;
    top: calc(32px / 4 - 1.86px);
    left: calc(-32px / 2 - .5px);
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(45deg);
`,te=o.li`
    list-style: none;
    margin: 5px;
    padding: 0;
    width: calc(100% - 62px);
    background-color: ${e=>e.$Selected?({theme:a})=>a.detail_nav_button_bc_selected:({theme:a})=>a.detail_nav_button_bc};
    text-align: left;
    font-weight: 500;
    padding-left: 50px;
    /* padding-right: 20px; */
    height: 45px;
    line-height: 45px;
    border: 1px solid ${({theme:e})=>e.detail_nav_button_border};
    /* padding: 0 20px; */
    user-select: none;
    cursor: pointer;
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: center;
    color: ${({theme:e})=>e.detail_nav_color};

    /* ${e=>e.$Selected?`
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            border-left: 0;
            width: calc(100% - 11px);
        `:`
            border-radius: 6px;
        
        `} */
    


    &:hover{
        background-color: ${({theme:e})=>e.detail_nav_button_bc_hover};
        ${I} {
            background-color: #026781;
        }
    }

    @media ${r.mainbrk} {
        /* width: 100px; */
    }

`,ae=o.div`
    width: auto;
    height: calc(250px + 1.2em);
    padding: 5px;
    background-color: ${({theme:e})=>e.detail_galeri_image_container};
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;

    transition: .1s;
    &:hover {
        transform: scale(1.01);
    }

    
    
    /* ${e=>e.$OPEN&&`
        width: 90%;
        height: 90%;
        z-index: 9;
        left: 5%;
        top: 2%;
        position: absolute;
    `} */
`,re=o.img`
    width: 100%;
    height: calc(100% - 1.25em);
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`,ie=o.div`
    text-align: center;
    user-select: none;

`,ne=o.div`
    position: absolute;
    width: calc(100% - 13px);
    height: calc(100% - 88px);
    background-color: ${({theme:e})=>e.show_image_bc};;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    border-radius: 4px;
`,ce=o.div`
    position: relative;
    padding: 10px;
    max-height: calc(100% - 40px);
    overflow: hidden;
    margin-top: 10px;
    /* background-color: black; */

`,de=o.img`
    width: 100%;
    max-height: 70dvh;
    background-color: #f2f2f2;
    border-radius: 5px;
    max-width: 1080px;

`,se=o.button`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: red;
    border: none;
    outline: none;
    position: absolute;
    right: 2px;
    top: 2px;
    color: white;
    z-index: 3;

    &:hover {
        background-color: darkred;
    }


`,L=o.div`
    /* width: 350px; */
    width: calc(100% - 20px);
    height: 60px;
    background-color: ${({theme:e})=>e.detai_kurul_card_wrapper};
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    position: relative;
    @media (max-width: 1390px) {
        width: calc(100% - 20px);
    }

    @media ${r.my} {
        width: calc(100% - 20px);
    }
`,R=o(n)`
    height: 50px;
    width: 50px;
    font-size: 100%;
    margin: 5px;
    color: #f2f2f2;
`,S=o.img`
    width: 60px;
    height: 60px;
    /* background-color: red; */
    border-radius: 4px;

`,A=o.div`
    padding: 5px 5px;


`,g=o.label`
    color: ${({theme:e})=>e.detai_kurul_card_name_color};;
    display: block;
    font-size: 1.05em;
    transition: 1s;
    @media (max-width: 680px) {
        margin-top: -8px;
        font-size: .95em;
    }
`,F=o(g)`
    color: ${({theme:e})=>e.detai_kurul_card_title_color};;
    font-size: .8em;
    transition: 1s;
    @media (max-width: 680px) {
        margin-top: 0px;
        font-size: .65em;
    }

`,le=({data:e,children:a})=>t.jsxs(L,{children:[e!=null&&e.image?t.jsx(S,{src:`http://api.proje.isyeriegitimi.com/Images/Committee/${e==null?void 0:e.id}.jpg`}):t.jsx(R,{icon:f}),t.jsxs(A,{children:[t.jsx(g,{children:e==null?void 0:e.name}),t.jsx(F,{children:e==null?void 0:e.title})]}),a]});var pe={prefix:"far",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"]},xe={prefix:"far",iconName:"calendar-check",icon:[448,512,[],"f274","M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},me={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},ge={prefix:"far",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"]};const j=o.div`  
    list-style: none;
    margin: 5px 1vw;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    cursor: pointer;
    padding: 3px;
    background-color: ${e=>e.$Selected?({theme:a})=>a.detail_nav_button_bc_selected:({theme:a})=>a.detail_nav_button_bc};;
    transition: .7s;
    color: black;
    border-radius: 3px;
    overflow: hidden;
    user-select: none;
    width: ${e=>e.$Selected?"120px":"30px"};
    height: 30px;
    color: #f2f2f2;



`,ue=({name:e,changeTab:a,icon:l,title:u,selected:p})=>t.jsxs(j,{onClick:()=>{a(null,e)},$Selected:p,children:[t.jsx(n,{style:{fontSize:".8em"},icon:l}),p&&t.jsx("label",{style:{textAlign:"center",fontSize:".5em",marginLeft:".2em",width:"calc(100% - 25px)"},children:u})]}),he=o.label`
    width: ${e=>e.$SLIDE?"calc(100% - 40px)":"200px"};
    height: ${e=>e.$SLIDE?e.$CROP?"calc(200px + 7vw)":"calc(205px + 10vw)":e.$CROP?"165px":"200px"};
    background-color: white;
    padding: 10px;
    color: #B6E7D855;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.$SLIDE?"calc(5em + 10vw)":"5em"};
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
    margin: 5px 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    max-height: ${e=>e.$SLIDE&&"350px"};
    &:hover {
        font-size: ${e=>e.$SLIDE?"calc(5.1em + 10vw)":"5.1em"};
        color: #B6E7D8;

    }

    &:active {
        font-size: ${e=>e.$SLIDE?"calc(4.9em + 10vw)":"4.9em"};
    }


`,fe=o.div`
    width: ${e=>e.$SLIDE?"calc(100% - 40px)":"200px"};
    height: ${e=>e.$SLIDE?e.$CROP?"calc(200px + 7vw)":"calc(205px + 10vw)":e.$CROP?"165px":"200px"};
    max-height: ${e=>e.$SLIDE&&"350px"};
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    margin: 5px 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
`,be=o.img`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

`,E=o.div`
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
    cursor: ${e=>e.$PENDING?"progress":"pointer"};

    &:hover {
        background-color: #7f0000;
        transform: scale(1.1);
    }

    &:active {
        background-color: #4c0000;
        transform: scale(1.05);
    }


`,V=h`
 0% { right: -250px; padding: 5px 0; }
 15% { right: 0px; padding: 5px 10px; opacity: 1; }
 90% { right: 0px; padding: 5px 10px; opacity: 1; }
 100% { right: -250px; padding: 5px 0; opacity: 0.3; }
`,we=o.div`
    position: absolute;
    width: 250px;
    background-color: ${e=>e.$ERROR?"darkred":"darkgreen"};
    color: #f2f2f2;
    right: -250px;
    padding: 5px 10px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    animation-name: ${V};
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    z-index: 5;
`,d=o.select`
    width: calc(100% - 15px);
    height: 60px;
    font-size: 1.1em;
    margin: 5px 10px;
    border-radius: 8px;
    outline: none;

    padding-left: 5px;
    display: block;
    color: #808080;

    background-color: ${e=>e.$COLOR?e.$COLOR:e.$UPDATE?"#b0b4e5":e.$ADD?"#adf6a1":"#fff"};

`,$e=o.option`
    background-color: ${e=>e.$BCOLOR?e.$COLOR:e.$UPDATE?"#3943ac":e.$ADD?"#2dd214":"#fff"};
    color: ${e=>e.$COLOR?e.$COLOR:e.$UPDATE?"#f2f2f2":e.$ADD?"#050505":"#000"};

`,ke=o.div`
    overflow-y: auto;
    height: 100%;
`,s=o.button`
    display: block;
    margin: 5px auto 5px auto;
    background-color: black;
    height: 55px;
    font-weight: 700;
    color: #f2f2f2;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 1.3em;
    padding: 5px 20px;
    cursor: ${e=>e.$PENDING?"progress":"pointer"};
    transition: all .3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: darkgray;

    }

    &:active {
        transform: scale(1);
        background-color: gray;

    }

`,ve=o.textarea`
    width: calc(100% - 1em - 20px);
    padding: .5em;
    outline: none;
    margin: 5px 10px;
    font-size: 1.1em;
    resize: none;
    display: block;
    border-radius: 4px;
    background-color: ${e=>e.$COLOR?e.$COLOR:e.$UPDATE?"#d9dbf2":e.$ADD?"#eafde8":"#fff"};
`,Ce=o.h4`
    margin: 3px 10px;
    height: 1.35em;
    display: flex;
    align-items: center;

`,_e=o.div`
    text-align: center;
    background-color: white;
    color: white;
    margin: 5px;
    border-radius: 8px;
    padding: 4px;
    color: black;
    position: relative;
    overflow: hidden;
    z-index: 1;
    height: 1.18em;
`,ye=o.div`
    position: absolute;
    background-color: #A8D7DF;
    z-index: 0;
    transition: .2s;
    width: ${e=>e.$PROGRESS/10}%;
    height: 100%;
    left: 0;
    top: 0;
`,Oe=o.div`
    position: absolute;
    text-align: center;
    z-index: 1;
    font-size: 1.1em;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    font-weight: 700;
`,ze=o.input.attrs({type:"text"})`
    width: calc(100% - .6em - 20px);
    font-size: 1.1em;
    display: block;
    padding: .3em;
    outline: none;
    border: .2px solid gray;
    margin: 5px 10px;
    border-radius: 4px;
    background-color: ${e=>e.$COLOR?e.$COLOR:e.$UPDATE?"#d9dbf2":e.$ADD?"#eafde8":"#fff"};
`,De=o.input.attrs({type:"date"})`
    margin: 2px;
    outline: none;
    text-align: center;
`,Ie=o(E)`
    right: 2em;
    background-color: ${e=>e.$onAir?"green":"red"};
    transition: background-color .5s;

    &:hover {
        background-color: ${e=>e.$onAir?"green":"red"};
        transform: scale(1.1);
    }

    &:active {
        background-color: black;
        transform: scale(1.05);
    }

`,Le=o.div`
    display: flex;
    align-items: center;
`,Re=o(n).attrs({icon:b})`
    cursor: pointer;
    margin-right: 10px;
    color: #92BDE4;
    font-size: 1.5em;


`,Se=o.div`
    text-align: center;
    background-color: black;
    color: red;
    font-size: 1.1em;
    margin: 5px;
    border-radius: 8px;
    padding: 4px;
    word-wrap: break-word;
`,Ae=o.div`
    text-align: center;
    background-color: darkgreen;
    color: white;
    font-size: 1.1em;
    margin: 5px;
    border-radius: 8px;
    padding: 4px;
    word-wrap: break-word;
`,Fe=o(d)`
    background-color: #e5b0b2;
    color: #808080;
`,je=o.option`
    background-color: #ac393d;
    color: #f2f2f2;
`,Ee=o(s)`
    background-color: #b20000;
    padding: 5px 40px;
    &:hover {
        background-color: #8B0000;
    }
    &:active {
        background-color: #370000;
    }

`,Ve=o(d)`
    background-color: #adf6a1;
    color: #808080;
`,He=o.option`
    background-color: #2dd214;
    color: #050505;
`,Pe=o(s)`
    background-color: #008000;
    &:hover {
        background-color: #006600;
    }
    &:active {
        background-color: #004c00;
    }
`,Be=o(d)`
    background-color: #b0b4e5;
    color: #808080;
`,Ne=o.option`
    background-color: #3943ac;
    color: #f2f2f2;
`,Te=o(s)`
    background-color: #262d73;
    padding: 5px 40px;
    &:hover {
        background-color: #191e4d;
    }
    &:active {
        background-color: #060713;
    }

`,Me=o.label`
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


`,Ue=o.div`
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

`,i=o(n)`
    font-size: 5em;
    color: ${e=>e.$COLOR}
`;function Ge({fileName:e}){const a=e.lastIndexOf(".");if(a===-1)return t.jsx(i,{$COLOR:"#ffd45e",icon:x});switch(e.slice(a+1)){case"pdf":return t.jsx(i,{$COLOR:"#ED2224",icon:y});case"docx":case"doc":case"dotx":case"docm":case"dotm":case"docb":return t.jsx(i,{$COLOR:"#185abd",icon:_});case"zip":case"7z":case"rar":return t.jsx(i,{$COLOR:"#ffd45e",icon:C});case"pptx":case"ppt":case"pps":case"ppsx":case"pptm":case"potx":case"potm":return t.jsx(i,{$COLOR:"#c43e1c",icon:v});case"xlsx":case"xls":case"xlsm":case"xlsb":case"xltm":case"xltx":return t.jsx(i,{$COLOR:"#107c41",icon:k});case"mp3":case"waw":case"ogg":case"flac":case"aac":case"m4a":case"wma":return t.jsx(i,{$COLOR:"#552B3C",icon:$});case"mp4":case"avi":case"mov":case"wmv":case"flv":case"mkv":case"webm":case"mpg":case"mpeg":return t.jsx(i,{$COLOR:"#FFA500",icon:w});default:return t.jsx(i,{$COLOR:"#ffd45e",icon:x})}}export{Ne as $,fe as A,be as B,O as C,q as D,he as E,c as F,X as G,T as H,ae as I,ze as J,le as K,Ue as L,W as M,te as N,ve as O,Le as P,Re as Q,E as R,ne as S,Ve as T,He as U,Ce as V,Ae as W,Se as X,Pe as Y,Be as Z,Ge as _,_e as a,Te as a0,Fe as a1,je as a2,Ee as a3,Me as a4,d as a5,$e as a6,ke as a7,De as a8,we as a9,Ie as aa,xe as ab,Oe as b,ye as c,ce as d,de as e,se as f,N as g,M as h,U as i,G as j,ge as k,me as l,pe as m,Q as n,z as o,m as p,K as q,Y as r,J as s,oe as t,D as u,ee as v,re as w,ie as x,Z as y,ue as z};
