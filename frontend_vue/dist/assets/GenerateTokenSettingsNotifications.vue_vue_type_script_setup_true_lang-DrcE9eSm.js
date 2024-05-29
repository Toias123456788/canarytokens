import{d as h,l as _,f as w,a as n,c as m,g as a,h as u,y as g,p as c,i as T,ae as $,af as C,e as k,b as f,J as q,u as s,v as N,a0 as v,a1 as x,L as E,r as S,q as V,w as F}from"./index-5VSA5TjA.js";const M={class:"relative border flex-1 group flex flex-col px-16 sm:px-24 pt-16 pb-24 bg-white rounded-xl top-[0px] shadow-solid-shadow-grey border-grey-200"},W={class:"flex flex-row gap-8 mb-16 text-sm font-semibold text-left text-grey-400"},H=h({__name:"BaseGenerateTokenSettings",props:{settingType:{}},setup(d){const o=d,i=_(()=>{switch(o.settingType){case"Canarytoken":return"gear";case"Notifications":return"bell";default:return"gear"}});return(l,r)=>{const t=w("font-awesome-icon");return n(),m("div",M,[a("h3",W,[u(t,{icon:i.value,class:"pt-4 text-grey-300","aria-hidden":"true"},null,8,["icon"]),g(" "+c(l.settingType)+" Settings ",1)]),T(l.$slots,"default")])}}}),D=["for"],G={key:0,class:"text-green-500"},z={class:"pr-8 mt-4 ml-16"},I=h({__name:"BaseFormTextField",props:{id:{},label:{},multiline:{type:Boolean},helperMessage:{},placeholder:{},required:{type:Boolean},multilineHeight:{},fullWidth:{type:Boolean},disabled:{type:Boolean},value:{}},setup(d){const o=d,i=_(()=>o.multiline?"textarea":"input"),l=$(o,"id"),{value:r,errorMessage:t,handleChange:p}=C(l,void 0,{initialValue:o.value});function b(e){t&&t.value&&p(e)}return(e,y)=>(n(),m("div",{class:E(["flex flex-col text-grey-800 textfield-wrapper",{"w-full":e.fullWidth}])},[a("label",{for:l.value,class:"mb-4 ml-4 font-semibold"},[g(c(e.label)+" ",1),e.required?(n(),m("span",G,"*")):k("",!0)],8,D),(n(),f(N(i.value),q({id:l.value,value:s(r),class:["px-16 py-8 border resize-none shadow-inner-shadow-grey rounded-3xl border-grey-400 focus:ring-green-600 focus-visible:ring-1",[{"border-red shadow-none":s(t)},{"border-grey-200 bg-grey-100 shadow-none text-grey-300":e.disabled}]],style:`height: ${e.multilineHeight}`,placeholder:e.placeholder,"aria-invalid":s(t),"aria-describedby":"helper error",required:e.required,disabled:e.disabled},e.$attrs,{onBlur:s(p),onInput:y[0]||(y[0]=B=>b(B))}),null,16,["id","value","class","style","placeholder","aria-invalid","required","disabled","onBlur"])),a("div",z,[v(a("p",{id:"helper",class:"text-xs leading-4"},c(e.helperMessage),513),[[x,e.helperMessage]]),v(a("p",{id:"error",class:"text-xs leading-4 text-red"},c(s(t)),513),[[x,s(t)]])])],2))}}),R={class:"flex flex-col gap-8 mb-24 sm:mb-24"},L=h({__name:"GenerateTokenSettingsNotifications",props:{memoHelperExample:{}},setup(d){const o=S(!1);return(i,l)=>{const r=I,t=w("font-awesome-icon"),p=H;return n(),f(p,{"setting-type":"Notifications"},{default:V(()=>[a("div",R,[u(r,{id:"email",type:"text",required:"",placeholder:"your-email@email.com",label:"Email","full-width":""}),o.value?(n(),f(r,{key:0,id:"webhook_url",type:"text",placeholder:"http://your-webhook-url.com",label:"Webhook","full-width":""})):k("",!0),a("button",{class:"self-end px-8 py-4 text-xs border rounded-full w-fit grow-0 text-grey-400 border-grey-200 hover:text-green-500 hover:border-green-500",onClick:l[0]||(l[0]=F(b=>o.value=!o.value,["prevent"]))},[u(t,{icon:o.value?"minus":"plus"},null,8,["icon"]),g(" Notify via Webhook ")])]),u(r,{id:"memo",label:"Reminder",placeholder:`E.g: ${i.memoHelperExample}`,multiline:"",required:"","full-width":""},null,8,["placeholder"])]),_:1})}}});export{L as _,I as a,H as b};
