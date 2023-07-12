System.register(["./element-plus-legacy.js","./category-legacy.js","./article-legacy.js","./@jsdawn-legacy.js","./tinymce-legacy.js","./tag-legacy.js","./@element-plus-legacy.js","./tool-legacy.js","./@vue-legacy.js","./index-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./js-cookie-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,t,d,s,o,u,i,m,r,n,c,p,g,f,h,V,y,_,b,U,j,w,v,k,x,C,S,P,I,A,N,D,T,q,F,$,z,E,L,O,B,G,H,J;return{setters:[e=>{l=e.D,t=e.o,d=e.J,s=e.F,o=e.G,u=e.q,i=e.p,m=e.u,r=e.v,n=e.H,c=e.w,p=e.a,g=e.x,f=e.I,h=e.y,V=e.t,y=e.f},e=>{_=e.f},e=>{b=e.f,U=e.d,j=e.u},e=>{w=e._},e=>{v=e.t},e=>{k=e.s},e=>{x=e.B},e=>{C=e.c,S=e.a,P=e.t,I=e.b,A=e.f},e=>{N=e.ae,D=e.o,T=e.c,q=e.a,F=e.U,$=e.W,z=e.a1,E=e.X,L=e.F,O=e._,B=e.a2,G=e.a9,H=e.t},e=>{J=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={name:"article-edit",components:{Vue3Tinymce:w,Plus:x},data:()=>({setting:v,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:0,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:""}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},async searchTag(e){try{let a=await k(this.cur,e,100);if(200===a.code){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await _();if(200===e.code){let a=e.data,l=C(this.params.cid,a);this.categorySelected=l,this.findField(this.params.cid);let t=S(P(a));this.cateList=S(a),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let a=await b(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async detail(){try{let e=await U(this.params.id);if(200===e.code){let a=e.data;a.attr=a.attr?a.attr.split(","):[],a.sub_cid=a.sub_cid?a.sub_cid.split(",").map((e=>Number(e))):[],a.tag_id=a.tag_id?a.tag_id.split(",").map((e=>Number(e))):[],a.status=a.status.toString(),a.updatedAt=new Date(a.createdAt),this.params=a,this.fieldParams=a.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){200===e.code&&(this.params.img=e.data.path)},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=I(e.content)[0]),e.description||(e.description=A(e.content).substr(0,255)),(await j({...e,field:this.fieldParams})).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},M={class:"mr-10 ml-10"},R={class:"mr-10 ml-10 mb-20"},W={class:"w-640"},X=q("p",{class:"tips"},"(可选发布到其它栏目)",-1);e("default",J(a,[["render",function(e,a,_,b,U,j){const w=s,v=l,k=o,x=u,C=i,S=m,P=r,I=n,A=c,J=N("Plus"),K=p,Q=g,Y=f,Z=N("vue3-tinymce"),ee=h,ae=V,le=y,te=t,de=d;return D(),T(L,null,[q("div",M,[F(v,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.activeName=a),onTabClick:j.handleClick},{default:$((()=>[F(w,{label:"基本信息",name:"first"}),F(w,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),q("div",R,[z((D(),E(te,{ref:"params",model:e.params,"label-width":"100px"},{default:$((()=>[z(q("div",null,[F(x,{label:"文章栏目"},{default:$((()=>[F(k,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[1]||(a[1]=a=>e.categorySelected=a),options:e.category,onChange:j.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1}),F(x,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:$((()=>[F(C,{modelValue:e.params.title,"onUpdate:modelValue":a[2]||(a[2]=a=>e.params.title=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"内容属性"},{default:$((()=>[F(P,{modelValue:e.params.attr,"onUpdate:modelValue":a[3]||(a[3]=a=>e.params.attr=a),onChange:j.handleAttr},{default:$((()=>[F(S,{label:"1"},{default:$((()=>[O("头条")])),_:1}),F(S,{label:"2"},{default:$((()=>[O("推荐")])),_:1}),F(S,{label:"3"},{default:$((()=>[O("轮播")])),_:1}),F(S,{label:"4"},{default:$((()=>[O("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),F(x,{label:"tag标签"},{default:$((()=>[F(I,{modelValue:e.params.tag_id,"onUpdate:modelValue":a[4]||(a[4]=a=>e.params.tag_id=a),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":j.searchTag},null,8,["modelValue","options","remote-method"])])),_:1}),F(x,{label:"内容摘要"},{default:$((()=>[F(C,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":a[5]||(a[5]=a=>e.params.description=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"缩略图"},{default:$((()=>[F(Y,{wrap:""},{default:$((()=>[F(Q,{class:"avatar-uploader",action:"/api/upload","on-success":j.upload,"show-file-list":!1,"before-upload":j.beforeUpload},{default:$((()=>[e.params.img?(D(),E(A,{key:0,style:{width:"100%"},src:e.params.img},null,8,["src"])):(D(),E(K,{key:1,class:"avatar-uploader-icon"},{default:$((()=>[F(J)])),_:1}))])),_:1},8,["on-success","before-upload"])])),_:1}),F(Y,{wrap:""},{default:$((()=>[O(" 地址 "),F(C,{modelValue:e.params.img,"onUpdate:modelValue":a[6]||(a[6]=a=>e.params.img=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(x,{label:"文章内容"},{default:$((()=>[F(Z,{modelValue:e.params.content,"onUpdate:modelValue":a[7]||(a[7]=a=>e.params.content=a),setting:e.setting,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])])),_:1}),F(x,{label:"内容功能"},{default:$((()=>[F(S,{modelValue:e.autoImg,"onUpdate:modelValue":a[9]||(a[9]=a=>e.autoImg=a)},{default:$((()=>[O(" 提取第 "),F(C,{modelValue:e.picNum,"onUpdate:modelValue":a[8]||(a[8]=a=>e.picNum=a),class:"mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),O("张图片作封面 ")])),_:1},8,["modelValue"])])),_:1}),F(x,{label:"提取文章描述"},{default:$((()=>[F(S,{modelValue:e.autoDes,"onUpdate:modelValue":a[10]||(a[10]=a=>e.autoDes=a)},{default:$((()=>[O("提取文章描述")])),_:1},8,["modelValue"])])),_:1}),F(x,{label:"发布时间"},{default:$((()=>[F(ee,{modelValue:e.params.updatedAt,"onUpdate:modelValue":a[11]||(a[11]=a=>e.params.updatedAt=a),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),F(x,{label:"是否显示"},{default:$((()=>[F(ae,{modelValue:e.params.status,"onUpdate:modelValue":a[12]||(a[12]=a=>e.params.status=a),label:"0"},{default:$((()=>[O("发布")])),_:1},8,["modelValue"]),F(ae,{modelValue:e.params.status,"onUpdate:modelValue":a[13]||(a[13]=a=>e.params.status=a),label:"1"},{default:$((()=>[O("不发布")])),_:1},8,["modelValue"])])),_:1}),F(x,{label:"浏览数"},{default:$((()=>[F(C,{modelValue:e.params.pv,"onUpdate:modelValue":a[14]||(a[14]=a=>e.params.pv=a)},null,8,["modelValue"])])),_:1})],512),[[B,0==e.activeIndex]]),z(q("div",null,[F(x,{label:"短标题",prop:"name"},{default:$((()=>[F(C,{modelValue:e.params.short_title,"onUpdate:modelValue":a[15]||(a[15]=a=>e.params.short_title=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"其它栏目"},{default:$((()=>[q("div",W,[F(P,{modelValue:e.params.sub_cid,"onUpdate:modelValue":a[16]||(a[16]=a=>e.params.sub_cid=a),onChange:j.handleSubCid},{default:$((()=>[(D(!0),T(L,null,G(e.cateList,((e,a)=>(D(),E(S,{key:a,label:e.id},{default:$((()=>[O(H(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"]),X])])),_:1}),F(x,{label:"SEO标题"},{default:$((()=>[F(C,{modelValue:e.params.seo_title,"onUpdate:modelValue":a[17]||(a[17]=a=>e.params.seo_title=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"SEO关键词"},{default:$((()=>[F(C,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":a[18]||(a[18]=a=>e.params.seo_keywords=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"SEO描述"},{default:$((()=>[F(C,{modelValue:e.params.seo_description,"onUpdate:modelValue":a[19]||(a[19]=a=>e.params.seo_description=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"来源"},{default:$((()=>[F(C,{modelValue:e.params.source,"onUpdate:modelValue":a[20]||(a[20]=a=>e.params.source=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"作者"},{default:$((()=>[F(C,{modelValue:e.params.author,"onUpdate:modelValue":a[21]||(a[21]=a=>e.params.author=a)},null,8,["modelValue"])])),_:1}),F(x,{label:"外链跳转"},{default:$((()=>[F(C,{modelValue:e.params.link,"onUpdate:modelValue":a[22]||(a[22]=a=>e.params.link=a),max:"120"},null,8,["modelValue"])])),_:1}),(D(!0),T(L,null,G(e.field,((a,l)=>(D(),E(x,{label:a.field_cname,key:l},{default:$((()=>["1"===a.field_type?(D(),E(C,{key:0,modelValue:e.fieldParams[a.field_ename],"onUpdate:modelValue":l=>e.fieldParams[a.field_ename]=l,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===a.field_type?(D(),E(C,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.fieldParams[a.field_ename],"onUpdate:modelValue":l=>e.fieldParams[a.field_ename]=l},null,8,["modelValue","onUpdate:modelValue"])):(D(),E(C,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.fieldParams[a.field_ename],"onUpdate:modelValue":l=>e.fieldParams[a.field_ename]=l},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])))),128))],512),[[B,1==e.activeIndex]]),F(x,null,{default:$((()=>[F(le,{type:"primary",onClick:a[23]||(a[23]=e=>j.submit("params"))},{default:$((()=>[O("保存")])),_:1})])),_:1})])),_:1},8,["model"])),[[de,e.loading]])])],64)}]]))}}}));
//# sourceMappingURL=edit-legacy3.js.map
