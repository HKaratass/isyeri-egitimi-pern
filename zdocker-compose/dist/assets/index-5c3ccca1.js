import{s as x,d as ge,b as ce,r as H,u as xe,c as $e,j as e,e as je,f as be,R as E}from"./index-d7128c36.js";import{C as $,F as X,a as fe,b as ye,c as Ie,D as de,S as De,d as He,e as Te,f as Ce,g as Re,H as we,h as _e,i as Ee,j as ke,N as f,k as Q,l as Z,m as J,n as y,o as Se,p as Le,q as ze,r as Ge,s as ve,t as Be,K as V,u as ee,v as Fe,G as Pe,I as We,w as Ae,x as Ne,y as Oe,L as Ke,_ as Me,M as Ve,z as I}from"./_FileIcon-2376e579.js";import{F as b}from"./index.es-ad781d3f.js";import{T as O,b as Ye,c as Ue,d as Xe,e as qe,g as Qe,n as Ze,s as Je,h as te,i as ae,j as ne,k as se,l as ie,m as et}from"./event-ab79c8ca.js";import{S as l}from"./Skeleton.styled-04faeccc.js";import{u as re}from"./useMutation-f7b76f5b.js";import{c as le}from"./captcha-36fa58ec.js";const tt=x.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    height: 90%;
    padding: 15px;
    border-radius: 10px;
    background-color: ${({theme:n})=>n.detail_report_frame};
    position: relative;

    @media (max-width: 810px) {
        padding: 15px 10px;
        margin: 5px;
    }

    @media ${ge.my} {
        padding: 15px 5px;
    }
`,k=x.input.attrs({type:"text"})`
    background-color: ${({theme:n})=>n.detail_report_input_bc};
    outline: 0;
    border: none;
    padding: 4px;
    font-size: 1em;
    margin: 2px;
    border-radius: 3px;
    width: 100%;

`,S=x(b)`
    transition: color 1s;
    width: 100%;
    color: ${n=>n.$REGEX?"darkgreen":n.$C||"black"};
`,L=x.label`
    margin: ${n=>n.$VALID?"2px":"0"};
    width: ${n=>n.$VALID?"25px":"0"};
    transition: width .7s;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`,C=x.div`
    display: flex;
    width: 100%;
    align-items: center;


`,at=x.textarea`
    background-color: ${({theme:n})=>n.detail_report_input_bc};;
    resize: none;
    margin: 2px;
    width: calc(100% - 12px);
    height: calc(100% - 225px);
    border-radius: 3px;
    padding: 4px;
    outline: 0;
    border: none;
    transition: 1s;

    @media (max-width: 668px) and (min-width: 500px) {
        height: calc(100% - 265px);
        
    }
    @media (max-width: 415px) {
        height: calc(100% - 265px);
    }

`,nt=x.button`
    background-color: ${({theme:n})=>n.detail_report_send_button};
    outline: 0;
    border: none;
    position: absolute;
    right: 15px;
    bottom: 12px;
    padding: 5px;
    color: white;
    height: 32px;
    font-size: 1em;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
    transition: scale 1s;
    cursor: ${n=>n.$PENDING&&"progress"};

    &:hover {
        background-color: darkgreen;
        transform: scale(1.03);
    }
`,st=x.div`
    background-color: #b20000;
    color: #f2f2f2;
    margin-top: 3px;
    margin-right: ${n=>n.$VALID?"2px":"0"};
    border-radius: 3px;
    user-select: none;
    cursor: pointer;
    transition: all .2s, width .4s;
    width: ${n=>n.$VALID?"70px":"0"};
    text-align: center;
    overflow: hidden;
    cursor: ${n=>n.$PENDING&&"progress"};

    &:hover {
        transform: scale(1.005);
        background-color: #7f0000;
        box-shadow: 3px 5px 8px #888888;
    }
`,it=x.label`
    user-select: none;
    display: block;
    height: 1.4em;
    text-align: center;
    background-color: ${n=>n.$LOADED?"green":"orange"};
    color: ${n=>n.$LOADED?"white":"black"};
    margin-top: 3px;
    margin-left: 2px;
    margin-right: 2px;
    line-height: 1.3em;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    transition: .2s;
    cursor: ${n=>n.$PENDING&&"progress"};

    &:hover {
        transform: scale(1.005);
        box-shadow: 3px 5px 8px #888888;
        ${n=>n.$LOADED&&`
            background-color: #800E34;
            &::after {
                content: " (DEĞİŞTİR) ";
            }
        `}
       
    }


