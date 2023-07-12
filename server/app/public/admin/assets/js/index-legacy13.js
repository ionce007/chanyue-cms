System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./message-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var t,a,n,s,c,i,o,u,r,d,g,p,h,y,m,f,j,C,b,w;return{setters:[e=>{t=e.s,a=e.A,n=e.B,s=e.f,c=e.C},e=>{i=e.F,o=e.D,u=e.v,r=e.G},e=>{d=e.l,g=e.a},e=>{p=e._},e=>{h=e.ae,y=e.o,m=e.c,f=e.U,j=e.W,C=e.F,b=e._,w=e.t},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",p({name:"message-index",setup:()=>({Edit:i,Delete:o,View:u,Search:r}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.list()},methods:{async list(){try{let e=await d(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let l=e.id;this.$router.push({name:"message-edit",params:{id:l}})},async handleDel(e){let l=e.id;try{200===(await g(l)).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.list())}catch(t){console.log(t)}}}},[["render",function(e,l,i,o,u,r){const d=h("router-link"),g=t,p=n,S=s,k=a,x=c;return y(),m(C,null,[f(g,{type:"flex",justify:"end"},{default:j((()=>[f(d,{class:"c-fff add-btn",to:"/message/add"},{default:j((()=>[b("新增")])),_:1})])),_:1}),f(k,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:r.handleSelectionChange},{default:j((()=>[f(p,{type:"selection"}),f(p,{prop:"id",label:"编号"}),f(p,{prop:"name",label:"标题"}),f(p,{prop:"tel",label:"手机号"}),f(p,{prop:"wx",label:"微信"}),f(p,{prop:"createdAt",label:"发布时间"},{default:j((e=>[b(w(e.row.createdAt),1)])),_:1}),f(p,{fixed:"right",label:"操作"},{default:j((e=>[f(S,{icon:o.Edit,circle:"",onClick:l=>r.toEdit(e.row)},null,8,["icon","onClick"]),f(S,{icon:o.Delete,circle:"",onClick:l=>r.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),f(g,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:j((()=>[f(x,{background:"",layout:"prev, pager, next",onCurrentChange:r.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})],64)}]]))}}}));
//# sourceMappingURL=index-legacy13.js.map
