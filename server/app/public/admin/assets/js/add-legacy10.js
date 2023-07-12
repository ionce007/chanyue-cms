System.register(["./element-plus-legacy.js","./category-legacy.js","./page-legacy.js","./tool-legacy.js","./@jsdawn-legacy.js","./tinymce-legacy.js","./@vue-legacy.js","./index-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./js-cookie-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,s,o,u,d,n,m,c,r,i,p,g,y,V,h,f,_,j,b,v,U,w,x,C,k,S;return{setters:[e=>{a=e.D,t=e.o,s=e.F,o=e.G,u=e.q,d=e.p,n=e.u,m=e.y,c=e.t,r=e.f},e=>{i=e.f},e=>{p=e.c},e=>{g=e.a,y=e.t},e=>{V=e._},e=>{h=e.t},e=>{f=e.ae,_=e.o,j=e.c,b=e.a,v=e.U,U=e.W,w=e.F,x=e.a1,C=e.a2,k=e._},e=>{S=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10"},D={class:"mr-10 ml-10 mb-20"};e("default",S({name:"page-add",components:{Vue3Tinymce:V},data:()=>({setting:h,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,params:{cid:0,title:"",seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:0},paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},created(){this.query()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},async query(){try{let e=await i();if(200===e.code){let l=g(y(e.data)),a=g(e.data);this.cateList=a,this.category=[...l]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]&&(this.params.cid=e[e.length-1])},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},changeContent(e){this.params.content=e},async create(){try{200==(await p(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;console.log(this.params),this.create()}))}}},[["render",function(e,i,p,g,y,V){const h=s,S=a,I=o,N=u,A=d,q=f("vue3-tinymce"),E=n,O=m,T=c,$=r,z=t;return _(),j(w,null,[b("div",l,[v(S,{modelValue:e.activeName,"onUpdate:modelValue":i[0]||(i[0]=l=>e.activeName=l),onTabClick:V.handleClick},{default:U((()=>[v(h,{label:"基本信息",name:"first"}),v(h,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),b("div",D,[v(z,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:""},{default:U((()=>[x(b("div",null,[v(N,{label:"文章栏目"},{default:U((()=>[v(I,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":i[1]||(i[1]=l=>e.categorySelected=l),options:e.category,onChange:V.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1}),v(N,{label:"文章标题",prop:"title"},{default:U((()=>[v(A,{modelValue:e.params.title,"onUpdate:modelValue":i[2]||(i[2]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1}),v(N,{label:"文章内容"},{default:U((()=>[v(q,{modelValue:e.params.content,"onUpdate:modelValue":i[3]||(i[3]=l=>e.params.content=l),setting:e.setting,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])])),_:1}),v(N,{label:"内容功能"},{default:U((()=>[v(E,{modelValue:e.autoImg,"onUpdate:modelValue":i[5]||(i[5]=l=>e.autoImg=l)},{default:U((()=>[k(" 提取第 "),v(A,{modelValue:e.picNum,"onUpdate:modelValue":i[4]||(i[4]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),k("张图片作封面 ")])),_:1},8,["modelValue"]),v(E,{modelValue:e.autoDes,"onUpdate:modelValue":i[6]||(i[6]=l=>e.autoDes=l)},{default:U((()=>[k("提取文章描述")])),_:1},8,["modelValue"])])),_:1}),v(N,{label:"发布时间"},{default:U((()=>[v(O,{modelValue:e.params.createdAt,"onUpdate:modelValue":i[7]||(i[7]=l=>e.params.createdAt=l),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1}),v(N,{label:"是否显示"},{default:U((()=>[v(T,{modelValue:e.params.status,"onUpdate:modelValue":i[8]||(i[8]=l=>e.params.status=l),label:"0"},{default:U((()=>[k("发布")])),_:1},8,["modelValue"]),v(T,{modelValue:e.params.status,"onUpdate:modelValue":i[9]||(i[9]=l=>e.params.status=l),label:"1"},{default:U((()=>[k("不发布")])),_:1},8,["modelValue"])])),_:1}),v(N,{label:"浏览数"},{default:U((()=>[v(A,{modelValue:e.params.pv,"onUpdate:modelValue":i[10]||(i[10]=l=>e.params.pv=l)},null,8,["modelValue"])])),_:1})],512),[[C,0==e.activeIndex]]),x(b("div",null,[v(N,{label:"SEO标题"},{default:U((()=>[v(A,{modelValue:e.params.seo_title,"onUpdate:modelValue":i[11]||(i[11]=l=>e.params.seo_title=l)},null,8,["modelValue"])])),_:1}),v(N,{label:"SEO关键词"},{default:U((()=>[v(A,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":i[12]||(i[12]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])])),_:1}),v(N,{label:"SEO描述"},{default:U((()=>[v(A,{modelValue:e.params.seo_description,"onUpdate:modelValue":i[13]||(i[13]=l=>e.params.seo_description=l)},null,8,["modelValue"])])),_:1}),v(N,{label:"来源"},{default:U((()=>[v(A,{modelValue:e.params.source,"onUpdate:modelValue":i[14]||(i[14]=l=>e.params.source=l)},null,8,["modelValue"])])),_:1}),v(N,{label:"作者"},{default:U((()=>[v(A,{modelValue:e.params.author,"onUpdate:modelValue":i[15]||(i[15]=l=>e.params.author=l)},null,8,["modelValue"])])),_:1})],512),[[C,1==e.activeIndex]]),v(N,null,{default:U((()=>[v($,{type:"primary",onClick:i[16]||(i[16]=e=>V.submit("params"))},{default:U((()=>[k("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])],64)}]]))}}}));
//# sourceMappingURL=add-legacy10.js.map
