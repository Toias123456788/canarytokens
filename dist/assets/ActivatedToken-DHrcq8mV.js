import{d as i,r as m,a as c,c as p,i as e,f as _,h as f,I as d,p as l}from"./index-CmeDvX2u.js";import{_ as u}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-BgrUG5RI.js";import{_ as k}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-CFIVJpEi.js";const h={class:"mt-24 text-sm"},$=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(a){const t=a,n=m({token:t.tokenData.token||"",auth:t.tokenData.auth_token||""});return(s,o)=>{const r=l;return c(),p(d,null,[e(u,{"token-data":n.value},null,8,["token-data"]),_("p",h,[f(" You'll get an alert whenever this document is opened in Microsoft Office, on Windows or macOS. "),e(k,{onHowToUse:o[0]||(o[0]=w=>s.$emit("howToUse"))})]),e(r,{class:"mt-24",variant:"info",message:"You can rename the document without affecting its operation."})],64)}}});export{$ as default};