`,rt=x.input.attrs({type:"text",maxLength:5})`
    width: 135px;
    border: 0;
    text-align: center;
    outline: none;
    background-color: #f2f2f2fa;
    color: #343434;
    position: absolute;
    left: 200px;
    bottom: 11px;
    font-size: 1em;
    height: 1.6em;
    font-weight: 700;
    border-radius: 5px;
    padding: .1em 0;
    z-index: 8;
    transition: 1s;

    @media (max-width: 700px) and (min-width: 668px) { //500
        left: 170px;
    }
    @media (max-width: 631px) and (min-width: 600px) { //500
        left: 170px;
    }
    @media (max-width: 446px) and (min-width: 415px) { //500
        left: 170px;
    }
    @media (max-width: 600px) and (min-width: 500px) { //500
        left: 18px;
    }
    @media (max-width: 344px) { //500
        left: 18px;
    }
    @media (max-width: 372px) and (min-width: 344px) { //500
        left: 170px;
    }
    @media (max-width: 668px) and (min-width: 600px) {
        bottom: 51px;
    }
    @media (max-width: 415px) and (min-width: 344px) {
        bottom: 51px;
    }
`,lt=x.img.attrs(n=>({src:`${!n.$WAIT&&`http://captcha.proje.isyeriegitimi.com/generate_paper?token=${n.$TOKEN}`}`}))`
    position: absolute;
    bottom: 5px;
    left: 18px;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    z-index: 2;

    transition: 1s;

    @media (max-width: 668px) and (min-width: 500px) {
        bottom: 46px;
    }
    @media (max-width: 415px) {
        bottom: 46px;
    }
`,ot=x(l)`
    position: absolute;
    bottom: 5px;
    left: 18px;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    background-color: ${n=>n.$ERR&&"#b96060"};

    transition: 1s;

    @media (max-width: 668px) and (min-width: 500px) {
        bottom: 46px;
    }
    @media (max-width: 415px) {
        bottom: 46px;
    }
`,me=x.div`
    text-align: center;
    background-color: black;
    color: red;
    font-size: 1.1em;
    margin: 5px;
    border-radius: 8px;
    padding: 4px;
    word-wrap: break-word;
`,he=x(me)`
    position: absolute;
    width: calc(100% - 41px);
    right: 11px;
    bottom: 77px;
    transition: 1s;
    @media (max-width: 668px) and (min-width: 500px) {
        bottom: 117px;
        
    }
    @media (max-width: 415px) {
        bottom: 117px;
    }
`,pt=x(he)`
    background-color: darkgreen;
    color: white;

