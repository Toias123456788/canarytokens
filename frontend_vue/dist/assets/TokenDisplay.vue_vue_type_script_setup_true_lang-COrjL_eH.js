import{d as l,a as r,c as d,i,j as _,h as p,W as u,X as f}from"./index-WLcRglgj.js";const m={class:"flex justify-center"},h=l({__name:"TokenDisplay",props:{tokenData:{}},setup(s){const n=s;async function c(){var e,o;const a={fmt:"pdf",auth:(e=n.tokenData)==null?void 0:e.auth,token:(o=n.tokenData)==null?void 0:o.token};try{const t=await u(a);window.location.href=t.request.responseURL}catch(t){console.log(t,"File download failed")}finally{console.log("Donwload ready")}}return(a,e)=>{const o=f;return r(),d("div",m,[i(o,{class:"mt-16",onClick:c},{default:_(()=>[p("Download your PDF file")]),_:1})])}}});export{h as _};
