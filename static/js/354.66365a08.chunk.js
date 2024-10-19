"use strict";(self.webpackChunkp_register=self.webpackChunkp_register||[]).push([[354],{4013:(e,t,r)=>{r.d(t,{mc:()=>a});var i=r(1529);const a=i.Ay.div`
  display: block;
  text-align: center;
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
`;i.Ay.input`
  width: 300px;
`,i.Ay.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to bottom right, #f5f7fa, #b8c6db);
`},8122:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(5508);const a=r(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var n=r(579);const o=()=>(0,n.jsx)(a,{children:(0,n.jsx)(i.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},5354:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var i=r(1591),a=r(7614),n=r(8560),o=r(5043),s=r(8298),l=r(4013);const c=e=>e.baptisms;var d=r(7209),p=r(4858),x=r(7933),u=r(1002),h=r(7216),m=r(1529);m.Ay.img`
  positon: relative;
`;const g=m.Ay.div`
  position: relative;
  display: block;
  margin: auto;
  margin-top: 100px;
  width: 100%;
  max-width: 1100px;
  background-color: #f7f7f7;
  padding: 40px 40px;
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
`,f=(m.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,m.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),b=m.Ay.h6`
  font-size: 25px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  margin-top: 15px;
  text-align: left;

  letter-spacing: -0.02em;
`,v=(m.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,m.Ay.label`
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
`),j=m.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,y=(m.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,m.Ay.input`
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

  &:focus ~ ${v} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${v} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`),A=m.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,k=m.Ay.input`
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
`,w=(m.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,m.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`);var S=r(8122),C=r(579);const z=()=>{const e=(0,s.wA)(),{register:t,handleSubmit:r,formState:{errors:i},control:a}=(0,p.mN)(),{loading:n}=(0,x.Ay)(),[l,c]=(0,o.useState)("Baptism"),[m,z]=(0,o.useState)(""),[F,N]=(0,o.useState)("certificate"),[T,I]=(0,o.useState)("baptism"),[B,R]=(0,o.useState)("eucharist"),[E,V]=(0,o.useState)("chrismation"),[$,q]=(0,o.useState)("Save"),[Y,G]=(0,o.useState)(!1),[_,D]=(0,o.useState)(!1),H=(0,o.useRef)(null),K=(0,o.useCallback)((e=>{if(" "===e.currentTarget.value)return;switch(e.currentTarget.name){case"sacrament":c(e.currentTarget.value.trim()),console.log("SACRAMENT",e.currentTarget.value.trim());break;case"neophyteFirstName":z(e.currentTarget.value.trim());break;default:console.log("default")}}),[c]),L=(0,o.useCallback)((e=>{n||_||setTimeout((()=>{G(!0)}),1e3)}),[n,_]);return(0,o.useEffect)((()=>{L()}),[L]),(0,C.jsx)(C.Fragment,{children:Y||_?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w,{children:Y&&_&&(0,C.jsx)(S.A,{})}),(0,C.jsx)(f,{children:"Add Baptism Form"}),(0,C.jsxs)("form",{onSubmit:r((t=>(t=>{D(!0),console.log("data",t),""!==t.sacrament&&(G(!0),e((0,d.KI)({sacrament:t.sacrament,certificate:t.certificate,baptism:t.baptism,eucharist:t.eucharist,neophyte:{firstName:t.neophyteFirstName}})).then((e=>{console.log("certificate log",e);try{var t,r;if(clearTimeout(H.current),G(!1),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message){const{payload:t}=e;console.log("ERROR",t),setTimeout((()=>{}),4e3)}null!==e&&void 0!==e&&null!==(r=e.error)&&void 0!==r&&r.message||(q("Saving..."),setTimeout((()=>{q("Save")}),2e3))}catch(i){console.log("error",i.message)}})))})(t))),children:[i.sacrament&&(0,C.jsx)(A,{children:"Sacrament is required."}),(0,C.jsxs)(g,{children:[(0,C.jsx)(b,{children:"General Information"}),(0,C.jsxs)(j,{children:[(0,C.jsx)(y,{...t("sacrament",{required:!0,value:l}),onChange:K,name:"sacrament",value:l,autoComplete:"off",type:"text",disabled:!0}),(0,C.jsx)(v,{htmlFor:1,children:"First Name"})]}),(0,C.jsx)(u.A,{label:"Certificate",control:(0,C.jsx)(p.xI,{name:"certificate",control:a,defaultValue:!0,value:F,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t,color:"success"})},onClick:e=>{N(e.target.checked)}})}),(0,C.jsx)(u.A,{label:"Baptism",control:(0,C.jsx)(p.xI,{name:"baptism",control:a,defaultValue:!0,value:T,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t,defaultChecked:!0,color:"success"})},onClick:e=>{I(e.target.checked)}})}),(0,C.jsx)(u.A,{label:"Eucharist",control:(0,C.jsx)(p.xI,{name:"eucharist",control:a,defaultValue:!0,value:B,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t,color:"success"})},onClick:e=>{R(e.target.checked)}})}),(0,C.jsx)(u.A,{label:"Chrismation",control:(0,C.jsx)(p.xI,{name:"chrismation",control:a,defaultValue:!0,value:E,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t,color:"success"})},onClick:e=>{V(e.target.checked)}})})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)(b,{children:"Neophyte"}),(0,C.jsxs)(j,{children:[(0,C.jsx)(y,{...t("neophyteFirstName",{required:!0,value:m}),onChange:K,name:"neophyteFirstName",value:m,autoComplete:"off",type:"text",disabled:!1}),(0,C.jsx)(v,{htmlFor:1,children:"First Name"})]})]}),(0,C.jsx)(k,{type:"submit",value:Y&&_?"Saving...":$})]})]}):(0,C.jsx)(S.A,{})})};function F(){const{isLoggedIn:e,isVerified:t}=(0,a.A)(),{baptisms:r}=(0,n.d4)(c),p=(0,s.wA)();return(0,o.useEffect)((()=>{e&&0===r.length&&p((0,d.G7)())}),[p,e,r.length]),e&&t&&(0,C.jsxs)(l.mc,{children:[(0,C.jsx)(i.m,{children:(0,C.jsx)("title",{children:"Add Baptism"})}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h1",{children:"Create Baptismal Record"}),(0,C.jsxs)("div",{children:["Total Number of Baptisms: ",r.total]})]}),(0,C.jsx)(z,{})]})}}}]);
//# sourceMappingURL=354.66365a08.chunk.js.map