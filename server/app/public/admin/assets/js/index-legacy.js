System.register(["./@vue-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./element-plus-legacy.js","./dayjs-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./@element-plus-legacy.js","./saduocss-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js"],(function(e,t){"use strict";var a,i,o,n,r,d,l,s,c,m,u,p,v,h,g,f,w,x,b,y,k,j,_,S,C,I,A,P,B,E,L,M,O,$,z,T,F,N,D,H,U,R,V,q,G,W,Z;return{setters:[e=>{a=e.ae,i=e.o,o=e.X,n=e.W,r=e.U,d=e.u,l=e.c,s=e.a9,c=e.F,m=e.Y,u=e.h,p=e.a,v=e.t,h=e._,g=e.L,f=e.k,w=e.w,x=e.$,b=e.a3,y=e.Z,k=e.a4,j=e.as},e=>{_=e.d,S=e.c},e=>{C=e.i},e=>{I=e.E,A=e.z,P=e.a,B=e.b,E=e.c,L=e.d,M=e.e,O=e.f,$=e.g,z=e.h,T=e.i,F=e.j,N=e.k,D=e.l,H=e.m,U=e.n},null,e=>{R=e.u,V=e.a,q=e.c,G=e.b},e=>{W=e.a},e=>{Z=e.E},null,null,null,null,null,null,null,null,null],execute:function(){var X=document.createElement("style");X.textContent="nav a.router-link-exact-active[data-v-ee806c20]{color:var(--color-text)}nav a.router-link-exact-active[data-v-ee806c20]:hover{background-color:transparent}nav a[data-v-ee806c20]{display:inline-block;padding:0 1rem;border-left:1px solid var(--color-border)}nav a[data-v-ee806c20]:first-of-type{border:0}.logo[data-v-63750dc4]{background-image:linear-gradient(300deg,#778cca,#65de83);padding:10px;color:#fff;font-size:20px;font-weight:lighter;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:width .3s linear}.ico-nav[data-v-b96b887d]{width:40px;height:40px;border-radius:15px;box-shadow:inset 0 0 5px #f2f2f2;padding:4px;display:inline-block;margin-right:5px}.ico-nav img[data-v-b96b887d]{width:100%}.el-sub-menu .el-menu-item[data-v-b96b887d]{margin-left:10px}.el-sub-menu.is-active .el-icon[data-v-b96b887d],.el-sub-menu.is-active[data-v-b96b887d] .el-sub-menu__title,.el-sub-menu.is-active[data-v-b96b887d] .el-sub-menu__icon-arrow{color:#1890ff}.el-menu-vertical-demo[data-v-03fd03f9]:not(.el-menu--collapse){width:200px;min-height:400px}.el-menu[data-v-03fd03f9]{border-right:0px}[data-v-a1332798] .el-badge__content.is-fixed.is-dot{top:5px;right:10px}.navbar-cont[data-v-a1332798]{padding:8px 20px;display:flex;justify-content:end;gap:10px}.breadcrumb-leave-active[data-v-d499050b]{position:absolute}.breadcrumb[data-v-d499050b]{display:inline-block;font-size:14px;line-height:50px;margin-left:8px}.breadcrumb .no-redirect[data-v-d499050b]{cursor:text}.breadcrumb .redirect[data-v-d499050b]{font-weight:bolder}.app-wrapper[data-v-fdadfa17]{display:flex;width:100%;height:100%}.app-wrapper .sidebar[data-v-fdadfa17]{height:100vh;border-right:1px solid #f9f5f5;transition:all .5s}.app-wrapper .sidebar-container[data-v-fdadfa17]{height:100%;background-color:var(--vt-c-white);width:200px!important}.app-wrapper .sidebar-container-menu[data-v-fdadfa17]:not(.el-menu--collapse){width:200px}.app-wrapper .sidebar-container .el-menu[data-v-fdadfa17]{border:none}.app-wrapper .main-container[data-v-fdadfa17]{flex:1;display:flex;flex-direction:column;height:100vh;overflow:hidden}.app-wrapper .main-container .header .navbar[data-v-fdadfa17]{background-color:var(--vt-c-white);border-bottom:1px solid var(--color-border)}.app-wrapper .main-container .header .navbar .ico-collapse[data-v-fdadfa17]{width:42px;height:42px;cursor:pointer;font-size:16px;color:#1890ff}.app-wrapper .main-container .header .tags-view[data-v-fdadfa17]{height:34px;background:#12efff}.app-wrapper .main-container .app-main[data-v-fdadfa17]{height:calc(100vh - 51px);padding:20px;background-color:#f2f2f2;overflow:auto}.app-wrapper .main-container .app-main .container[data-v-fdadfa17]{background-color:#fff;border-radius:6px;padding:10px}:root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64);--blue:#324157;--light-blue:#3A71A8;--red:#C03639;--pink: #E65D6E;--green: #30B08F;--tiffany: #4AB7BD;--yellow:#FEC171;--panGreen: #30B08F;--menuText:#bfcbd9;--menuActiveText:#409EFF;--subMenuActiveText:#f4f4f5;--menuBg:#304156;--menuHover:#263445;--subMenuBg:#1f2d3d;--subMenuHover:#001528;--sideBarWidth: 210px}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1)}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2)}}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.c-fff{color:var(--vt-c-white)}.c-a1a3aa{color:#a1a3aa}.search{background-color:#f7f7f7;border:1px solid #f7f2f2;border-radius:5px}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;text-align:center}.avatar-uploader .el-upload{border:1px dashed #dcdfe6;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}\n",document.head.appendChild(X);const Y=e("_",((e,t)=>{const a=e.__vccOpts||e;for(const[i,o]of t)a[i]=o;return a})),J=Y({__name:"App",setup(e){const t=A;return(e,l)=>{const s=a("router-view");return i(),o(d(I),{size:"","z-index":3e3,locale:d(t)},{default:n((()=>[r(s)])),_:1},8,["locale"])}}},[["__scopeId","data-v-ee806c20"]]),K=function(e,t,a){return e()},Q={class:"logo"},ee=Y({},[["render",function(e,t){return i(),l("h1",Q,"禅悦chanyue-cms")}],["__scopeId","data-v-63750dc4"]]),te=Y({name:"SidebarItem",props:{data:{type:Array,default:()=>[]}},data:()=>({}),created(){},methods:{goto(e){if(e?.children?.length>0)return!1;this.$router.push({path:e.path,query:e.query})}}},[["render",function(e,t,d,g,f,w){const x=P,b=a("SidebarItem"),y=B,k=E;return i(!0),l(c,null,s(d.data,((e,t)=>(i(),l(c,{key:e.path},[e?.children?.length>0&&e.meta.isShow?(i(),o(y,{key:0,index:e.path},{title:n((()=>[e?.meta?.icon?(i(),o(x,{key:0},{default:n((()=>[(i(),o(m(e.meta.icon)))])),_:2},1024)):u("",!0),p("span",null,v(e?.meta?.title),1)])),default:n((()=>[r(b,{data:e.children},null,8,["data"])])),_:2},1032,["index"])):e.meta.isShow?(i(),o(k,{key:1,index:e.path},{title:n((()=>[h(v(e?.meta?.title),1)])),default:n((()=>[e?.meta?.icon?(i(),o(x,{key:0},{default:n((()=>[(i(),o(m(e.meta.icon)))])),_:2},1024)):u("",!0)])),_:2},1032,["index"])):u("",!0)],64)))),128)}],["__scopeId","data-v-b96b887d"]]);W.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",W.defaults.crossDomain=!0,W.defaults.withCredentials=!0,W.defaults.timeout=1e4;let ae=e("h",W.create({baseURL:""}));ae.interceptors.request.use((e=>{const{token:t}=le();return t&&(e.headers.auth=t),e}),(e=>{console.log(e),Promise.reject(e||"网络异常")})),ae.interceptors.response.use((e=>{const{code:t,data:a,message:i}=e;return 0===a.code&&(console.log("data->",a),"TokenExpiredError"==a.msg.name?L({message:"登录失效，请重新登录",type:"warning"}):L.success(a.msg),le().logout(),location.reload()),Promise.resolve(a)}),(e=>{console.warn(e);const{response:t}=e;return t&&t.status,Promise.reject(e)})),ae.jsonp=function({url:e,data:t={}}){let a=+new Date;const i=t.callback?t.callback:`light_${a}`;t.callback=i;const o=document.createElement("script");return o.setAttribute("src",e+"?"+function(e={}){const t=Object.keys(e),a=Object.values(e);return t.map(((e,t)=>e+"="+a[t])).join("&")}(t)),document.body.appendChild(o),new Promise(((e,t)=>{window[i]=t=>{e(t),o&&document.body.removeChild(o),delete window[i]},o.onerror=function(e){t(e)}}))};let ie={pre:{BASE_API:{}.VITE_APP_BASE_API||""},prd:{BASE_API:{}.VITE_APP_BASE_API||""}};console.log("api[env]",ie.pre);const oe=e("A",ie.pre);class ne{static API=oe.BASE_API;version(){return"v.1.0"}static get(e={}){return ae({url:`${ne.API}/api/get`,method:"GET",params:e})}static post(e={}){return ae({url:`${ne.API}/api/post`,method:"POST",data:e})}static put(e={}){return ae({url:`${ne.API}/api/put`,method:"PUT",data:e})}static patch(e={}){return ae({url:`${ne.API}/api/patch`,method:"PATCH",data:e})}static delete(){return ae({url:`${ne.API}/api/delete?id=1`,method:"Delete"})}static upload=e=>ae({url:`${ne.API}/api/delete?id=1`,method:"post",headers:{"Content-type":"multipart/form-data"},data:e})}class re extends ne{constructor(e){super(e)}static toLogin(e){return ae({url:`${oe.BASE_API}/api/admin/login`,method:"post",data:e})}static userInfo(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:{userId:"123456",userName:"mingkong",nickName:"明空",role:"admin"}})}),300)}))}static menuList(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:De})}),300)}))}}const de=Object.assign({"/src/views/ad/add.vue":()=>K((()=>t.import("./add-legacy.js")),0,t.meta.url),"/src/views/ad/edit.vue":()=>K((()=>t.import("./edit-legacy.js")),0,t.meta.url),"/src/views/ad/index.vue":()=>K((()=>t.import("./index-legacy2.js")),0,t.meta.url),"/src/views/admin/add.vue":()=>K((()=>t.import("./add-legacy2.js")),0,t.meta.url),"/src/views/admin/edit.vue":()=>K((()=>t.import("./edit-legacy2.js")),0,t.meta.url),"/src/views/admin/index.vue":()=>K((()=>t.import("./index-legacy3.js")),0,t.meta.url),"/src/views/article/add.vue":()=>K((()=>t.import("./add-legacy3.js")),0,t.meta.url),"/src/views/article/edit.vue":()=>K((()=>t.import("./edit-legacy3.js")),0,t.meta.url),"/src/views/article/index.vue":()=>K((()=>t.import("./index-legacy4.js")),0,t.meta.url),"/src/views/category/add.vue":()=>K((()=>t.import("./add-legacy4.js")),0,t.meta.url),"/src/views/category/edit.vue":()=>K((()=>t.import("./edit-legacy4.js")),0,t.meta.url),"/src/views/category/index.vue":()=>K((()=>t.import("./index-legacy5.js")),0,t.meta.url),"/src/views/dashboard/index.vue":()=>K((()=>t.import("./index-legacy6.js")),0,t.meta.url),"/src/views/field/add.vue":()=>K((()=>t.import("./add-legacy5.js")),0,t.meta.url),"/src/views/field/edit.vue":()=>K((()=>t.import("./edit-legacy5.js")),0,t.meta.url),"/src/views/field/index.vue":()=>K((()=>t.import("./index-legacy7.js")),0,t.meta.url),"/src/views/frag/add.vue":()=>K((()=>t.import("./add-legacy6.js")),0,t.meta.url),"/src/views/frag/edit.vue":()=>K((()=>t.import("./edit-legacy6.js")),0,t.meta.url),"/src/views/frag/index.vue":()=>K((()=>t.import("./index-legacy8.js")),0,t.meta.url),"/src/views/friendlink/add.vue":()=>K((()=>t.import("./add-legacy7.js")),0,t.meta.url),"/src/views/friendlink/edit.vue":()=>K((()=>t.import("./edit-legacy7.js")),0,t.meta.url),"/src/views/friendlink/index.vue":()=>K((()=>t.import("./index-legacy9.js")),0,t.meta.url),"/src/views/home/index.vue":()=>K((()=>t.import("./index-legacy10.js")),0,t.meta.url),"/src/views/home/info.vue":()=>K((()=>t.import("./info-legacy.js")),0,t.meta.url),"/src/views/home/sys.vue":()=>K((()=>t.import("./sys-legacy.js")),0,t.meta.url),"/src/views/layout/index.vue":()=>K((()=>t.import("./index-legacy11.js")),0,t.meta.url),"/src/views/login/index.vue":()=>K((()=>t.import("./index-legacy12.js")),0,t.meta.url),"/src/views/message/add.vue":()=>K((()=>t.import("./add-legacy8.js")),0,t.meta.url),"/src/views/message/edit.vue":()=>K((()=>t.import("./edit-legacy8.js")),0,t.meta.url),"/src/views/message/index.vue":()=>K((()=>t.import("./index-legacy13.js")),0,t.meta.url),"/src/views/model/add.vue":()=>K((()=>t.import("./add-legacy9.js")),0,t.meta.url),"/src/views/model/edit.vue":()=>K((()=>t.import("./edit-legacy9.js")),0,t.meta.url),"/src/views/model/index.vue":()=>K((()=>t.import("./index-legacy14.js")),0,t.meta.url),"/src/views/page/add.vue":()=>K((()=>t.import("./add-legacy10.js")),0,t.meta.url),"/src/views/page/edit.vue":()=>K((()=>t.import("./edit-legacy10.js")),0,t.meta.url),"/src/views/page/index.vue":()=>K((()=>t.import("./index-legacy15.js")),0,t.meta.url),"/src/views/tag/add.vue":()=>K((()=>t.import("./add-legacy11.js")),0,t.meta.url),"/src/views/tag/edit.vue":()=>K((()=>t.import("./edit-legacy11.js")),0,t.meta.url),"/src/views/tag/index.vue":()=>K((()=>t.import("./index-legacy16.js")),0,t.meta.url)});console.log("modules---\x3e",de);const le=e("u",_("user",{state:()=>({token:localStorage.getItem("token")||"",userInfo:null,menuList:[]}),actions:{async login(e){try{const t=await re.toLogin(e);return 200==t.code&&(this.token=t.data.token),t}catch(t){console.log(t)}},async getUserInfo(){try{const e=await re.userInfo();if(200==e.code)return this.userInfo=e.data,e.data.role}catch(e){console.log(e)}},async getMenuList(){try{const e=await re.menuList();if(200==e.code){let t=ce(e.data);console.log("res----\x3e",t),this.menuList=t}}catch(e){console.log(e)}},logout(){this.userInfo=null,this.token="",localStorage.removeItem("token")},getAccessRoutes(e){const t=se(this.menuList,e);return console.log("fullPathRoutes--\x3e",t),this.menuList=t,t}},persist:{enabled:!0,strategies:[{key:"user",storage:localStorage,paths:["token"]}]}}));function se(e,t){const a=[];return e.forEach((e=>{const i={...e};i?.children?.length>0&&(i.children=se(i.children,t)),function(e,t){return!e?.meta?.role||e.meta.role.includes(t)}(i,t)&&a.push(i)})),a}function ce(e){let t=[];return e.forEach((e=>{e.component&&(console.log("oooo----0000",e.component),e.component=e.component.replace("@/","/src/"),e.component=de[`${e.component}`]),console.log("item",e),t.push(e),e.children&&ce(e.children)})),t}const me=Y(g({props:{isCollapse:Boolean},components:{SidebarItem:te},data:()=>({activeIndex:"",menuList:[]}),watch:{$route(e,t){this.activeIndex=e.path}},created(){const e=R(),{menuList:t}=le();this.menuList=t,this.activeIndex=e.path},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}}),[["render",function(e,t,d,l,s,c){const m=a("SidebarItem"),u=M;return i(),o(u,{"active-text-color":"","background-color":"",class:"el-menu-vertical-demo","text-color":"","default-active":e.activeIndex,router:!0,"unique-opened":!0,"collapse-transition":!0,collapse:e.isCollapse,"popper-effect":"light",onOpen:e.handleOpen,onClose:e.handleClose},{default:n((()=>[r(m,{data:e.menuList},null,8,["data"])])),_:1},8,["default-active","collapse","onOpen","onClose"])}],["__scopeId","data-v-03fd03f9"]]),ue={},pe={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:"arco-icon arco-icon-language","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"miter","data-v-0ee42d02":""},ve=[p("path",{d:"m42 43-2.385-6M26 43l2.384-6m11.231 0-.795-2-4.18-10h-1.28l-4.181 10-.795 2m11.231 0h-11.23M17 5l1 5M5 11h26M11 11s1.889 7.826 6.611 12.174C22.333 27.522 30 31 30 31"},null,-1),p("path",{d:"M25 11s-1.889 7.826-6.611 12.174C13.667 27.522 6 31 6 31"},null,-1)],he=Y(ue,[["render",function(e,t){return i(),l("svg",pe,ve)}]]),ge={},fe={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:"arco-icon arco-icon-notification","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"miter","data-v-0ee42d02":""},we=[p("path",{d:"M24 9c7.18 0 13 5.82 13 13v13H11V22c0-7.18 5.82-13 13-13Zm0 0V4M6 35h36m-25 7h14"},null,-1)],xe=Y(ge,[["render",function(e,t){return i(),l("svg",fe,we)}]]),be={},ye={viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"arco-icon arco-icon-launch","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"arcs",filter:"","data-v-249840b0":"",style:{"font-size":"32px"}},ke=[p("path",{d:"M41 26v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h14M19.822 28.178 39.899 8.1M41 20V7H28"},null,-1)],je=Y(be,[["render",function(e,t){return i(),l("svg",ye,ke)}]]),_e={justify:"end",class:"navbar-cont",gutter:20},Se={href:"/",target:"_blank"},Ce=g({name:"NavBar"}),Ie=Y(Object.assign(Ce,{setup(e){const t=()=>{le().logout(),location.reload()};return(e,a)=>{const o=O,d=$,s=z,c=T,m=F,u=N;return i(),l("div",_e,[r(d,{class:"mr-10",effect:"dark",content:"站点",placement:"top-start"},{default:n((()=>[p("a",Se,[r(o,{icon:je,circle:""})])])),_:1}),r(d,{class:"mr-10",effect:"dark",content:"语言",placement:"top-start"},{default:n((()=>[r(m,{trigger:"click"},{dropdown:n((()=>[r(c,null,{default:n((()=>[r(s,null,{default:n((()=>[h("中文")])),_:1}),r(s,null,{default:n((()=>[h("Englist")])),_:1})])),_:1})])),default:n((()=>[r(o,{icon:he,circle:""})])),_:1})])),_:1}),r(d,{class:"box-item",effect:"dark",content:"消息通知",placement:"top-start"},{default:n((()=>[r(u,{"is-dot":"",class:"bell"},{default:n((()=>[r(o,{icon:xe,circle:""})])),_:1})])),_:1}),r(d,{class:"mr-10",effect:"dark",content:"管理员",placement:"top-start"},{default:n((()=>[r(m,{trigger:"click"},{dropdown:n((()=>[r(c,null,{default:n((()=>[r(s,null,{default:n((()=>[h("用户中心")])),_:1}),r(s,{onClick:t},{default:n((()=>[h("退出登录")])),_:1})])),_:1})])),default:n((()=>[r(o,{icon:"Avatar",circle:""})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-a1332798"]]),Ae={key:0,class:"no-redirect"},Pe=["onClick"],Be=g({name:"BreadCrumb"}),Ee=Object.assign(Be,{setup(e){const t=R(),a=f([]);w(t,(()=>{(()=>{const e=t.matched.filter((e=>"index"!==e.name));console.log("list---\x3e",e),a.value=t.matched.filter((e=>e.meta&&e.meta.title))})()}),{immediate:!0});const d=V();return(e,t)=>{const m=D,u=H;return i(),o(u,{class:"breadcrumb",separator:"/"},{default:n((()=>[r(x,{name:"breadcrumb"},{default:n((()=>[(i(!0),l(c,null,s(a.value,((e,t)=>(i(),o(m,{key:e.path},{default:n((()=>[t===a.value.length-1?(i(),l("span",Ae,v(e.meta.title),1)):(i(),l("a",{key:1,class:"redirect",onClick:b((t=>(e=>{console.log(e),d.push(e.path)})(e)),["prevent"])},v(e.meta.title),9,Pe))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),Le=g({components:{SideBar:me,NavBar:Ie,BreadCrumb:Y(Ee,[["__scopeId","data-v-d499050b"]]),Logo:ee},data:()=>({isCollapse:!1}),watch:{$route(e,t){this.activeIndex=e.path}},created(){},methods:{switchCollapse(e,t){console.log(e,t),this.isCollapse=!this.isCollapse},handleClose(e,t){console.log(e,t)}}}),Me={class:"app-wrapper"},Oe={class:"main-container"},$e={class:"header"},ze={class:"navbar row justify-between align-c"},Te={class:"row align-c"},Fe={class:"app-main"},Ne={class:"container"},De=[{path:"/home",name:"home-info",component:"@/views/home/info.vue",meta:{title:"网站信息",icon:"DataLine",isShow:!0,role:["admin"]}},{path:"/sys",name:"sys",meta:{title:"系统管理",icon:"Setting",isShow:!0,role:["admin"]},redirect:"/sys/index",children:[{path:"/sys/index",name:"sys-index",component:"@/views/home/sys.vue",meta:{title:"系统设置",isShow:!0,role:["admin"]}}]},{path:"/content",name:"content",meta:{title:"内容管理",isShow:!0,icon:"Grid",role:["admin"]},redirect:"/category",children:[{path:"/category",name:"category-index",component:"@/views/category/index.vue",meta:{title:"栏目管理",isShow:!0,role:["admin"]}},{path:"/category/add",name:"category-add",component:"@/views/category/add.vue",meta:{title:"栏目管理-新增",isShow:!1,role:["admin"]}},{path:"/category/edit/:id",name:"category-edit",component:"@/views/category/edit.vue",meta:{title:"页面管理-更新",isShow:!1,role:["admin"]}},{path:"/article",name:"article-index",component:"@/views/article/index.vue",meta:{title:"文章管理",isShow:!0,role:["admin"]}},{path:"/article/add",name:"article-add",component:"@/views/article/add.vue",meta:{title:"文章管理-新增",isShow:!1,role:["admin"]}},{path:"/article/edit/:id",name:"article-edit",component:"@/views/article/edit.vue",meta:{title:"文章管理-更新",isShow:!1,role:["admin"]}},{path:"/page",name:"page-index",component:"@/views/page/index.vue",meta:{title:"页面管理",isShow:!0,role:["admin"]}},{path:"/page/add",name:"page-add",component:"@/views/page/add.vue",meta:{title:"页面管理-新增",isShow:!1,role:["admin"]}},{path:"/page/edit/:id",name:"page-edit",component:"@/views/page/edit.vue",meta:{title:"页面管理-更新",isShow:!1,role:["admin"]}},{path:"/tag",name:"tag-index",component:"@/views/tag/index.vue",meta:{title:"标签管理",isShow:!0,role:["admin"]}},{path:"/tag/add",name:"tag-add",component:"@/views/tag/add.vue",meta:{title:"标签管理-新增",isShow:!1,role:["admin"]}},{path:"/tag/edit/:id",name:"tag-edit",component:"@/views/tag/edit.vue",meta:{title:"标签管理-更新",isShow:!1,role:["admin"]}},{path:"/frag",name:"frag-index",component:"@/views/frag/index.vue",meta:{title:"碎片管理",isShow:!0,role:["admin"]}},{path:"/frag/add",name:"frag-add",component:"@/views/frag/add.vue",meta:{title:"碎片管理-新增",isShow:!1,role:["admin"]}},{path:"/frag/edit/:id",name:"frag-edit",component:"@/views/frag/edit.vue",meta:{title:"碎片管理-更新",isShow:!1,role:["admin"]}}]},{path:"/extend",name:"extend",meta:{title:"功能管理",icon:"Operation",isShow:!0,role:["admin"]},children:[{path:"/model",name:"model-index",component:"@/views/model/index.vue",meta:{title:"模型管理",isShow:!0,role:["admin"]}},{path:"/model/add",name:"model-add",component:"@/views/model/add.vue",meta:{title:"模型管理-新增",isShow:!1,role:["admin"]}},{path:"/model/edit/:id",name:"model-edit",component:"@/views/model/edit.vue",meta:{title:"模型管理-更新",isShow:!1,role:["admin"]}},{path:"/field",name:"field-index",component:"@/views/field/index.vue",meta:{title:"字段管理",isShow:!1,role:["admin"]}},{path:"/field/add",name:"field-add",component:"@/views/field/add.vue",meta:{title:"字段管理-新增",isShow:!1,role:["admin"]}},{path:"/field/edit",name:"field-edit",component:"@/views/field/edit.vue",meta:{title:"字段管理-更新",isShow:!1,role:["admin"]}},{path:"/friendlink",name:"friendlink-index",component:"@/views/friendlink/index.vue",meta:{title:"友情链接",isShow:!0,role:["admin"]}},{path:"/friendlink/add",name:"friendlink-add",component:"@/views/friendlink/add.vue",meta:{title:"友情链接-新增",isShow:!1,role:["admin"]}},{path:"/friendlink/edit/:id",name:"friendlink-edit",component:"@/views/friendlink/edit.vue",meta:{title:"友情链接-更新",isShow:!1,role:["admin"]}},{path:"/ad",name:"ad-index",component:"@/views/ad/index.vue",meta:{title:"广告管理",isShow:!0,role:["admin"]}},{path:"/ad/add",name:"ad-add",component:"@/views/ad/add.vue",meta:{title:"广告管理-新增",isShow:!1,role:["admin"]}},{path:"/ad/edit/:id",name:"ad-edit",component:"@/views/ad/edit.vue",meta:{title:"广告管理-更新",isShow:!1,role:["admin"]}},{path:"/message",name:"message-index",component:"@/views/message/index.vue",meta:{title:"消息管理",isShow:!0,role:["admin"]}},{path:"/message/add",name:"message-add",component:"@/views/message/add.vue",meta:{title:"消息管理-新增",isShow:!1,role:["admin"]}},{path:"/message/edit/:id",name:"message-edit",component:"@/views/message/edit.vue",meta:{title:"消息管理-更新",isShow:!1,role:["admin"]}}]},{path:"/manage",name:"manage",meta:{title:"管理员",isShow:!0,icon:"CreditCard",role:["admin"]},redirect:"/admin",children:[{path:"/admin",name:"admin-index",component:"@/views/admin/index.vue",meta:{title:"管理员列表",isShow:!0,role:["admin"]}},{path:"/admin/add",name:"admin-add",component:"@/views/admin/add.vue",meta:{title:"管理员列表-新增",isShow:!1,role:["admin"]}},{path:"/admin/edit/:id",name:"admin-edit",component:"@/views/admin/edit.vue",meta:{title:"管理员列表-更新",isShow:!1,role:["admin"]}}]}],He=[{path:"/login",name:"login",component:()=>K((()=>t.import("./index-legacy12.js")),0,t.meta.url),meta:{title:"登录"}},{path:"/",name:"Layout",component:Y(Le,[["render",function(e,t,d,s,c,u){const v=ee,h=a("SideBar"),g=U,f=a("Expand"),w=a("Fold"),x=P,b=a("BreadCrumb"),j=a("NavBar"),_=a("router-view");return i(),l("div",Me,[r(g,{class:"sidebar",style:y({width:e.isCollapse?"65px":"200px"})},{default:n((()=>[r(v,{style:y({width:e.isCollapse?"65px":"200px"})},null,8,["style"]),r(h,{isCollapse:e.isCollapse},null,8,["isCollapse"])])),_:1},8,["style"]),p("div",Oe,[p("div",$e,[p("div",ze,[p("div",Te,[r(x,{class:"ico-collapse",onClick:e.switchCollapse},{default:n((()=>[1==e.isCollapse?(i(),o(f,{key:0})):(i(),o(w,{key:1}))])),_:1},8,["onClick"]),r(b)]),r(j)])]),p("div",Fe,[p("article",Ne,[r(_,null,{default:n((({Component:e,route:t})=>[r(k,{name:t.meta.transition},{default:n((()=>[(i(),o(m(e)))])),_:2},1032,["name"])])),_:1})])])])])}],["__scopeId","data-v-fdadfa17"]]),redirect:"/home",children:[]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>K((()=>t.import("./404-legacy.js")),0,t.meta.url),meta:{title:"404"}}],Ue=q({history:G(),linkActiveClass:"active",routes:He});Ue.beforeEach((async(e,t)=>{console.log("to--\x3e",e.path);const a=le();if(a.token){if("/login"===e.path)return{path:"/"};if(a.userInfo)return!0;{const t=await a.getUserInfo();return await a.getMenuList(),a.getAccessRoutes(t).forEach((e=>{Ue.addRoute("Layout",e)})),e.fullPath}}return"/login"===e.path||{path:"/login",query:{redirect:e.fullPath}}}));const Re={install:(e,t)=>{console.log("萨埵第一个插件"),e.config.globalProperties.$message=L;for(const[a,i]of Object.entries(Z))e.component(a,i);e.directive("permission",{mounted(e,t,a){const{userInfo:{role:i}}=le();i!==t.value&&e.parentNode.removeChild(e)}})}},Ve=j(J),qe=S();qe.use(C),Ve.use(qe),Ve.use(Ue),Ve.use(Re),Ve.mount("#app")}}}));
//# sourceMappingURL=index-legacy.js.map
