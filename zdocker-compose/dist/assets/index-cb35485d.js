import{s as f,i as I,r as p,u as Q,c as G,j as t}from"./index-d7128c36.js";import{C as R,L as V,F as U,T as N,b as Y,N as J,S as X,a as Z}from"./auth-addb9dc0.js";import{u as K}from"./useMutation-f7b76f5b.js";import{c as O}from"./captcha-36fa58ec.js";import{S as tt}from"./Skeleton.styled-04faeccc.js";import"./index.es-ad781d3f.js";const ot="/assets/LogoHd-c043a325.svg",rt=f.div`
    background-color: lightgray;
    width: 70%;
    height: calc(58% - 1.5dvh - 2vw - 20%);
    margin: 5px 15% 5px 15%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
`,at=f.input.attrs({type:"text",maxLength:6})`
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
`,nt=f.div`
    width: calc(100% - 2px);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 1px;
    background-color: #2691d9aa;
    height: 4px;
    border-radius: 5px;
`,et=f.div`
    width: ${b=>`calc(${b.$SECOND}% - 2px)`};
    left: 1px;
    top: 0;
    background-color: #002369;
    height: 4px;
    border-radius: 5px;
    position: absolute;
    z-index: 2;
    transition: .95s;

`,s=Array.from({length:10},()=>Math.floor(Math.random()*361)),d=Array.from({length:10},()=>Math.floor(Math.random()*61)+40),o=Array.from({length:10},()=>Math.floor(Math.random()*50)+1),ht=I`
    0% { 
        width: ${d[0]}%;
        transform: rotate(${s[0]}deg);
        left: ${o[0]}%;
        top: ${o[0]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    10% { 
        width: ${d[1]}%; 
        transform: rotate(${s[1]}deg);
        left: ${o[1]}%;
        top: ${o[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    20% { 
        width: ${d[2]}%; 
        transform: rotate(${s[2]}deg);
        left: ${o[2]}%;
        top: ${o[2]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    30% { 
        width: ${d[3]}%;  
        transform: rotate(${s[3]}deg);
        left: ${o[3]}%;
        top: ${o[3]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    40% { 
        width: ${d[4]}%;  
        transform: rotate(${s[4]}deg);
        left: ${o[4]}%;
        top: ${o[4]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    50% { 
        width: ${d[5]}%;  
        transform: rotate(${s[5]}deg);
        left: ${o[5]}%;
        top: ${o[5]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    60% { 
        width: ${d[6]}%;  
        transform: rotate(${s[6]}deg);
        left: ${o[6]}%;
        top: ${o[6]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    70% { 
        width: ${d[7]}%;  
        transform: rotate(${s[7]}deg);
        left: ${o[7]}%;
        top: ${o[7]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    80% { 
        width: ${d[8]}%;  
        transform: rotate(${s[8]}deg);
        left: ${o[8]}%;
        top: ${o[8]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    90% { 
        width: ${d[9]}%;  
        transform: rotate(${s[9]}deg);
        left: ${o[9]}%;
        top: ${o[9]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    100% { 
        width: ${d[1]}%;  
        transform: rotate(${s[1]}deg);
        left: ${o[1]}%;
        top: ${o[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
`,g=Array.from({length:10},()=>Math.floor(Math.random()*361)),$=Array.from({length:10},()=>Math.floor(Math.random()*61)+40),r=Array.from({length:10},()=>Math.floor(Math.random()*50)+1),it=I`
    0% { 
        width: ${$[0]}%;
        transform: rotate(${g[0]}deg);
        left: ${r[0]}%;
        top: ${r[0]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    10% { 
        width: ${$[1]}%; 
        transform: rotate(${g[1]}deg);
        left: ${r[1]}%;
        top: ${r[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    20% { 
        width: ${$[2]}%; 
        transform: rotate(${g[2]}deg);
        left: ${r[2]}%;
        top: ${r[2]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    30% { 
        width: ${$[3]}%;  
        transform: rotate(${g[3]}deg);
        left: ${r[3]}%;
        top: ${r[3]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    40% { 
        width: ${$[4]}%;  
        transform: rotate(${g[4]}deg);
        left: ${r[4]}%;
        top: ${r[4]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    50% { 
        width: ${$[5]}%;  
        transform: rotate(${g[5]}deg);
        left: ${r[5]}%;
        top: ${r[5]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    60% { 
        width: ${$[6]}%;  
        transform: rotate(${g[6]}deg);
        left: ${r[6]}%;
        top: ${r[6]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    70% { 
        width: ${$[7]}%;  
        transform: rotate(${g[7]}deg);
        left: ${r[7]}%;
        top: ${r[7]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    80% { 
        width: ${$[8]}%;  
        transform: rotate(${g[8]}deg);
        left: ${r[8]}%;
        top: ${r[8]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    90% { 
        width: ${$[9]}%;  
        transform: rotate(${g[9]}deg);
        left: ${r[9]}%;
        top: ${r[9]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    100% { 
        width: ${$[1]}%;  
        transform: rotate(${g[1]}deg);
        left: ${r[1]}%;
        top: ${r[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
`,l=Array.from({length:10},()=>Math.floor(Math.random()*361)),c=Array.from({length:10},()=>Math.floor(Math.random()*61)+40),a=Array.from({length:10},()=>Math.floor(Math.random()*50)+1),st=I`
    0% { 
        width: ${c[0]}%;
        transform: rotate(${l[0]}deg);
        left: ${a[0]}%;
        top: ${a[0]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    10% { 
        width: ${c[1]}%; 
        transform: rotate(${l[1]}deg);
        left: ${a[1]}%;
        top: ${a[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    20% { 
        width: ${c[2]}%; 
        transform: rotate(${l[2]}deg);
        left: ${a[2]}%;
        top: ${a[2]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    30% { 
        width: ${c[3]}%;  
        transform: rotate(${l[3]}deg);
        left: ${a[3]}%;
        top: ${a[3]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    40% { 
        width: ${c[4]}%;  
        transform: rotate(${l[4]}deg);
        left: ${a[4]}%;
        top: ${a[4]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    50% { 
        width: ${c[5]}%;  
        transform: rotate(${l[5]}deg);
        left: ${a[5]}%;
        top: ${a[5]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    60% { 
        width: ${c[6]}%;  
        transform: rotate(${l[6]}deg);
        left: ${a[6]}%;
        top: ${a[6]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    70% { 
        width: ${c[7]}%;  
        transform: rotate(${l[7]}deg);
        left: ${a[7]}%;
        top: ${a[7]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    80% { 
        width: ${c[8]}%;  
        transform: rotate(${l[8]}deg);
        left: ${a[8]}%;
        top: ${a[8]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    90% { 
        width: ${c[9]}%;  
        transform: rotate(${l[9]}deg);
        left: ${a[9]}%;
        top: ${a[9]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    100% { 
        width: ${c[1]}%;  
        transform: rotate(${l[1]}deg);
        left: ${a[1]}%;
        top: ${a[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
`,m=Array.from({length:10},()=>Math.floor(Math.random()*361)),u=Array.from({length:10},()=>Math.floor(Math.random()*61)+40),n=Array.from({length:10},()=>Math.floor(Math.random()*50)+1),dt=I`
    0% { 
        width: ${u[0]}%;
        transform: rotate(${m[0]}deg);
        left: ${n[0]}%;
        top: ${n[0]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    10% { 
        width: ${u[1]}%; 
        transform: rotate(${m[1]}deg);
        left: ${n[1]}%;
        top: ${n[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    20% { 
        width: ${u[2]}%; 
        transform: rotate(${m[2]}deg);
        left: ${n[2]}%;
        top: ${n[2]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    30% { 
        width: ${u[3]}%;  
        transform: rotate(${m[3]}deg);
        left: ${n[3]}%;
        top: ${n[3]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    40% { 
        width: ${u[4]}%;  
        transform: rotate(${m[4]}deg);
        left: ${n[4]}%;
        top: ${n[4]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    50% { 
        width: ${u[5]}%;  
        transform: rotate(${m[5]}deg);
        left: ${n[5]}%;
        top: ${n[5]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    60% { 
        width: ${u[6]}%;  
        transform: rotate(${m[6]}deg);
        left: ${n[6]}%;
        top: ${n[6]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    70% { 
        width: ${u[7]}%;  
        transform: rotate(${m[7]}deg);
        left: ${n[7]}%;
        top: ${n[7]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    80% { 
        width: ${u[8]}%;  
        transform: rotate(${m[8]}deg);
        left: ${n[8]}%;
        top: ${n[8]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    90% { 
        width: ${u[9]}%;  
        transform: rotate(${m[9]}deg);
        left: ${n[9]}%;
        top: ${n[9]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
    100% { 
        width: ${u[1]}%;  
        transform: rotate(${m[1]}deg);
        left: ${n[1]}%;
        top: ${n[1]}%;
        height: ${Math.floor(Math.random()*4)+4}%;
        background-color: #${Math.random().toString(16).substring(2,8)};
    }
`,T=f.div`
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
    animation-name: ${ht};
    animation-duration: 5s;
    animation-iteration-count: infinite;
`,gt=f(T)`
    animation-name: ${it};
`,$t=f(T)` 
    animation-name: ${st};
`,lt=f(T)` 
    animation-name: ${dt};
`,ct=f.div`
    width: 100%;
    height: calc(100% - 1.27em - 20px - 0.2em);
    position: absolute;
    z-index: 8;
`,mt=f.div`
    width: 100%;
    height: calc(100% - 1.27em - 20px - 0.2em);
    position: absolute;
    z-index: 0;
    overflow: hidden;
`,ut=f.img.attrs(b=>({src:`${!b.$WAIT&&`http://captcha.proje.isyeriegitimi.com/generate?token=${b.$TOKEN}`}`}))`
    width: 100%;
    height: calc(100% - 1.27em - 20px - 0.2em);
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`,C=40,ft=({onError:b,setCaptchaToken:w,inputValue:D,setValue:y,bindEnter:P,setOutErr:z})=>{const[M,S]=p.useState(!1),{isLoading:k,isError:i,data:A,error:H}=Q({queryKey:["captcha"],queryFn:()=>O({withCredentials:!0}),refetchOnWindowFocus:!1});p.useEffect(()=>{i&&S(!0)},[i]),p.useEffect(()=>{x.mutate(),v(C)},[b]);const h=G(),x=K({mutationKey:["captcha"],mutationFn:()=>O({withCredentials:!0}),onError:()=>{S(!0)},onSuccess:e=>{h.setQueryData(["captcha"],e),w(e)}}),[j,v]=p.useState(C),[L,_]=p.useState(null);p.useEffect(()=>{if(w(A),L&&clearInterval(L),j==0&&y(e=>({...e,CAPTCHA:""})),j>=0){const e=setInterval(()=>{v(E=>(E===0&&(clearInterval(e),x.mutate(),v(C)),E-1))},1e3);return _(e),()=>clearInterval(e)}else v(C)},[j,A]);const q=e=>{switch(e){case"1":return"I";case"0":return"O";case"ı":return"I";case"i":return"I";default:return/[üşçöğ*&-.,\"\?\_<>@]/i.test(e)?"":e}};function B(e){const{value:E}=e.target,W=E.split("").map(F=>q(F)).join("");y(F=>({...F,[e.target.name]:W.toUpperCase()})),z(null),S(!1)}return t.jsxs(rt,{children:[t.jsx(nt,{}),t.jsx(et,{$SECOND:j*100/C}),t.jsx(ct,{}),!(k||i||x.isPending||M)&&t.jsxs(mt,{children:[t.jsx(T,{}),t.jsx(gt,{}),t.jsx($t,{}),t.jsx(lt,{})]}),k||i||x.isPending||M?t.jsx(tt,{$CLR:(i||M)&&"#b96060",$WIDTH:"100%",$HEIGHT:"100%"}):t.jsx(ut,{$WAIT:k||i,$TOKEN:A}),t.jsx(at,{onKeyDown:P,name:"CAPTCHA",onChange:B,value:D,placeholder:"Doğrulama Kodu"})]})},kt=()=>{const[b,w]=p.useState(null),[D,y]=p.useState(!1),[P,z]=p.useState(null),[M,S]=p.useState({access_id:"",password:"",CAPTCHA:""}),k=h=>{S({...M,[h.target.name]:h.target.value}),w(null)},i=K({mutationFn:h=>Z("post","login",h,{withCredentials:!0}),onError:h=>{S(x=>({...x,CAPTCHA:""})),y(x=>!x),w(`${h.data.code} - ${h.data.message}`)},onSuccess:()=>{window.location="/admin/dashboard"}});function A(){if(M.access_id.length<1||M.password.length<1)return w("Alanları boş bırakmayınız.");if(M.CAPTCHA.length!==6)return w("Doğrulama kodu 6 haneli olmalıdır.");i.mutate({...M,os:navigator.platform,agent:navigator.userAgent,captchaToken:P})}function H(h){if(i.isPending||i.isSuccess)return 0;h.key==="Enter"&&A()}return t.jsx("main",{style:{height:"100dvh"},children:t.jsxs(R,{children:[t.jsx(V,{src:ot,alt:"Logo"}),t.jsxs(U,{children:[t.jsx(N,{onChange:k,name:"access_id",placeholder:"Kullanıcı Adı, E-Posta ya da Telefon Numarası",type:"text"}),t.jsx(N,{onChange:k,name:"password",placeholder:"Şifre",type:"password",onKeyDown:H}),t.jsx(Y,{onClick:h=>{h.preventDefault()},children:t.jsx("a",{children:"Şifrenizi mi unuttunuz?"})})]}),b&&t.jsx(J,{children:b}),t.jsx(ft,{bindEnter:H,setOutErr:w,setCaptchaToken:z,inputValue:M.CAPTCHA,setValue:S,onError:D}),t.jsx(X,{disabled:i.isPending||i.isSuccess,$v:"Giriş Yap",onClick:A})]})})};export{kt as default};