`;ce.defaults.debug=!1;const ct=async(n,j)=>{try{const r=await ce({method:"post",url:"http://api.proje.isyeriegitimi.com/send-paper",data:n,headers:{"X-CSRF-TOKEN":localStorage.getItem("XEV")},...j});return{...r.data,status:r.status}}catch(r){if(r.response.data.authOut)return alert(`${r.response.data.code} - OTURUM KAPATILIYOR`),window.location.href="/admin/dashboard";throw{data:r.response.data,status:r.response.status}}},Y=n=>String(n).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),oe=n=>String(n).match(/^(\+?\d{10,15})$/),pe={name:"",surname:"",email:"",emailAgain:"",phoneNumber:"",text:""},xt=({data:n,isError:j,pending:r})=>{var q;const[h,d]=H.useState(),[D,T]=H.useState(),[a,s]=H.useState({...pe,captchaT4p:""}),[t,z]=H.useState(0),o=re({mutationFn:i=>ct(i,{onUploadProgress:m=>z(Math.round(m.loaded*1e3/m.total))}),onError:i=>{d(`${i.data.code} - ${i.data.message}`),z(0),s(m=>({...m,captchaT4p:""})),w.mutate()},onSuccess:i=>{s({...pe,captchaT4p:""}),w.mutate(),z(0),T(i.message)}}),{isLoading:G,isError:v,data:R,error:K}=xe({queryKey:["captcha_paper"],queryFn:()=>le({withCredentials:!0},!0),refetchOnWindowFocus:!1}),B=$e(),w=re({mutationKey:["captcha_paper"],mutationFn:()=>le({withCredentials:!0},!0),onError:()=>{d(!0)},onSuccess:i=>{B.setQueryData(["captcha_paper"],i)}}),F=i=>String(i).match(/^(\+?\d{0,15})$/);function u(i){if(o.isPending)return 0;if(i.target.name==="file"){if(i.target.files[0].size>5242880)return d("Dosya boyutu fazla.");s({...a,[i.target.name]:i.target.files[0]})}else i.target.name==="phoneNumber"?F(i.target.value)&&s({...a,[i.target.name]:i.target.value}):s({...a,[i.target.name]:i.target.value});d(null),T(null)}const P=i=>{switch(i){case"1":return"I";case"0":return"O";case"ı":return"I";case"i":return"I";default:return/[üşçöğ*&-.,\"\?\_<>@]/i.test(i)?"":i}};function W(i){if(o.isPending)return 0;const{value:m}=i.target,ue=m.split("").map(M=>P(M)).join("");s(M=>({...M,[i.target.name]:ue.toUpperCase()})),d(!1),T(null)}function _(){var m;if(a.name===""||a.surname===""||a.email===""||a.emailAgain===""||a.phoneNumber===""||a.text==="")return d("Lütfen formu boş bırakmayınız.");if(!Y(a.email))return d("Lütfen geçerli bir e-posta adresi giriniz.");if(a.email!==a.emailAgain)return d("Girdiğiniz e-posta adresleri uyuşmamaktadır.");if(!oe(a.phoneNumber))return d("Lütfen geçerli bir telefon numarası giriniz.");if(a.captchaT4p.length!==5)return d("Doğrulama kodu 5 haneli olmalıdır.");const i=new FormData;i.append("name",a.name),i.append("surname",a.surname),i.append("email",a.email),i.append("phoneNumber",a.phoneNumber),i.append("text",a.text),i.append("captchaT4p",a.captchaT4p),i.append("captcha_token",R),i.append("event_id",n.resData.id),a.file&&i.append("file",a.file,Ze((m=a.file)==null?void 0:m.name)),o.mutate(i)}function A(i){if(o.isPending||D)return 0;i.key==="Enter"&&_()}const p=new Date,c=!r&&n.resData.sum_first_day_date&&n.resData.sum_last_day_date&&O(n.resData.sum_first_day_date)<=p&&O(n.resData.sum_last_day_date)>=p,g=!r&&n.resData.text_first_day_date&&n.resData.text_last_day_date&&O(n.resData.text_first_day_date)<=p&&O(n.resData.text_last_day_date)>=p;function N(){if(o.isPending)return 0;const{file:i,...m}=a;s(m)}return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Bildiri Gönder - ",c?"Özet Gönder":g?"Tam Metin Gönder":"Tarihleri Takip Ediniz"," "]}),r?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(l,{$CLR:j&&"#b96060",style:{margin:"5px",padding:"15px 10px",maxWidth:"500px"},$WIDTH:"100%",$HEIGHT:"90%",$BR:"10px"})}):c||g?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs(tt,{children:[e.jsxs(C,{children:[e.jsx(L,{$VALID:a.name.length,children:e.jsx(S,{icon:Ye,title:"Adı"})}),e.jsx(k,{value:a.name,onChange:u,name:"name",placeholder:"Adı"})]}),e.jsxs(C,{children:[e.jsx(L,{$VALID:a.surname.length,children:e.jsx(S,{icon:Ue,title:"Soyadı"})}),e.jsx(k,{value:a.surname,onChange:u,name:"surname",placeholder:"Soyadı"})]}),e.jsxs(C,{children:[e.jsx(L,{$VALID:a.email.length,children:e.jsx(S,{$REGEX:Y(a.email),icon:Xe,title:"E-Posta"})}),e.jsx(k,{value:a.email,onChange:u,name:"email",placeholder:"E-Posta"})]}),e.jsxs(C,{children:[e.jsx(L,{$VALID:a.emailAgain.length,children:e.jsx(S,{$C:"darkred",$REGEX:Y(a.email)&&a.email===a.emailAgain,icon:qe,title:"E-Posta Tekrar"})}),e.jsx(k,{value:a.emailAgain,onChange:u,name:"emailAgain",placeholder:"E-Posta Tekrar"})]}),e.jsxs(C,{children:[e.jsx(L,{$VALID:a.phoneNumber.length,children:e.jsx(S,{$C:"darkred",$REGEX:oe(a.phoneNumber),icon:Qe,title:"Telefon Numarası"})}),e.jsx(k,{value:a.phoneNumber,onChange:u,name:"phoneNumber",placeholder:"Telefon Numarası"})]}),e.jsx(at,{value:a.text,onChange:u,name:"text",placeholder:`${c?`Şu an özet gönderme tarihlerindesiniz. Sadece özet gönderebilirsiniz.
Özetinizi yazınız ya da yapıştırınız.`:g?`Şu an tam metin gönderme tarihlerindesiniz. Sadece tam metin gönderebilirsiniz.
Metininizi yazınız ya da yapıştırınız.`:""}`}),e.jsxs(C,{children:[e.jsxs(it,{$PENDING:o.isPending,$LOADED:a.file,children:[a.file?a.file.name:" Dosya Yükle (Max: 5MB)",e.jsx("input",{disabled:o.isPending,value:"",onChange:u,type:"file",name:"file",style:{display:"none"}})]}),e.jsx(st,{$PENDING:o.isPending,$VALID:a.file,onClick:N,children:"KALDIR"})]}),h&&e.jsx(he,{children:h}),D&&!h&&e.jsx(pt,{children:D}),e.jsx(ot,{$ERR:j||h}),e.jsx(lt,{$WAIT:G||v,$TOKEN:R}),e.jsx(rt,{onKeyDown:A,name:"captchaT4p",onChange:W,value:a.captchaT4p,placeholder:"Doğrulama Kodu"}),t!==0&&!D&&!h&&e.jsxs(fe,{style:{position:"absolute",width:"calc(100% - 40px)",right:"11px",bottom:"77px"},children:[e.jsx(ye,{children:t!==1e3?`${t}/1000`:"Bekleyiniz..."}),e.jsx(Ie,{$PROGRESS:t})]}),e.jsx(nt,{$PENDING:o.isPending,disabled:o.isPending,onClick:_,children:"Gönder"})]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"calc(100% - 1.35em - 2px - 3px - 3px - 18px - 1.2em)",overflowY:"auto"},children:(q=n.resData.dates)==null?void 0:q.map((i,m)=>e.jsx(de,{children:i},m))}),e.jsx(me,{children:"Tarihleri takip ediniz."})]})]})},dt=x.img.attrs({alt:"Oturum Takvimi"})`
    margin-top: 2em;
    margin-left: 1px;
    width: calc(100% - 2px);

    &:hover {
        cursor: zoom-in;
    }
