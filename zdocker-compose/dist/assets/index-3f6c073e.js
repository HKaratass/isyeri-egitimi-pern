import{s as i,d as r,r as x,u as f,a as b,j as t}from"./index-d7128c36.js";import{E as T}from"./EventArea-8f29fb19.js";import{F as $}from"./index.es-ad781d3f.js";import{f as D,a as H}from"./event-ab79c8ca.js";import{s as R,a as F}from"./announcement-4958cf4e.js";import{S as m}from"./Skeleton.styled-04faeccc.js";const O=i.aside`
    background-color: ${({theme:e})=>e.duyurular_side_frame};
    width: calc(35% - 5px);
    height: 100%;
    margin: 0 5px 0 0;
    border-radius: 2px;

    @media ${r.mainbrk} {
        width: 40%;
    }

    @media ${r.scdbrk} {
        width: 50%;
    }

    @media ${r.my} {
        width: 100%;
        height: 50%;
    }
`,N=i.h3`
    padding: 0;
    margin: 0 0 0 4px;
    width: calc(100% - 8px);
    height: 27px;
    position: relative;
    color: ${({theme:e})=>e.duyurular_side_head};
    user-select: none;
`;i.a`
    position: absolute;
    right: 3px;
    top: 3px;
    color: ${({theme:e})=>e.show_all_label};
    text-decoration: underline;
    user-select: none;
    cursor: pointer;
    font-size: .8em;
    font-weight: 400;
`;const W=i.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 27px);
`,M=i.div`
    display: flex;
    margin-top: 5px;
    height: calc(100% - 205px - 10vw - 5px);
    width: 100%;

    @media ${r.my} {
        flex-direction: column-reverse;
        height: calc(100% - 150px - 5vw - 5px);
    }
`,B=i.div`
    width: 100%;
    height: calc(205px + 10vw);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media ${r.my} {
        height: calc(150px + 5vw);
    }
`,X=i.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: calc(0.9vh + 1.35vw);
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
`,G=i.div`
    display: flex;
    height: 100%;
    transition: transform ease-out 0.3s;
    /* width: ${e=>e.$widthMultiply*100}%; */
    /* position: absolute; */
    position: relative;
    width: 100%;
    /* transform: translateX( ${e=>e.$n}% ); */
`,j=i.button`
    /* background-color: #232323; */
    background: none;
    width: 15%;
    height: 100%;
    color: white;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    z-index: 2;
    border: none;
    &:hover {
        /* background-color: #121212; */
    }
    position: absolute;
`,q=i(j)`
    left: 0px;
`,P=i(j)`
    right: 0;
`,K=i.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    bottom: 0;
    left: 0;
    /* background: linear-gradient(0deg, #1115 0%, #1111 100%); */
    height: 50px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`,Q=i.div`
    margin: 0 0.2vw;
    cursor: pointer;
    user-select: none;
    font-size: calc(1.5vh + 2vw); /*h1 fontsize */
    /* color: ${({theme:e})=>e.slider_dot}; */
    color: ${e=>e.$active?({theme:s})=>s.dot_selected:({theme:s})=>s.dot};
`,J=i.img`
    width: 100%;
    height: 100%;
    border-radius: calc(0.9vh + 1.35vw);
    cursor: pointer;
    transition: .1s;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    &:hover {
        transform: scale(1.02);
    }
    &:active {
        transform: scale(1);
    }
`,U=i.div`
    width: 100%;
    height: 100%;
    transition: opacity 1s, transform 3s ease-out;
    opacity: ${e=>e.$OPEN?"1":"0"};
    z-index: ${e=>e.$OPEN?"0":"-1"};
    position: absolute;
    /* transform: ${e=>e.$OPEN?"translateX(0%)":"translateX(80%)"};; */
    transform: ${e=>{switch(e.$ANIM){case-1:return"translateX(-80%)";case 0:return"translateX(0%)";case 1:return"translateX(80%)"}}}
`,V=()=>{const[e,s]=x.useState(0),[c,l]=x.useState(!1),d=x.useRef(null),{isLoading:p,isError:h,data:n,error:ne}=f({queryKey:["slides"],queryFn:()=>R("get","")}),v=n==null?void 0:n.length,g=x.useCallback(()=>{const a=e===v-1?0:e+1;s(a)},[e,n==null?void 0:n.resData]);x.useEffect(()=>(d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{c||g()},2750),()=>clearTimeout(d.current)),[g,c]);const A=()=>{const a=e===0?v-1:e-1;s(a)},_=o=>{s(o)},S=b();return t.jsxs(B,{children:[t.jsxs(X,{children:[t.jsx(q,{children:t.jsx($,{onClick:A,icon:D})}),t.jsx(G,{children:p||h?t.jsx(m,{$CLR:h&&"#b96060",$WIDTH:"100%",$HEIGHT:"100%"}):n==null?void 0:n.map((o,a)=>{const C=`/detail/${o.event_id}?target=${o.target}`,E=`/detail/${o.event_id}`,w=o.target&&o.target!=="0"?C:E;function L(z){o.event_id&&o.event_id!=="0"&&(z.ctrlKey?window.open(w,"_blank"):S(w))}return t.jsx(U,{$OPEN:a===e,children:t.jsx(J,{onClick:L,onMouseOver:()=>{l(!0)},onMouseOut:()=>{l(!1)},src:`http://api.proje.isyeriegitimi.com/Images/Slider/${o.id}.jpg`,loading:a>1?"lazy":void 0})},a)})}),t.jsx(P,{children:t.jsx($,{onClick:g,icon:H})})]}),t.jsx(K,{children:!p&&(n==null?void 0:n.map((o,a)=>t.jsx(Q,{onClick:()=>_(a),$active:a===e,children:"•"},a)))})]})},y=i(m)`
    height: 86px;
    width: 86px;
    margin: 2px;
    border-radius: 4px;

    @media ${r.d4l} {
        height: 91px;
        width: 91px;
    }

    @media ${r.mainbrk} {
        height: calc(6vw + 28.5px);
        width: calc(6vw + 28.5px);
    }

    @media ${r.scdbrk} {
        height: calc(180px - 12vw);
        width: calc(180px - 12vw);
    }

    @media ${r.my} {
        height: calc(270px - 40vw);
        width: calc(270px - 40vw);
    }
