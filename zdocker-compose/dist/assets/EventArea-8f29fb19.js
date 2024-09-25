import{s as a,d as o,a as y,j as t,u as H,r as d}from"./index-d7128c36.js";import{F as w}from"./index.es-ad781d3f.js";import{s as T,o as I,m as R}from"./event-ab79c8ca.js";import{S as s}from"./Skeleton.styled-04faeccc.js";const D=a.div`
    background-color: ${({theme:e})=>e.event_item_bc};
    position: relative;
    width: calc(100% - 8px);
    height: auto;
    margin: 2px;
    padding: 2px;
    border-radius: 2px;
    display: flex;
    
    @media ${o.scdbrk} {
        /* height: 4em; */
        text-align: center;
        justify-content: center;
    }

    @media ${o.my} {
        /* height: 4em; */
        /* text-align: center; */
        /* justify-content: center; */
    }

`,E=a.button`
    background: none;
    width: 10%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6em;
    border-left: 1px solid black;

    cursor: pointer;
    color: ${({theme:e})=>e.event_go_button};
    &:hover {
        color: ${({theme:e})=>e.event_go_button_hover};
    }
    &:active {
        color: ${({theme:e})=>e.event_go_button_active};
    }


`,u=a.div`
    font-size: calc(.65em + .15vw);
    /* font-size: .75em; */
    font-weight: 500;
    /* background-color: #898989; */
    display: flex;
    align-items: center;
    padding: 0 6px;
    user-select: none;

    @media ${o.my} {
        text-align: center;
        justify-content: center;
    }
`,C=a(u)`
    width: 37.5%;
    

`,S=a(u)`
    width: 37.5%;
    border-left: 1px solid black;
`,B=a(u)`
    width: 15%;
    border-left: 1px solid black;
`,A=({data:e})=>{const g=y();function l(i){const r=`/detail/${e.id}`;i.ctrlKey?window.open(r,"_blank"):g(r)}return t.jsxs(D,{children:[t.jsx(C,{children:e.title}),t.jsx(S,{children:e.subtitle}),t.jsx(B,{children:T(e.start_date,e.end_date)}),t.jsx(E,{onClick:l,children:t.jsx(w,{icon:I})})]})},W=a.div`
    background-color: ${({theme:e})=>e.event_area_wrapper};
    width: ${e=>e.$ALL?"calc(65% - 10px)":"100%"};
    height: ${e=>(e.$ALL,"100%")}; //-4 silindi
    margin:  ${e=>e.$ALL?"0 5px 0 5px":"0"};
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    @media ${o.mainbrk} {
        width: ${e=>e.$ALL&&"60%"};
        ${e=>!e.$ALL&&"margin: 0;"};
    }

    @media ${o.scdbrk} {
        width: ${e=>e.$ALL&&"50%"};
    }

    @media ${o.my} {
        width: 100%;
        margin: ${e=>e.$ALL?"4px 0 0 0":"0"};
        height: ${e=>e.$ALL?"calc(50% - 4px)":"100%"}; //-4 silindi
    }
    
`,k=a.h3`
    padding: 0 0 0 5px;
    margin: 0;
    color: ${({theme:e})=>e.event_area_head_tag_label};;
    height: 25px;
    user-select: none;

`,G=a.div`
    overflow-y:  auto;
    height: calc(100% - 25px - 5px - 1.3em - 10px);
    @media ${o.my} {
        width: 100%;
        height: ${e=>e.$ALL?"calc(100% - 25px - 5px - 1.3em - 10px)":"calc(100% - 25px - 5px - 1.3em - 10px - 20px)"}; //-4 silindi
    }
`,F=a.div`
    padding: 5px;
    width: calc(100% - 10px);
    display: flex;
    height: 1.4em;
    user-select: none;

    @media ${o.my} {
        margin-top: ${e=>e.$ALL?"0":"20px"};
        
    }
`,$=a.div`
    margin: 0 3px;
    padding-left: 5px;
    background-color: ${({theme:e})=>e.event_area_table_header_bc};
    border-radius: 3px;
    font-weight: 500;
    width: calc(37.5% - 14px);
    //10/3
`,Y=a($)`
    width: calc(15% - 3px);
`,z=a.a`
    position: absolute;
    right: 3px;
    top: 3px;
    color: ${({theme:e})=>e.show_all_label};
    text-decoration: underline;
    user-select: none;
    cursor: pointer;
`,f=a.select`
    position: absolute;
    outline: 0;
    top: 8px;
    left: 20ch;
    text-align: center;
    width: 120px;
    height: 1.4em;

    @media ${o.my} {
        left: 15px;
        top: 25px;
        
    }

`,K=a(f)`
    left: calc(20ch + 130px);
    width: 160px;

    @media ${o.my} {
        left: 145px;
        top: 25px;
        
    }

`,J=({All:e})=>{const g=y(),{isLoading:l,isError:i,data:r,error:q}=H({queryKey:["e_pre"],queryFn:()=>R("get",e?"pre":"pre/limit")}),[h,j]=d.useState([]),[p,v]=d.useState([]);d.useEffect(()=>{j(r==null?void 0:r.resData),e&&(r==null||r.resData.forEach(n=>{const c=new Date(n.start_date).getFullYear();p.includes(c)||p.push(c)}),v(p.sort(function(n,c){return c-n})))},[r]);const[x,L]=d.useState("-1"),[m,_]=d.useState("-1");function b(n){n.target.name==="category"?L(n.target.value):n.target.name==="year"&&_(n.target.value)}return t.jsxs(W,{$ALL:!e,children:[t.jsx(k,{children:"Etkinlik Listesi"}),!e&&t.jsx(z,{onClick:()=>{g("/events")},children:"Tümü"}),e&&t.jsxs(t.Fragment,{children:[t.jsxs(f,{disabled:l||i,onChange:b,name:"year",children:[t.jsx("option",{hidden:!0,value:-1,children:"Yıl Seçiniz"}),t.jsx("option",{value:-1,children:"Tümü"}),p.map((n,c)=>t.jsx("option",{value:n,children:n},c))]}),t.jsxs(K,{disabled:l,onChange:b,name:"category",children:[t.jsx("option",{hidden:!0,value:-1,children:"Kategori Seçiniz"}),t.jsx("option",{value:-1,children:"Tümü"}),t.jsx("option",{value:0,children:"Sempozyum"}),t.jsx("option",{value:1,children:"Panel"}),t.jsx("option",{value:2,children:"Çalıştay"})]})]}),t.jsxs(F,{$ALL:!e,children:[t.jsx($,{children:"Üst Başlık"}),t.jsx($,{children:"Alt Başlık"}),t.jsx(Y,{children:"Tarih"})]}),t.jsx(G,{$ALL:!e,children:l||i?t.jsxs(t.Fragment,{children:[t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),t.jsx(s,{$CLR:i&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"})]}):h==null?void 0:h.filter((n,c)=>m!=="-1"&&x!=="-1"?new Date(n.start_date).getFullYear().toString()===m&&n.event_type===x:m!=="-1"?new Date(n.start_date).getFullYear().toString()===m:x!=="-1"?n.event_type===x:n).map((n,c)=>t.jsx(A,{data:{...n,start_date:n.start_date?new Date(n.start_date):null,end_date:n.end_date?new Date(n.end_date):null}},c))})]})};export{J as E};
