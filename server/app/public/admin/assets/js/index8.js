import{o as e,A as a,s as t,p as l,q as o,f as s,B as r,C as i}from"./element-plus.js";import{F as n,D as c,v as d,G as p}from"./@element-plus.js";import{s as u,a as m}from"./frag.js";import{_ as h}from"./index.js";import{ae as f,o as g,c as j,a as C,U as y,W as k,F as w,_ as b,t as _}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";/* empty css        */const S={class:"search row justify-between align-c pd-20 mb-20"};const x=h({name:"frag-index",setup:()=>({Edit:n,Delete:c,View:d,Search:p}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{async search(){try{let e=await u(this.cur,this.keywords);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"frag-edit",params:{id:a}})},async handleDel(e){let a=e.id;try{200===(await m(a)).code&&(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search())}catch(t){console.log(t)}}}},[["render",function(n,c,d,p,u,m){const h=l,x=o,v=s,D=e,E=f("router-link"),z=r,V=a,$=i,A=t;return g(),j(w,null,[C("div",S,[y(D,{inline:!0,model:n.params},{default:k((()=>[y(x,{label:"标题",prop:"keywords"},{default:k((()=>[y(h,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":p.Search,clearable:"",onClear:m.search,modelValue:n.keywords,"onUpdate:modelValue":c[0]||(c[0]=e=>n.keywords=e)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),y(x,null,{default:k((()=>[y(v,{type:"primary",onClick:m.search,round:""},{default:k((()=>[b("搜索")])),_:1},8,["onClick"]),y(v,{onClick:n.clearSearch,round:""},{default:k((()=>[b("清空")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),y(E,{to:"/frag/add"},{default:k((()=>[y(v,{type:"primary",round:""},{default:k((()=>[b("新增")])),_:1})])),_:1})]),y(V,{ref:"multipleTable",data:n.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:m.handleSelectionChange},{default:k((()=>[y(z,{type:"selection"}),y(z,{prop:"id",label:"编号"}),y(z,{prop:"name",label:"名称"}),y(z,{prop:"mark",label:"标识"}),y(z,{prop:"createdAt",label:"发布时间"},{default:k((e=>[b(_(e.row.createdAt),1)])),_:1}),y(z,{fixed:"right",label:"操作"},{default:k((e=>[y(v,{icon:p.Edit,circle:"",onClick:a=>m.toEdit(e.row)},null,8,["icon","onClick"]),y(v,{icon:p.Delete,circle:"",onClick:a=>m.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),y(A,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:k((()=>[y($,{background:"",layout:"prev, pager, next",onCurrentChange:m.handleCurrentChange,"pager-size":10,total:n.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})],64)}],["__scopeId","data-v-e7c49dd8"]]);export{x as default};
//# sourceMappingURL=index8.js.map
