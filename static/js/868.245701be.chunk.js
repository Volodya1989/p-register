"use strict";(self.webpackChunkp_register=self.webpackChunkp_register||[]).push([[868],{4013:(e,t,i)=>{i.d(t,{mc:()=>a});var o=i(1529);const a=o.Ay.div`
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
`;var r=i(579);const n=()=>(0,r.jsx)(a,{children:(0,r.jsx)(o.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},6751:(e,t,i)=>{i.d(t,{As:()=>g,D0:()=>d,DZ:()=>n,JU:()=>l,Kw:()=>c,O6:()=>x,PG:()=>u,VY:()=>r,_W:()=>m,mO:()=>p,pW:()=>s});var o=i(1529),a=i(3401);o.Ay.img`
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
`,m=(0,o.Ay)(a.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`},4916:(e,t,i)=>{i.d(t,{A:()=>a});var o=i(5043);function a(e,t){const[i,a]=(0,o.useState)((()=>{var i;return null!==(i=JSON.parse(window.localStorage.getItem(e)))&&void 0!==i?i:t}));return(0,o.useEffect)((()=>{window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,a]}},5354:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var o=i(1591),a=i(7614),r=i(8560),n=i(5043),s=i(8298),l=i(4013);const p=e=>e.baptisms;var d=i(7209),c=i(4858),x=i(3401),g=(i(2342),i(7933)),u=i(1529);u.Ay.img`
  positon: relative;
`;const m=u.Ay.div`
  position: relative;
  display: block;
  margin: auto;
  margin-top: 100px;
  width: 100%;
  max-width: 1100px;
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
`,h=(u.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,u.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),f=(u.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,u.Ay.label`
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
`),b=u.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,w=(u.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,u.Ay.input`
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

  &:focus ~ ${f} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${f} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`),v=u.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,y=u.Ay.input`
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
`,A=u.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,j=u.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`;var k=i(6751),z=i(8122),S=i(7318),C=i(1672),N=i(4916),$=i(579);const T=()=>{const e=(0,s.wA)(),{register:t,handleSubmit:i,formState:{errors:o}}=(0,c.mN)(),{loading:a}=(0,g.Ay)(),[r,l]=(0,n.useState)(""),[p,d]=(0,n.useState)(""),[u,T]=(0,n.useState)("Log In"),[E,R]=(0,n.useState)(!1),[P,Y]=(0,n.useState)(!1),[I,O]=(0,n.useState)(!1),[q,F]=(0,n.useState)(!1),[L,W]=(0,N.A)("isServerUp",!0),D=(0,n.useRef)(null),G=(0,n.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&d(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&l(e.currentTarget.value.trim()))}),[d,l]),J=(e,t)=>{x.oR.error(e,{className:"toast-message"})},_=t=>{F(!0),""!==t.password||""!==t.email?(L&&(W(!1),D.current=setTimeout((()=>{var e;e="Please wait as it takes few more seconds for server to wake up.",x.oR.info(e,{className:"toast-message"})}),10500)),l(""),d(""),Y(!0),R(!0),e((0,C.E8)({email:t.email.toLowerCase(),password:t.password})).then((e=>{try{var t,i;if(clearTimeout(D.current),Y(!1),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message){const{payload:t}=e;console.log("ERROR",t);const i="Email in use",o="PASSWORD should have a minimum length of 6",a="Email or password invalid",r=`"email" with value "${e.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`;J(t===i?"Please provide different email.":t===o?`${o} characters.`:t===r?"Please provide valid Email.":t===a?`${a}.`:"Please try again as server error occured."),R(!0),setTimeout((()=>{R(!1)}),4e3)}null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message||(o="You are logging...",x.oR.success(o,{className:"toast-message"}),R(!0),l(""),d(""),T("Logging..."),setTimeout((()=>{R(!1),T("Log In")}),2e3))}catch(a){console.log("error",a.message)}var o}))):J("Please provide details")},B=(0,n.useCallback)((e=>{a||q||setTimeout((()=>{Y(!0)}),1e3)}),[a,q]);return(0,n.useEffect)((()=>{B()}),[B]),(0,$.jsx)($.Fragment,{children:P||q?(0,$.jsxs)(m,{children:[(0,$.jsx)(j,{children:P&&q&&(0,$.jsx)(z.A,{})}),(0,$.jsxs)(k._W,{autoClose:4e3,position:"top-right",children:[(0,$.jsx)(x.N9,{}),";"]}),(0,$.jsx)(h,{children:"General Information"}),(0,$.jsxs)("form",{onSubmit:i((e=>_(e))),children:[o.password&&(0,$.jsx)(v,{children:"Password is required."}),o.email&&(0,$.jsx)(v,{children:"Email is required."}),(0,$.jsxs)(b,{children:[(0,$.jsx)(w,{...t("email",{required:!0,value:p}),onChange:G,name:"email",value:p,autoComplete:"off",type:"text"}),(0,$.jsx)(f,{htmlFor:1,children:"Email"})]}),(0,$.jsx)("input",{type:"checkbox",...t("January")}),(0,$.jsxs)(b,{children:[(0,$.jsx)(w,{...t("password",{required:!0,value:r}),sx:{position:"relative"},onChange:G,name:"password",value:r,autoComplete:"off",type:I?"text":"password"}),(0,$.jsx)(A,{onClick:()=>{O(!I)},children:I?(0,$.jsx)(S.Rds,{}):(0,$.jsx)(S.whC,{})}),(0,$.jsx)(f,{htmlFor:1,children:"Password"})]}),(0,$.jsx)(y,{disabled:!r||!p||E,type:"submit",value:P&&q?"Submitting...":u})]})]}):(0,$.jsx)(z.A,{})})};function E(){const{isLoggedIn:e,isVerified:t}=(0,a.A)(),{baptisms:i}=(0,r.d4)(p);console.log("Get all baptisms",i);const c=(0,s.wA)();return(0,n.useEffect)((()=>{e&&0===i.length&&c((0,d.G7)())}),[c,e,i.length]),e&&t&&(0,$.jsxs)(l.mc,{children:[(0,$.jsx)(o.m,{children:(0,$.jsx)("title",{children:"Add Baptism"})}),(0,$.jsxs)("div",{children:[(0,$.jsx)("h1",{children:"Create Baptismal Record"}),(0,$.jsxs)("div",{children:["Total Number of Baptisms: ",i.total]})]}),(0,$.jsx)(T,{})]})}}}]);
//# sourceMappingURL=868.245701be.chunk.js.map