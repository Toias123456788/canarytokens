import{d as p,r as d,a as i,c as u,f,i as k,j as m,h as D,q as g}from"./index-CmeDvX2u.js";const h={class:"flex flex-col items-center"},q=["src"],x=p({__name:"TokenDisplay",props:{tokenData:{}},setup(r){var s,c;const o=r,t=d(`${(s=o.tokenData)==null?void 0:s.token}.png`),a=d((c=o.tokenData)==null?void 0:c.qrcode_png);function l(){var n,e;a.value=`${(n=o.tokenData)==null?void 0:n.token}.png`,t.value=(e=o.tokenData)==null?void 0:e.qrcode_png}return(n,e)=>{const _=g;return i(),u("div",h,[f("img",{id:"qrcode_png",src:n.tokenData.qrcode_png,alt:"qrcode"},null,8,q),k(_,{class:"mt-16",href:t.value,download:a.value,onClick:e[0]||(e[0]=v=>l())},{default:m(()=>[D("Download QR code")]),_:1},8,["href","download"])])}}});export{x as _};
