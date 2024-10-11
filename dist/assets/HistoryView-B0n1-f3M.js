import{y as U,a as o,c as a,A as oe,d as L,z as M,f as s,i as f,O as le,I as g,P as S,E as _,h as j,Q as Z,w as ae,r as h,o as Y,C as ie,D as A,e as w,b,j as I,R as F,g as R,K as ee,u as y,n as G,V as J,W as re,X as q,T as V,t as W,Y as O,B as te,Z as z,$ as ce,q as ue,k as de,a0 as pe,a1 as fe,a2 as _e,p as me,l as ge}from"./index-DuETGgtA.js";import{B as X}from"./BannerDeviceCanarytools-C_XnLaoo.js";const ye={},he={class:"grid two-col-grid"};function ve(e,t){return o(),a("div",he,[oe(e.$slots,"default")])}const xe=U(ye,[["render",ve]]),we={class:"w-full @container"},be={class:"flex flex-row items-center flex-1 gap-16"},ke={class:"text-left"},Te={class:"capitalize text-grey-400"},$e={class:"mr-8 font-semibold"},Ce={class:"flex flex-row items-center justify-end gap-8 mt-8 font-semibold text-red sm:hidden"},Ie=L({__name:"CardIncident",props:{lastKey:{type:Boolean},incidentPreviewInfo:{},incidentId:{}},emits:["click"],setup(e,{emit:t}){const n=t;function r(){n("click")}return(i,p)=>{const c=M("font-awesome-icon");return o(),a("li",we,[s("button",Z(i.$attrs,{class:["relative w-full px-16 py-8 transition duration-100 bg-white border text-grey-700 grouped group rounded-2xl shadow-solid-shadow-grey border-grey-200 error-card",{"mb-8":i.lastKey}],onClick:ae(r,["stop"])}),[s("span",be,[f(le,{class:"hidden @xs:block min-w-[30px] group-hover:fill-red group-focus:fill-red group-active:fill-red fill-grey-700 group-hover:scale-95 transition duration-200","aria-hidden":"true"}),s("span",ke,[(o(!0),a(g,null,S(i.incidentPreviewInfo,(u,m)=>(o(),a("span",{key:m,class:"block"},[s("span",Te,_(m)+": ",1),s("span",$e,_(u),1)]))),128))])]),s("span",Ce,[p[0]||(p[0]=j("Check Incident ")),f(c,{icon:"arrow-right",class:"text-red","aria-hidden":"true"})])],16)])}}}),Le=U(Ie,[["__scopeId","data-v-8d14ca6b"]]),Se={key:0},De={key:1,class:"placeholder-map"},Be={class:"font-medium"},Me={class:"pb-8"},Ee={class:"font-medium"},Ne={class:"pt-8"},Oe=L({__name:"CustomMap",props:{hitsList:{}},setup(e){const t=e,n=h(!0),r=h(),i=h(),p=h({lat:0,lng:0});function c(l){const d=l.split(",");return{lat:parseFloat(d[0]),lng:parseFloat(d[1])}}Y(()=>{if(t.hitsList.length!==0){if(t.hitsList.length>1)return D();t.hitsList.length===1&&(p.value=c(t.hitsList[0].geo_info.loc))}});const u=ie(()=>t.hitsList.map(l=>({id:l.time_of_hit,ip:l.geo_info.ip,hostname:l.geo_info.hostname,city:l.geo_info.city,country:l.geo_info.country,date:F(l.time_of_hit),position:l.geo_info.loc?c(l.geo_info.loc):void 0})));function m(l){r.value=l}async function D(){const l=await i.value.$mapPromise,d=new window.google.maps.LatLngBounds;u.value.forEach(x=>{d.extend(x.position)}),l.fitBounds(d)}A(i,()=>{i.value&&i.value.$mapPromise.then(()=>{n.value=!1})});const k=({count:l,position:d})=>new window.google.maps.Marker({label:{text:`${l}`,color:"white",fontWeight:"600"},icon:{url:R("icons/map-cluster-pin.png"),scaledSize:{width:40,height:40}},position:d,zIndex:1e3+l}),T={zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,rotateControl:!0,fullscreenControl:!1,styles:[{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{lightness:"52"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{lightness:"60"}]},{featureType:"administrative.province",elementType:"labels.text.fill",stylers:[{lightness:"24"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{lightness:"29"}]},{featureType:"administrative.locality",elementType:"labels.icon",stylers:[{lightness:"47"},{hue:"#ff0000"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:13.400000000000006},{lightness:57.599999999999994},{gamma:1}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-1.0989010989011234},{lightness:11.200000000000017},{gamma:1}]},{featureType:"road.highway",elementType:"all",stylers:[{saturation:-61.8},{lightness:45.599999999999994},{gamma:1}]},{featureType:"road.arterial",elementType:"all",stylers:[{saturation:-100},{lightness:51.19999999999999},{gamma:1}]},{featureType:"road.local",elementType:"all",stylers:[{saturation:-100},{lightness:52},{gamma:1}]},{featureType:"water",elementType:"all",stylers:[{saturation:-13.200000000000003},{lightness:2.4000000000000057},{gamma:1}]},{featureType:"water",elementType:"geometry.fill",stylers:[{lightness:"38"},{saturation:"-55"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:"65"},{saturation:"52"}]}]};return(l,d)=>{const x=ee,v=M("GMapInfoWindow"),C=M("GMapMarker"),E=M("GMapCluster"),se=M("GMapMap");return o(),a(g,null,[n.value?(o(),a("div",Se,[f(x,{type:"rectangle",class:"md:h-[40svh] h-[30svh]"})])):w("",!0),!n.value&&l.hitsList.length===0?(o(),a("div",De)):(o(),b(se,Z({key:2},l.$attrs,{ref_key:"mapRef",ref:i,zoom:6,center:p.value,"map-type-id":"terrain",class:"grid-areas rounded-2xl",options:T}),{default:I(()=>[f(E,{renderer:{render:k},"zoom-on-click":!0},{default:I(()=>[(o(!0),a(g,null,S(u.value,($,ne)=>(o(),b(C,{key:ne,position:$.position,clickable:!0,icon:{url:y(R)("icons/map-pin.png"),scaledSize:{width:60,height:60},labelOrigin:{x:16,y:-60}},onClick:N=>m($.id)},{default:I(()=>[f(v,{closeclick:!0,opened:r.value===$.id,class:"px-8 py-8",onCloseclick:d[0]||(d[0]=N=>m(null))},{default:I(()=>{var N,H;return[s("ul",null,[s("li",null,[d[1]||(d[1]=j(" From IP: ")),s("span",Be,_($.ip),1)]),s("li",Me,_($.hostname),1),s("li",Ee,_($.date),1),s("li",Ne,_($.city)+", "+_($.country),1),s("li",null," Lat: "+_(((N=$.position)==null?void 0:N.lat)||"")+", Lng: "+_(((H=$.position)==null?void 0:H.lng)||""),1)])]}),_:2},1032,["opened"])]),_:2},1032,["position","icon","onClick"]))),128))]),_:1},8,["renderer"])]),_:1},16,["center"]))],64)}}}),Pe={class:"block text-xs uppercase text-grey-500"},P=L({__name:"IncidentDetailsListItem",props:{label:{},value:{type:[String,Boolean,Number]}},setup(e){function t(n){if(typeof n=="boolean")return n?"text-green":"text-red"}return(n,r)=>(o(),a("li",null,[s("span",Pe,_(n.label),1),s("span",{class:G(t(n.value))},_(n.value),3)]))}}),je={class:"p-16 text-white rounded-md bg-red"},Ve={class:"flex flex-col justify-between gap-24 mt-16 md:flex-row"},ze={class:"flex flex-col gap-2"},Re={class:"font-semibold"},Ge={class:"flex flex-col gap-2"},We={class:"font-semibold"},Ke={class:"flex flex-col gap-2"},Ue={class:"font-semibold"},Ye=L({__name:"IncidentDetailsSummary",props:{date:{},ip:{},inputChannel:{}},setup(e){return(t,n)=>(o(),a("section",je,[n[3]||(n[3]=s("h2",{class:"font-semibold"},"Incident info",-1)),s("ul",Ve,[s("li",ze,[n[0]||(n[0]=s("span",{class:"text-xs text-red-100"},"Date",-1)),s("span",Re,_(t.date)+" ",1)]),s("li",Ge,[n[1]||(n[1]=s("span",{class:"text-xs text-red-100"},"IP",-1)),s("span",We,_(t.ip),1)]),s("li",Ke,[n[2]||(n[2]=s("span",{class:"text-xs text-red-100"},"Channel",-1)),s("span",Ue,_(t.inputChannel),1)])])]))}});function Fe(e,t){return q.hasOwnProperty(t)?q[t]:e}function He(e){return e.replace(/_/g," ").replace(/^(.)/,function(n,r){return r.toUpperCase()})}function K(e){try{return Object.entries(e).reduce((t,[n,r])=>{const i=J.hasOwnProperty(n)?J[n]:He(n);return typeof r=="object"&&r!==null?t[i]=K(r):t[i]=r,t},{})}catch(t){return console.error(`Error in formatting labels: ${t}`),e}}function Je(e){const t=Object.values(V).find(n=>n===e);return t?W[t].label:e}function B(e){return typeof e=="object"&&e!==null?Array.isArray(e)?e.length>0:Object.values(e).some(t=>t!=null&&(typeof t!="object"||Object.keys(t).length>0)):e!=null}function qe(e){return e===V.CREDIT_CARD}function Xe(e){return e===V.AWS_KEYS}function Qe(e){return e===V.PWA}function Ze(e,t){return Qe(e)?typeof t=="string"?t:t==null?void 0:t.coords:t}function Q(e){var t;try{return{basic_info:{token_type:Je(e.token_type),input_channel:Fe(e.input_channel,e.token_type),src_data:e.src_data,useragent:e.useragent||null,last4:e.last4||null,amount:e.amount||null,merchant:e.merchant||null,mail:e.mail||null,referer:e.referer||null,location:e.location&&Ze(e.token_type,e.location)||null},time_of_hit:F(e.time_of_hit),src_ip:e.src_ip,geo_info:e.geo_info.bogon?{ip:e.geo_info.ip,bogon:e.geo_info.bogon}:{...e.geo_info},is_tor_relay:qe(e.token_type)?null:e.is_tor_relay,additional_info:{...e.additional_info,aws_key_log_data:Xe(e.token_type)&&e.additional_info.aws_key_log_data?{last_used:e.additional_info.aws_key_log_data.last_used?re(e.additional_info.aws_key_log_data.last_used):null,service_used:e.additional_info.aws_key_log_data.service_used,eventName:((t=e.additional_info.aws_key_log_data)==null?void 0:t.eventName)??null}:null}}}catch(n){return console.error(`Error in building the Incident Details object: ${n}`),e}}const Ae={class:"pb-32 bg-white sm:m-8 rounded-3xl"},et={class:"sticky top-[0px] bg-white h-[4rem] sm:h-40 flex justify-end"},tt={class:"px-16"},st={class:"grid md:grid-cols-[auto_1fr] gap-32 mt-32 pl-8"},nt={key:0,class:"text-grey-500"},ot={key:1,class:"flex flex-col gap-16 pb-16 [&:not(:last-child)]:border-b md:ml-32 border-grey-100"},lt={key:0,class:"break-words"},at={class:"text-grey-500"},it=L({__name:"IncidentDetails",props:{hitAlert:{}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,i=h(null),p=h({});return Y(()=>{i.value=Q(n.hitAlert),p.value=K(i.value)}),A(()=>n.hitAlert,()=>{i.value=Q(n.hitAlert),p.value=K(i.value)}),(c,u)=>{var D;const m=M("font-awesome-icon");return o(),a("div",Ae,[s("div",et,[s("button",{type:"button",class:"px-16",onClick:u[0]||(u[0]=k=>r("close"))},[f(m,{icon:"xmark",class:"w-24 h-24 sm:w-16 sm:h-16 text-grey-400 hover:text-grey-200"})])]),s("div",tt,[i.value?(o(),b(Ye,{key:0,date:(D=i.value)==null?void 0:D.time_of_hit,ip:i.value.src_ip,"input-channel":i.value.basic_info.input_channel},null,8,["date","ip","input-channel"])):w("",!0),s("section",st,[(o(!0),a(g,null,S(p.value,(k,T)=>(o(),a(g,{key:T},[y(B)(T)&&y(B)(k)?(o(),a("h3",nt,_(T)+": ",1)):w("",!0),y(B)(k)?(o(),a("ul",ot,[y(O)(k)?(o(!0),a(g,{key:1},S(k,(l,d)=>(o(),a(g,{key:d},[y(B)(l)?(o(),a("ul",lt,[y(O)(l)?(o(),a(g,{key:1},[s("ul",null,[s("h3",at,_(d)+":",1),(o(!0),a(g,null,S(l,(x,v)=>(o(),a(g,{key:v},[!y(O)(x)&&y(B)(x)?(o(),b(P,{key:0,label:v,value:x,class:"py-8 ml-24"},null,8,["label","value"])):(o(!0),a(g,{key:1},S(x,(C,E)=>(o(),a(g,{key:E},[!y(O)(C)&&y(B)(C)?(o(),b(P,{key:0,label:v,value:C,class:"py-8 ml-24"},null,8,["label","value"])):w("",!0)],64))),128))],64))),128))]),u[1]||(u[1]=s("div",{class:"border-b border-grey-100"},null,-1))],64)):(o(),b(P,{key:0,label:d,value:l},null,8,["label","value"]))])):w("",!0)],64))),128)):(o(),b(P,{key:0,value:k},null,8,["value"]))])):w("",!0)],64))),128))])])])}}}),rt=U(it,[["__scopeId","data-v-fa1dc03c"]]),ct={class:"flex flex-row flex-wrap items-center justify-between px-16 py-8 mb-8 bg-white border rounded-2xl shadow-solid-shadow-grey border-grey-100"},ut={class:"flex flex-row"},dt=L({__name:"AlertsListDownload",setup(e){const t=te(),n=h(!1),r=h(!1);function i(p){p===z.CSV?n.value=!0:r.value=!0;const c={fmt:p,auth:t.params.auth,token:t.params.token};ce(c).then(u=>{window.location.href=u.request.responseURL}).catch(u=>{console.log(u,"err")}).finally(()=>{n.value=!1,r.value=!1,console.log("You downloaded the file, yay!")})}return(p,c)=>{const u=ue;return o(),a("li",ct,[c[4]||(c[4]=s("p",{class:"text-sm text-grey-500"},"Download list",-1)),s("div",ut,[f(u,{variant:"text",icon:"file",loading:n.value,onClick:c[0]||(c[0]=m=>i(y(z).CSV))},{default:I(()=>c[2]||(c[2]=[j("CSV")])),_:1},8,["loading"]),f(u,{variant:"text",icon:"file-excel",loading:r.value,onClick:c[1]||(c[1]=m=>i(y(z).JSON))},{default:I(()=>c[3]||(c[3]=[j("JSON")])),_:1},8,["loading"])])])}}}),pt={class:"flex flex-col gap-16 mx-16 mt-[60px]"},ft={class:"flex flex-col gap-16 mt-[60px]"},_t={class:"flex flex-col h-full gap-16 pb-16"},mt={key:0,class:"flex flex-col items-center justify-center flex-grow px-16 py-16 align-middle"},gt=["src"],yt=L({__name:"HistoryToken",emits:["update-token-title"],setup(e,{emit:t}){const n=t,r=te(),i=de(),p=h(!1),c=h(null),u=h(),m=h();Y(async()=>{await D()});async function D(){p.value=!0;const T={auth:r.params.auth,token:r.params.token};try{const d=await(await pe(T)).data;u.value=d.history.hits.sort((x,v)=>v.time_of_hit-x.time_of_hit),n("update-token-title",d.history.token_type,r.params.token)}catch(l){console.log(l,"err!"),c.value=l.toString(),i.push({name:"error"})}finally{p.value=!1}}async function k(T){await _e(()=>{m.value=T;const l=document.getElementById("incident_detail");l?l.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})})}return(T,l)=>{const d=ee,x=me;return o(),a(g,null,[p.value?(o(),a(g,{key:0},[s("div",pt,[f(d,{type:"header",class:"w-[200px]"}),f(d,{class:"h-[10vh]"}),f(d,{class:"h-[10vh]"}),f(d,{class:"h-[10vh]"})]),s("div",ft,[f(d,{class:"h-[50svh] w-full"}),f(d,{class:"h-[20svh] w-full"})])],64)):w("",!0),c.value?(o(),b(x,{key:1,variant:"danger",message:"Oh no! Something went wrong. Please refresh the page or try again later."})):w("",!0),u.value?(o(),a(g,{key:2},[s("div",{id:"alerts-card-list",class:G(["flex-col md:p-16 md:bg-grey-50 md:rounded-3xl md:overflow-scroll md:max-h-[70svh]",{"hidden md:block":m.value}])},[s("ul",_t,[l[2]||(l[2]=s("h2",{class:"font-semibold leading-5 text-grey-800"},"Alerts list",-1)),u.value.length===0?(o(),a("li",mt,[l[1]||(l[1]=s("p",{class:"text-xl text-center text-grey-400"}," There are no alerts for this Canarytoken. ",-1)),s("img",{src:y(R)("token_icons/default.png"),alt:"No alerts",class:"grayscale opacity-50 w-[50%] not-sr-only group-hover:opacity-100 sm:block mt-16"},null,8,gt)])):(o(),b(dt,{key:1})),(o(!0),a(g,null,S(u.value,(v,C)=>(o(),b(Le,{key:C,"last-key":C===u.value.length-1,"incident-id":v.time_of_hit,"incident-preview-info":{Date:y(F)(v.time_of_hit),IP:v.src_ip,Channel:v.input_channel},onClick:E=>k(v)},null,8,["last-key","incident-id","incident-preview-info","onClick"]))),128)),f(X,{class:"flex sm:hidden"})])],2),s("div",null,[s("div",{class:G(["@md:relative md:h-[45svh] h-[30svh]",u.value.length===0?"hidden sm:grid":"grid"])},[f(fe,{name:"slide-fade"},{default:I(()=>[m.value?(o(),b(rt,{key:0,id:"incident_detail","hit-alert":m.value,class:"absolute top-[120px] left-[0] md:top-[0px] md:relative grid-areas z-10 md:overflow-scroll w-full sm:w-auto",onClose:l[0]||(l[0]=v=>m.value=null)},null,8,["hit-alert"])):w("",!0)]),_:1}),f(Oe,{"hits-list":u.value},null,8,["hits-list"])],2),f(X,{class:"hidden sm:flex"})])],64)):w("",!0)],64)}}}),ht={key:0,class:"flex flex-col items-center gap-8 mt-16"},vt={class:"mb-24 text-xl text-center text-grey-500"},xt={class:"text-grey-300"},wt={class:"font-semibold"},Tt=L({__name:"HistoryView",setup(e){const t=h(""),n=h(""),r=h("");function i(p,c){t.value=W[p].label,r.value=W[p].icon,n.value=c}return(p,c)=>(o(),a(g,null,[t.value&&n.value&&r.value?(o(),a("div",ht,[f(ge,{title:t.value,"logo-img-url":r.value,class:"h-[4rem] w-[4rem]","has-shadow":!1},null,8,["title","logo-img-url"]),s("div",vt,[s("h2",null,[s("span",xt,_(t.value)+" Canarytoken ID: ",1),s("span",wt,_(n.value),1)])])])):w("",!0),f(xe,null,{default:I(()=>[f(yt,{onUpdateTokenTitle:c[0]||(c[0]=(u,m)=>i(u,m))})]),_:1})],64))}});export{Tt as default};