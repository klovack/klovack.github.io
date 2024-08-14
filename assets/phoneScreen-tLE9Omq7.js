import{j as e,b as k,c as I,d as w,R as h,I as P,l as y,r as u,m as O,n as R,o as S,p as V}from"./vendor-xBiLovak.js";import{I as C}from"./models-CbD3qXGu.js";import{g as v,p as F}from"./utils-DNdCMZ6f.js";import{a as T}from"./desktop-B5dzp7rB.js";import{l as N}from"./lodash-oNHrlTz8.js";function _(){const a=()=>{const i={email:"fikriansyah@mrizki.com",subject:"I have opportunity for you!",body:"Hi Rizki, Do you have a chance to talk about a new opportunity?"};return`mailto:${i.email}?subject=${i.subject}&body=${i.body}`},n={color:"#0077B5"},r={color:"#24292E"},l={color:"#D14836"},s={size:80};return e.jsxs("div",{className:"contact",children:[e.jsx("div",{className:"linked-in",children:e.jsx("a",{href:"https://www.linkedin.com/in/rizkifikri/",target:"_blank",rel:"noreferrer",children:e.jsx(k,{...s,style:n})})}),e.jsx("div",{className:"github gh-user-klovack",children:e.jsx("a",{href:"https://www.github.com/klovack",target:"_blank",rel:"noreferrer",children:e.jsx(I,{...s,style:r})})}),e.jsx("div",{className:"github gh-user-rizki",children:e.jsx("a",{href:"https://www.github.com/rizki-ampero",target:"_blank",rel:"noreferrer",children:e.jsx(I,{...s,style:r})})}),e.jsx("div",{className:"email",children:e.jsx("a",{href:a(),target:"_blank",rel:"noreferrer",children:e.jsx(w,{...s,style:l})})})]})}function D(){const[a,n]=h.useState(new Date);h.useEffect(()=>{const s=setInterval(()=>{n(new Date)},15e3);return()=>{clearInterval(s)}});const r=Intl.DateTimeFormat(v(),{hour:"numeric",minute:"numeric",hour12:!1}).format(a),l=Intl.DateTimeFormat(v(),{year:"numeric",month:"short",day:"numeric"}).format(a);return e.jsxs("div",{className:"datetime",children:[e.jsx("p",{className:"time",children:r}),e.jsx("p",{className:"date",children:l})]})}const z=({phoneNotificationIds:a,onVolumeOff:n,onVolumeHigh:r})=>e.jsx("div",{className:"volume-adjustment"+(a.length>0?" vibrate":""),children:a.length===0?e.jsx(P,{onClick:n,size:100,className:"volume-off"}):e.jsx(y,{onClick:r,size:100,className:"volume-on"})}),A=({onPowerOff:a,className:n,...r})=>{const[l,s]=u.useState(!1),i=u.useMemo(()=>N.debounce(()=>{a()},1e3),[a]),f=`phone-off-button ${n}`;return e.jsx("button",{...r,className:f+(l?" powering-off":""),onPointerDown:o=>{o.stopPropagation(),i(),s(!0)},onPointerUp:o=>{o.stopPropagation(),i.cancel(),s(!1)},onPointerLeave:o=>{o.stopPropagation(),i.cancel(),s(!1)},children:e.jsx(O,{size:30})})},d=new Audio("sfx/vibrate.m4a");d.volume=.5;const p={PHONE_VIBRATE_INTERVAL:60*1e3,SCREEN_ON:180*1e3,SCREEN_OFF:5*1e3},m=[];function G(a){const[n,r]=h.useState([]),[l,s]=h.useState(!1),[i,f]=h.useState(!1),o=u.useRef(null),j=u.useRef(null),g=R(),x=u.useMemo(()=>N.debounce(()=>{f(!1)},p.SCREEN_OFF,{trailing:!0,maxWait:p.SCREEN_OFF}),[]);T(j,()=>{x()});const b=t=>{t==null||t.stopPropagation(),d.pause(),s(!1),n.forEach(c=>clearInterval(c)),m.forEach(c=>clearInterval(c)),r([]),x.cancel()},E=t=>{t==null||t.stopPropagation();const c=setInterval(()=>{s(!0),d.play(),d.onended=()=>{s(!1)}},p.PHONE_VIBRATE_INTERVAL);return m.push(c),r([...n,c]),x.cancel(),c};return S(({clock:t})=>{o.current&&l&&n&&(o.current.position.x+=Math.sin(t.getElapsedTime()*1e3)*.003,o.current.position.z+=Math.sin(t.getElapsedTime()*1e3)*.003,o.current.rotation.y+=Math.sin(t.getElapsedTime()*1e3)*.002)}),u.useEffect(()=>(E(),()=>{m.forEach(t=>clearInterval(t)),m.splice(0,m.length),n.forEach(t=>clearInterval(t))}),[]),u.useEffect(()=>{i?o.current&&g.refresh(o.current).clip().fit():g.refresh().fit()},[i,g]),e.jsx(e.Fragment,{children:e.jsxs("group",{position:[2,-1,.95],rotation:[-Math.PI/2,0,-Math.PI/12],scale:.45,ref:o,...a,...F,onClick:t=>{t.stopPropagation(),f(!0),setTimeout(()=>{f(!1)},p.SCREEN_ON)},children:[e.jsx(C,{castShadow:!0,receiveShadow:!0}),i&&e.jsx(V,{wrapperClass:"iphone-wrapper",occlude:"blending",transform:!0,zIndexRange:[100,0],position:[.165,1.33,.082],rotation:[0,0,0],distanceFactor:3.3,scale:.5,ref:j,children:e.jsxs("div",{className:"iPhone",onClick:b,children:[e.jsx(A,{className:"phone-off",onPowerOff:()=>f(!1)}),e.jsx(z,{phoneNotificationIds:n,onVolumeOff:E,onVolumeHigh:b}),e.jsx(D,{}),e.jsx(_,{})]})})]})})}export{G as P};
//# sourceMappingURL=phoneScreen-tLE9Omq7.js.map