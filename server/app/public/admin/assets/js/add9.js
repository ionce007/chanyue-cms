import{o as e,p as a,q as s,t as l,f as m}from"./element-plus.js";import{c as t}from"./model.js";import{_ as o}from"./index.js";import{o as r,c as p,T as u,V as i,Z as d}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";/* empty css        */const n={class:"mr-10 ml-10 mb-20"};const c=o({name:"model-add",components:{},data:()=>({params:{model_name:"",table_name:"",status:"1"},paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},change(e){console.log(e),this.params.table_name=e},async create(){try{let e={...this.params},a=await t(e);200==a.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg||a.error.sqlMessage,type:"fail"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(t,o,c,g,b,j){const _=a,f=s,h=l,V=m,y=e;return r(),p("div",n,[u(y,{ref:"params",model:t.params,rules:t.paramsRules,"label-width":"100px",class:""},{default:i((()=>[u(f,{label:"模型名称",prop:"model_name"},{default:i((()=>[u(_,{modelValue:t.params.model_name,"onUpdate:modelValue":o[0]||(o[0]=e=>t.params.model_name=e),onInput:j.change},null,8,["modelValue","onInput"])])),_:1}),u(f,{label:"新增表名",prop:"table_name"},{default:i((()=>[u(_,{modelValue:t.params.table_name,"onUpdate:modelValue":o[1]||(o[1]=e=>t.params.table_name=e),disabled:""},null,8,["modelValue"])])),_:1}),u(f,{label:"是否启用"},{default:i((()=>[u(h,{modelValue:t.params.status,"onUpdate:modelValue":o[2]||(o[2]=e=>t.params.status=e),label:"1"},{default:i((()=>[d("开启")])),_:1},8,["modelValue"]),u(h,{modelValue:t.params.status,"onUpdate:modelValue":o[3]||(o[3]=e=>t.params.status=e),label:"0"},{default:i((()=>[d("禁用")])),_:1},8,["modelValue"])])),_:1}),u(f,null,{default:i((()=>[u(V,{type:"primary",onClick:o[4]||(o[4]=e=>j.submit("params"))},{default:i((()=>[d("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{c as default};
//# sourceMappingURL=add9.js.map
