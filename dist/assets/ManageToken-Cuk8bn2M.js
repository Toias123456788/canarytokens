import{_ as k}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-DwuxuTBr.js";import{d as p,r as d,a as s,c as m,b as _}from"./index-DuETGgtA.js";import"./BaseSwitch-DGyLxMrj.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CgseD616.js";const l={key:0},v=p({__name:"ManageToken",props:{tokenBackendResponse:{}},setup(c){var n,o,t,r;const e=c,a=d({hostname:e.tokenBackendResponse.canarydrop.generated_hostname||"",token:((t=(o=(n=e.tokenBackendResponse)==null?void 0:n.canarydrop)==null?void 0:o.canarytoken)==null?void 0:t._value)||"",auth:((r=e.tokenBackendResponse.canarydrop)==null?void 0:r.auth)||"",encoded:!0});return(u,i)=>a.value?(s(),_(k,{key:1,"token-data":a.value},null,8,["token-data"])):(s(),m("div",l,"Error loading"))}});export{v as default};
