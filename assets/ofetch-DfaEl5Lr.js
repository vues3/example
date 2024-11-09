import{d as g}from"./destr-CVtkxrq9.js";import{w as E,a as q}from"./ufo-CsG24Xhf.js";class S extends Error{constructor(r,s){super(r,s),this.name="FetchError",s!=null&&s.cause&&!this.cause&&(this.cause=s.cause)}}function R(o){var a,p,e,c,d;const r=((a=o.error)==null?void 0:a.message)||((p=o.error)==null?void 0:p.toString())||"",s=((e=o.request)==null?void 0:e.method)||((c=o.options)==null?void 0:c.method)||"GET",f=((d=o.request)==null?void 0:d.url)||String(o.request)||"/",y=`[${s}] ${JSON.stringify(f)}`,i=o.response?`${o.response.status} ${o.response.statusText}`:"<no response>",u=`${y}: ${i}${r?` ${r}`:""}`,t=new S(u,o.error?{cause:o.error}:void 0);for(const n of["request","options","response"])Object.defineProperty(t,n,{get(){return o[n]}});for(const[n,h]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(t,n,{get(){return o.response&&o.response[h]}});return t}const A=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function m(o="GET"){return A.has(o.toUpperCase())}function $(o){if(o===void 0)return!1;const r=typeof o;return r==="string"||r==="number"||r==="boolean"||r===null?!0:r!=="object"?!1:Array.isArray(o)?!0:o.buffer?!1:o.constructor&&o.constructor.name==="Object"||typeof o.toJSON=="function"}const j=new Set(["image/svg","application/xml","application/xhtml","application/html"]),C=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function P(o=""){if(!o)return"json";const r=o.split(";").shift()||"";return C.test(r)?"json":j.has(r)||r.startsWith("text/")?"text":"blob"}function O(o,r,s,f){const y=_((r==null?void 0:r.headers)??(o==null?void 0:o.headers),s==null?void 0:s.headers,f);let i;return(s!=null&&s.query||s!=null&&s.params||r!=null&&r.params||r!=null&&r.query)&&(i={...s==null?void 0:s.params,...s==null?void 0:s.query,...r==null?void 0:r.params,...r==null?void 0:r.query}),{...s,...r,query:i,params:i,headers:y}}function _(o,r,s){if(!r)return new s(o);const f=new s(r);if(o)for(const[y,i]of Symbol.iterator in o||Array.isArray(o)?o:new s(o))f.set(y,i);return f}async function l(o,r){if(r)if(Array.isArray(r))for(const s of r)await s(o);else await r(o)}const k=new Set([408,409,425,429,500,502,503,504]),D=new Set([101,204,205,304]);function w(o={}){const{fetch:r=globalThis.fetch,Headers:s=globalThis.Headers,AbortController:f=globalThis.AbortController}=o;async function y(t){const a=t.error&&t.error.name==="AbortError"&&!t.options.timeout||!1;if(t.options.retry!==!1&&!a){let e;typeof t.options.retry=="number"?e=t.options.retry:e=m(t.options.method)?0:1;const c=t.response&&t.response.status||500;if(e>0&&(Array.isArray(t.options.retryStatusCodes)?t.options.retryStatusCodes.includes(c):k.has(c))){const d=typeof t.options.retryDelay=="function"?t.options.retryDelay(t):t.options.retryDelay||0;return d>0&&await new Promise(n=>setTimeout(n,d)),i(t.request,{...t.options,retry:e-1})}}const p=R(t);throw Error.captureStackTrace&&Error.captureStackTrace(p,i),p}const i=async function(a,p={}){const e={request:a,options:O(a,p,o.defaults,s),response:void 0,error:void 0};e.options.method&&(e.options.method=e.options.method.toUpperCase()),e.options.onRequest&&await l(e,e.options.onRequest),typeof e.request=="string"&&(e.options.baseURL&&(e.request=E(e.request,e.options.baseURL)),e.options.query&&(e.request=q(e.request,e.options.query),delete e.options.query),"query"in e.options&&delete e.options.query,"params"in e.options&&delete e.options.params),e.options.body&&m(e.options.method)&&($(e.options.body)?(e.options.body=typeof e.options.body=="string"?e.options.body:JSON.stringify(e.options.body),e.options.headers=new s(e.options.headers||{}),e.options.headers.has("content-type")||e.options.headers.set("content-type","application/json"),e.options.headers.has("accept")||e.options.headers.set("accept","application/json")):("pipeTo"in e.options.body&&typeof e.options.body.pipeTo=="function"||typeof e.options.body.pipe=="function")&&("duplex"in e.options||(e.options.duplex="half")));let c;if(!e.options.signal&&e.options.timeout){const n=new f;c=setTimeout(()=>{const h=new Error("[TimeoutError]: The operation was aborted due to timeout");h.name="TimeoutError",h.code=23,n.abort(h)},e.options.timeout),e.options.signal=n.signal}try{e.response=await r(e.request,e.options)}catch(n){return e.error=n,e.options.onRequestError&&await l(e,e.options.onRequestError),await y(e)}finally{c&&clearTimeout(c)}if((e.response.body||e.response._bodyInit)&&!D.has(e.response.status)&&e.options.method!=="HEAD"){const n=(e.options.parseResponse?"json":e.options.responseType)||P(e.response.headers.get("content-type")||"");switch(n){case"json":{const h=await e.response.text(),T=e.options.parseResponse||g;e.response._data=T(h);break}case"stream":{e.response._data=e.response.body||e.response._bodyInit;break}default:e.response._data=await e.response[n]()}}return e.options.onResponse&&await l(e,e.options.onResponse),!e.options.ignoreResponseError&&e.response.status>=400&&e.response.status<600?(e.options.onResponseError&&await l(e,e.options.onResponseError),await y(e)):e.response},u=async function(a,p){return(await i(a,p))._data};return u.raw=i,u.native=(...t)=>r(...t),u.create=(t={},a={})=>w({...o,...a,defaults:{...o.defaults,...a.defaults,...t}}),u}const b=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),F=b.fetch?(...o)=>b.fetch(...o):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),H=b.Headers,J=b.AbortController,N=w({fetch:F,Headers:H,AbortController:J}),M=N;export{M as $fetch,J as AbortController,S as FetchError,H as Headers,w as createFetch,R as createFetchError,F as fetch,N as ofetch};