import{v as M,i as T,g as E,G as W,s as O,a as L,r as N,u as v,j as e,b as _,c as r,F as p,d as q,e as D,f as B,h as G,k as J,l as Q,m as j,n as F,o as z,p as H,q as X,t as Y,w as K,x as V,y as Z,z as ee,R as te,A as b,N as ne,B as ae,C as se,H as oe,D as re,E as le}from"./vendor.6195e86d.js";const ie=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}};ie();function ce(t={}){const{immediate:n=!1,onNeedRefresh:a,onOfflineReady:c,onRegistered:o,onRegisterError:l}=t;let u;const x=async(h=!0)=>{};return"serviceWorker"in navigator&&(u=new M("/hello/sw.js",{scope:"/hello/",type:"classic"}),u.addEventListener("activated",h=>{h.isUpdate?window.location.reload():c==null||c()}),u.register({immediate:n}).then(h=>{o==null||o(h)}).catch(h=>{l==null||l(h)})),x}ce({onOfflineReady(){console.log("PWA is offline ready.")},onNeedRefresh(){console.log("PWA needs refresh.")}});let $=null;const ue=new Event("isInstallPromptReady");window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),$=t,window.dispatchEvent(ue)});async function P(){return new Promise((t,n)=>{if($)return t($);window.addEventListener("isInstallPromptReady",a=>t($))})}var de={apiKey:"AIzaSyAR6S5l9UiabY1TpO1DelUprklAJ6V5A8w",authDomain:"sockets-717fc.firebaseapp.com",projectId:"sockets-717fc",storageBucket:"sockets-717fc.appspot.com",messagingSenderId:"1073692013836",appId:"1:1073692013836:web:1af80e41fe3cc3c6a50529"};T(de);const I=E();async function pe(t){let n=null;try{n=await L(I,t)}catch(a){console.error(a)}finally{return(n==null?void 0:n.user)||null}}async function me(){const t=new W;return await pe(t)}async function he(){let t=null;try{t=await O(I)}catch(n){console.error(n)}finally{return(t==null?void 0:t.user)||null}}var w={namespace:"hello",namespaces:{user:"user"}};function fe(t,n){const a=w.namespace+"."+t;localStorage.setItem(a,JSON.stringify(n))}function be(t){const n=w.namespace+"."+t,a=localStorage.getItem(n);return JSON.parse(a)||null}function ge(t){const n=w.namespace+"."+t;localStorage.getItem(n)!==null&&localStorage.removeItem(n)}function ye(t){const n=w.namespaces.user;fe(n,t)}function Ne(){const t=w.namespaces.user;return be(t)}function ve(){const t=w.namespaces.user;return ge(t)}var i={login:{name:"Login",path:"/login"},news:{name:"News",path:"/news"},user:{name:"User",path:"/user",list:{add:{name:"Add new firend",path:"/add"},qrs:{name:"QR code scaner",path:"/qrs"},uid:{name:"User ID",path:"/uid"}}},apps:{name:"Apps",path:"/apps",list:{test:{name:"Test",path:"/test"}}}};function k(t,n){return t.path+n.path}const s={login:i.login.path,news:i.news.path,user:i.user.path,userAdd:k(i.user,i.user.list.add),userQrs:k(i.user,i.user.list.qrs),userUid:k(i.user,i.user.list.uid),apps:i.apps.path,appTest:k(i.apps,i.apps.list.test)},m={login:i.login.name,news:i.news.name,user:i.user.name,userAdd:i.user.list.add.name,userQrs:i.user.list.qrs.name,userUid:i.user.list.uid.name,apps:i.apps.name,appTest:i.apps.list.test.name},we={[s.login]:m.login,[s.news]:m.news,[s.user]:m.user,[s.userAdd]:m.userAdd,[s.userQrs]:m.userQrs,[s.userUid]:m.userUid,[s.apps]:m.apps,[s.appTest]:m.appTest};function S(t,n){return Boolean(t.pathname.match(n))}const R=N.exports.createContext();function A(){return N.exports.useContext(R)}function xe({children:t}){const n=v(),[a,c]=N.exports.useState(null);function o(d){!d||(c(d),n(s.user))}async function l(){const d=await me();o(d)}async function u(){const d=await he();o(d)}function x(){!a||(c(null),ve())}function h(){a&&ye(a)}function f(){if(!a){const d=Ne();o(d)}}return N.exports.useEffect(()=>{h(),f(),a&&console.log(a)},[a]),e(R.Provider,{value:{user:a,loginWithGoogle:l,loginAnonymously:u,logout:x},children:t})}function Ae(){const{user:t}=A(),n=_(),a=v();return e("section",{className:"app-bar-bottom",children:t?r(p,{children:[r("button",{className:`btn ${S(n,s.news)?"active":""}`,onClick:()=>a(s.news),children:[e(q,{}),e("small",{className:"text-muted d-block",children:m.news})]}),r("button",{className:`btn ${S(n,s.apps)?"active":""}`,onClick:()=>a(s.apps),children:[e(D,{}),e("small",{className:"text-muted d-block",children:m.apps})]}),r("button",{className:`btn ${S(n,s.user)?"active":""}`,onClick:()=>a(s.user),children:[e(B,{}),e("small",{className:"text-muted d-block",children:m.user})]})]}):e(p,{children:r("button",{className:"btn",onClick:()=>{},children:[e(G,{}),e("small",{className:"text-muted d-block",children:"Our policy"})]})})},t)}function ke(){const{user:t,logout:n}=A(),a=_(),c=v();return e("section",{className:"app-bar-top",children:t?r(p,{children:[r("button",{className:"btn",onClick:()=>c(-1),children:[e(J,{}),e("small",{className:"text-muted align-middle p-2",children:we[a.pathname]})]}),e("button",{className:"btn",onClick:()=>n(),children:e(Q,{})})]}):e(p,{children:r("button",{className:"btn",children:[e(j,{}),e("small",{className:"text-muted align-middle p-2",children:"Need help?"})]})})},t)}function $e({name:t,path:n,icon:a}){const c=v();return r("button",{className:"app-btn-app btn btn-light",onClick:()=>c(n),children:[a,e("small",{className:"text-muted d-block",children:t})]})}function Ue(){return e(p,{children:e("section",{id:"apps-container",children:e($e,{name:m.appTest,path:s.appTest,icon:e(F,{})})})})}function Se(){const{loginWithGoogle:t,loginAnonymously:n,logout:a}=A();return N.exports.useEffect(()=>{a()},[]),e(p,{children:r("div",{id:"app-login-form",children:[e("h2",{className:"fw-bold mb-0",children:"Join for free"}),e("hr",{className:"my-3"}),e("h3",{className:"fs-5 fw-bold mb-3",children:"Use a third-party"}),r("button",{className:"w-100 py-2 mb-2 btn btn-outline-primary btn-facebook",disabled:!0,children:[e(z,{}),e("span",{className:"align-middle p-2",children:"Join with Facebook"})]}),r("button",{className:"w-100 py-2 mb-2 btn btn-outline-success btn-google",onClick:t,children:[e(H,{}),e("span",{className:"align-middle p-2",children:"Join with Google"})]}),r("button",{className:"w-100 py-2 mb-2 btn btn-outline-dark btn-github",disabled:!0,children:[e(X,{}),e("span",{className:"align-middle p-2",children:"Join with GitHub"})]}),e("hr",{className:"my-3"}),e("h3",{className:"fs-5 fw-bold mb-3",children:"Or join as anonymous"}),r("button",{className:"w-100 py-2 mb-2 btn btn-outline-secondary",onClick:n,children:[e(Y,{}),e("span",{className:"align-middle p-2",children:"Join anonymously"})]})]})})}function _e(){return e(p,{})}var Ce="/hello/assets/anonymous.20c3dde4.png";function Pe({user:t,toUserID:n}){return r("section",{className:"app-user-view",children:[e("img",{src:(t==null?void 0:t.photoURL)||Ce,alt:(t==null?void 0:t.displayName)||"Anonymous",className:"user-photo"}),e("h2",{className:"lead mb-4",children:(t==null?void 0:t.displayName)||"Anonymous"}),e("div",{className:"info-block",children:r("button",{className:"btn btn-dark btn-id",onClick:()=>n(),children:[e(K,{}),e("small",{className:"ms-2",children:"Get ID"})]})}),e("div",{className:"info-block",children:r("button",{className:"btn btn-dark btn-id",children:[e(V,{}),e("small",{className:"ms-2",children:"Share"})]})})]})}function Ie(){const{user:t}=A(),n=v();return r(p,{children:[e(Pe,{user:t,toUserID:()=>n(s.userUid)}),e("ul",{id:"app-user-firends"}),r("aside",{id:"app-add-user",children:[e("button",{className:"app-btn-app btn btn-light",onClick:()=>n(s.userQrs),children:e(Z,{})}),e("button",{className:"app-btn-app btn btn-light",onClick:()=>n(s.userAdd),children:e(ee,{})})]})]})}function Re(){return e(p,{})}function Me(){return e(p,{})}function Te(){return e(p,{})}function Ee(){return e(p,{})}const g={x:null,y:null};function We(t){g.x=t.touches[0].clientX,g.y=t.touches[0].clientY}function Oe(t,n,a,c,o){if(!g.x||!g.y)return;const l=Math.min(window.innerWidth/3,300),u=.33,x=t.touches[0].clientX,h=t.touches[0].clientY,f=g.x-x,d=g.y-h;if(Math.abs(f)>Math.abs(d)){const C=f<=0?1:-1,U=Math.max(1-(Math.abs(f)-Math.abs(d))/l,0),y=C*u*(Math.abs(f)-Math.abs(d));document.querySelector(n).style.transition=null,document.querySelector(n).style.opacity=U,document.querySelector(n).style.transform=`translateX( ${y}px )`}if(Math.abs(f)>Math.abs(d)&&Math.abs(f)-Math.abs(d)>l){const U=a.length-1,y=a.indexOf(c.pathname.split(/\b\//)[0]);if(y===-1)return;if(f<0&&y-1>=0)return o(a[y-1]);if(f>0&&y+1<=U)return o(a[y+1])}}function Le(t,n){document.querySelector(n).style.opacity=1,document.querySelector(n).style.transition="all ease 300ms",document.querySelector(n).style.transform=null,g.x=null,g.y=null}function qe(){const{user:t}=A(),n=_(),a=v();function c(u){We(u)}function o(u){Oe(u,"#app-main-content",[s.news,s.apps,s.user],n,a)}function l(u){Le(u,"#app-main-content")}return e("main",{id:"app-main-content",onTouchStart:c,onTouchMove:o,onTouchEnd:l,children:r(te,{children:[e(b,{exact:!0,path:s.login,element:e(Se,{})}),t&&r(p,{children:[e(b,{exact:!0,path:s.news,element:e(_e,{})}),e(b,{exact:!0,path:s.apps,element:e(Ue,{})}),e(b,{exact:!0,path:s.appTest,element:e(Re,{})}),e(b,{exact:!0,path:s.user,element:e(Ie,{})}),e(b,{exact:!0,path:s.userAdd,element:e(Me,{})}),e(b,{exact:!0,path:s.userQrs,element:e(Te,{})}),e(b,{exact:!0,path:s.userUid,element:e(Ee,{})})]}),e(b,{path:"*",element:e(ne,{replace:!0,to:s.login})})]})},n.pathname)}function De({installPWA:t,dismiss:n}){return r("section",{className:"app-pwa-install",children:[r("button",{className:"btn btn-dark shadow",onClick:()=>t(),children:[e(ae,{}),e("small",{className:"align-middle fw-bold p-2",children:"Install as PWA"})]}),r("button",{className:"btn btn-secondary shadow",onClick:()=>n(),children:[e(se,{}),e("small",{className:"align-middle fw-bold p-2",children:"Dismiss"})]})]})}function Be(){const[t,n]=N.exports.useState(!1);async function a(){const o=await P();o.prompt();const{outcome:l}=await o.userChoice;l==="accepted"&&c()}function c(){n(!1)}return N.exports.useEffect(async()=>{await P(),n(!0)},[]),e(p,{children:e(oe,{children:r(xe,{children:[e(ke,{}),t&&e(De,{installPWA:a,dismiss:c}),e(qe,{}),e(Ae,{})]})})})}re.render(e(le.StrictMode,{children:e(Be,{})}),document.getElementById("root"));
