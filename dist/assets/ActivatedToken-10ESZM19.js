import{d as m,r as c,a as i,c as l,i as e,f as t,h as p,I as _,p as f}from"./index-CmeDvX2u.js";import{_ as u}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-DwEwsBfD.js";import{_ as d}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-CFIVJpEi.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CXc-4akO.js";const h={class:"mt-16 text-sm"},k=t("p",{class:"mt-24 text-sm"},null,-1),$=m({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const a=c(o.tokenData.hostname||"");return(n,s)=>{const r=f;return i(),l(_,null,[e(u,{"token-url":a.value},null,8,["token-url"]),t("p",h,[p(" Remember, it gets triggered whenever someone performs a DNS lookup of the hostname. "),e(d,{onHowToUse:s[0]||(s[0]=v=>n.$emit("howToUse"))})]),e(r,{class:"mt-24",variant:"info",message:"The source IP address shown in the alert is the DNS server, not the end user."},null,8,["message"]),k],64)}}});export{$ as default};
