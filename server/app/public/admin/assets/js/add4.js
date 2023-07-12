import{D as a,o as e,F as l,G as t,q as s,p as o,t as m,K as d,f as r}from"./element-plus.js";import{f as i,c as p}from"./category.js";import{a as u,t as n}from"./tool.js";import{l as c}from"./model.js";import{p as h}from"./pinyin-pro.js";import{o as V,c as f,a as g,U as y,W as _,F as b,a1 as j,a2 as U,_ as v,a9 as k,X as x,t as w}from"./@vue.js";import{_ as C}from"./index.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./js-cookie.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";/* empty css        */const P={class:"mr-10 ml-10"},q={class:"mr-10 ml-10 mb-20"};const L=C({name:"category-add",data:()=>({categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0"},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:10,message:"名称长度在 2 到 10 个字符之间",trigger:"blur"}]}}),computed:{allPath(){return""==this.params.path?this.params.path+"/"+this.params.pinyin:this.params.path+this.params.pinyin}},created(){this.query(),this.modelList()},watch:{"params.name":function(a,e){this.params.pinyin=h(a,{toneType:"none"}).replace(/\s+/g,"")}},methods:{handleClick(a){this.activeIndex=a.index},async query(){try{let a=await i();if(200===a.code){let e=u(n(a.data));this.cate=a.data,this.category=[...e]}}catch(a){console.log(a)}},handleChange(a){let e=[],l=Object.values(a);console.log(l),l.forEach((a=>{this.cate.forEach((l=>{l.id==a&&e.push("/"+l.pinyin)}))})),this.params.path=e.join("")+"/",-1!=a[0]&&(this.params.pid=a[a.length-1])},async modelList(){try{let a=await c(this.cur);200===a.code&&(this.modList=a.data.list)}catch(a){console.log(a)}},async categoryAdd(){try{(await p(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(a){console.log(a)}},submit(a){this.params.path=this.allPath,this.$refs[a].validate((a=>{if(!a)return console.log("error submit!!"),!1;this.categoryAdd()}))}}},[["render",function(i,p,u,n,c,h){const C=l,L=a,S=t,I=s,E=o,N=m,T=d,$=r,z=e;return V(),f(b,null,[g("div",P,[y(L,{modelValue:i.activeName,"onUpdate:modelValue":p[0]||(p[0]=a=>i.activeName=a),onTabClick:h.handleClick},{default:_((()=>[y(C,{label:"基本信息",name:"first"}),y(C,{label:"SEO设置",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),g("div",q,[y(z,{ref:"params",model:i.params,"label-width":"84px"},{default:_((()=>[j(g("div",null,[y(I,{label:"上级栏目"},{default:_((()=>[y(S,{props:i.categoryProps,"show-all-levels":!1,modelValue:i.categorySelected,"onUpdate:modelValue":p[1]||(p[1]=a=>i.categorySelected=a),options:i.category,onChange:h.handleChange},null,8,["props","modelValue","options","onChange"]),v(" 不选择为顶级栏目 ")])),_:1}),y(I,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:10,message:"栏目不能超过10个字",trigger:"blur"}]},{default:_((()=>[y(E,{modelValue:i.params.name,"onUpdate:modelValue":p[2]||(p[2]=a=>i.params.name=a)},null,8,["modelValue"])])),_:1}),y(I,{label:"栏目标识"},{default:_((()=>[y(E,{modelValue:i.params.pinyin,"onUpdate:modelValue":p[3]||(p[3]=a=>i.params.pinyin=a),disabled:""},null,8,["modelValue"])])),_:1}),y(I,{label:"栏目路径"},{default:_((()=>[y(E,{modelValue:h.allPath,"onUpdate:modelValue":p[4]||(p[4]=a=>h.allPath=a),disabled:""},null,8,["modelValue"])])),_:1}),y(I,{label:"栏目类型"},{default:_((()=>[y(N,{modelValue:i.params.type,"onUpdate:modelValue":p[5]||(p[5]=a=>i.params.type=a),label:"0"},{default:_((()=>[v("栏目")])),_:1},8,["modelValue"]),y(N,{modelValue:i.params.type,"onUpdate:modelValue":p[6]||(p[6]=a=>i.params.type=a),label:"1"},{default:_((()=>[v("单页")])),_:1},8,["modelValue"])])),_:1}),y(I,{label:"扩展模型"},{default:_((()=>[y(T,{modelValue:i.params.mid,"onUpdate:modelValue":p[7]||(p[7]=a=>i.params.mid=a)},{default:_((()=>[y(N,{label:"0"},{default:_((()=>[v("基本模型")])),_:1}),(V(!0),f(b,null,k(i.modList,((a,e)=>(V(),x(N,{key:e,label:a.id},{default:_((()=>[v(w(a.model_name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(I,{label:"是否显示"},{default:_((()=>[y(N,{modelValue:i.params.status,"onUpdate:modelValue":p[8]||(p[8]=a=>i.params.status=a),label:"0"},{default:_((()=>[v("显示")])),_:1},8,["modelValue"]),y(N,{modelValue:i.params.status,"onUpdate:modelValue":p[9]||(p[9]=a=>i.params.status=a),label:"1"},{default:_((()=>[v("隐藏")])),_:1},8,["modelValue"])])),_:1}),y(I,{label:"栏目排序"},{default:_((()=>[y(E,{modelValue:i.params.sort,"onUpdate:modelValue":p[10]||(p[10]=a=>i.params.sort=a)},null,8,["modelValue"])])),_:1})],512),[[U,0==i.activeIndex]]),j(g("div",null,[y(I,{label:"栏目描述"},{default:_((()=>[y(E,{modelValue:i.params.description,"onUpdate:modelValue":p[11]||(p[11]=a=>i.params.description=a)},null,8,["modelValue"])])),_:1}),y(I,{label:"栏目链接"},{default:_((()=>[y(E,{modelValue:i.params.url,"onUpdate:modelValue":p[12]||(p[12]=a=>i.params.url=a)},null,8,["modelValue"])])),_:1}),y(I,{label:"打开方式"},{default:_((()=>[y(N,{modelValue:i.params.target,"onUpdate:modelValue":p[13]||(p[13]=a=>i.params.target=a),label:"0"},{default:_((()=>[v("当前页面")])),_:1},8,["modelValue"]),y(N,{modelValue:i.params.target,"onUpdate:modelValue":p[14]||(p[14]=a=>i.params.target=a),label:"1"},{default:_((()=>[v("新页面")])),_:1},8,["modelValue"])])),_:1}),y(I,{label:"seo标题"},{default:_((()=>[y(E,{modelValue:i.params.seo_title,"onUpdate:modelValue":p[15]||(p[15]=a=>i.params.seo_title=a)},null,8,["modelValue"])])),_:1}),y(I,{label:"seo关键词"},{default:_((()=>[y(E,{modelValue:i.params.seo_keywords,"onUpdate:modelValue":p[16]||(p[16]=a=>i.params.seo_keywords=a)},null,8,["modelValue"])])),_:1}),y(I,{label:"seo描述"},{default:_((()=>[y(E,{modelValue:i.params.seo_description,"onUpdate:modelValue":p[17]||(p[17]=a=>i.params.seo_description=a)},null,8,["modelValue"])])),_:1})],512),[[U,1==i.activeIndex]]),y(I,null,{default:_((()=>[y($,{type:"primary",onClick:p[18]||(p[18]=a=>h.submit("params"))},{default:_((()=>[v("保存")])),_:1})])),_:1})])),_:1},8,["model"])])],64)}]]);export{L as default};
//# sourceMappingURL=add4.js.map
