"use strict";(self.webpackChunkp_register=self.webpackChunkp_register||[]).push([[653],{4013:(e,t,n)=>{n.d(t,{mc:()=>a});var i=n(1529);const a=i.Ay.div`
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
`},8122:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(5508);const a=n(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var r=n(579);const o=()=>(0,r.jsx)(a,{children:(0,r.jsx)(i.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},1653:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var i=n(1591),a=n(7614),r=n(8560),o=n(5043),s=n(8298),l=n(4013);const d=e=>e.baptisms;var c=n(7209),p=n(4858),x=n(7933),u=n(1002),g=n(7216),m=n(1529);const h=m.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,f=m.Ay.label`
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
`,b=m.Ay.input`
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
`;var v=n(579);const y=e=>{let{onQueryChange:t,fieldValue:n,fieldName:i,disabledStatus:a,labelName:r}=e;const{register:o}=(0,p.mN)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(h,{children:[(0,v.jsx)(b,{...o(i,{required:!0,value:n}),onChange:t,name:i,value:n,autoComplete:"off",type:"text",disabled:a}),(0,v.jsx)(f,{htmlFor:1,children:r})]})})},j=(m.Ay.img`
  positon: relative;
`,m.Ay.div`
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
`),A=(m.Ay.p`
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
`),w=m.Ay.h6`
  font-size: 25px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  margin-top: 15px;
  text-align: left;

  letter-spacing: -0.02em;
`,k=(m.Ay.p`
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
`),S=(m.Ay.section`
  flex-direction: "row";
  alignitems: "center";
  position: relative;
  margin-top: 30px;
`,m.Ay.img`
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

  &:focus ~ ${k} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${k} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`,m.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`),C=m.Ay.input`
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
`,z=(m.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,m.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`);var N=n(8122);const T=()=>{const e=(0,s.wA)(),{handleSubmit:t,formState:{errors:n},control:i}=(0,p.mN)(),{loading:a}=(0,x.Ay)(),[r,l]=(0,o.useState)("Baptism"),[d,m]=(0,o.useState)(null),[h,f]=(0,o.useState)("Certificate"),[b,k]=(0,o.useState)("Save"),[T,F]=(0,o.useState)(!1),[$,B]=(0,o.useState)(!1),V=(0,o.useRef)(null),Y=(0,o.useCallback)((e=>{" "!==e.currentTarget.value&&("sacrament"===e.currentTarget.name&&l(e.currentTarget.value.trim()),"neophyteFirstName"===e.currentTarget.name&&m(e.currentTarget.value.trim()))}),[l]);console.log("currentValue of the sacrament",r);const I=(0,o.useCallback)((e=>{a||$||setTimeout((()=>{F(!0)}),1e3)}),[a,$]);return(0,o.useEffect)((()=>{I()}),[I]),(0,v.jsx)(v.Fragment,{children:T||$?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(z,{children:T&&$&&(0,v.jsx)(N.A,{})}),(0,v.jsx)(A,{children:"Add Baptism Form"}),(0,v.jsxs)("form",{onSubmit:t((t=>(t=>{B(!0),console.log("data",t),""!==t.sacrament&&(F(!0),e((0,c.KI)({sacrament:t.sacrament,certificate:t.certificate})).then((e=>{try{var t,n;if(clearTimeout(V.current),F(!1),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message){const{payload:t}=e;console.log("ERROR",t),setTimeout((()=>{}),4e3)}null!==e&&void 0!==e&&null!==(n=e.error)&&void 0!==n&&n.message||(k("Saving..."),setTimeout((()=>{k("Save")}),2e3))}catch(i){console.log("error",i.message)}})))})(t))),children:[n.sacrament&&(0,v.jsx)(S,{children:"Sacrament is required."}),(0,v.jsxs)(j,{children:[(0,v.jsx)(w,{children:"General Information"}),(0,v.jsx)(y,{onQueryChange:Y,fieldValue:"Baptism",fieldName:"sacrament",disabledStatus:!0,labelName:"Sacrament"}),(0,v.jsx)(u.A,{label:"Certificate",control:(0,v.jsx)(p.xI,{name:"certificate",control:i,defaultValue:!0,value:h,render:e=>{let{field:t}=e;return(0,v.jsx)(g.A,{...t,defaultChecked:!0})},onClick:e=>{f(e.target.checked)}})})]}),(0,v.jsxs)(j,{children:[(0,v.jsx)(w,{children:"Neophyte"}),(0,v.jsx)(y,{onQueryChange:Y,fieldValue:d,fieldName:"neophyteFirstName",disabledStatus:!1,labelName:"First Name"})]}),(0,v.jsx)(C,{type:"submit",value:T&&$?"Saving...":b})]})]}):(0,v.jsx)(N.A,{})})};function F(){const{isLoggedIn:e,isVerified:t}=(0,a.A)(),{baptisms:n}=(0,r.d4)(d);console.log("Get all baptisms",n);const p=(0,s.wA)();return(0,o.useEffect)((()=>{e&&0===n.length&&p((0,c.G7)())}),[p,e,n.length]),e&&t&&(0,v.jsxs)(l.mc,{children:[(0,v.jsx)(i.m,{children:(0,v.jsx)("title",{children:"Add Baptism"})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Create Baptismal Record"}),(0,v.jsxs)("div",{children:["Total Number of Baptisms: ",n.total]})]}),(0,v.jsx)(T,{})]})}}}]);
//# sourceMappingURL=653.7bd9c812.chunk.js.map