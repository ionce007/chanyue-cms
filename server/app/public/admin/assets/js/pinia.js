import{ao as t,k as e,an as n,aw as s,H as o,w as a,r as c,I as r,ax as i,aa as u,l as f,m as p,p as l,R as h,q as d}from"./@vue.js";
/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let y;const v=t=>y=t,b=Symbol();function _(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,O;function $(){const s=t(!0),o=s.run((()=>e({})));let a=[],c=[];const r=n({install(t){v(r),r._a=t,t.provide(b,r),t.config.globalProperties.$pinia=r,c.forEach((t=>a.push(t))),c=[]},use(t){return this._a?a.push(t):c.push(t),this},_p:a,_a:null,_e:s,_s:new Map,state:o});return r}(O=j||(j={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const g=()=>{};function m(t,e,n,s=g){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&f()&&p(o),o}function w(t,...e){t.slice().forEach((t=>{t(...e)}))}const P=t=>t();function S(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];_(o)&&_(s)&&t.hasOwnProperty(n)&&!r(s)&&!i(s)?t[n]=S(o,s):t[n]=s}return t}const E=Symbol();const{assign:x}=Object;function I(n,s,o={},f,p,h){let d;const y=x({actions:{}},o),b={deep:!0};let O,$,I,M=[],k=[];const A=f.state.value[n];let F;function q(t){let e;O=$=!1,"function"==typeof t?(t(f.state.value[n]),e={type:j.patchFunction,storeId:n,events:I}):(S(f.state.value[n],t),e={type:j.patchObject,payload:t,storeId:n,events:I});const s=F=Symbol();l().then((()=>{F===s&&(O=!0)})),$=!0,w(M,e,f.state.value[n])}h||A||(f.state.value[n]={}),e({});const C=h?function(){const{state:t}=o,e=t?t():{};this.$patch((t=>{x(t,e)}))}:g;function H(t,e){return function(){v(f);const s=Array.from(arguments),o=[],a=[];let c;w(k,{args:s,name:t,store:N,after:function(t){o.push(t)},onError:function(t){a.push(t)}});try{c=e.apply(this&&this.$id===n?this:N,s)}catch(r){throw w(a,r),r}return c instanceof Promise?c.then((t=>(w(o,t),t))).catch((t=>(w(a,t),Promise.reject(t)))):(w(o,c),c)}}const J={_p:f,$id:n,$onAction:m.bind(null,k),$patch:q,$reset:C,$subscribe(t,e={}){const s=m(M,t,e.detached,(()=>o())),o=d.run((()=>a((()=>f.state.value[n]),(s=>{("sync"===e.flush?$:O)&&t({storeId:n,type:j.direct,events:I},s)}),x({},b,e))));return s},$dispose:function(){d.stop(),M=[],k=[],f._s.delete(n)}},N=c(J);f._s.set(n,N);const R=f._a&&f._a.runWithContext||P,W=f._e.run((()=>(d=t(),R((()=>d.run(s))))));for(const t in W){const e=W[t];if(r(e)&&(!r(B=e)||!B.effect)||i(e))h||(!A||_(z=e)&&z.hasOwnProperty(E)||(r(e)?e.value=A[t]:S(e,A[t])),f.state.value[n][t]=e);else if("function"==typeof e){const n=H(t,e);W[t]=n,y.actions[t]=e}}var z,B;return x(N,W),x(u(N),W),Object.defineProperty(N,"$state",{get:()=>f.state.value[n],set:t=>{q((e=>{x(e,t)}))}}),f._p.forEach((t=>{x(N,d.run((()=>t({store:N,app:f._a,pinia:f,options:y}))))})),A&&h&&o.hydrate&&o.hydrate(N.$state,A),O=!0,$=!0,N}function M(t,e,a){let c,r;const i="function"==typeof e;function u(t,a){const u=s();(t=t||(u?o(b,null):null))&&v(t),(t=y)._s.has(c)||(i?I(c,e,r,t):function(t,e,s,o){const{state:a,actions:c,getters:r}=e,i=s.state.value[t];let u;u=I(t,(function(){i||(s.state.value[t]=a?a():{});const e=h(s.state.value[t]);return x(e,c,Object.keys(r||{}).reduce(((e,o)=>(e[o]=n(d((()=>{v(s);const e=s._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,s,0,!0)}(c,r,t));return t._s.get(c)}return"string"==typeof t?(c=t,r=i?a:e):(r=t,c=t.id),u.$id=c,u}export{$ as c,M as d};
//# sourceMappingURL=pinia.js.map
