import{j as e,z as D,A as k,C as B,D as z,E as Y,J as W,r as l,n as E,p as G,K as S,u as P,T,N as H,R as j,g as M,L as Z,O as v,i as F,Q as V,V as h,e as C,h as K,W as X,X as J,Y as q,Z as U,_ as Q,$}from"./vendor-xBiLovak.js";import{i as ee,p as b,b as te}from"./utils-DNdCMZ6f.js";import{F as R,D as se,b as oe}from"./desktop-B5dzp7rB.js";import{T as ne,F as O,u as ie,M as ae,S as re,L as ce}from"./models-CbD3qXGu.js";import{P as le}from"./phoneScreen-tLE9Omq7.js";import"./lodash-oNHrlTz8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();function de(){return e.jsx("div",{className:"credit",children:e.jsx("p",{children:"(c) 2024 Rizki Fikriansyah"})})}function ue(){const t=ee()?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx(D,{}),": Rotate"]}),e.jsxs("p",{children:[e.jsx(k,{}),": Pan"]}),e.jsxs("p",{children:[e.jsx(B,{}),": Zoom"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx(z,{}),": Rotate"]}),e.jsxs("p",{children:[e.jsx(Y,{}),": Pan"]}),e.jsxs("p",{children:[e.jsx(W,{}),": Zoom"]})]});return e.jsx("div",{className:"guide",children:t})}const x={PRIMARY_COLOR:"#a8bdc3",DARK_PRIMARY_COLOR:"#7f8f94",SECONDARY_COLOR:"#cfe7d7",ACCENT_COLOR:"#37505C",TEXT_PRIMARY_COLOR:"#201e1d",TEXT_SECONDARY_COLOR:"#9ba3a7",HIGHLIGHT_COLOR:"#e4e1dc"},A={OFF:"#343434",ON:"#fafafa"};function pe(n){const{isLaptopOn:t,setIsLaptopOn:o,onLaptopOff:a,onLaptopOn:s}=n,[i,c]=l.useState(A.OFF),u=E(),d=new Audio("sfx/boot-sound.m4a");d.volume=.5;const m=new Audio("sfx/keyboard-click.wav"),{isMacbookOpen:p}=l.useContext(R);l.useEffect(()=>{t?(s==null||s(),u.moveTo([-.102,1.03,2.19]).lookAt({target:[.010180646082962388,.1523548337264966,-1]})):(a==null||a(),u.refresh().clip().fit())},[t,a,s,u]);const f=l.useContext(R);return e.jsxs("group",{"position-y":-1.5,children:[e.jsxs("mesh",{position:[0,.51,-.4],scale:[2.5,.04,1],...b,onClick:g=>{m.play(),c(t?A.OFF:A.ON),g.stopPropagation(),t||d.play(),o(!t)},name:"powerButton",children:[e.jsx("boxGeometry",{}),e.jsx("meshBasicMaterial",{color:i,transparent:!0,opacity:.2})]}),e.jsx(ne,{visible:p&&!t,font:O.INDIE_FLOWER_TTF,position:[.1,.88,-.45],textAlign:"center",color:x.SECONDARY_COLOR,direction:"DOWN",children:"Turn on the laptop"}),t&&e.jsx(G,{occlude:"blending",zIndexRange:[100,0],transform:!0,wrapperClass:"htmlPortfolio",distanceFactor:.94,position:[0,1.57,S?-1.3:-1.42],"rotation-x":-.256,receiveShadow:!0,children:e.jsx(R.Provider,{value:f,children:e.jsx(se,{})})})]})}const me="/assets/5-tone-BIT_6UJv.jpg",he="/assets/point--ZIPE4oA.png",_=({...n})=>{const t=P(T,he);return e.jsxs("mesh",{rotation:[-Math.PI/2,0,0],...n,children:[e.jsx("planeGeometry",{args:[.5,.5]}),e.jsx("meshBasicMaterial",{map:t,transparent:!0})]})},xe=new Audio("sfx/light-switch.m4a"),N=({children:n,onColor:t,offColor:o,onChange:a,markerPosition:s=[.1,.4,.1],markerRotation:i=[-Math.PI/2,0,0],markerScale:c=.3,...u})=>{const d=P(T,me);d.minFilter=d.magFilter=H,d.generateMipmaps=!1;const[m,p]=j.useState(!1),[f,g]=M(()=>({textColor:o,config:Z.stiff})),y=I=>{p(w=>!w),xe.play(),g.start({textColor:I?t:o}),a==null||a(I)};return e.jsxs(v,{font:O.BEBAS_JSON,bevelEnabled:!0,bevelSize:.01,bevelThickness:.01,letterSpacing:.1,onClick:I=>{I.stopPropagation(),y(!m)},castShadow:!0,...u,...b,children:[n,e.jsx(F.meshToonMaterial,{color:f.textColor,gradientMap:d}),e.jsx(_,{visible:!m,position:s,rotation:i,scale:c})]})};function fe(){const{toggleLight:n,addDevice:t}=ie();return t("firstName",1),t("lastName",1),e.jsxs(l.Suspense,{children:[e.jsx(N,{offColor:x.DARK_PRIMARY_COLOR,onColor:x.PRIMARY_COLOR,size:.4,height:.1,position:[-1.9,-1,.8],"rotation-x":-0,"rotation-y":1.6,curveSegments:12,onChange:o=>{n("firstName",o)},children:"Rizki"}),e.jsx(N,{offColor:x.DARK_PRIMARY_COLOR,onColor:x.PRIMARY_COLOR,size:.32,height:.07,position:[-1.45,-1,1.7],"rotation-x":-Math.PI/2,"rotation-y":0,curveSegments:12,onChange:o=>{n("lastName",o)},markerRotation:[0,0,0],markerPosition:[.2,.1,.09],children:"Fikriansyah"})]})}const r={target:[-.8,.2,-.5],azimuthAngle:.6,polarAngle:1.24,minDistance:2,maxDistance:7,speed:.5,enabled:!0,panLimit:3};function ge({...n}){const t=l.useRef(null);return e.jsx(e.Fragment,{children:e.jsx(V,{ref:t,makeDefault:!0,minAzimuthAngle:-Math.PI/4,maxAzimuthAngle:Math.PI/2,minPolarAngle:Math.PI/12,maxPolarAngle:Math.PI/2,dampingFactor:.1,enablePan:!0,enableZoom:!0,maxDistance:r.maxDistance,minDistance:r.minDistance,rotateSpeed:r.speed,panSpeed:r.speed,zoomSpeed:r.speed,onChange:()=>{var c;const o=(c=t.current)==null?void 0:c.target;if(!o)return;let a=0,s=0,i=0;Array.isArray(r.panLimit)?(a=h(o.x,r.panLimit[0],r.panLimit[1]),s=h(o.x,r.panLimit[2],r.panLimit[3]),s=h(o.x,r.panLimit[3],r.panLimit[5])):(a=h(o.x,-r.panLimit,r.panLimit),s=h(o.y,-r.panLimit,r.panLimit),i=h(o.z,-r.panLimit,r.panLimit)),o.setX(a),o.setY(s),o.setZ(i)},...n})})}const L={SOCIAL_MEDIA_NOTE_POSITION:[2.56,-1.03,.6],SOCIAL_MEDIA_NOTE_REVEALED_POSITION:[2.93,-1.03,.7],SOCIAL_MEDIA_NOTE_REVEALED_DURATION:500};function je(){const[n,t]=j.useState(!1),[o,a]=j.useState(!1),s=j.useRef(null),i=j.useRef(null),c=E(),[u,d]=M(()=>({position:L.SOCIAL_MEDIA_NOTE_POSITION,config:{mass:1,tension:170,friction:26,duration:L.SOCIAL_MEDIA_NOTE_REVEALED_DURATION,easing:K.easeOutSine}}));l.useEffect(()=>{n?(d.start({position:L.SOCIAL_MEDIA_NOTE_REVEALED_POSITION}),s.current&&c.refresh(s.current).clip().fit()):(d.start({position:L.SOCIAL_MEDIA_NOTE_POSITION}),c.refresh().clip().fit())},[c,n,d]),l.useEffect(()=>{o?i.current&&c.refresh(i.current).clip().fit():c.refresh().clip().fit()},[o,c]);const m=()=>{t(!n)};return e.jsxs(e.Fragment,{children:[e.jsxs("group",{position:[1.25,-.98,.7],"rotation-y":-.2,onClick:p=>{p.stopPropagation(),a(!o)},ref:i,...b,children:[e.jsx(_,{visible:!o,position:[0,.011,0],scale:.5}),e.jsxs("mesh",{scale:[.7,.01,.8],children:[e.jsx("boxGeometry",{}),e.jsx("meshStandardMaterial",{color:"#C0B375"})]}),e.jsx(C,{font:O.INDIE_FLOWER_TTF,fontSize:.08,position:[.02,.01,0],rotation:[-Math.PI/2,0,0],color:"#393533",maxWidth:.7,lineHeight:1.6,children:`Creative Developer
Innovative Engineer
A Husband and
a Loving Father`})]}),e.jsxs(F.group,{position:u.position.to((p,f,g)=>[p,f,g]),"rotation-y":.3,onClick:m,ref:s,...b,children:[e.jsx(_,{visible:!n,position:[.3,.0315,.3],scale:.5}),e.jsxs("mesh",{scale:[.7,.005,.8],children:[e.jsx("boxGeometry",{}),e.jsx("meshStandardMaterial",{color:"#C0B375"})]}),e.jsx(C,{font:O.INDIE_FLOWER_TTF,fontSize:.09,position:[.02,.0305,0],rotation:[-Math.PI/2,0,0],color:"#393533",maxWidth:.6,children:"Got a project in mind? I’m all ears and ready to connect."})]})]})}const Se=()=>{const{isMacbookOn:n,setIsMacbookOn:t}=l.useContext(R);return e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(ae,{castShadow:!0,isInteractionEnabled:!n,"position-y":-1.5}),e.jsx(pe,{isLaptopOn:n,setIsLaptopOn:o=>{t(o)}}),e.jsx(re,{}),e.jsx(le,{}),e.jsx(je,{}),e.jsx(fe,{})]})},Oe=()=>{const n=Float32Array.from({length:100},()=>Math.random()*2),[t,o]=l.useState(!1);return l.useEffect(()=>{setTimeout(()=>{o(!0)},250)}),e.jsx(e.Fragment,{children:t&&e.jsx(X,{castShadow:!1,receiveShadow:!1,size:n,position:[0,1,0],scale:5,count:100,color:"#FFF5B6"})})},Ie=()=>e.jsxs(v,{font:O.BEBAS_JSON,bevelEnabled:!0,bevelSize:.01,bevelThickness:.01,letterSpacing:.5,scale:.2,rotation:[0,Math.PI/6,0],position:[-1,0,.5],castShadow:!0,children:["Loading...",e.jsx("meshBasicMaterial",{color:x.PRIMARY_COLOR})]});function Le(){const n=!te();return e.jsxs(l.Suspense,{fallback:e.jsx(Ie,{}),children:[n,e.jsx("color",{args:["#0a0a0a"],attach:"background"}),e.jsx(J,{position:[-4,5,0],angle:2,distance:15,attenuation:12,radiusTop:2,radiusBottom:3.5,color:"#FFF5B6",penumbra:.5,opacity:.3,anglePower:4,intensity:.1,castShadow:!0}),!S&&e.jsx("directionalLight",{color:"#fafada",position:[-5.6,1.7,5],intensity:1}),e.jsx("ambientLight",{intensity:.6,color:"#fafada"}),!S&&e.jsx(Oe,{}),e.jsx(ce,{color:"#BECFA5",maxIntensity:10,minIntensity:0,intensity:0,children:e.jsx(oe,{children:e.jsx(q,{fit:!0,clip:!0,observe:!0,margin:1.5,maxDuration:1,children:e.jsx(Se,{})})})}),e.jsx(U,{scale:[200,200,1],"rotation-x":-Math.PI/2,position:[0,-1,0],receiveShadow:!0,children:e.jsx("shadowMaterial",{attach:"material",opacity:.5})})]})}const Re=()=>e.jsx(Q,{shadows:!0,className:"portfolio-canvas",camera:{fov:50,near:.1,far:1e3,position:[3,1.5,5]},children:e.jsx(Le,{})}),be=({isStarted:n,onStarted:t})=>{const o=localStorage.getItem("isShowingWelcomeScreen")??"true",[a,s]=l.useState(o==="true"),i=()=>{s(!1),localStorage.setItem("isShowingWelcomeScreen","false")};return e.jsx(e.Fragment,{children:!n&&e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"welcome",children:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"A quick note before we begin..."}),S&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This experience is not optimized for mobile, but you can still explore the platform."}),e.jsx("p",{children:"I'm working on a mobile version, so stay tuned!"})]}),!S&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This experience is intended for high-performance devices."}),e.jsx("p",{children:"If you are on low-performance devices, some features may not work as expected. I'm working on that and a mobile version as well, so stay tuned!"}),e.jsx("p",{children:"If you are on a computer, please use the latest version of Google Chrome for the best experience."})]}),e.jsxs("div",{className:"welcome__cta",children:[e.jsx("button",{className:"welcome__cta__mobile",disabled:!0,children:"Switch to Mobile Version"}),e.jsx("button",{className:"welcome__cta__start",onClick:i,children:"Show Me!"})]})]})}),!a&&e.jsx("div",{className:"welcome-without-start",children:e.jsx("button",{className:"glowing-btn",onClick:()=>{t()},children:e.jsxs("span",{className:"glowing-txt",children:["S",e.jsx("span",{className:"faulty-letter",children:"T"}),"AR",e.jsx("span",{className:"faulty-letter",children:"T"})]})})}),e.jsx("div",{className:"welcome-mask"})]})})},Ae=()=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(be,{isStarted:n,onStarted:()=>t(!0)}),n&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{}),e.jsx(Re,{})]}),e.jsx(de,{})]})},_e=$.createRoot(document.querySelector("#root"));_e.render(e.jsx(e.Fragment,{children:e.jsx(Ae,{})}));
//# sourceMappingURL=index-CHkxpfd0.js.map