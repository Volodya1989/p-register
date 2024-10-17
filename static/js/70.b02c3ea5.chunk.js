"use strict";(self.webpackChunkp_register=self.webpackChunkp_register||[]).push([[70],{4013:(e,t,i)=>{i.d(t,{mc:()=>a});var o=i(1529);const a=o.Ay.div`
  display: block;
  text-align: center;
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
`;o.Ay.input`
  width: 300px;
`,o.Ay.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to bottom right, #f5f7fa, #b8c6db);
`},8122:(e,t,i)=>{i.d(t,{A:()=>n});var o=i(5508);const a=i(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var r=i(579);const n=()=>(0,r.jsx)(a,{children:(0,r.jsx)(o.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},6751:(e,t,i)=>{i.d(t,{As:()=>g,D0:()=>d,DZ:()=>n,JU:()=>p,Kw:()=>c,O6:()=>x,PG:()=>u,VY:()=>r,_W:()=>m,mO:()=>l,pW:()=>s});var o=i(1529),a=i(1036);o.Ay.img`
  positon: relative;
`;const r=o.Ay.div`
  position: relative;
  display: block;
  margin: auto;
  margin-top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
  padding: 60px 60px;
  border-radius: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
    width: 600px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 30px;
    line-height: 1.06;
  }
`,n=(o.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,o.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),s=o.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,p=o.Ay.label`
  font-size: 18px;
  font-weight: 300;
  width: 200px;
  color: #9ca5b5;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
  padding-left: 15px;
`,l=o.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,d=(o.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,o.Ay.input`
  display: flex;
  border: 0;
  font-size: 22px;
  background-color: transparent;
  padding-top: 10px;
  border-bottom: 1px solid #f4c550;

  outline: none;
  width: 100%;
  color: black;
  overflow: hidden;

  ${e=>{let{disabled:t}=e;return t?"\n    pointer-events: none;\n    \n  ":""}}

  &:focus {
    border-color: #6118de;
  }

  &:focus ~ ${p} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${p} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`),c=o.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,x=o.Ay.input`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: Hug (60px) px;
  padding: 16px 48px 16px 48px;
  gap: 0px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  border-radius: 12px;
  opacity: 0px;
  font-weight: 700;
  background: #f4c550;
  border: none;
  font-size: 18px;
  line-height: calc(28 / 18);
  cursor: pointer;
  &:hover {
    transition: opacity 0.4s;
    opacity: 0.8;
    transition-timing-function: ease;
  }
`,g=o.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,u=o.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`,m=(0,o.Ay)(a.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`},4916:(e,t,i)=>{i.d(t,{A:()=>a});var o=i(5043);function a(e,t){const[i,a]=(0,o.useState)((()=>{var i;return null!==(i=JSON.parse(window.localStorage.getItem(e)))&&void 0!==i?i:t}));return(0,o.useEffect)((()=>{window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,a]}},5352:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var o=i(1591),a=i(4013),r=i(4858),n=i(5043),s=i(1036),p=(i(2342),i(7933)),l=i(3216),d=i(1529);d.Ay.img`
  positon: relative;
`;const c=d.Ay.div`
  position: relative;
  display: block;
  margin: auto;
  margin-top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
  // padding-right: 20px;
  // padding-left: 20px;
  // padding-top: 20px;
  // padding-bottom: 20px;
  padding: 60px 60px;
  border-radius: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
    width: 600px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 30px;
    line-height: 1.06;
  }
`,x=(d.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,d.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),g=d.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,u=d.Ay.label`
  font-size: 18px;
  font-weight: 300;
  width: 200px;
  color: #9ca5b5;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
  padding-left: 15px;
`,m=d.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,h=(d.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,d.Ay.input`
  display: flex;
  border: 0;
  font-size: 22px;
  background-color: transparent;
  padding-top: 10px;
  border-bottom: 1px solid #f4c550;

  outline: none;
  width: 100%;
  color: black;
  overflow: hidden;

  ${e=>{let{disabled:t}=e;return t?"\n    pointer-events: none;\n    \n  ":""}}

  &:focus {
    border-color: #6118de;
  }

  &:focus ~ ${u} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${u} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`),f=d.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,b=d.Ay.input`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: Hug (60px) px;
  padding: 16px 48px 16px 48px;
  gap: 0px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  border-radius: 12px;
  opacity: 0px;
  font-weight: 700;
  background: #f4c550;
  border: none;
  font-size: 18px;
  line-height: calc(28 / 18);
  cursor: pointer;
  &:hover {
    transition: opacity 0.4s;
    opacity: 0.8;
    transition-timing-function: ease;
  }
`,w=d.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,v=d.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`;var y=i(6751),A=i(8122),j=i(7318),k=i(8298),z=i(1672),S=i(4916),C=i(579);const N=()=>{const e=(0,k.wA)(),t=(0,l.Zp)(),{register:i,handleSubmit:o,formState:{errors:a}}=(0,r.mN)(),{loading:d}=(0,p.Ay)(),[N,$]=(0,n.useState)(""),[P,T]=(0,n.useState)(""),[E,R]=(0,n.useState)("Log In"),[Y,I]=(0,n.useState)(!1),[L,O]=(0,n.useState)(!1),[W,q]=(0,n.useState)(!1),[F,D]=(0,n.useState)(!1),[_,J]=(0,S.A)("isServerUp",!0),H=(0,n.useRef)(null),U=(0,n.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&T(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&$(e.currentTarget.value.trim()))}),[T,$]),Z=(e,t)=>{s.oR.error(e,{className:"toast-message"})},G=i=>{D(!0),""!==i.password||""!==i.email?(_&&(J(!1),H.current=setTimeout((()=>{var e;e="Please wait as it takes few more seconds for server to wake up.",s.oR.info(e,{className:"toast-message"})}),10500)),$(""),T(""),O(!0),I(!0),e((0,z.E8)({email:i.email.toLowerCase(),password:i.password})).then((e=>{try{var i,o;if(clearTimeout(H.current),O(!1),null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message){const{payload:t}=e;console.log("ERROR",t);const i="Email in use",o="PASSWORD should have a minimum length of 6",a="Email or password invalid",r=`"email" with value "${e.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`;Z(t===i?"Please provide different email.":t===o?`${o} characters.`:t===r?"Please provide valid Email.":t===a?`${a}.`:"Please try again as server error occured."),I(!0),setTimeout((()=>{I(!1)}),4e3)}null!==e&&void 0!==e&&null!==(o=e.error)&&void 0!==o&&o.message||(a="You are logging...",s.oR.success(a,{className:"toast-message"}),I(!0),$(""),T(""),R("Logging..."),setTimeout((()=>{t(),I(!1),R("Log In")}),2e3))}catch(r){console.log("error",r.message)}var a}))):Z("Please provide details")},K=(0,n.useCallback)((e=>{d||F||setTimeout((()=>{O(!0)}),1e3)}),[d,F]);return(0,n.useEffect)((()=>{K()}),[K]),(0,C.jsx)(C.Fragment,{children:L||F?(0,C.jsxs)(c,{children:[(0,C.jsx)(v,{children:L&&F&&(0,C.jsx)(A.A,{})}),(0,C.jsxs)(y._W,{autoClose:4e3,position:"top-right",children:[(0,C.jsx)(s.N9,{}),";"]}),(0,C.jsx)(x,{children:"Log In"}),(0,C.jsx)(g,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),(0,C.jsxs)("form",{onSubmit:o((e=>G(e))),children:[a.password&&(0,C.jsx)(f,{children:"Password is required."}),a.email&&(0,C.jsx)(f,{children:"Email is required."}),(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{...i("email",{required:!0,value:P}),onChange:U,name:"email",value:P,autoComplete:"off",type:"text"}),(0,C.jsx)(u,{htmlFor:1,children:"Email"})]}),(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{...i("password",{required:!0,value:N}),sx:{position:"relative"},onChange:U,name:"password",value:N,autoComplete:"off",type:W?"text":"password"}),(0,C.jsx)(w,{onClick:()=>{q(!W)},children:W?(0,C.jsx)(j.Rds,{}):(0,C.jsx)(j.whC,{})}),(0,C.jsx)(u,{htmlFor:1,children:"Password"})]}),(0,C.jsx)(b,{disabled:!N||!P||Y,type:"submit",value:L&&F?"Submitting...":E})]})]}):(0,C.jsx)(A.A,{})})};function $(){return(0,C.jsxs)(a.mc,{children:[(0,C.jsx)(o.m,{children:(0,C.jsx)("title",{children:"Login"})}),(0,C.jsx)(N,{})]})}}}]);
//# sourceMappingURL=70.b02c3ea5.chunk.js.map