`,k=i.article`
    display: flex;
    background-color: ${({theme:e})=>e.duyurular_wrapper};
    border-color: none;
    border-bottom: 1px;
    border-top: 0;
    border-style: solid;
    border-image: radial-gradient(
        circle, 
        #0009 70%, 
        #0002 100%) 100% 1;
    /* border-radius: 10px; */
    width: calc(100% - 8px);
    height: auto;//90px;
    margin: 8px 4px;
    transition: .5s;
    cursor: ${e=>e.$clickable&&"pointer"};

    
    @media ${r.d4l} {
        /* height: 95px; */
    }

    @media ${r.mainbrk} {
        /* height: calc(6vw + 33px); */
        margin: calc(1vw - 8px) 4px;
    }

    @media ${r.scdbrk} {
        /* height: 160px;
        margin: calc(1vw - 8px) 4px; */
        /* height: calc(300px - 22vw); */
        margin: 3px 4px;
    }

    @media ${r.my} {
        /* height: calc(275px - 40vw); */
        margin: 3px 4px;
    }


`,Y=i.i`
    cursor: pointer;
    color: #6fa8dc;
`,Z=i.img`
    height: 86px;
    width: 86px;
    margin: 2px;
    border-radius: 4px;
    transition: .5s;
    display: ${e=>e.$LOADING&&"none"};

    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media ${r.d4l} {
        height: 91px;
        width: 91px;
    }

    @media ${r.mainbrk} {
        height: calc(6vw + 28.5px);
        width: calc(6vw + 28.5px);
    }

    @media ${r.scdbrk} {
        height: calc(180px - 12vw);
        width: calc(180px - 12vw);
    }

    @media ${r.my} {
        height: calc(270px - 40vw);
        width: calc(270px - 40vw);
    }
`,I=i.div`
    /* background-color: lightgray; */
    margin: 2px;
    /* height: 86px; */
    height: 100%;
    width: calc(100% - 90px - 4px - 4px);
    overflow: hidden; //test
    

`,ee=i.header`
    font-weight: 500;
    font-size: .9em;

`,te=i.p`
    margin: 0;
    font-size: .8em;

`,ie=({data:e,readAnnouncement:s,lazy:c})=>{const l=b(),[d,p]=x.useState(!0),h=e.description.length>175;return t.jsxs(k,{$clickable:e.event_id,onClick:()=>{e.event_id&&l(`/detail/${e.event_id}`),h&&s(e)},children:[d&&t.jsx(y,{}),t.jsx(Z,{$LOADING:!c&&d,loading:c?"lazy":void 0,src:`http://api.proje.isyeriegitimi.com/Images/Announcement/${e.id}.jpg`,onLoad:()=>p(n=>!n)}),t.jsxs(I,{children:[t.jsx(ee,{children:e.head}),t.jsxs(te,{children:[e.description.substring(0,175),h&&t.jsx(Y,{onClick:()=>{s(e)},children:"...devamı."})]})]})]})},u=({err:e})=>t.jsxs(k,{children:[t.jsx(y,{$CLR:e&&"#b96060"}),t.jsxs(I,{children:[t.jsx(m,{style:{display:"inline-block"},$CLR:e&&"#b96060",$WIDTH:"100%",$HEIGHT:"1.2em",$BR:"2px"}),t.jsx(m,{style:{display:"inline-block"},$CLR:e&&"#b96060",$WIDTH:"100%",$HEIGHT:"3.86em",$BR:"2px"})]})]}),de=({readAnnouncement:e})=>{var p;const{isLoading:s,isError:c,data:l,error:d}=f({queryKey:["announcements"],queryFn:()=>F("get","")});return t.jsxs(t.Fragment,{children:[t.jsx(V,{}),t.jsxs(M,{children:[t.jsx(T,{}),t.jsxs(O,{children:[t.jsx(N,{children:"Duyurular"}),t.jsx(W,{children:s||c?t.jsxs(t.Fragment,{children:[t.jsx(u,{err:c}),t.jsx(u,{err:c}),t.jsx(u,{err:c}),t.jsx(u,{err:c})]}):(p=l==null?void 0:l.resData)==null?void 0:p.map((h,n)=>t.jsx(ie,{readAnnouncement:e,data:h,lazy:n>3},n))})]})]})]})};export{de as default};
