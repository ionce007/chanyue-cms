System.register(["./@vue-legacy.js"],(function(e,t){"use strict";var n,r,o,a,c,s,i,l,u,f,p,h;return{setters:[e=>{n=e.s,r=e.u,o=e.au,a=e.p,c=e.L,s=e.r,i=e.H,l=e.q,u=e.ad,f=e.K,p=e.k,h=e.w}],execute:function(){e({a:function(){return i(xe)},b:function(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),function(e){const n=function(e){const{history:t,location:n}=window,r={value:M(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:L()+e+r;try{t[c?"replaceState":"pushState"](a,"",i),o.value=a}catch(l){console.error(l),n[c?"replace":"assign"](i)}}function c(e,n){a(e,d({},t.state,B(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}function s(e,n){const c=d({},o.value,t.state,{forward:e,scroll:S()});a(c.current,c,!0),a(e,d({},B(r.value,e,null),{position:c.position+1},n),!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:c}}(e=function(e){if(!e)if(t){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),b(e)}(e)),r=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=M(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===i)return void(c=null);u=l?a.position-l.position:0}else r(s);o.forEach((e=>{e(n.value,i,{delta:u,type:x.pop,direction:u?u>0?C.forward:C.back:C.unknown})}))};function i(){c=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(d({},e.state,{scroll:S()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:i,listen:l,destroy:f}}(e,n.state,n.location,n.replace);function o(e,t=!0){t||r.pauseListeners(),history.go(e)}const a=d({location:"",base:e,go:o,createHref:$.bind(null,e)},n,r);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}(e)},c:function(e){const c=function(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,s=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Z(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);s.aliasOf=r&&r.record;const l=te(t,e),u=[s];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(d({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=Y(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!J(f)&&c(e.name)),s.children){const e=s.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&i(f)}return p?()=>{c(p)}:g}function c(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function s(){return n}function i(e){let t=0;for(;t<n.length&&z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ne(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!J(e)&&r.set(e.record.name,e)}function l(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw D(1,{location:e});c=o.record.name,s=d(N(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&N(e.params,o.keys.map((e=>e.name)))),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw D(1,{location:e,currentLocation:t});c=o.record.name,s=d({},t.params,e.params),a=o.stringify(s)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:c,path:a,params:s,matched:i,meta:ee(i)}}return t=te({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:l,removeRoute:c,getRoutes:s,getRecordMatcher:o}}(e.routes,e),s=e.parseQuery||Ee,i=e.stringifyQuery||ke,l=e.history,u=$e(),f=$e(),p=$e(),h=n(_);let y=_;t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=m.bind(null,(e=>""+e)),E=m.bind(null,be),R=m.bind(null,we);function P(e,t){if(t=d({},t||h.value),"string"==typeof e){const n=w(s,e,t.path),r=c.resolve({path:n.path},t),o=l.createHref(n.fullPath);return d(n,r,{params:R(r.params),hash:we(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=d({},e,{path:w(s,e.path,t.path).path});else{const r=d({},e.params);for(const e in r)null==r[e]&&delete r[e];n=d({},e,{params:E(r)}),t.params=E(t.params)}const r=c.resolve(n,t),o=e.hash||"";r.params=b(R(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,d({},e,{hash:(u=o,ve(u).replace(he,"{").replace(me,"}").replace(fe,"^")),path:r.path}));var u;const f=l.createHref(a);return d({fullPath:a,hash:o,query:i===ke?Oe(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function C(e){return"string"==typeof e?w(s,e,h.value.path):d({},e)}function j(e,t){if(y!==e)return D(8,{from:t,to:e})}function $(e){return M(e)}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),d({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function M(e,t){const n=y=P(e),r=h.value,o=e.state,a=e.force,c=!0===e.replace,s=L(n);if(s)return M(d(C(s),{state:"object"==typeof s?d({},o,s.state):o,force:a,replace:c}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&k(t.matched[r],n.matched[o])&&O(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=D(16,{to:l,from:r}),ae(r,r,!0,!1)),(u?Promise.resolve(u):W(l,r)).catch((e=>U(e)?U(e,2)?e:oe(e):re(e,l,r))).then((e=>{if(e){if(U(e,2))return M(d({replace:c},C(e.to),{state:"object"==typeof e.to?d({},o,e.to.state):o,force:a}),t||l)}else e=T(l,r,!0,c,o);return F(l,r,e),e}))}function B(e,t){const n=j(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e){const t=ie.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function W(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>k(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>k(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(Se(r,e,t))}));const c=B.bind(null,e,t);return n.push(c),ue(n).then((()=>{n=[];for(const r of u.list())n.push(Se(r,e,t));return n.push(c),ue(n)})).then((()=>{n=qe(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Se(r,e,t))}));return n.push(c),ue(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(v(r.beforeEnter))for(const o of r.beforeEnter)n.push(Se(o,e,t));else n.push(Se(r.beforeEnter,e,t));return n.push(c),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(a,"beforeRouteEnter",e,t),n.push(c),ue(n)))).then((()=>{n=[];for(const r of f.list())n.push(Se(r,e,t));return n.push(c),ue(n)})).catch((e=>U(e,8)?e:Promise.reject(e)))}function F(e,t,n){p.list().forEach((r=>I((()=>r(e,t,n)))))}function T(e,n,r,o,a){const c=j(e,n);if(c)return c;const s=n===_,i=t?history.state:{};r&&(o||s?l.replace(e.fullPath,d({scroll:s&&i&&i.scroll},a)):l.push(e.fullPath,a)),h.value=e,ae(e,n,r,s),oe()}let K;function V(){K||(K=l.listen(((e,n,r)=>{if(!le.listening)return;const o=P(e),a=L(o);if(a)return void M(d(a,{replace:!0}),o).catch(g);y=o;const c=h.value;var s,i;t&&(s=q(c.fullPath,r.delta),i=S(),A.set(s,i)),W(o,c).catch((e=>U(e,12)?e:U(e,2)?(M(e.to,o).then((e=>{U(e,20)&&!r.delta&&r.type===x.pop&&l.go(-1,!1)})).catch(g),Promise.reject()):(r.delta&&l.go(-r.delta,!1),re(e,o,c)))).then((e=>{(e=e||T(o,c,!1))&&(r.delta&&!U(e,8)?l.go(-r.delta,!1):r.type===x.pop&&U(e,20)&&l.go(-1,!1)),F(o,c,e)})).catch(g)})))}let H,Q=$e(),X=$e();function re(e,t,n){oe(e);const r=X.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function oe(e){return H||(H=!e,V(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ae(n,r,o,c){const{scrollBehavior:s}=e;if(!t||!s)return Promise.resolve();const i=!o&&function(e){const t=A.get(e);return A.delete(e),t}(q(n.fullPath,0))||(c||!o)&&history.state&&history.state.scroll||null;return a().then((()=>s(n,r,i))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>re(e,n,r)))}const ce=e=>l.go(e);let se;const ie=new Set,le={currentRoute:h,listening:!0,addRoute:function(e,t){let n,r;return G(e)?(n=c.getRecordMatcher(e),r=t):r=e,c.addRoute(r,n)},removeRoute:function(e){const t=c.getRecordMatcher(e);t&&c.removeRoute(t)},hasRoute:function(e){return!!c.getRecordMatcher(e)},getRoutes:function(){return c.getRoutes().map((e=>e.record))},resolve:P,options:e,push:$,replace:function(e){return $(d(C(e),{replace:!0}))},go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:u.add,beforeResolve:f.add,afterEach:p.add,onError:X.add,isReady:function(){return H&&h.value!==_?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))},install(e){e.component("RouterLink",Le),e.component("RouterView",_e),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>r(h)}),t&&!se&&h.value===_&&(se=!0,$(l.location).catch((e=>{})));const n={};for(const t in _)Object.defineProperty(n,t,{get:()=>h.value[t],enumerable:!0});e.provide(xe,this),e.provide(Ce,o(n)),e.provide(je,h);const a=e.unmount;ie.add(e),e.unmount=function(){ie.delete(e),ie.size<1&&(y=_,K&&K(),K=null,h.value=_,se=!1,H=!1),a()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>I(t)))),Promise.resolve())}return le},u:function(){return i(Ce)}});
/*!
        * vue-router v4.2.4
        * (c) 2023 Eduardo San Martin Morote
        * @license MIT
        */
const t="undefined"!=typeof window,d=Object.assign;function m(e,t){const n={};for(const r in t){const o=t[r];n[r]=v(o)?o.map(e):e(o)}return n}const g=()=>{},v=Array.isArray,y=/\/$/,b=e=>e.replace(y,"");function w(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("#");let i=t.indexOf("?");return s<i&&s>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),c=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,c,s=n.length-1;for(a=0;a<r.length;a++)if(c=r[a],"."!==c){if(".."!==c)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function E(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function O(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!R(e[n],t[n]))return!1;return!0}function R(e,t){return v(e)?P(e,t):v(t)?P(t,e):e===t}function P(e,t){return v(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var x,C;!function(e){e.pop="pop",e.push="push"}(x||(x={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(C||(C={}));const j=/^[^#]+#/;function $(e,t){return e.replace(j,"#")+t}const S=()=>({left:window.pageXOffset,top:window.pageYOffset});function q(e,t){return(history.state?history.state.position-t:-1)+e}const A=new Map;let L=()=>location.protocol+"//"+location.host;function M(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),E(n,"")}return E(n,e)+r+o}function B(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?S():null}}function G(e){return"string"==typeof e||"symbol"==typeof e}const _={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},I=Symbol("");var W;function D(e,t){return d(new Error,{type:e,[I]:!0},t)}function U(e,t){return e instanceof Error&&I in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(W||(W={}));const F="[^/]+?",T={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function V(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function z(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=V(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(H(r))return 1;if(H(o))return-1}return o.length-r.length}function H(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Q={type:0,value:""},X=/[a-zA-Z0-9_]/;function Y(e,t,n){const r=function(e,t){const n=d({},T,t),r=[];let o=n.start?"^":"";const a=[];for(const i of e){const e=i.length?[]:[90];n.strict&&!i.length&&(o+="/");for(let t=0;t<i.length;t++){const r=i[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(K,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;a.push({name:e,repeatable:n,optional:l});const f=u||F;if(f!==F){c+=10;try{new RegExp(`(${f})`)}catch(s){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+s.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=l&&i.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),o+=p,c+=20,l&&(c+=-8),n&&(c+=-20),".*"===f&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,i=a in t?t[a]:"";if(v(i)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=v(i)?i.join("/"):i;if(!l){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[Q]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function p(){l+=s}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:X.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),c(),o}(e.path),n),o=d(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function N(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Z(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function J(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ee(e){return e.reduce(((e,t)=>d(e,t.meta)),{})}function te(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ne(e,t){return t.children.some((t=>t===e||ne(e,t)))}const re=/#/g,oe=/&/g,ae=/\//g,ce=/=/g,se=/\?/g,ie=/\+/g,le=/%5B/g,ue=/%5D/g,fe=/%5E/g,pe=/%60/g,he=/%7B/g,de=/%7C/g,me=/%7D/g,ge=/%20/g;function ve(e){return encodeURI(""+e).replace(de,"|").replace(le,"[").replace(ue,"]")}function ye(e){return ve(e).replace(ie,"%2B").replace(ge,"+").replace(re,"%23").replace(oe,"%26").replace(pe,"`").replace(he,"{").replace(me,"}").replace(fe,"^")}function be(e){return null==e?"":function(e){return ve(e).replace(re,"%23").replace(se,"%3F")}(e).replace(ae,"%2F")}function we(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ee(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(ie," "),o=e.indexOf("="),a=we(o<0?e:e.slice(0,o)),c=o<0?null:we(e.slice(o+1));if(a in t){let e=t[a];v(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function ke(e){let t="";for(let n in e){const r=e[n];(n=ye(n).replace(ce,"%3D"),null!=r)?(v(r)?r.map((e=>e&&ye(e))):[r&&ye(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function Oe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=v(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Re=Symbol(""),Pe=Symbol(""),xe=Symbol(""),Ce=Symbol(""),je=Symbol("");function $e(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function Se(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,s)=>{const i=e=>{var i;!1===e?s(D(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(i=e)||i&&"object"==typeof i?s(D(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>s(e)))}))}function qe(e,t,n,r){const o=[];for(const c of e)for(const e in c.components){let s=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(a=s)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(s.__vccOpts||s)[t];a&&o.push(Se(a,n,r,c,e))}else{let a=s();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const a=(s=o).__esModule||"Module"===s[Symbol.toStringTag]?o.default:o;var s;c.components[e]=a;const i=(a.__vccOpts||a)[t];return i&&Se(i,n,r,c,e)()}))))}}var a;return o}function Ae(e){const t=i(xe),n=i(Ce),o=l((()=>t.resolve(r(e.to)))),a=l((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],a=n.matched;if(!r||!a.length)return-1;const c=a.findIndex(k.bind(null,r));if(c>-1)return c;const s=Me(e[t-2]);return t>1&&Me(r)===s&&a[a.length-1].path!==s?a.findIndex(k.bind(null,e[t-2])):c})),c=l((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!v(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,o.value.params))),s=l((()=>a.value>-1&&a.value===n.matched.length-1&&O(n.params,o.value.params)));return{route:o,href:l((()=>o.value.href)),isActive:c,isExactActive:s,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[r(e.replace)?"replace":"push"](r(e.to)).catch(g):Promise.resolve()}}}const Le=c({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ae,setup(e,{slots:t}){const n=s(Ae(e)),{options:r}=i(xe),o=l((()=>({[Be(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Be(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:u("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}});function Me(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Be=(e,t,n)=>null!=e?e:null!=t?t:n;function Ge(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const _e=c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=i(je),a=l((()=>e.route||o.value)),c=i(Pe,0),s=l((()=>{let e=r(c);const{matched:t}=a.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),m=l((()=>a.value.matched[s.value]));f(Pe,l((()=>s.value+1))),f(Re,m),f(je,a);const g=p();return h((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&k(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=a.value,o=e.name,c=m.value,s=c&&c.components[o];if(!s)return Ge(n.default,{Component:s,route:r});const i=c.props[o],l=i?!0===i?r.params:"function"==typeof i?i(r):i:null,f=u(s,d({},l,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(c.instances[o]=null)},ref:g}));return Ge(n.default,{Component:f,route:r})||f}}})}}}));
//# sourceMappingURL=vue-router-legacy.js.map
