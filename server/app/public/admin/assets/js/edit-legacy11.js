System.register(["./element-plus-legacy.js","./tag-legacy.js","./pinyin-pro-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var s,l,t,n,u,r,c,i,m,o,p,d,g,y,h;return{setters:[e=>{s=e.o,l=e.p,t=e.q,n=e.f},e=>{u=e.d,r=e.u,c=e.h},e=>{i=e.p},e=>{m=e._},e=>{o=e.o,p=e.c,d=e.T,g=e.V,y=e.a,h=e.Z},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"mr-10 ml-10 mb-20"};e("default",m({name:"tag-edit",data:()=>({params:{id:0,name:0,path:""},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:8,message:"名称长度在 2 到 8 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},watch:{"params.name":function(e,a){this.params.path=i(e,{toneType:"none"}).replace(/\s+/g,"")}},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{async detail(){try{let e=await u(this.params.id);200===e.code&&(this.params=e.data)}catch(e){console.error(e)}},async update(){try{(await r(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},async has(){try{let e=await c(this.params.path);e.code&&(e.data?this.$message({message:"标签已存在，修改无效",type:"success"}):this.update())}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.has()}))}}},[["render",function(e,u,r,c,i,m){const j=l,f=t,b=n,v=s;return o(),p("div",a,[d(v,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:""},{default:g((()=>[y("div",null,[d(f,{label:"标签名称",prop:"name"},{default:g((()=>[d(j,{modelValue:e.params.name,"onUpdate:modelValue":u[0]||(u[0]=a=>e.params.name=a)},null,8,["modelValue"])])),_:1}),d(f,{label:"标签标识"},{default:g((()=>[d(j,{modelValue:e.params.path,"onUpdate:modelValue":u[1]||(u[1]=a=>e.params.path=a),disabled:""},null,8,["modelValue"])])),_:1})]),d(f,null,{default:g((()=>[d(b,{type:"primary",onClick:u[2]||(u[2]=e=>m.submit("params"))},{default:g((()=>[h("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
//# sourceMappingURL=edit-legacy11.js.map
