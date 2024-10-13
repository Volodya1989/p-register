"use strict";(self.webpackChunkp_register=self.webpackChunkp_register||[]).push([[70],{4013:(e,t,i)=>{i.d(t,{mc:()=>r});var o=i(1529);const r=o.Ay.div`
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
`},8122:(e,t,i)=>{i.d(t,{A:()=>n});var o=i(5508);const r=i(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var a=i(579);const n=()=>(0,a.jsx)(r,{children:(0,a.jsx)(o.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},6751:(e,t,i)=>{i.d(t,{As:()=>g,D0:()=>d,DZ:()=>n,JU:()=>l,Kw:()=>c,O6:()=>x,PG:()=>u,VY:()=>a,_W:()=>m,mO:()=>p,pW:()=>s});var o=i(1529),r=i(3401);o.Ay.img`
  positon: relative;
`;const a=o.Ay.div`
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
`,l=o.Ay.label`
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
`,p=o.Ay.section`
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

  &:focus ~ ${l} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${l} {\n      transform: translateY(-40px);\n\n    }\n  `}}
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
`,m=(0,o.Ay)(r.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`},4916:(e,t,i)=>{i.d(t,{A:()=>r});var o=i(5043);function r(e,t){const[i,r]=(0,o.useState)((()=>{var i;return null!==(i=JSON.parse(window.localStorage.getItem(e)))&&void 0!==i?i:t}));return(0,o.useEffect)((()=>{window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,r]}},5352:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var o=i(1591),r=i(4013),a=i(4858),n=i(5043),s=i(3401),l=(i(2342),i(7933)),p=i(1529);p.Ay.img`
  positon: relative;
`;const d=p.Ay.div`
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
`,c=(p.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,p.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),x=p.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,g=p.Ay.label`
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
`,u=p.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,m=(p.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,p.Ay.input`
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

  &:focus ~ ${g} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${g} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`),h=p.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,f=p.Ay.input`
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
`,b=p.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,w=p.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`;var v=i(6751),y=i(8122),A=i(7318),j=i(9456),k=i(1672),z=i(4916),S=i(579);const C=()=>{const e=(0,j.wA)(),{register:t,handleSubmit:i,formState:{errors:o}}=(0,a.mN)(),{loading:r}=(0,l.Ay)(),[p,C]=(0,n.useState)(""),[N,$]=(0,n.useState)(""),[T,P]=(0,n.useState)("Log In"),[E,R]=(0,n.useState)(!1),[Y,I]=(0,n.useState)(!1),[L,O]=(0,n.useState)(!1),[W,q]=(0,n.useState)(!1),[D,F]=(0,z.A)("isServerUp",!0),_=(0,n.useRef)(null),J=(0,n.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&$(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&C(e.currentTarget.value.trim()))}),[$,C]),H=(e,t)=>{s.oR.error(e,{className:"toast-message"})},U=t=>{q(!0),""!==t.password||""!==t.email?(D&&(F(!1),_.current=setTimeout((()=>{var e;e="Please wait as it takes few more seconds for server to wake up.",s.oR.info(e,{className:"toast-message"})}),10500),console.log("TimeoutID",_.current)),C(""),$(""),I(!0),R(!0),e((0,k.E8)({email:t.email.toLowerCase(),password:t.password})).then((e=>{try{var t,i;if(clearTimeout(_.current),I(!1),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message){const{payload:t}=e;console.log("ERROR",t);const i="Email in use",o="PASSWORD should have a minimum length of 6",r="Email or password invalid",a=`"email" with value "${e.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`;H(t===i?"Please provide different email.":t===o?`${o} characters.`:t===a?"Please provide valid Email.":t===r?`${r}.`:"Please try again as server error occured."),R(!0),setTimeout((()=>{R(!1)}),4e3)}null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message||(o="You are logging...",s.oR.success(o,{className:"toast-message"}),R(!0),C(""),$(""),P("Logging..."),setTimeout((()=>{window.location.href="http://localhost:3000/p-register/#/",R(!1),P("Log In")}),2e3))}catch(r){console.log("error",r.message)}var o}))):H("Please provide details")},G=(0,n.useCallback)((e=>{r||W||setTimeout((()=>{I(!0)}),1e3)}),[r,W]);return(0,n.useEffect)((()=>{G()}),[G]),(0,S.jsx)(S.Fragment,{children:Y||W?(0,S.jsxs)(d,{children:[(0,S.jsx)(w,{children:Y&&W&&(0,S.jsx)(y.A,{})}),(0,S.jsxs)(v._W,{autoClose:4e3,position:"top-right",children:[(0,S.jsx)(s.N9,{}),";"]}),(0,S.jsx)(c,{children:"Log In"}),(0,S.jsx)(x,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),(0,S.jsxs)("form",{onSubmit:i((e=>U(e))),children:[o.password&&(0,S.jsx)(h,{children:"Password is required."}),o.email&&(0,S.jsx)(h,{children:"Email is required."}),(0,S.jsxs)(u,{children:[(0,S.jsx)(m,{...t("email",{required:!0,value:N}),onChange:J,name:"email",value:N,autoComplete:"off",type:"text"}),(0,S.jsx)(g,{htmlFor:1,children:"Email"})]}),(0,S.jsxs)(u,{children:[(0,S.jsx)(m,{...t("password",{required:!0,value:p}),sx:{position:"relative"},onChange:J,name:"password",value:p,autoComplete:"off",type:L?"text":"password"}),(0,S.jsx)(b,{onClick:()=>{O(!L)},children:L?(0,S.jsx)(A.Rds,{}):(0,S.jsx)(A.whC,{})}),(0,S.jsx)(g,{htmlFor:1,children:"Password"})]}),(0,S.jsx)(f,{disabled:!p||!N||E,type:"submit",value:Y&&W?"Submitting...":T})]})]}):(0,S.jsx)(y.A,{})})};function N(){return(0,S.jsxs)(r.mc,{children:[(0,S.jsx)(o.m,{children:(0,S.jsx)("title",{children:"Login"})}),(0,S.jsx)(C,{})]})}}}]);
//# sourceMappingURL=70.69cdbf5f.chunk.js.map