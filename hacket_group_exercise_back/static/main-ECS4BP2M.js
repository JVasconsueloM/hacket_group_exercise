import{a as x,b as q,c as D,d as Q,f as B,h as H}from"./chunk-UR4544HM.js";import{a as w,b as E,d as S,e as L,f as j,g as G,h as R,j as U}from"./chunk-DC6MKQJR.js";import{$ as P,$a as T,W as A,a as g,ca as I,g as y,ga as F,hb as k,nb as N}from"./chunk-SVFPZVI5.js";var J=[{path:"",redirectTo:"home/dashboard",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-S6UMWDQI.js"),children:[{path:"dashboard",loadComponent:()=>import("./chunk-2TQRAHCQ.js")},{path:"accounts",loadComponent:()=>import("./chunk-R5QHWQW4.js")},{path:"activities",loadComponent:()=>import("./chunk-RKT7D3IP.js")}]}];var $=(t,e,o)=>{let r=["POST","PUT","PATCH"].indexOf(t.method.toUpperCase())!==-1,a=n=>["variables","extensions"].indexOf(n.toLowerCase())!==-1,i=t.body.length,l=t.options&&t.options.useMultipart,f;if(l){if(i)return new y(n=>n.error(new Error("File upload is not available when combined with Batching")));if(!r)return new y(n=>n.error(new Error("File upload is not available when GET is used")));if(!o)return new y(n=>n.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));f=o(t.body),l=!!f.files.size}let p={};if(i){if(!r)return new y(n=>n.error(new Error("Batching is not available for GET requests")));p={body:t.body}}else{let n=l?f.clone:t.body;r?p={body:n}:p={params:Object.keys(t.body).reduce((u,s)=>{let h=t.body[s];return u[s]=a(s)?JSON.stringify(h):h,u},{})}}if(l&&r){let n=new FormData;n.append("operations",JSON.stringify(p.body));let b={},u=f.files,s=0;u.forEach(h=>{b[++s]=h}),n.append("map",JSON.stringify(b)),s=0,u.forEach((h,c)=>{n.append(++s+"",c,c.name)}),p.body=n}return e.request(t.method,t.url,g(g({observe:"response",responseType:"json",reportProgress:!1},p),t.options))},V=(t,e)=>t&&e?e.keys().reduce((r,a)=>r.set(a,e.getAll(a)),t):e||t;function X(...t){return t.find(e=>typeof e<"u")}function Y(t){let e=t.headers&&t.headers instanceof x?t.headers:new x(t.headers);if(t.clientAwareness){let{name:o,version:r}=t.clientAwareness;o&&!e.has("apollographql-client-name")&&(e=e.set("apollographql-client-name",o)),r&&!e.has("apollographql-client-version")&&(e=e.set("apollographql-client-version",r))}return e}var tt={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function m(t,e,o){return X(t[o],e[o],tt[o])}var M=class extends j{httpClient;options;requester;print=S;constructor(e,o){super(),this.httpClient=e,this.options=o,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new L(a=>{let i=r.getContext(),l=m(i,this.options,"method"),f=m(i,this.options,"includeQuery"),p=m(i,this.options,"includeExtensions"),n=m(i,this.options,"uri"),b=m(i,this.options,"withCredentials"),u=m(i,this.options,"useMultipart"),s=this.options.useGETForQueries===!0,h=r.query.definitions.some(d=>d.kind==="OperationDefinition"&&d.operation==="query");s&&h&&(l="GET");let c={method:l,url:typeof n=="function"?n(r):n,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:b,useMultipart:u,headers:this.options.headers}};p&&(c.body.extensions=r.extensions),f&&(c.body.query=this.print(r.query));let W=Y(i);c.options.headers=V(c.options.headers,W);let O=$(c,this.httpClient,this.options.extractFiles).subscribe({next:d=>{r.setContext({response:d}),a.next(d.body)},error:d=>a.error(d),complete:()=>a.complete()});return()=>{O.closed||O.unsubscribe()}})}request(e){return this.requester(e)}},K=(()=>{class t{httpClient;constructor(o){this.httpClient=o}create(o){return new M(this.httpClient,o)}static \u0275fac=function(r){return new(r||t)(P(q))};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _(){return[{provide:R,useFactory(t){return{cache:new G,link:t.create({uri:"http://localhost:8000/graphql"})}},deps:[K]}]}var z={providers:[N({eventCoalescing:!0}),H(J),E(w()),D(),F(U),_(),E(w())]};var v=class t{title="hacket_group_exercise_front";static \u0275fac=function(o){return new(o||t)};static \u0275cmp=I({type:t,selectors:[["app-root"]],standalone:!0,features:[k],decls:1,vars:0,template:function(o,r){o&1&&T(0,"router-outlet")},dependencies:[B]})};Q(v,z).catch(t=>console.error(t));