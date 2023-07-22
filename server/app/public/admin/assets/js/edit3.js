import{D as e,o as a,I as l,F as t,G as s,q as o,p as d,u as i,v as m,H as r,w as u,a as n,x as p,y as c,t as f,f as h}from"./element-plus.js";import{f as V}from"./category.js";import{f as g,d as _,u as b}from"./article.js";import{_ as y}from"./@jsdawn.js";import{t as U}from"./tinymce.js";import{s as j}from"./tag.js";import{B as w}from"./@element-plus.js";import{c as v,a as k,t as x,b as C,f as P}from"./tool.js";import{ae as S,o as I,c as A,a as N,T as D,V as T,a0 as F,W as $,F as q,Z as z,a1 as E,a9 as L,t as O}from"./@vue.js";import{_ as R}from"./index.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./js-cookie.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";/* empty css        */const B={name:"article-edit",components:{Vue3Tinymce:y,Plus:w},data:()=>({setting:U,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:0,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:""}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},async searchTag(e){try{let a=await j(this.cur,e,100);if(200===a.code){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await V();if(200===e.code){let a=e.data,l=v(this.params.cid,a);this.categorySelected=l,this.findField(this.params.cid);let t=k(x(a));this.cateList=k(a),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let a=await g(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async detail(){try{let e=await _(this.params.id);if(200===e.code){let a=e.data;a.attr=a.attr?a.attr.split(","):[],a.sub_cid=a.sub_cid?a.sub_cid.split(",").map((e=>Number(e))):[],a.tag_id=a.tag_id?a.tag_id.split(",").map((e=>Number(e))):[],a.status=a.status.toString(),a.updatedAt=new Date(a.createdAt),this.params=a,this.fieldParams=a.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){200===e.code&&(this.params.img=e.data.path)},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=C(e.content)[0]),e.description||(e.description=P(e.content).substr(0,255)),(await b({...e,field:this.fieldParams})).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},G={class:"mr-10 ml-10"},H={class:"mr-10 ml-10 mb-20"},M={class:"w-640"},W=N("p",{class:"tips"},"(可选发布到其它栏目)",-1);const Z=R(B,[["render",function(V,g,_,b,y,U){const j=t,w=e,v=s,k=o,x=d,C=i,P=m,R=r,B=u,Z=S("Plus"),J=n,K=p,Q=S("vue3-tinymce"),X=c,Y=f,ee=h,ae=a,le=l;return I(),A(q,null,[N("div",G,[D(w,{modelValue:V.activeName,"onUpdate:modelValue":g[0]||(g[0]=e=>V.activeName=e),onTabClick:U.handleClick},{default:T((()=>[D(j,{label:"基本信息",name:"first"}),D(j,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),N("div",H,[F((I(),$(ae,{ref:"params",model:V.params,rules:V.paramsRules,"label-width":"100px"},{default:T((()=>[F(N("div",null,[D(k,{label:"文章栏目"},{default:T((()=>[D(v,{props:V.categoryProps,"show-all-levels":!1,modelValue:V.categorySelected,"onUpdate:modelValue":g[1]||(g[1]=e=>V.categorySelected=e),options:V.category,onChange:U.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1}),D(k,{label:"文章标题",prop:"title"},{default:T((()=>[D(x,{modelValue:V.params.title,"onUpdate:modelValue":g[2]||(g[2]=e=>V.params.title=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"内容属性"},{default:T((()=>[D(P,{modelValue:V.params.attr,"onUpdate:modelValue":g[3]||(g[3]=e=>V.params.attr=e),onChange:U.handleAttr},{default:T((()=>[D(C,{label:"1"},{default:T((()=>[z("头条")])),_:1}),D(C,{label:"2"},{default:T((()=>[z("推荐")])),_:1}),D(C,{label:"3"},{default:T((()=>[z("轮播")])),_:1}),D(C,{label:"4"},{default:T((()=>[z("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),D(k,{label:"tag标签"},{default:T((()=>[D(R,{modelValue:V.params.tag_id,"onUpdate:modelValue":g[4]||(g[4]=e=>V.params.tag_id=e),options:V.taglist,placeholder:"Please select",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":U.searchTag},null,8,["modelValue","options","remote-method"])])),_:1}),D(k,{label:"内容摘要"},{default:T((()=>[D(x,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:V.params.description,"onUpdate:modelValue":g[5]||(g[5]=e=>V.params.description=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"缩略图"},{default:T((()=>[D(K,{class:"avatar-uploader",action:"/api/upload","on-success":U.upload,"show-file-list":!1,"before-upload":U.beforeUpload},{default:T((()=>[V.params.img?(I(),$(B,{key:0,style:{width:"100%"},src:V.params.img},null,8,["src"])):(I(),$(J,{key:1,class:"avatar-uploader-icon"},{default:T((()=>[D(Z)])),_:1}))])),_:1},8,["on-success","before-upload"]),D(x,{modelValue:V.params.img,"onUpdate:modelValue":g[6]||(g[6]=e=>V.params.img=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"文章内容"},{default:T((()=>[D(Q,{modelValue:V.params.content,"onUpdate:modelValue":g[7]||(g[7]=e=>V.params.content=e),setting:V.setting,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])])),_:1}),D(k,{label:"内容功能"},{default:T((()=>[D(C,{modelValue:V.autoImg,"onUpdate:modelValue":g[9]||(g[9]=e=>V.autoImg=e)},{default:T((()=>[z(" 提取第 "),D(x,{modelValue:V.picNum,"onUpdate:modelValue":g[8]||(g[8]=e=>V.picNum=e),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),z("张图片作封面 ")])),_:1},8,["modelValue"]),D(C,{modelValue:V.autoDes,"onUpdate:modelValue":g[10]||(g[10]=e=>V.autoDes=e)},{default:T((()=>[z("提取文章描述")])),_:1},8,["modelValue"])])),_:1}),D(k,{label:"发布时间"},{default:T((()=>[D(X,{modelValue:V.params.updatedAt,"onUpdate:modelValue":g[11]||(g[11]=e=>V.params.updatedAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),D(k,{label:"是否显示"},{default:T((()=>[D(Y,{modelValue:V.params.status,"onUpdate:modelValue":g[12]||(g[12]=e=>V.params.status=e),label:"0"},{default:T((()=>[z("发布")])),_:1},8,["modelValue"]),D(Y,{modelValue:V.params.status,"onUpdate:modelValue":g[13]||(g[13]=e=>V.params.status=e),label:"1"},{default:T((()=>[z("不发布")])),_:1},8,["modelValue"])])),_:1}),D(k,{label:"浏览数"},{default:T((()=>[D(x,{modelValue:V.params.pv,"onUpdate:modelValue":g[14]||(g[14]=e=>V.params.pv=e)},null,8,["modelValue"])])),_:1})],512),[[E,0==V.activeIndex]]),F(N("div",null,[D(k,{label:"短标题",prop:"name"},{default:T((()=>[D(x,{modelValue:V.params.short_title,"onUpdate:modelValue":g[15]||(g[15]=e=>V.params.short_title=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"其它栏目"},{default:T((()=>[N("div",M,[D(P,{modelValue:V.params.sub_cid,"onUpdate:modelValue":g[16]||(g[16]=e=>V.params.sub_cid=e),onChange:U.handleSubCid},{default:T((()=>[(I(!0),A(q,null,L(V.cateList,((e,a)=>(I(),$(C,{key:a,label:e.id},{default:T((()=>[z(O(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"]),W])])),_:1}),D(k,{label:"SEO标题"},{default:T((()=>[D(x,{modelValue:V.params.seo_title,"onUpdate:modelValue":g[17]||(g[17]=e=>V.params.seo_title=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"SEO关键词"},{default:T((()=>[D(x,{modelValue:V.params.seo_keywords,"onUpdate:modelValue":g[18]||(g[18]=e=>V.params.seo_keywords=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"SEO描述"},{default:T((()=>[D(x,{modelValue:V.params.seo_description,"onUpdate:modelValue":g[19]||(g[19]=e=>V.params.seo_description=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"来源"},{default:T((()=>[D(x,{modelValue:V.params.source,"onUpdate:modelValue":g[20]||(g[20]=e=>V.params.source=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"作者"},{default:T((()=>[D(x,{modelValue:V.params.author,"onUpdate:modelValue":g[21]||(g[21]=e=>V.params.author=e)},null,8,["modelValue"])])),_:1}),D(k,{label:"外链跳转"},{default:T((()=>[D(x,{modelValue:V.params.link,"onUpdate:modelValue":g[22]||(g[22]=e=>V.params.link=e),max:"120"},null,8,["modelValue"])])),_:1}),(I(!0),A(q,null,L(V.field,((e,a)=>(I(),$(k,{label:e.field_cname,key:a},{default:T((()=>["1"===e.field_type?(I(),$(x,{key:0,modelValue:V.fieldParams[e.field_ename],"onUpdate:modelValue":a=>V.fieldParams[e.field_ename]=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(I(),$(x,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:V.fieldParams[e.field_ename],"onUpdate:modelValue":a=>V.fieldParams[e.field_ename]=a},null,8,["modelValue","onUpdate:modelValue"])):(I(),$(x,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:V.fieldParams[e.field_ename],"onUpdate:modelValue":a=>V.fieldParams[e.field_ename]=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])))),128))],512),[[E,1==V.activeIndex]]),D(k,null,{default:T((()=>[D(ee,{type:"primary",onClick:g[23]||(g[23]=e=>U.submit("params"))},{default:T((()=>[z("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[le,V.loading]])])],64)}]]);export{Z as default};
//# sourceMappingURL=edit3.js.map
