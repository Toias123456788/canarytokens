import{d as c,r as i,a,c as m,b as r,i as l,f as _,I as d,p}from"./index-DAcKbt9l.js";import{_ as k}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-vr2m4yQI.js";import"./BaseCopyButton-CJP-vrii.js";const y=c({__name:"ActivatedToken",props:{tokenData:{}},setup(s){const e=s,t=i({name_on_card:e.tokenData.name_on_card||"",card_number:e.tokenData.card_number||"",expiry_month:e.tokenData.expiry_month||"",expiry_year:e.tokenData.expiry_year||"",cvv:e.tokenData.cvv||""});return(u,n)=>{const o=p;return a(),m(d,null,[t.value?(a(),r(k,{key:1,"token-data":t.value},null,8,["token-data"])):(a(),r(o,{key:0,class:"mt-24",variant:"info",message:"Credit card token not available yet'"})),l(o,{class:"mt-24",variant:"info",message:"If the card number is ever used in an authorization, the transaction will be declined, but you will be alerted.'"}),n[0]||(n[0]=_("p",{class:"mt-24 text-sm"},null,-1))],64)}}});export{y as default};
