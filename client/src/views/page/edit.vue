<template>
  <div class="mr-10 ml-10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="first"></el-tab-pane>
      <el-tab-pane label="扩展信息" name="second"></el-tab-pane>
    </el-tabs>
  </div>

  <div class="mr-10 ml-10 mb-20">
    <el-form
      ref="params"
      :model="params"
      :rules="paramsRules"
      label-width="84px"
      class
    >
      <div v-show="activeIndex == 0">
        <el-form-item label="文章栏目">
          <el-cascader
            :props="categoryProps"
            :show-all-levels="false"
            v-model="categorySelected"
            :options="category"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="文章标题" prop="title">
          <el-input v-model="params.title"></el-input>
        </el-form-item>

        <el-form-item label="文章内容">
          <vue3-tinymce
            v-model="params.content"
            :setting="setting"
            script-src="/public/admin/tinymce/tinymce.min.js"
          />
        </el-form-item>

        <el-form-item label="内容功能">
          <el-checkbox v-model="autoImg">
            提取第
            <el-input
              v-model="picNum"
              class="w-80 mr-8 ml-8"
              placeholder="请输入内容"
            ></el-input
            >张图片作封面
          </el-checkbox>
          <el-checkbox v-model="autoDes">提取文章描述</el-checkbox>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-date-picker
            v-model="params.createdAt"
            :default-value="new Date()"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="是否显示">
          <el-radio v-model="params.status" label="0">发布</el-radio>
          <el-radio v-model="params.status" label="1">不发布</el-radio>
        </el-form-item>

        <el-form-item label="浏览数">
          <el-input v-model="params.pv"></el-input>
        </el-form-item>
      </div>

      <div v-show="activeIndex == 1">
        <el-form-item label="SEO标题">
          <el-input v-model="params.seo_title"></el-input>
        </el-form-item>
        <el-form-item label="SEO关键词">
          <el-input v-model="params.seo_keywords"></el-input>
        </el-form-item>
        <el-form-item label="SEO描述">
          <el-input v-model="params.seo_description"></el-input>
        </el-form-item>
        <el-form-item label="来源">
          <el-input v-model="params.source"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="params.author"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { find } from "../../api/category.js";
import { update, detail } from "../../api/page.js";
import {
  filterBody,
  addLabelValue,
  treeById,
  tree,
} from "../../utils/tools.js";
import Vue3Tinymce from "@jsdawn/vue3-tinymce";
import { tinymceSet } from "../../config/tinymce.js";
export default {
  name: "page-edit",
  components: {
    Vue3Tinymce,
  },
  data: () => {
    return {
      setting: tinymceSet,
      categorySelected: [], //-1默认选中顶级栏目
      categoryProps: { checkStrictly: true },
      activeName: "first", //tab 默认显示第一个
      activeIndex: "0", //tab 内容默认显示第一个

      category: [], //当前所有栏目
      cateList: [], //所有栏目
      autoImg: true,
      autoDes: true,
      picNum: 1,

      params: {
        //接口入参
        id: 0,
        cid: 0,
        title: "",
        seo_title: "",
        seo_keywords: "",
        seo_description: "",
        source: "",
        author: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "禅悦",
        status: "0",
        pv: 0,
      },
      dialogVisible: false,
      disabled: false,
      paramsRules: {
        //校验规则
        title: [
          { required: true, message: "请输入栏目名称", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "名称长度在 2 到 50 个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  unmounted() {},
  mounted() {},
  async created() {
    this.params.id = this.$route.params.id;
    await this.detail();
    await this.query();
  },
  methods: {
    handleClick(tab) {
      this.activeIndex = tab.index;
    },
    setContent(article) {
      this.params.content = article;
    },
    //查询栏目
    async query() {
      try {
        let res = await find();
        if (res.code === 200) {
          let data = res.data;
          let ids = treeById(this.params.cid, data);
          this.categorySelected = ids;
          let end = addLabelValue(tree(data));
          this.cateList = addLabelValue(data);
          this.category = [...end];
        }
      } catch (error) {
        console.log(error);
      }
    },

    //选择栏目
    handleChange(e) {
      if (e[0] != -1) {
        this.params.cid = e[e.length - 1];
      }
    },

    // 文章详情
    async detail() {
      try {
        let res = await detail(this.params.id);
        if (res.code === 200) {
          this.params = res.data;
          this.params.status = this.params.status.toString();
          this.params.updatedAt = new Date(this.params.createdAt);
        }
      } catch (error) {
        console.error(error);
      }
    },

    handleAttr(e) {
      console.log("e-->", e);
    },

    handleSubCid(e) {
      console.log("e-->", e);
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
          this.update();
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
