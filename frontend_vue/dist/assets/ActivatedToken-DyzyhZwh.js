import{d as _,r as c,a as d,c as f,h as m,q as p,y as k,p as h,W as D,F as x,g as v}from"./index-5VSA5TjA.js";const w={class:"flex justify-center"},g=_({__name:"TokenDisplay",props:{tokenData:{}},setup(n){var i,r;const e=n,t=c(`${(i=e.tokenData)==null?void 0:i.file_name}`),a=c((r=e.tokenData)==null?void 0:r.file_contents);function l(){var o,s;a.value=`${(o=e.tokenData)==null?void 0:o.file_name}`,t.value=(s=e.tokenData)==null?void 0:s.file_contents}return(o,s)=>{const u=D;return d(),f("div",w,[m(u,{class:"mt-16",href:t.value,download:a.value,onClick:l},{default:p(()=>[k("Download "+h(e.tokenData.file_name),1)]),_:1},8,["href","download"])])}}}),y=v("p",{class:"mt-16 text-sm"}," Remember, this token is triggered whenever the binary file is executed. For EXEs, this means direct execution and for DLLs, it means they were loaded. ",-1),C=_({__name:"ActivatedToken",props:{tokenData:{}},setup(n){const e=n,t=c({file_name:e.tokenData.file_name||"",file_contents:e.tokenData.file_contents||""});return(a,l)=>(d(),f(x,null,[m(g,{"token-data":t.value},null,8,["token-data"]),y],64))}});export{C as default};
