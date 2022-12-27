<template>
  <div class="mr-10 ml-10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本设置" name="first"></el-tab-pane>
      <el-tab-pane label="SEO设置" name="second"></el-tab-pane>
    </el-tabs>
  </div>

  <!-- 基本设置 -->
  <div class="mr-10 ml-10" v-show="activeIndex === '0'" v-loading="loading">
    <el-form ref="info" :rules="infoRules" :model="info" label-width="84px">
      <el-form-item label="网站名称" prop="name">
        <el-input v-model="info.name"></el-input>
      </el-form-item>

      <el-form-item label="网站域名">
        <el-input v-model="info.domain"></el-input>
      </el-form-item>

      <el-form-item label="站长邮箱">
        <el-input v-model="info.email"></el-input>
      </el-form-item>

      <el-form-item label="ICP备案号">
        <el-input v-model="info.icp"></el-input>
      </el-form-item>

      <el-form-item label="统计代码">
        <el-input
          type="textarea"
          class="textarea"
          :rows="3"
          v-model="info.code"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitInfo('info')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>

  <!-- SEO设置 -->
  <div class="mr-10 ml-10" v-show="activeIndex === '1'">
    <el-form ref="seo" :model="seo" :rules="seoRules" label-width="84px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="seo.title"></el-input>
      </el-form-item>

      <el-form-item label="关键词">
        <el-input v-model="seo.keywords"></el-input>
      </el-form-item>

      <el-form-item label="描述">
        <el-input
          type="textarea"
          :rows="3"
          class="textarea"
          v-model="seo.description"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitSeo('seo')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { siteInfo, updateInfo, updateSeo } from "../../api/site.js";

export default {
  name: "home-sys",
  data: () => {
    return {
      loading: true,
      activeName: "first",
      activeIndex: "0",
      info: {
        id: "",
        name: "",
        domain: "",
        email: "",
        icp: "",
        code: "",
      },
      seo: {
        id: "",
        title: "",
        keywords: "",
        description: "",
      },
      infoRules: {
        name: [
          { required: true, message: "请输入网站名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
      seoRules: {
        title: [
          { required: true, message: "不能为空", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "长度在 2 到 50 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  created() {
    this.query();
  },
  methods: {
    handleClick(tab) {
      this.activeIndex = tab.index;
    },

    //查询
    async query() {
      try {
        let res = await siteInfo();
        if (res.code === 200) {
          this.loading = false;
          let {
            id,
            name,
            domain,
            email,
            icp,
            code,
            title,
            keywords,
            description,
          } = res.data;
          this.info = { id, name, domain, email, icp, code };
          this.seo = { id, title, keywords, description };
        }
      } catch (error) {
        console.log(error);
      }
    },

    //更新基本信息
    async updateInfo() {
      try {
        let res = await updateInfo(this.info);
        if (res.code === 200 && res.data) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
          this.query();
        }
      } catch (error) {
        console.log(error);
      }
    },

    //更新SEO信息
    async updateSeo() {
      try {
        let res = await updateSeo(this.seo);
        if (res.code === 200 && res.data) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
          this.query();
        }
      } catch (error) {
        console.log(error);
      }
    },

    submitInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    submitSeo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateSeo();
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
