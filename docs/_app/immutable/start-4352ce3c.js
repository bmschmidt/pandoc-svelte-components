import{S as xe,i as et,s as tt,a as rt,e as F,c as nt,b as M,g as ue,t as B,d as pe,f as J,h as G,j as at,o as Re,k as ot,l as st,m as it,n as ve,p as D,q as lt,r as ct,u as ft,v as H,w as Y,x as je,y as X,z as Z,A as ie}from"./chunks/index-ae68f6b2.js";import{g as ze,f as Me,s as z,a as Oe,i as ut,b as pt}from"./chunks/singletons-f5dfdcee.js";import{_ as V}from"./chunks/preload-helper-9b728935.js";import{s as dt}from"./chunks/paths-6cd3a76e.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const t=new URL(r);for(const o of gt){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return yt(t),t}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function Et(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const de=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;re.delete(o)}return de(r,e)};const re=new Map;function kt(r,e){const t=Ze(r,e),o=document.querySelector(t);if(o!=null&&o.textContent){const{body:s,...f}=JSON.parse(o.textContent),n=o.getAttribute("data-ttl");return n&&re.set(t,{body:s,init:f,ttl:1e3*Number(n)}),Promise.resolve(new Response(s,f))}return de(r,e)}function St(r,e,t){if(re.size>0){const o=Ze(r,t),s=re.get(o);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);re.delete(o)}}return de(e,t)}function Ze(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Et(e.body)}"]`),o}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${$t(r).map(o=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const n=o.split(/\[(.+?)\](?!\])/);return"/"+n.map((m,_)=>{if(_%2){if(m.startsWith("x+"))return Ee(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Ee(String.fromCharCode(...m.slice(2).split("-").map(C=>parseInt(C,16))));const w=Rt.exec(m);if(!w)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,S,T,j]=w;return e.push({name:T,matcher:j,optional:!!v,rest:!!S,chained:S?_===1&&n[0]==="":!1}),S?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Ee(m)}).join("")}).join("")}/?$`),params:e}}function It(r){return!/^\([^)]+\)$/.test(r)}function $t(r){return r.slice(1).split("/").filter(It)}function Lt(r,e,t){const o={},s=r.slice(1);let f="";for(let n=0;n<e.length;n+=1){const u=e[n];let m=s[n];if(u.chained&&u.rest&&f&&(m=m?f+"/"+m:f),f="",m===void 0)u.rest&&(o[u.name]="");else{if(u.matcher&&!t[u.matcher](m)){if(u.optional&&u.chained){let _=s.indexOf(void 0,n);if(_===-1){const w=e[n+1];if((w==null?void 0:w.rest)&&w.chained)f=m;else return}for(;_>=n;)s[_]=s[_-1],_-=1;continue}return}o[u.name]=m}}if(!f)return o}function Ee(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,t,o){const s=new Set(e);return Object.entries(t).map(([u,[m,_,w]])=>{const{pattern:v,params:S}=Ot(u),T={id:u,exec:j=>{const C=v.exec(j);if(C)return Lt(C,S,o)},errors:[1,...w||[]].map(j=>r[j]),layouts:[0,..._||[]].map(n),leaf:f(m)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function f(u){const m=u<0;return m&&(u=~u),[m,r[u]]}function n(u){return u===void 0?u:[s.has(u),r[u]]}}function At(r){let e,t,o;var s=r[0][0];function f(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=H(s,f(r))),{c(){e&&Y(e.$$.fragment),t=F()},l(n){e&&je(e.$$.fragment,n),t=F()},m(n,u){e&&X(e,n,u),M(n,t,u),o=!0},p(n,u){const m={};if(u&4&&(m.data=n[2]),u&2&&(m.form=n[1]),s!==(s=n[0][0])){if(e){ue();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}s?(e=H(s,f(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&B(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Pt(r){let e,t,o;var s=r[0][0];function f(n){return{props:{data:n[2],$$slots:{default:[Nt]},$$scope:{ctx:n}}}}return s&&(e=H(s,f(r))),{c(){e&&Y(e.$$.fragment),t=F()},l(n){e&&je(e.$$.fragment,n),t=F()},m(n,u){e&&X(e,n,u),M(n,t,u),o=!0},p(n,u){const m={};if(u&4&&(m.data=n[2]),u&523&&(m.$$scope={dirty:u,ctx:n}),s!==(s=n[0][0])){if(e){ue();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}s?(e=H(s,f(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&B(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Nt(r){let e,t,o;var s=r[0][1];function f(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=H(s,f(r))),{c(){e&&Y(e.$$.fragment),t=F()},l(n){e&&je(e.$$.fragment,n),t=F()},m(n,u){e&&X(e,n,u),M(n,t,u),o=!0},p(n,u){const m={};if(u&8&&(m.data=n[3]),u&2&&(m.form=n[1]),s!==(s=n[0][1])){if(e){ue();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}s?(e=H(s,f(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&B(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function We(r){let e,t=r[5]&&He(r);return{c(){e=ot("div"),t&&t.c(),this.h()},l(o){e=st(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=it(e);t&&t.l(s),s.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(o,s){M(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=He(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&G(e),t&&t.d()}}}function He(r){let e;return{c(){e=lt(r[6])},l(t){e=ct(t,r[6])},m(t,o){M(t,e,o)},p(t,o){o&64&&ft(e,t[6])},d(t){t&&G(e)}}}function Tt(r){let e,t,o,s,f;const n=[Pt,At],u=[];function m(w,v){return w[0][1]?0:1}e=m(r),t=u[e]=n[e](r);let _=r[4]&&We(r);return{c(){t.c(),o=rt(),_&&_.c(),s=F()},l(w){t.l(w),o=nt(w),_&&_.l(w),s=F()},m(w,v){u[e].m(w,v),M(w,o,v),_&&_.m(w,v),M(w,s,v),f=!0},p(w,[v]){let S=e;e=m(w),e===S?u[e].p(w,v):(ue(),B(u[S],1,1,()=>{u[S]=null}),pe(),t=u[e],t?t.p(w,v):(t=u[e]=n[e](w),t.c()),J(t,1),t.m(o.parentNode,o)),w[4]?_?_.p(w,v):(_=We(w),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(w){f||(J(t),f=!0)},o(w){B(t),f=!1},d(w){u[e].d(w),w&&G(o),_&&_.d(w),w&&G(s)}}}function Ut(r,e,t){let{stores:o}=e,{page:s}=e,{components:f}=e,{form:n}=e,{data_0:u=null}=e,{data_1:m=null}=e;at(o.page.notify);let _=!1,w=!1,v=null;return Re(()=>{const S=o.page.subscribe(()=>{_&&(t(5,w=!0),t(6,v=document.title||"untitled page"))});return t(4,_=!0),S}),r.$$set=S=>{"stores"in S&&t(7,o=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,f=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,u=S.data_0),"data_1"in S&&t(3,m=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(s)},[f,n,u,m,_,w,v,o,s]}class Dt extends xe{constructor(e){super(),et(this,e,Ut,Tt,tt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Vt={},he=[()=>V(()=>import("./chunks/0-4cb1f0b0.js"),["./chunks/0-4cb1f0b0.js","./chunks/_layout-1daba58d.js","./components/layout.svelte-84e19437.js","./chunks/index-ae68f6b2.js"],import.meta.url),()=>V(()=>import("./chunks/1-87b28740.js"),["./chunks/1-87b28740.js","./components/error.svelte-fac3520a.js","./chunks/index-ae68f6b2.js","./chunks/singletons-f5dfdcee.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>V(()=>import("./chunks/2-a3c1b2f3.js"),["./chunks/2-a3c1b2f3.js","./components/pages/_page.svelte-848eddd8.js","./chunks/index-ae68f6b2.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>V(()=>import("./chunks/3-37762b27.js"),["./chunks/3-37762b27.js","./components/pages/demo/code/_page.svelte-9b737ec2.js","./chunks/index-ae68f6b2.js","./chunks/Document-e106fb57.js","./assets/_page-2b30c8c0.css"],import.meta.url),()=>V(()=>import("./chunks/4-bb436ee3.js"),["./chunks/4-bb436ee3.js","./components/pages/demo/complex/_page.svelte-26c238ec.js","./chunks/index-ae68f6b2.js","./chunks/Document-e106fb57.js"],import.meta.url),()=>V(()=>import("./chunks/5-a981e819.js"),["./chunks/5-a981e819.js","./components/pages/demo/iiif/_page.svelte-440eb703.js","./chunks/index-ae68f6b2.js","./chunks/Document-e106fb57.js","./chunks/preload-helper-9b728935.js","./assets/_page-fd9b6488.css"],import.meta.url),()=>V(()=>import("./chunks/6-e191eb04.js"),["./chunks/6-e191eb04.js","./components/pages/demo/observer/_page.svelte-99d45c24.js","./chunks/index-ae68f6b2.js","./chunks/Document-e106fb57.js","./assets/_page-d19e1ead.css"],import.meta.url),()=>V(()=>import("./chunks/7-32f20c41.js"),["./chunks/7-32f20c41.js","./components/pages/scrollership/_page.svelte-8b309da4.js","./chunks/index-ae68f6b2.js"],import.meta.url),()=>V(()=>import("./chunks/8-a2880ac7.js"),["./chunks/8-a2880ac7.js","./components/pages/scrollership/_slug_/_page.svelte-ffb1acb7.js","./chunks/preload-helper-9b728935.js","./chunks/index-ae68f6b2.js","./chunks/Document-e106fb57.js","./assets/_page-85a2e24f.css"],import.meta.url)],qt=[],Ct={"/":[2],"/demo/code":[3],"/demo/complex":[4],"/demo/iiif":[5],"/demo/observer":[6],"/scrollership":[7],"/scrollership/[slug]":[-9]},Ft={handleError:({error:r})=>{console.error(r)}};class Ie{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,t){this.status=e,this.location=t}}async function Bt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Jt=-1,Gt=-2,Kt=-3,zt=-4,Mt=-5,Wt=-6;function Ht(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,t=Array(e.length);function o(s,f=!1){if(s===Jt)return;if(s===Kt)return NaN;if(s===zt)return 1/0;if(s===Mt)return-1/0;if(s===Wt)return-0;if(f)throw new Error("Invalid input");if(s in t)return t[s];const n=e[s];if(!n||typeof n!="object")t[s]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":t[s]=new Date(n[1]);break;case"Set":const m=new Set;t[s]=m;for(let v=1;v<n.length;v+=1)m.add(o(n[v]));break;case"Map":const _=new Map;t[s]=_;for(let v=1;v<n.length;v+=2)_.set(o(n[v]),o(n[v+1]));break;case"RegExp":t[s]=new RegExp(n[1],n[2]);break;case"Object":t[s]=Object(n[1]);break;case"BigInt":t[s]=BigInt(n[1]);break;case"null":const w=Object.create(null);t[s]=w;for(let v=1;v<n.length;v+=2)w[n[v]]=o(n[v+1]);break}else{const u=new Array(n.length);t[s]=u;for(let m=0;m<n.length;m+=1){const _=n[m];_!==Gt&&(u[m]=o(_))}}else{const u={};t[s]=u;for(const m in n){const _=n[m];u[m]=o(_)}}return t[s]}return o(0)}const Qe="sveltekit:scroll",q="sveltekit:index",le=jt(he,qt,Ct,Vt),$e=he[0],Le=he[1];$e();Le();let ne={};try{ne=JSON.parse(sessionStorage[Qe])}catch{}function ke(r){ne[r]=Oe()}function Yt({target:r,base:e}){var Je;const t=[];let o=null;const s={before_navigate:[],after_navigate:[]};let f={branch:[],error:null,url:null},n=!1,u=!1,m=!0,_=!1,w=!1,v=!1,S=!1,T,j=(Je=history.state)==null?void 0:Je[q];j||(j=Date.now(),history.replaceState({...history.state,[q]:j},"",location.href));const C=ne[j];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let K,Ae,ae;async function Pe(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),l=we(a,!0);o=null,await Te(l,a,[])}async function me(a,{noScroll:l=!1,replaceState:c=!1,keepFocus:i=!1,state:p={},invalidateAll:d=!1},h,E){return typeof a=="string"&&(a=new URL(a,ze(document))),ye({url:a,scroll:l?Oe():null,keepfocus:i,redirect_chain:h,details:{state:p,replaceState:c},nav_token:E,accepted:()=>{d&&(S=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const l=we(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Ve(l).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function Te(a,l,c,i,p={},d){var E,k;Ae=p;let h=a&&await Ve(a);if(h||(h=await Be(l,{id:null},te(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,Ae!==p)return!1;if(h.type==="redirect")if(c.length>10||c.includes(l.pathname))h=await oe({status:500,error:te(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return me(new URL(h.location,l).href,{},[...c,l.pathname],p),!1;else((k=(E=h.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await z.updated.check()&&await se(l);if(t.length=0,S=!1,_=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[q]=j+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,u){f=h.state,h.props.page&&(h.props.page.url=l);const y=fe();T.$set(h.props),y()}else Ue(h);if(i){const{scroll:y,keepfocus:b}=i;if(b||Se(),await ie(),m){const R=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await ie();m=!0,h.props.page&&(K=h.props.page),d&&d(),_=!1}function Ue(a){var p,d;f=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),K=a.props.page;const c=fe();T=new Dt({target:r,props:{...a.props,stores:z},hydrate:!0}),c();const i={from:null,to:ce("to",{params:f.params,route:{id:(d=(p=f.route)==null?void 0:p.id)!=null?d:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};s.after_navigate.forEach(h=>h(i)),u=!0}async function Q({url:a,params:l,branch:c,status:i,error:p,route:d,form:h}){var P;const E=c.filter(Boolean);let k="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(k=I.slash);a.pathname=ht(a.pathname,k),a.search=a.search;const y={type:"loaded",state:{url:a,params:l,branch:c,error:p,route:d},props:{components:E.map(I=>I.node.component)}};h!==void 0&&(y.props.form=h);let b={},R=!K;for(let I=0;I<E.length;I+=1){const A=E[I];b={...b,...A.data},(R||!f.branch.some(U=>U===A))&&(y.props[`data_${I}`]=b,R=R||Object.keys((P=A.data)!=null?P:{}).length>0)}if(R||(R=Object.keys(K.data).length!==Object.keys(b).length),!f.url||a.href!==f.url.href||f.error!==p||h!==void 0||R){y.props.page={error:p,params:l,route:d,status:i,url:a,form:h,data:R?b:K.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(A,U)=>{Object.defineProperty(y.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${U}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function _e({loader:a,parent:l,url:c,params:i,route:p,server_data_node:d}){var y,b,R,N,P,I,A;let h=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let U=function(...g){for(const O of g){const{href:$}=new URL(O,c);E.dependencies.add($)}};const x={route:{get id(){return E.route=!0,p.id}},params:new Proxy(i,{get:(g,O)=>(E.params.add(O),g[O])}),data:(b=d==null?void 0:d.data)!=null?b:null,url:wt(c,()=>{E.url=!0}),async fetch(g,O){let $;g instanceof Request?($=g.url,O={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...O}):$=g;const L=new URL($,c).href;return U(L),u?St($,L,O):kt($,O)},setHeaders:()=>{},depends:U,parent(){return E.parent=!0,l()}};Object.defineProperties(x,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(R=await k.shared.load.call(null,x))!=null?R:null,h=h?await Bt(h):null}return{node:k,loader:a,server:d,shared:(N=k.shared)!=null&&N.load?{type:"data",data:h,uses:E}:null,data:(P=h!=null?h:d==null?void 0:d.data)!=null?P:null,slash:(A=(I=k.shared)==null?void 0:I.trailingSlash)!=null?A:d==null?void 0:d.slash}}function De(a,l,c,i,p){if(S)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&c)return!0;for(const d of i.params)if(p[d]!==f.params[d])return!0;for(const d of i.dependencies)if(t.some(h=>h(new URL(d))))return!0;return!1}function ge(a,l){var c,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ve({id:a,invalidating:l,url:c,params:i,route:p}){var x;if((o==null?void 0:o.id)===a)return o.promise;const{errors:d,layouts:h,leaf:E}=p,k=[...h,E];d.forEach(g=>g==null?void 0:g().catch(()=>{})),k.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let y=null;const b=f.url?a!==f.url.pathname+f.url.search:!1,R=f.route?a!==f.route.id:!1,N=k.reduce((g,O,$)=>{var ee;const L=f.branch[$],W=!!(O!=null&&O[0])&&((L==null?void 0:L.loader)!==O[1]||De(g.some(Boolean),R,b,(ee=L.server)==null?void 0:ee.uses,i));return g.push(W),g},[]);if(N.some(Boolean)){try{y=await Xe(c,N)}catch(g){return oe({status:500,error:te(g,{url:c,params:i,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const P=y==null?void 0:y.nodes;let I=!1;const A=k.map(async(g,O)=>{var ee;if(!g)return;const $=f.branch[O],L=P==null?void 0:P[O];if((!L||L.type==="skip")&&g[1]===($==null?void 0:$.loader)&&!De(I,R,b,(ee=$.shared)==null?void 0:ee.uses,i))return $;if(I=!0,(L==null?void 0:L.type)==="error")throw L;return _e({loader:g[1],url:c,params:i,route:p,parent:async()=>{var Ke;const Ge={};for(let be=0;be<O;be+=1)Object.assign(Ge,(Ke=await A[be])==null?void 0:Ke.data);return Ge},server_data_node:ge(L===void 0&&g[0]?{type:"skip"}:L!=null?L:null,$==null?void 0:$.server)})});for(const g of A)g.catch(()=>{});const U=[];for(let g=0;g<k.length;g+=1)if(k[g])try{U.push(await A[g])}catch(O){if(O instanceof Ye)return{type:"redirect",location:O.location};let $=500,L;P!=null&&P.includes(O)?($=(x=O.status)!=null?x:$,L=O.error):O instanceof Ie?($=O.status,L=O.body):L=te(O,{params:i,url:c,route:{id:p.id}});const W=await qe(g,U,d);return W?await Q({url:c,params:i,branch:U.slice(0,W.idx).concat(W.node),status:$,error:L,route:p}):await Be(c,{id:p.id},L,$)}else U.push(void 0);return await Q({url:c,params:i,branch:U,status:200,error:null,route:p,form:l?void 0:null})}async function qe(a,l,c){for(;a--;)if(c[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:l,url:c,route:i}){var y;const p={},d=await $e();let h=null;if(d.server)try{const b=await Xe(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(y=b.nodes[0])!=null?y:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||n)&&await se(c)}const E=await _e({loader:$e,url:c,params:p,route:i,parent:()=>Promise.resolve({}),server_data_node:ge(h)}),k={node:await Le(),loader:Le,shared:null,server:null,data:null};return await Q({url:c,params:p,branch:[E,k],status:a,error:l,route:null})}function we(a,l){if(Ce(a))return;const c=mt(a.pathname.slice(e.length)||"/");for(const i of le){const p=i.exec(c);if(p)return{id:a.pathname+a.search,invalidating:l,route:i,params:_t(p),url:a}}}function Ce(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Fe({url:a,type:l,intent:c,delta:i}){var E,k,y,b,R;let p=!1;const d={from:ce("from",{params:f.params,route:{id:(k=(E=f.route)==null?void 0:E.id)!=null?k:null},url:f.url}),to:ce("to",{params:(y=c==null?void 0:c.params)!=null?y:null,route:{id:(R=(b=c==null?void 0:c.route)==null?void 0:b.id)!=null?R:null},url:a}),willUnload:!c,type:l};i!==void 0&&(d.delta=i);const h={...d,cancel:()=>{p=!0}};return w||s.before_navigate.forEach(N=>N(h)),p?null:d}async function ye({url:a,scroll:l,keepfocus:c,redirect_chain:i,details:p,type:d,delta:h,nav_token:E,accepted:k,blocked:y}){const b=we(a,!1),R=Fe({url:a,type:d,delta:h,intent:b});if(!R){y();return}ke(j),k(),w=!0,u&&z.navigating.set(R),await Te(b,a,i,{scroll:l,keepfocus:c,details:p},E,()=>{w=!1,s.after_navigate.forEach(N=>N(R)),z.navigating.set(null)})}async function Be(a,l,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!n?await oe({status:i,error:c,url:a,route:l}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(s.after_navigate.push(a),()=>{const l=s.after_navigate.indexOf(a);s.after_navigate.splice(l,1)}))},before_navigate:a=>{Re(()=>(s.before_navigate.push(a),()=>{const l=s.before_navigate.indexOf(a);s.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!u)&&(m=!1)},goto:(a,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return me(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:l}=new URL(a,location.href);t.push(c=>c.href===l)}return Pe()},invalidateAll:()=>(S=!0,Pe()),prefetch:async a=>{const l=new URL(a,ze(document));await Ne(l)},prefetch_routes:async a=>{const c=(a?le.filter(i=>a.some(p=>i.exec(p))):le).map(i=>Promise.all([...i.layouts,i.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:c,route:i}=f;if(!i)return;const p=await qe(f.branch.length,c,i.errors);if(p){const d=await Q({url:l,params:f.params,branch:c.slice(0,p.idx).concat(p.node),status:500,error:a.error,route:i});f=d.state;const h=fe();T.$set(d.props),h(),ie().then(Se)}}else if(a.type==="redirect")me(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...K,form:a.data,status:a.status}},c=fe();T.$set(l),c(),a.type==="success"&&ie().then(Se)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var d,h;let p=!1;if(!w){const E={from:ce("from",{params:f.params,route:{id:(h=(d=f.route)==null?void 0:d.id)!=null?h:null},url:f.url}),to:null,willUnload:!0,type:"leave",cancel:()=>p=!0};s.before_navigate.forEach(k=>k(E))}p?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(j);try{sessionStorage[Qe]=JSON.stringify(ne)}catch{}}});const a=i=>{const{url:p,options:d,has:h}=Me(i);if(p&&d.prefetch&&!Ce(p)){if(d.reload||h.rel_external||h.target||h.download)return;Ne(p)}};let l;const c=i=>{clearTimeout(l),l=setTimeout(()=>{var p;(p=i.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};r.addEventListener("touchstart",a),r.addEventListener("mousemove",c),r.addEventListener("sveltekit:trigger_prefetch",a),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:p,url:d,options:h,has:E}=Me(i);if(!p||!d||!(p instanceof SVGAElement)&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:")||E.download)return;if(h.reload||E.rel_external||E.target){Fe({url:d,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=d.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){v=!0,ke(j),f.url=d,z.page.set({...K,url:d}),z.page.notify();return}ye({url:d,scroll:h.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var p;if((p=i.state)!=null&&p[q]){if(i.state[q]===j)return;const d=i.state[q]-j;ye({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=i.state[q]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{v&&(v=!1,history.replaceState({...history.state,[q]:++j},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:c,params:i,route:p,data:d,form:h})=>{var y;n=!0;const E=new URL(location.href);let k;try{const b=c.map(async(R,N)=>{const P=d[N];return _e({loader:he[R],url:E,params:i,route:p,parent:async()=>{const I={};for(let A=0;A<N;A+=1)Object.assign(I,(await b[A]).data);return I},server_data_node:ge(P)})});k=await Q({url:E,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:(y=le.find(({id:R})=>R===p.id))!=null?y:null})}catch(b){if(b instanceof Ye){await se(new URL(b.location,location.href));return}k=await oe({status:b instanceof Ie?b.status:500,error:te(b,{url:E,params:i,route:p}),url:E,route:p})}Ue(k)}}}async function Xe(r,e){var f;const t=new URL(r);t.pathname=vt(r.pathname);const o=await de(t.href,{headers:{"x-sveltekit-invalidated":e.map(n=>n?"1":"").join(",")}}),s=await o.json();if(!o.ok)throw new Error(s);return(f=s.nodes)==null||f.forEach(n=>{var u,m;(n==null?void 0:n.type)==="data"&&(n.data=Ht(n.data),n.uses={dependencies:new Set((u=n.uses.dependencies)!=null?u:[]),params:new Set((m=n.uses.params)!=null?m:[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),s}function te(r,e){var t;return r instanceof Ie?r.body:(t=Ft.handleError({error:r,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const t of Xt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function fe(){return()=>{}}function Se(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function tr({env:r,hydrate:e,paths:t,target:o,version:s}){dt(t),pt(s);const f=Yt({target:o,base:t.base});ut({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{tr as start};
