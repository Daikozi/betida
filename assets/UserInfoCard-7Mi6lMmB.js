import{r as N,u as z,g as O,j as a,c as M,a as n,i as $,k}from"./iframe-BKa3Civw.js";import{n as c}from"./image-BfetefmT.js";import{m as S}from"./main-Cr1CrV_P.js";import{B as x}from"./Box-CIIZF0s1.js";import{T as d}from"./Typography-SnJ5X5BM.js";import{S as p}from"./Stack-DApcRZa2.js";import{g as U,a as D,s as g,c as T,m as v}from"./memoTheme-opsjPoLJ.js";import{c as f}from"./createSimplePaletteValueFilter-bm0fmN_7.js";function _(e){return U("MuiLinearProgress",e)}D("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const C=4,j=k`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,A=typeof j!="string"?$`
        animation: ${j} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,P=k`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,K=typeof P!="string"?$`
        animation: ${P} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,I=k`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,E=typeof I!="string"?$`
        animation: ${I} 3s infinite linear;
      `:null,V=e=>{const{classes:r,variant:t,color:o}=e,h={root:["root",`color${n(o)}`,t],dashed:["dashed",`dashedColor${n(o)}`],bar1:["bar","bar1",`barColor${n(o)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",t!=="buffer"&&`barColor${n(o)}`,t==="buffer"&&`color${n(o)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return T(h,_,r)},w=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.5),X=g("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${n(t.color)}`],r[t.variant]]}})(v(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{backgroundColor:w(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),F=g("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${n(t.color)}`]]}})(v(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(f()).map(([r])=>{const t=w(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),E||{animation:`${I} 3s infinite linear`}),W=g("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(v(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${C}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${C}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:A||{animation:`${j} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),G=g("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(v(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:w(e,r),transition:`transform .${C}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:K||{animation:`${P} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),H=N.forwardRef(function(r,t){const o=z({props:r,name:"MuiLinearProgress"}),{className:h,color:R="primary",value:y,valueBuffer:L,variant:s="indeterminate",...q}=o,l={...o,color:R,variant:s},u=V(l),B=O(),m={},b={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&y!==void 0){m["aria-valuenow"]=Math.round(y),m["aria-valuemin"]=0,m["aria-valuemax"]=100;let i=y-100;B&&(i=-i),b.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&L!==void 0){let i=(L||0)-100;B&&(i=-i),b.bar2.transform=`translateX(${i}%)`}return a.jsxs(X,{className:M(u.root,h),ownerState:l,role:"progressbar",...m,ref:t,...q,children:[s==="buffer"?a.jsx(F,{className:u.dashed,ownerState:l}):null,a.jsx(W,{className:u.bar1,ownerState:l,style:b.bar1}),s==="determinate"?null:a.jsx(G,{className:u.bar2,ownerState:l,style:b.bar2})]})}),J=e=>{const{default:{hero:{userInfo:r}}}=S;return a.jsxs(x,{...e,children:[a.jsx(d,{variant:"h5",color:"text.secondary",mb:4,children:r.userName}),a.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,mb:2,sx:{position:"relative"},children:[a.jsx(d,{color:"text.secondary",sx:{fontWeight:"500"},children:r.progress.label}),a.jsx(x,{sx:{position:"absolute",transform:"translate(50%, -40%)",top:"50%",right:"50%"},children:a.jsx(c,{src:"/assets/svg/arrow_right.svg",alt:"info",width:24,height:24})}),a.jsxs(p,{direction:"row",spacing:.5,alignItems:"center",children:[a.jsx(d,{color:"text.secondary",children:r.progress.score}),a.jsx(c,{src:"/assets/svg/info.svg",alt:"info",width:24,height:24})]})]}),a.jsx(H,{variant:"determinate",value:r.progress.value,"aria-label":"Progression VIP utilisateur"}),a.jsxs(p,{direction:"row",justifyContent:"space-between",alignItems:"center",mt:3,sx:{position:"relative",width:"100%"},children:[a.jsxs(p,{direction:"row",spacing:1,alignItems:"center",children:[a.jsx(c,{src:"/assets/svg/none.svg",alt:"info",width:24,height:24}),a.jsx(d,{variant:"body2",color:"text.secondary",children:r.statut.current})]}),a.jsx(x,{sx:{position:"absolute",transform:"translate(50%, -40%)",top:"50%",right:"50%"},children:a.jsx(c,{src:"/assets/svg/arrow_right.svg",alt:"info",width:24,height:24})}),a.jsxs(p,{direction:"row",spacing:1,alignItems:"center",children:[a.jsx(d,{variant:"body2",color:"text.secondary",children:r.statut.next}),a.jsx(c,{src:"/assets/svg/bronze.svg",alt:"info",width:24,height:24})]})]})]})};J.__docgenInfo={description:"",methods:[],displayName:"UserInfoCard"};export{J as U};
