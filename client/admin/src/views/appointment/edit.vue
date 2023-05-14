<template>
  <div class="mr-10 ml-10 mb-20">
    <el-form
      ref="params"
      :model="params"
      :rules="paramsRules"
      label-width="84px"
      class
    >
      <div>
        <el-form-item label="名称" prop="name">
          <el-input v-model="params.name" />
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="params.phone" />
        </el-form-item>
        <el-form-item label="公司" prop="company">
          <el-input v-model="params.company" />
        </el-form-item>
        <el-form-item label="咨询产品" prop="product">
          <el-input v-model="params.product" />
        </el-form-item>
        <el-form-item label="留言" prop="remarks">
          <el-input v-model="params.remarks" />
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { update, detail, has } from "../../api/appointment.js";
export default {
  name: "appointment-edit",

  data: () => {
    return {
      params: {
        //接口入参
        id: 0,
        name: "",
        phone: '',
        company: "",
        product: '',
        remarks: ''
      },

      paramsRules: {
        //校验规则
        // name: [
        //   { required: true, message: "请输入标签名称", trigger: "blur" },
        //   {
        //     min: 2,
        //     max: 8,
        //     message: "名称长度在 2 到 8 个字符之间",
        //     trigger: "blur",
        //   },
        // ],
      },
    };
  },
  async created() {
    this.params.id = this.$route.params.id;
    await this.detail();
  },
  unmounted() {},
  methods: {
    // 文章详情
    async detail() {
      try {
        let res = await detail(this.params.id);
        if (res.code === 200) {
          this.params = res.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    //新增
    async update() {
      try {
        let res = await update(this.params);
        if (res.code) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
          this.$router.go(-1);
        }
      } catch (error) {
        console.log(error);
      }
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.update()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style></style>
