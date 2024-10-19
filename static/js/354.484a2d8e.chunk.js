"use strict";(self.webpackChunkp_register=self.webpackChunkp_register||[]).push([[354],{4013:(e,t,i)=>{i.d(t,{mc:()=>a});var r=i(1529);const a=r.Ay.div`
  display: block;
  text-align: center;
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
`;r.Ay.input`
  width: 300px;
`,r.Ay.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to bottom right, #f5f7fa, #b8c6db);
`},8122:(e,t,i)=>{i.d(t,{A:()=>o});var r=i(5508);const a=i(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var n=i(579);const o=()=>(0,n.jsx)(a,{children:(0,n.jsx)(r.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},5354:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var r=i(1591),a=i(7614),n=i(8560),o=i(5043),s=i(8298),l=i(4013);const c=e=>e.baptisms;var d=i(7209),p=i(4858),x=i(7933),u=i(1002),h=i(7216),m=i(1529);m.Ay.img`
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
`,w=m.Ay.input`
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
`,k=(m.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,m.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`);var S=i(8122),C=i(579);const z=()=>{const e=(0,s.wA)(),{register:t,handleSubmit:i,formState:{errors:r},control:a}=(0,p.mN)(),{loading:n}=(0,x.Ay)(),[l,c]=(0,o.useState)("Baptism"),[m,z]=(0,o.useState)(""),[F,N]=(0,o.useState)("certificate"),[T,I]=(0,o.useState)("baptism"),[B,R]=(0,o.useState)("eucharist"),[E,V]=(0,o.useState)("chrismation"),[$,q]=(0,o.useState)("Save"),[Y,G]=(0,o.useState)(!1),[_,D]=(0,o.useState)(!1),H=(0,o.useRef)(null),K=(0,o.useCallback)((e=>{if(" "===e.currentTarget.value)return;switch(e.currentTarget.name){case"sacrament":c(e.currentTarget.value.trim()),console.log("SACRAMENT",e.currentTarget.value.trim());break;case"neophyteFirstName":z(e.currentTarget.value.trim());break;default:console.log("default")}}),[c]),L=(0,o.useCallback)((e=>{n||_||setTimeout((()=>{G(!0)}),1e3)}),[n,_]);return(0,o.useEffect)((()=>{L()}),[L]),(0,C.jsx)(C.Fragment,{children:Y||_?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(k,{children:Y&&_&&(0,C.jsx)(S.A,{})}),(0,C.jsx)(f,{children:"Add Baptism Form"}),(0,C.jsxs)("form",{onSubmit:i((t=>(t=>{D(!0),console.log("data",t),""!==t.sacrament&&(G(!0),e((0,d.KI)({sacrament:t.sacrament,certificate:t.certificate,baptism:t.baptism,eucharist:t.eucharist,neophyte:{firstName:t.neophyteFirstName}})).then((e=>{console.log("certificate log",e);try{var t,i;if(clearTimeout(H.current),G(!1),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message){const{payload:t}=e;console.log("ERROR",t),setTimeout((()=>{}),4e3)}null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message||(q("Saving..."),setTimeout((()=>{q("Save")}),2e3))}catch(r){console.log("error",r.message)}})))})(t))),children:[r.sacrament&&(0,C.jsx)(A,{children:"Sacrament is required."}),(0,C.jsxs)(g,{children:[(0,C.jsx)(b,{children:"General Information"}),(0,C.jsxs)(j,{children:[(0,C.jsx)(y,{...t("sacrament",{required:!0,value:l}),onChange:K,name:"sacrament",value:l,autoComplete:"off",type:"text",disabled:!0}),(0,C.jsx)(v,{htmlFor:1,children:"First Name"})]}),(0,C.jsx)(u.A,{label:"Certificate",control:(0,C.jsx)(p.xI,{name:"certificate",control:a,defaultValue:!0,value:F,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t})},onClick:e=>{N(e.target.checked)}})}),(0,C.jsx)(u.A,{label:"Baptism",control:(0,C.jsx)(p.xI,{name:"baptism",control:a,defaultValue:!0,value:T,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t})},onClick:e=>{I(e.target.checked)}})}),(0,C.jsx)(u.A,{label:"Eucharist",control:(0,C.jsx)(p.xI,{name:"eucharist",control:a,defaultValue:!0,value:B,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t})},onClick:e=>{R(e.target.checked)}})}),(0,C.jsx)(u.A,{label:"Chrismation",control:(0,C.jsx)(p.xI,{name:"chrismation",control:a,defaultValue:!0,value:E,render:e=>{let{field:t}=e;return(0,C.jsx)(h.A,{...t})},onClick:e=>{V(e.target.checked)}})})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)(b,{children:"Neophyte"}),(0,C.jsxs)(j,{children:[(0,C.jsx)(y,{...t("neophyteFirstName",{required:!0,value:m}),onChange:K,name:"neophyteFirstName",value:m,autoComplete:"off",type:"text",disabled:!1}),(0,C.jsx)(v,{htmlFor:1,children:"First Name"})]})]}),(0,C.jsx)(w,{type:"submit",value:Y&&_?"Saving...":$})]})]}):(0,C.jsx)(S.A,{})})};function F(){const{isLoggedIn:e,isVerified:t}=(0,a.A)(),{baptisms:i}=(0,n.d4)(c),p=(0,s.wA)();return(0,o.useEffect)((()=>{e&&0===i.length&&p((0,d.G7)())}),[p,e,i.length]),e&&t&&(0,C.jsxs)(l.mc,{children:[(0,C.jsx)(r.m,{children:(0,C.jsx)("title",{children:"Add Baptism"})}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h1",{children:"Create Baptismal Record"}),(0,C.jsxs)("div",{children:["Total Number of Baptisms: ",i.total]})]}),(0,C.jsx)(z,{})]})}}}]);
//# sourceMappingURL=354.484a2d8e.chunk.js.map