import{d as c,a as o,c as m,g as a,J as g,y as h,p as s,b as u,L as l,e as f,a0 as r,a1 as t,a2 as v,_ as y}from"./index-5VSA5TjA.js";const _={class:"relative flex flex-col justify-between"},k=["id","value","checked","aria-checked"],V=["for"],B=c({__name:"BaseSwitch",props:{id:{},label:{},helperMessage:{},hasError:{type:Boolean},errorMessage:{},loading:{type:Boolean},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(b,{emit:n}){const i=n;function d(e){i("update:modelValue",e.target.checked)}return(e,M)=>{const p=v;return o(),m("div",_,[a("input",g(e.$attrs,{id:e.id,type:"checkbox",role:"switch",class:"toggle",value:e.modelValue,checked:e.modelValue,"aria-checked":e.modelValue,onChange:d}),null,16,k),a("label",{for:e.id,class:l(["relative",[{multiline:e.helperMessage||e.errorMessage},{loading:e.loading}]])},[h(s(e.label)+" ",1),e.loading?(o(),u(p,{key:0,class:l(["absolute right-[0.6rem]",[e.helperMessage?"top-[0.7rem]":"top-[0.2rem]"]]),height:"1rem",variant:e.modelValue===!0?"secondary":"primary"},null,8,["class","variant"])):f("",!0)],10,V),a("div",null,[r(a("p",{id:"helper",class:"text-xs leading-4 text-grey-500 pr-[3rem]"},s(e.helperMessage),513),[[t,e.helperMessage]]),r(a("p",{id:"error",class:"text-xs leading-4 text-red"},s(e.errorMessage),513),[[t,e.hasError]])])])}}}),C=y(B,[["__scopeId","data-v-5463bcaa"]]);export{C as _};
