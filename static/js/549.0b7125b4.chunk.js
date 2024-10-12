"use strict";(self.webpackChunkp_register=self.webpackChunkp_register||[]).push([[549],{4013:(e,t,r)=>{r.d(t,{mc:()=>i});var a=r(1529);const i=a.Ay.div`
  display: block;
  text-align: center;
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
`;a.Ay.input`
  width: 300px;
`,a.Ay.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to bottom right, #f5f7fa, #b8c6db);
`,a.Ay.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to bottom right, #fffcff, #d5fefd);
  margin-top: 50px;
`},8122:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(5508);const i=r(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var o=r(579);const s=()=>(0,o.jsx)(i,{children:(0,o.jsx)(a.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},6751:(e,t,r)=>{r.d(t,{As:()=>m,D0:()=>p,DZ:()=>s,JU:()=>l,Kw:()=>c,O6:()=>u,PG:()=>x,VY:()=>o,_W:()=>g,mO:()=>d,pW:()=>n});var a=r(1529),i=r(3401);a.Ay.img`
  positon: relative;
`;const o=a.Ay.div`
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
`,s=(a.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,a.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),n=a.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,l=a.Ay.label`
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
`,d=a.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,p=(a.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,a.Ay.input`
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
`),c=a.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,u=a.Ay.input`
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
`,m=a.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,x=a.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`,g=(0,a.Ay)(i.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`},4916:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(5043);function i(e,t){const[r,i]=(0,a.useState)((()=>{var r;return null!==(r=JSON.parse(window.localStorage.getItem(e)))&&void 0!==r?r:t}));return(0,a.useEffect)((()=>{window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]}},5621:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(1591),i=r(4013),o=r(4858),s=r(5043),n=r(3401),l=(r(2342),r(7933)),d=r(6751),p=r(8122),c=r(7318),u=r(9456),m=r(1672),x=r(4916),g=r(579);const h=()=>{const{register:e,handleSubmit:t,formState:{errors:r}}=(0,o.mN)(),{loading:a}=(0,l.Ay)(),[i,h]=(0,s.useState)(""),[f,v]=(0,s.useState)(""),[w,b]=(0,s.useState)(""),[y,j]=(0,s.useState)(""),[A,k]=(0,s.useState)("Sign Up"),[S,N]=(0,s.useState)(!1),[C,T]=(0,s.useState)(!1),[z,P]=(0,s.useState)(!1),[O,q]=(0,s.useState)(!1),[D,F]=(0,x.A)("isServerUp",!0),R=(0,s.useRef)(null),$=(0,u.wA)(),E=(0,s.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&v(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&h(e.currentTarget.value.trim()),"name"===e.currentTarget.name&&b(e.currentTarget.value.trim()),"lastName"===e.currentTarget.name&&j(e.currentTarget.value.trim()))}),[v,h,b,j]),J=(e,t)=>{n.oR.error(e,{className:"toast-message"})},U=e=>{if(q(!0),""===e.password&&""===e.email)return void J("Please provide details");D&&(F(!1),R.current=setTimeout((()=>{var e;e="Please wait as it takes few more seconds for server to wake up.",n.oR.info(e,{className:"toast-message"}),console.log("Server is starting up.")}),10500)),h(""),v(""),b(""),j(""),T(!0),N(!0),$((0,m.kz)({firstName:e.name,lastName:e.lastName,email:e.email.toLowerCase(),password:e.password})).then((e=>{console.log(e);try{var r,a;if(clearTimeout(R.current),T(!1),null!==e&&void 0!==e&&null!==(r=e.error)&&void 0!==r&&r.message){const{payload:t}=e;setTimeout((()=>{N(!1)}),2e3),N(!0);const r="Email in use",a="PASSWORD should have a minimum length of 6",i=`"email" with value "${e.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`,o="E11000 duplicate key error collection: Lingo.users index: username_1 dup key";t===r?J("Please provide different email."):t===a?J(`${a} characters.`):t===i?J("Please provide valid Email."):t.includes(o)?J("Please provide First Name."):J("Please try again as server error occured.")}null!==e&&void 0!==e&&null!==(a=e.error)&&void 0!==a&&a.message||(k("Signing up..."),N(!0),i=`${t}, please check your email to verify your registration.`,n.oR.success(i,{className:"toast-message"}),setTimeout((()=>{k("Sign up"),N(!1)}),5e3))}catch(o){console.log("error",o)}var i}));const t=e.name},W=(0,s.useCallback)((e=>{a||O||setTimeout((()=>{T(!0)}),1e3)}),[a,O]);return(0,s.useEffect)((()=>{W()}),[W]),(0,g.jsx)(g.Fragment,{children:C||O?(0,g.jsxs)(d.VY,{children:[(0,g.jsx)(d.PG,{children:C&&O&&(0,g.jsx)(p.A,{})}),(0,g.jsxs)(d._W,{autoClose:6e3,position:"top-right",children:[(0,g.jsx)(n.N9,{}),";"]}),(0,g.jsx)(d.DZ,{children:"Registration"}),(0,g.jsx)(d.pW,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),(0,g.jsxs)("form",{onSubmit:t((e=>U(e))),children:[r.password&&(0,g.jsx)(d.Kw,{children:"Password is required."}),r.email&&(0,g.jsx)(d.Kw,{children:"Email is required."}),r.name&&(0,g.jsx)(d.Kw,{children:"First Name is required."}),r.lastName&&(0,g.jsx)(d.Kw,{children:"Last Name is required."}),(0,g.jsxs)(d.mO,{children:[(0,g.jsx)(d.D0,{...e("name",{required:!0,value:w}),onChange:E,name:"name",value:w,autoComplete:"off",type:"text"}),(0,g.jsx)(d.JU,{htmlFor:1,children:"First Name"})]}),(0,g.jsxs)(d.mO,{children:[(0,g.jsx)(d.D0,{...e("lastName",{required:!0,value:y}),onChange:E,name:"lastName",value:y,autoComplete:"off",type:"text"}),(0,g.jsx)(d.JU,{htmlFor:1,children:"Last Name"})]}),(0,g.jsxs)(d.mO,{children:[(0,g.jsx)(d.D0,{...e("email",{required:!0,value:f}),onChange:E,name:"email",value:f,autoComplete:"off",type:"text"}),(0,g.jsx)(d.JU,{htmlFor:1,children:"Email"})]}),(0,g.jsxs)(d.mO,{children:[(0,g.jsx)(d.D0,{...e("password",{required:!0,value:i}),sx:{position:"relative"},onChange:E,name:"password",value:i,autoComplete:"off",type:z?"text":"password"}),(0,g.jsx)(d.As,{onClick:()=>{P(!z)},children:z?(0,g.jsx)(c.Rds,{}):(0,g.jsx)(c.whC,{})}),(0,g.jsx)(d.JU,{htmlFor:1,children:"Password"})]}),(0,g.jsx)(d.O6,{disabled:S,type:"submit",value:C&&O?"Submitting...":A})]})]}):(0,g.jsx)(p.A,{})})};function f(){return(0,g.jsxs)(i.mc,{children:[(0,g.jsx)(a.m,{children:(0,g.jsx)("title",{children:"Registration"})}),(0,g.jsx)(h,{})]})}}}]);
//# sourceMappingURL=549.0b7125b4.chunk.js.map