`,mt=({EventId:n,ScheduleState:j,isError:r})=>{function h(){window.open(`http://api.proje.isyeriegitimi.com/Images/Events/${n}/schedule.jpg`,"_blank")}return e.jsxs(e.Fragment,{children:[e.jsx($,{children:"Oturum Takvimi"}),e.jsx(X,{children:n?j?e.jsx(dt,{onClick:h,src:`http://api.proje.isyeriegitimi.com/Images/Events/${n}/schedule.jpg`}):e.jsx("center",{children:"Oturum takvimi henüz yüklenmedi."}):e.jsx(l,{$CLR:r&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"50%",$BR:"5px"})})]})},U={about:!1,dates:!1,committee:!1,thesis_manual:!1,send_paper:!1,schedule:!1,gallery:!1,contents:!1},yt=()=>{var G,v,R,K,B,w,F,u,P,W,_,A;const[n,j]=H.useState(null),[r,h]=H.useState({...U,about:!0}),d=je(),{id:D}=be(),T=[{purpose_head:"Sempozyumun",text_head:"Sempozyum"},{purpose_head:"Panelin",text_head:"Panel"},{purpose_head:"Çalıştayın",text_head:"Çalıştay"}],{isLoading:a,isError:s,data:t,error:z}=xe({queryKey:["e",D],queryFn:()=>et("get",D)});H.useEffect(()=>{const c=new URLSearchParams(location.search).get("target");c&&h({...U,[c]:!0})},[]);const o=(p,c)=>{h({...U,[(p==null?void 0:p.target.getAttribute("name"))||c]:!0})};return e.jsxs(e.Fragment,{children:[n&&e.jsx(De,{children:e.jsxs(He,{children:[e.jsx(Te,{src:n}),e.jsx(Ce,{onClick:()=>j(null),children:"X"})]})}),e.jsxs(Re,{children:[!a&&!s?e.jsx(we,{children:t==null?void 0:t.resData.title}):e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px",padding:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1.917em",$BR:"2px"}),e.jsx(_e,{children:!a&&!s?Je((t==null?void 0:t.resData.start_date)&&new Date(t==null?void 0:t.resData.start_date),(t==null?void 0:t.resData.end_date)&&new Date(t==null?void 0:t.resData.end_date)):"? - ?"})]}),e.jsxs(Ee,{children:[d.w>500&&e.jsxs(ke,{children:[e.jsxs(f,{$Selected:r.about,onClick:o,name:"about",children:[e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:te}),"Hakkında"]}),e.jsxs(f,{$Selected:r.dates,onClick:o,name:"dates",children:[e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:Q}),"Tarihler"]}),e.jsxs(f,{$Selected:r.committee,onClick:o,name:"committee",children:[" ",e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:ae}),"Kurullar"]}),e.jsxs(f,{$Selected:r.thesis_manual,onClick:o,name:"thesis_manual",children:[e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:ne}),"Yazım Kuralları"]}),e.jsxs(f,{$Selected:r.send_paper,onClick:o,name:"send_paper",children:[e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:se}),"Bildiri Gönder"]}),e.jsxs(f,{$Selected:r.schedule,onClick:o,name:"schedule",children:[e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:Z}),"Oturum Takvimi"]}),e.jsxs(f,{$Selected:r.gallery,onClick:o,name:"gallery",children:[e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:ie}),"Galeri"]}),e.jsxs(f,{$Selected:r.contents,onClick:o,name:"contents",children:[e.jsx(b,{style:{position:"absolute",left:"10px",fontSize:"1.1em"},icon:J}),"İçerik"]})]}),r.about&&e.jsxs(y,{children:[e.jsxs($,{children:[T[parseInt((G=t==null?void 0:t.resData)==null?void 0:G.event_type)||0].purpose_head," Amacı"]}),a||s?e.jsxs(Se,{children:[e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"})]}):e.jsx(Le,{children:(v=t==null?void 0:t.resData.purpose)==null?void 0:v.split(`
`).map((p,c)=>e.jsxs(E.Fragment,{children:[p,e.jsx("br",{})]},c))}),e.jsxs(ze,{children:[T[parseInt((R=t==null?void 0:t.resData)==null?void 0:R.event_type)||0].text_head," Metni"]}),a||s?e.jsxs(Ge,{children:[e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"2px"},$WIDTH:"calc(100% - 8px)",$HEIGHT:"1em",$BR:"2px"})]}):e.jsx(ve,{children:(K=t==null?void 0:t.resData.text)==null?void 0:K.split(`
`).map((p,c)=>e.jsxs(E.Fragment,{children:[p,e.jsx("br",{})]},c))})]}),r.dates&&e.jsxs(y,{children:[e.jsx($,{style:{borderRadius:"4px"},children:"Önemli Tarihler"}),e.jsx("div",{style:{height:"calc(100% - 1.35em - 2px - 3px - 3px)",overflowY:"auto"},children:a||s?e.jsxs(e.Fragment,{children:[e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"3px",padding:"1ch 1ch 1ch 6ch"},$WIDTH:"calc(100% - 7ch - 6px)",$HEIGHT:"2em",$BR:"4px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"3px",padding:"1ch 1ch 1ch 6ch"},$WIDTH:"calc(100% - 7ch - 6px)",$HEIGHT:"2em",$BR:"4px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"3px",padding:"1ch 1ch 1ch 6ch"},$WIDTH:"calc(100% - 7ch - 6px)",$HEIGHT:"2em",$BR:"4px"})]}):(B=t==null?void 0:t.resData.dates)==null?void 0:B.map((p,c)=>e.jsx(de,{children:p},c))})]}),r.committee&&e.jsxs(y,{children:[e.jsx($,{children:"Onursal Başkan"}),e.jsx(Be,{children:s||a?e.jsx(e.Fragment,{children:e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"})}):(t==null?void 0:t.resData.committee_chairman)!==0&&(t==null?void 0:t.resData.committee_chairman)&&e.jsx(V,{data:t==null?void 0:t.resData.committee_chairman})}),e.jsx($,{style:{marginTop:"15px"},children:"Bilim Kurulu"}),e.jsx(ee,{children:a||s?e.jsxs(e.Fragment,{children:[e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"})]}):(w=t==null?void 0:t.resData.science_committee)==null?void 0:w.map((p,c)=>e.jsx(V,{data:p},c))}),e.jsx($,{style:{marginTop:"15px"},children:"Düzenleme Kurulu"}),e.jsx(ee,{children:a||s?e.jsxs(e.Fragment,{children:[e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"60px",$BR:"5px"})]}):(F=t==null?void 0:t.resData.regulatory_authority)==null?void 0:F.map((p,c)=>e.jsx(V,{data:p},c))})]}),r.thesis_manual&&e.jsxs(y,{children:[e.jsx($,{children:"Yazım Kuralları"}),e.jsx(Fe,{children:a||s?s?"Yazım Kuralları Yüklenemedi.":"Yükleniyor...":(u=t==null?void 0:t.resData.thesis_manual)==null?void 0:u.split(`
`).map((p,c)=>e.jsxs(E.Fragment,{children:[p.includes("<b>")?e.jsx(E.Fragment,{children:e.jsx("b",{children:p.replace("<b>","")})}):e.jsx(E.Fragment,{children:p}),e.jsx("br",{})]},c))})]}),r.send_paper&&e.jsx(y,{children:e.jsx(xt,{isError:s,pending:s||a,data:t})}),r.schedule&&e.jsx(y,{children:e.jsx(mt,{isError:s,ScheduleState:!s&&!a&&(t==null?void 0:t.resData.schedule),EventId:!s&&!a&&(t==null?void 0:t.resData.id)})}),r.gallery&&e.jsxs(y,{children:[e.jsx($,{children:"Galeri"}),e.jsx(Pe,{children:a||s?e.jsxs(e.Fragment,{children:[e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"calc(250px + 1.2em)",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"calc(250px + 1.2em)",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"calc(250px + 1.2em)",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"calc(250px + 1.2em)",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px",padding:"5px"},$WIDTH:"calc(100% - 20px)",$HEIGHT:"calc(250px + 1.2em)",$BR:"5px"})]}):((P=t==null?void 0:t.resData.gallery)==null?void 0:P.length)>0?(W=t==null?void 0:t.resData.gallery)==null?void 0:W.map((p,c)=>{const g=JSON.parse(p),N=`http://api.proje.isyeriegitimi.com/Images/Events/${t==null?void 0:t.resData.id}/${g.image_id}.jpg`;return e.jsxs(We,{onClick:()=>j(N),children:[e.jsx(Ae,{src:N}),e.jsx(Ne,{children:g.title})]},c)}):e.jsx("center",{children:"Henüz bir görsel yüklenmedi"})})]}),r.contents&&e.jsxs(y,{children:[e.jsx($,{children:"İçerik"}),e.jsx(Oe,{children:a||s?e.jsxs(e.Fragment,{children:[e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px 10px",padding:"10px"},$WIDTH:"200px",$HEIGHT:"200px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px 10px",padding:"10px"},$WIDTH:"200px",$HEIGHT:"200px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px 10px",padding:"10px"},$WIDTH:"200px",$HEIGHT:"200px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px 10px",padding:"10px"},$WIDTH:"200px",$HEIGHT:"200px",$BR:"5px"}),e.jsx(l,{$CLR:s&&"#b96060",style:{margin:"5px 10px",padding:"10px"},$WIDTH:"200px",$HEIGHT:"200px",$BR:"5px"})]}):((_=t==null?void 0:t.resData.contents)==null?void 0:_.length)>0?(A=t==null?void 0:t.resData.contents)==null?void 0:A.map((p,c)=>{const g=JSON.parse(p);return e.jsxs(Ke,{onClick:()=>{window.open(`http://api.proje.isyeriegitimi.com/Contents/Events/${t==null?void 0:t.resData.id}/${g.file_name}`,"_blank")},children:[e.jsx(Me,{fileName:g.file_name}),e.jsx("label",{children:g.title})]},c)}):e.jsx("center",{children:"Henüz bir içerik yüklenmemiş."})})]})]}),d.w<=500&&e.jsxs(Ve,{children:[e.jsx(I,{name:"about",changeTab:o,selected:r.about,title:"Hakkında",icon:te}),e.jsx(I,{name:"dates",changeTab:o,selected:r.dates,title:"Tarihler",icon:Q}),e.jsx(I,{name:"committee",changeTab:o,selected:r.committee,title:"Kurullar",icon:ae}),e.jsx(I,{name:"thesis_manual",changeTab:o,selected:r.thesis_manual,title:"Yazım Kuralları",icon:ne}),e.jsx(I,{name:"send_paper",changeTab:o,selected:r.send_paper,title:"Bildiri Gönder",icon:se}),e.jsx(I,{name:"schedule",changeTab:o,selected:r.schedule,title:"Oturum Takvimi",icon:Z}),e.jsx(I,{name:"gallery",changeTab:o,selected:r.gallery,title:"Galeri",icon:ie}),e.jsx(I,{name:"contents",changeTab:o,selected:r.contents,title:"İçerik",icon:J})]})]})};export{yt as default};
