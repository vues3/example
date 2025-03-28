import{isRef as X,toValue as Y,ref as R,watchEffect as D,getCurrentInstance as ee,onBeforeUnmount as q,onDeactivated as te,onActivated as ne,hasInjectionContext as re,inject as oe,nextTick as se,defineComponent as ie}from"vue";import{c as ce}from"./hookable-B7_1qfUG.js";const ae=new Set(["link","style","script","noscript"]),pe=new Set(["title","titleTemplate","script","style","noscript"]),P=new Set(["base","meta","link","style","script","noscript"]),le=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),fe=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),ue=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),de=new Set(["templateParams","htmlAttrs","bodyAttrs"]),$=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),ye=["name","property","http-equiv"];function z(e){const t=e.split(":")[1];return $.has(t)}function E(e){const{props:t,tag:n}=e;if(fe.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(e.tag==="meta"){for(const r of ye)if(t[r]!==void 0)return`${n}:${t[r]}`}if(e.key)return`${n}:key:${e.key}`;if(t.id)return`${n}:id:${t.id}`;if(pe.has(n)){const r=e.textContent||e.innerHTML;if(r)return`${n}:content:${r}`}}function O(e){const t=e._h||e._d;if(t)return t;const n=e.textContent||e.innerHTML;return n||`${e.tag}:${Object.entries(e.props).map(([r,o])=>`${r}:${String(o)}`).join(",")}`}function H(e,t,n){typeof e==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(e=e());let o;if(t&&(o=t(n,e)),Array.isArray(o))return o.map(c=>H(c,t));if((o==null?void 0:o.constructor)===Object){const c={};for(const i of Object.keys(o))c[i]=H(o[i],t,i);return c}return o}function me(e,t){const n=e==="style"?new Map:new Set;function r(o){const c=o.trim();if(c)if(e==="style"){const[i,...f]=c.split(":").map(p=>p.trim());i&&f.length&&n.set(i,f.join(":"))}else c.split(" ").filter(Boolean).forEach(i=>n.add(i))}return typeof t=="string"?e==="style"?t.split(";").forEach(r):r(t):Array.isArray(t)?t.forEach(o=>r(o)):t&&typeof t=="object"&&Object.entries(t).forEach(([o,c])=>{c&&c!=="false"&&(e==="style"?n.set(o.trim(),c):r(o))}),n}function W(e,t){return e.props=e.props||{},t&&Object.entries(t).forEach(([n,r])=>{if(r===null){e.props[n]=null;return}if(n==="class"||n==="style"){e.props[n]=me(n,r);return}if(ue.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let i=t.type;if(t.type||(i="application/json"),!(i!=null&&i.endsWith("json"))&&i!=="speculationrules")return;t.type=i,e.props.type=i,e[n]=JSON.stringify(r)}else e[n]=r;return}const o=String(r),c=n.startsWith("data-");o==="true"||o===""?e.props[n]=c?o:!0:!r&&c&&o==="false"?e.props[n]="false":r!==void 0&&(e.props[n]=r)}),e}function he(e,t){const n=typeof t=="object"&&typeof t!="function"?t:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},r=W({tag:e,props:{}},n);return r.key&&ae.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(o=>({...r,props:{...r.props,content:o}})):r}function ge(e,t){if(!e)return[];typeof e=="function"&&(e=e());const n=(o,c)=>{for(let i=0;i<t.length;i++)c=t[i](o,c);return c};e=n(void 0,e);const r=[];return e=H(e,n),Object.entries(e||{}).forEach(([o,c])=>{if(c!==void 0)for(const i of Array.isArray(c)?c:[c])r.push(he(o,i))}),r.flat()}const L=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,x={base:-10,title:10},be={critical:-8,high:-1,low:2},I={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},we=/@import/,A=e=>e===""||e===!0;function _e(e,t){var c;if(typeof t.tagPriority=="number")return t.tagPriority;let n=100;const r=be[t.tagPriority]||0,o=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:I;if(t.tag in x)n=x[t.tag];else if(t.tag==="meta"){const i=t.props["http-equiv"]==="content-security-policy"?"content-security-policy":t.props.charset?"charset":t.props.name==="viewport"?"viewport":null;i&&(n=I.meta[i])}else t.tag==="link"&&t.props.rel?n=o.link[t.props.rel]:t.tag==="script"?A(t.props.async)?n=o.script.async:t.props.src&&!A(t.props.defer)&&!A(t.props.async)&&t.props.type!=="module"&&!((c=t.props.type)!=null&&c.endsWith("json"))?n=o.script.sync:A(t.props.defer)&&t.props.src&&!A(t.props.async)&&(n=o.script.defer):t.tag==="style"&&(n=t.innerHTML&&we.test(t.innerHTML)?o.style.imported:o.style.sync);return(n||100)+r}function U(e,t){const n=typeof t=="function"?t(e):t,r=n.key||String(e.plugins.size+1);e.plugins.get(r)||(e.plugins.set(r,n),e.hooks.addHooks(n.hooks||{}))}function Te(e={}){var f;const t=ce();t.addHooks(e.hooks||{});const n=!e.document,r=new Map,o=new Map,c=[],i={_entryCount:1,plugins:o,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:r,headEntries(){return[...r.values()]},use:p=>U(i,p),push(p,h){const y={...h||{}};delete y.head;const m=y._index??i._entryCount++,_={_i:m,input:p,options:y},T={_poll(a=!1){i.dirty=!0,!a&&c.push(m),t.callHook("entries:updated",i)},dispose(){r.delete(m)&&T._poll(!0)},patch(a){(!y.mode||y.mode==="server"&&n||y.mode==="client"&&!n)&&(_.input=a,r.set(m,_),T._poll())}};return T.patch(p),T},async resolveTags(){var T;const p={tagMap:new Map,tags:[],entries:[...i.entries.values()]};for(await t.callHook("entries:resolve",p);c.length;){const a=c.shift(),s=r.get(a);if(s){const l={tags:ge(s.input,e.propResolvers||[]).map(u=>Object.assign(u,s.options)),entry:s};await t.callHook("entries:normalize",l),s._tags=l.tags.map((u,d)=>(u._w=_e(i,u),u._p=(s._i<<10)+d,u._d=E(u),u))}}let h=!1;p.entries.flatMap(a=>(a._tags||[]).map(s=>({...s,props:{...s.props}}))).sort(L).reduce((a,s)=>{const l=String(s._d||s._p);if(!a.has(l))return a.set(l,s);const u=a.get(l);if(((s==null?void 0:s.tagDuplicateStrategy)||(de.has(s.tag)?"merge":null)||(s.key&&s.key===u.key?"merge":null))==="merge"){const g={...u.props};Object.entries(s.props).forEach(([w,b])=>g[w]=w==="style"?new Map([...u.props.style||new Map,...b]):w==="class"?new Set([...u.props.class||new Set,...b]):b),a.set(l,{...s,props:g})}else s._p>>10===u._p>>10&&z(s._d)?(a.set(l,Object.assign([...Array.isArray(u)?u:[u],s],s)),h=!0):(s._w===u._w?s._p>u._p:(s==null?void 0:s._w)<(u==null?void 0:u._w))&&a.set(l,s);return a},p.tagMap);const y=p.tagMap.get("title"),m=p.tagMap.get("titleTemplate");if(i._title=y==null?void 0:y.textContent,m){const a=m==null?void 0:m.textContent;if(i._titleTemplate=typeof a=="string"?a:void 0,a){let s=typeof a=="function"?a(y==null?void 0:y.textContent):a;typeof s=="string"&&!i.plugins.has("template-params")&&(s=s.replace("%s",(y==null?void 0:y.textContent)||"")),y?s===null?p.tagMap.delete("title"):p.tagMap.set("title",{...y,textContent:s}):(m.tag="title",m.textContent=s)}}p.tags=Array.from(p.tagMap.values()),h&&(p.tags=p.tags.flat().sort(L)),await t.callHook("tags:beforeResolve",p),await t.callHook("tags:resolve",p),await t.callHook("tags:afterResolve",p);const _=[];for(const a of p.tags){const{innerHTML:s,tag:l,props:u}=a;if(le.has(l)&&!(Object.keys(u).length===0&&!a.innerHTML&&!a.textContent)&&!(l==="meta"&&!u.content&&!u["http-equiv"]&&!u.charset)){if(l==="script"&&s){if((T=u.type)!=null&&T.endsWith("json")){const d=typeof s=="string"?s:JSON.stringify(s);a.innerHTML=d.replace(/</g,"\\u003C")}else typeof s=="string"&&(a.innerHTML=s.replace(new RegExp(`</${l}`,"g"),`<\\/${l}`));a._d=E(a)}_.push(a)}}return _}};return((e==null?void 0:e.plugins)||[]).forEach(p=>U(i,p)),i.hooks.callHook("init",i),(f=e.init)==null||f.forEach(p=>p&&i.push(p)),i}async function N(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const r={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async o=>{var T;const c=new Map,i=new Promise(a=>{e.resolveTags().then(s=>{a(s.map(l=>{const u=c.get(l._d)||0,d={tag:l,id:(u?`${l._d}:${u}`:l._d)||O(l),shouldRender:!0};return l._d&&z(l._d)&&c.set(l._d,u+1),d}))})});let f=e._dom;if(!f){f={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const a of["body","head"]){const s=(T=n[a])==null?void 0:T.children;for(const l of s){const u=l.tagName.toLowerCase();if(!P.has(u))continue;const d=W({tag:u,props:{}},{innerHTML:l.innerHTML,...l.getAttributeNames().reduce((g,w)=>(g[w]=l.getAttribute(w),g),{})||{}});if(d.key=l.getAttribute("data-hid")||void 0,d._d=E(d)||O(d),f.elMap.has(d._d)){let g=1,w=d._d;for(;f.elMap.has(w);)w=`${d._d}:${g++}`;f.elMap.set(w,l)}else f.elMap.set(d._d,l)}}}f.pendingSideEffects={...f.sideEffects},f.sideEffects={};function p(a,s,l){const u=`${a}:${s}`;f.sideEffects[u]=l,delete f.pendingSideEffects[u]}function h({id:a,$el:s,tag:l}){const u=l.tag.endsWith("Attrs");f.elMap.set(a,s),u||(l.textContent&&l.textContent!==s.textContent&&(s.textContent=l.textContent),l.innerHTML&&l.innerHTML!==s.innerHTML&&(s.innerHTML=l.innerHTML),p(a,"el",()=>{s==null||s.remove(),f.elMap.delete(a)}));for(const d in l.props){if(!Object.prototype.hasOwnProperty.call(l.props,d))continue;const g=l.props[d];if(d.startsWith("on")&&typeof g=="function"){const b=s==null?void 0:s.dataset;if(b&&b[`${d}fired`]){const k=d.slice(0,-5);g.call(s,new Event(k.substring(2)))}s.getAttribute(`data-${d}`)!==""&&((l.tag==="bodyAttrs"?n.defaultView:s).addEventListener(d.substring(2),g.bind(s)),s.setAttribute(`data-${d}`,""));continue}const w=`attr:${d}`;if(d==="class"){if(!g)continue;for(const b of g)u&&p(a,`${w}:${b}`,()=>s.classList.remove(b)),!s.classList.contains(b)&&s.classList.add(b)}else if(d==="style"){if(!g)continue;for(const[b,k]of g)p(a,`${w}:${b}`,()=>{s.style.removeProperty(b)}),s.style.setProperty(b,k)}else g!==!1&&g!==null&&(s.getAttribute(d)!==g&&s.setAttribute(d,g===!0?"":String(g)),u&&p(a,w,()=>s.removeAttribute(d)))}}const y=[],m={bodyClose:void 0,bodyOpen:void 0,head:void 0},_=await i;for(const a of _){const{tag:s,shouldRender:l,id:u}=a;if(l){if(s.tag==="title"){n.title=s.textContent,p("title","",()=>n.title=f.title);continue}a.$el=a.$el||f.elMap.get(u),a.$el?h(a):P.has(s.tag)&&y.push(a)}}for(const a of y){const s=a.tag.tagPosition||"head";a.$el=n.createElement(a.tag.tag),h(a),m[s]=m[s]||n.createDocumentFragment(),m[s].appendChild(a.$el)}for(const a of _)await e.hooks.callHook("dom:renderTag",a,n,p);m.head&&n.head.appendChild(m.head),m.bodyOpen&&n.body.insertBefore(m.bodyOpen,n.body.firstChild),m.bodyClose&&n.body.appendChild(m.bodyClose);for(const a in f.pendingSideEffects)f.pendingSideEffects[a]();e._dom=f,await e.hooks.callHook("dom:rendered",{renders:_}),o()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Me(e={}){var r,o,c;const t=((r=e.domOptions)==null?void 0:r.render)||N;e.document=e.document||(typeof window<"u"?document:void 0);const n=((c=(o=e.document)==null?void 0:o.head.querySelector('script[id="unhead:payload"]'))==null?void 0:c.innerHTML)||!1;return Te({...e,plugins:[...e.plugins||[],{key:"client",hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]})}function Ae(e,t){let n=0;return()=>{const r=++n;t(()=>{n===r&&e()})}}const S={META:new Set(["twitter"]),OG:new Set(["og","book","article","profile","fb"]),MEDIA:new Set(["ogImage","ogVideo","ogAudio","twitterImage"]),HTTP_EQUIV:new Set(["contentType","defaultStyle","xUaCompatible"])},Se={articleExpirationTime:"article:expiration_time",articleModifiedTime:"article:modified_time",articlePublishedTime:"article:published_time",bookReleaseDate:"book:release_date",fbAppId:"fb:app_id",ogAudioSecureUrl:"og:audio:secure_url",ogAudioUrl:"og:audio",ogImageSecureUrl:"og:image:secure_url",ogImageUrl:"og:image",ogSiteName:"og:site_name",ogVideoSecureUrl:"og:video:secure_url",ogVideoUrl:"og:video",profileFirstName:"profile:first_name",profileLastName:"profile:last_name",profileUsername:"profile:username",msapplicationConfig:"msapplication-Config",msapplicationTileColor:"msapplication-TileColor",msapplicationTileImage:"msapplication-TileImage"},v={appleItunesApp:{unpack:{entrySeparator:", ",resolve:({key:e,value:t})=>`${M(e)}=${t}`}},refresh:{metaKey:"http-equiv",unpack:{entrySeparator:";",resolve:({key:e,value:t})=>e==="seconds"?`${t}`:void 0}},robots:{unpack:{entrySeparator:", ",resolve:({key:e,value:t})=>typeof t=="boolean"?M(e):`${M(e)}:${t}`}},contentSecurityPolicy:{metaKey:"http-equiv",unpack:{entrySeparator:"; ",resolve:({key:e,value:t})=>`${M(e)} ${t}`}},charset:{}};function M(e){const t=e.replace(/([A-Z])/g,"-$1").toLowerCase(),n=t.indexOf("-");return n===-1?t:S.META.has(t.slice(0,n))||S.OG.has(t.slice(0,n))?e.replace(/([A-Z])/g,":$1").toLowerCase():t}function F(e){return Object.fromEntries(Object.entries(e).filter(([t,n])=>String(n)!=="false"&&t))}function j(e){return Array.isArray(e)?e.map(j):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).map(([t,n])=>[M(t),j(n)]))}function G(e,t={}){const{entrySeparator:n="",keyValueSeparator:r="",wrapValue:o,resolve:c}=t;return Object.entries(e).map(([i,f])=>{if(c){const h=c({key:i,value:f});if(h!==void 0)return h}const p=typeof f=="object"?G(f,t):typeof f=="number"?f.toString():typeof f=="string"&&o?`${o}${f.replace(new RegExp(o,"g"),`\\${o}`)}${o}`:f;return`${i}${r}${p}`}).join(n)}function V(e,t){const n=F(t),r=M(e),o=B(r);if(!$.has(r))return[{[o]:r,...n}];const c=Object.fromEntries(Object.entries(n).map(([i,f])=>[`${e}${i==="url"?"":`${i[0].toUpperCase()}${i.slice(1)}`}`,f]));return C(c||{}).sort((i,f)=>{var p,h;return(((p=i[o])==null?void 0:p.length)||0)-(((h=f[o])==null?void 0:h.length)||0)})}function B(e){var r;if(((r=v[e])==null?void 0:r.metaKey)==="http-equiv"||S.HTTP_EQUIV.has(e))return"http-equiv";const t=M(e),n=t.indexOf(":");return n===-1?"name":S.OG.has(t.slice(0,n))?"property":"name"}function He(e){return Se[e]||M(e)}function Ce(e,t){var n;return t==="refresh"?`${e.seconds};url=${e.url}`:G(j(e),{keyValueSeparator:"=",entrySeparator:", ",resolve:({value:r,key:o})=>r===null?"":typeof r=="boolean"?o:void 0,...(n=v[t])==null?void 0:n.unpack})}function C(e){const t=[],n={};for(const[o,c]of Object.entries(e)){if(Array.isArray(c)){if(o==="themeColor"){c.forEach(i=>{typeof i=="object"&&i!==null&&t.push({name:"theme-color",...i})});continue}for(const i of c)if(typeof i=="object"&&i!==null){const f=[],p=[];for(const[h,y]of Object.entries(i)){const m=`${o}${h==="url"?"":`:${h}`}`,_=C({[m]:y});(h==="url"?f:p).push(..._)}t.push(...f,...p)}else t.push(...typeof i=="string"?C({[o]:i}):V(o,i));continue}if(typeof c=="object"&&c)if(S.MEDIA.has(o)){const i=o.startsWith("twitter")?"twitter":"og",f=o.replace(/^(og|twitter)/,"").toLowerCase(),p=i==="twitter"?"name":"property";c.url&&t.push({[p]:`${i}:${f}`,content:c.url}),c.secureUrl&&t.push({[p]:`${i}:${f}:secure_url`,content:c.secureUrl});for(const[h,y]of Object.entries(c))h!=="url"&&h!=="secureUrl"&&t.push({[p]:`${i}:${f}:${h}`,content:y})}else $.has(M(o))?t.push(...V(o,c)):n[o]=F(c);else n[o]=c}const r=Object.entries(n).map(([o,c])=>{if(o==="charset")return{charset:c===null?"_null":c};const i=B(o),f=He(o),p=c===null?"_null":typeof c=="object"?Ce(c,o):typeof c=="number"?c.toString():c;return i==="http-equiv"?{"http-equiv":f,content:p}:{[i]:f,content:p}});return[...t,...r].map(o=>"content"in o&&o.content==="_null"?{...o,content:null}:o)}const ke={key:"flatMeta",hooks:{"entries:normalize":e=>{const t=[];e.tags=e.tags.map(n=>n.tag!=="_flatMeta"?n:(t.push(C(n.props).map(r=>({...n,tag:"meta",props:r}))),!1)).filter(Boolean).concat(...t)}}},Ee=(e,t)=>X(t)?Y(t):t,J="usehead";function je(e){return{install(n){n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(J,e)}}.install}function Q(){if(re()){const e=oe(J);if(!e)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return e}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function Z(e,t={}){const n=t.head||Q();return n.ssr?n.push(e||{},t):$e(n,e,t)}function $e(e,t,n={}){const r=R(!1);let o;return D(()=>{const i=r.value?{}:H(t,Ee);o?o.patch(i):o=e.push(i,n)}),ee()&&(q(()=>{o.dispose()}),te(()=>{r.value=!0}),ne(()=>{r.value=!1})),o}function xe(e={},t={}){(t.head||Q()).use(ke);const{title:r,titleTemplate:o,...c}=e;return Z({title:r,titleTemplate:o,_flatMeta:c},t)}function Ie(e={}){const t=Me({domOptions:{render:Ae(()=>N(t),se)},...e});return t.install=je(t),t}function K(e,t){const n=e.type,r=n==="html"?"htmlAttrs":n==="body"?"bodyAttrs":n;if(typeof r!="string"||!(r in t))return;const o=e.props||{};if(e.children){const c="children";o.children=Array.isArray(e.children)?e.children[0][c]:e[c]}Array.isArray(t[r])?t[r].push(o):r==="title"?t.title=o.children:t[r]=o}function Pe(e){const t={title:void 0,htmlAttrs:void 0,bodyAttrs:void 0,base:void 0,meta:[],link:[],style:[],script:[],noscript:[]};for(const n of e)if(typeof n.type=="symbol"&&Array.isArray(n.children))for(const r of n.children)K(r,t);else K(n,t);return t}const Ue=ie({name:"Head",setup(e,{slots:t}){const n=R({}),r=Z(n);return q(()=>{r.dispose()}),()=>(D(()=>{t.default&&r.patch(Pe(t.default()))}),null)}});export{Ue as H,xe as a,Ie as c,Z as u};
