System.register(["./element-plus-legacy.js","./frag-legacy.js","./@jsdawn-legacy.js","./tinymce-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,s,t,n,r,u,m,c,d,i,o,p,g,y,j,h,f;return{setters:[e=>{l=e.o,s=e.p,t=e.q,n=e.y,r=e.f},e=>{u=e.d,m=e.u},e=>{c=e._},e=>{d=e.t},e=>{i=e._},e=>{o=e.ae,p=e.o,g=e.c,y=e.U,j=e.W,h=e.a,f=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"mr-10 ml-10 mb-20"};e("default",i({name:"frag-edit",components:{Vue3Tinymce:c},data:()=>({setting:d,params:{id:0,name:0,mark:"",createdAt:new Date,content:"禅悦"},dialogVisible:!1,disabled:!1,paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{setContent(e){this.params.content=e},async detail(){try{let e=await u(this.params.id);200===e.code&&(this.params=e.data,this.params.createdAt=new Date(this.params.createdAt))}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{(await m(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,u,m,c,d,i){const b=s,V=t,_=o("vue3-tinymce"),v=n,w=r,x=l;return p(),g("div",a,[y(x,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:""},{default:j((()=>[h("div",null,[y(V,{label:"碎片名称",prop:"name"},{default:j((()=>[y(b,{modelValue:e.params.name,"onUpdate:modelValue":u[0]||(u[0]=a=>e.params.name=a)},null,8,["modelValue"])])),_:1}),y(V,{label:"碎片标识"},{default:j((()=>[y(b,{modelValue:e.params.mark,"onUpdate:modelValue":u[1]||(u[1]=a=>e.params.mark=a),disabled:""},null,8,["modelValue"])])),_:1}),y(V,{label:"文章内容"},{default:j((()=>[y(_,{modelValue:e.params.content,"onUpdate:modelValue":u[2]||(u[2]=a=>e.params.content=a),setting:e.setting,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])])),_:1}),y(V,{label:"发布时间"},{default:j((()=>[y(v,{modelValue:e.params.createdAt,"onUpdate:modelValue":u[3]||(u[3]=a=>e.params.createdAt=a),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})]),y(V,null,{default:j((()=>[y(w,{type:"primary",onClick:u[4]||(u[4]=e=>i.submit("params"))},{default:j((()=>[f("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
//# sourceMappingURL=edit-legacy6.js.map
