<template>
  <div class="mr-10 ml-10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="first"></el-tab-pane>
      <el-tab-pane label="SEO设置" name="second"></el-tab-pane>
    </el-tabs>
  </div>

  <div class="mr-10 ml-10 mb-20">
    <el-form
      ref="params"
      :model="params"
      :rules="paramsRules"
      label-width="84px"
      class="w640"
    >
      <div v-show="activeIndex == 0">
        <el-form-item label="上级栏目" v-if="!params.pid == 0">
          <el-cascader
            :props="categoryProps"
            :show-all-levels="false"
            :disabled="true"
            v-model="categorySelected"
            :options="category"
            @change="handleChange"
          >
          </el-cascader>
          不选择为顶级栏目
        </el-form-item>

        <el-form-item label="栏目名称" prop="name">
          <el-input v-model="params.name"></el-input>
        </el-form-item>

        <el-form-item label="栏目标识">
          <el-input v-model="params.pinyin" disabled></el-input>
        </el-form-item>

        <el-form-item label="栏目路径">
          <el-input v-model="params.path"></el-input>
        </el-form-item>

        <el-form-item label="栏目类型">
          <el-radio v-model="params.type" label="0">栏目</el-radio>
          <el-radio v-model="params.type" label="1">单页</el-radio>
        </el-form-item>

        <el-form-item label="扩展模型">
          <el-radio-group v-model="params.mid">
            <el-radio label="0">基本模型</el-radio>
            <template v-if="modList.length > 0">
              <el-radio
                v-for="(item, index) of modList"
                :key="index"
                :label="item.id"
              >
                {{ item.model_name }}模型
              </el-radio>
            </template>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="是否显示">
          <el-radio v-model="params.status" label="0">显示</el-radio>
          <el-radio v-model="params.status" label="1">隐藏</el-radio>
        </el-form-item>

        <el-form-item label="栏目排序">
          <el-input v-model="params.sort"></el-input>
        </el-form-item>
      </div>

      <div v-show="activeIndex == 1">
        <el-form-item label="栏目描述">
          <el-input v-model="params.description"></el-input>
        </el-form-item>

        <el-form-item label="栏目链接">
          <el-input v-model="params.url"></el-input>
        </el-form-item>

        <el-form-item label="打开方式">
          <el-radio v-model="params.target" label="0">当前页面</el-radio>
          <el-radio v-model="params.target" label="1">新页面</el-radio>
        </el-form-item>

        <el-form-item label="seo标题">
          <el-input v-model="params.seo_title"></el-input>
        </el-form-item>

        <el-form-item label="seo关键词">
          <el-input v-model="params.seo_keywords"></el-input>
        </el-form-item>

        <el-form-item label="seo描述">
          <el-input v-model="params.seo_description"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { find, findId, update } from "../../api/category.js";
import { addLabelValue, treeById, tree } from "../../utils/tools.js";
import { list } from "../../api/model.js";
import { pinyin } from "pinyin-pro";
export default {
  name: "category-edit",
  data: () => {
    return {
      id: 0, //栏目
      categorySelected: [], //-1默认选中顶级栏目
      categoryProps: { checkStrictly: true },

      activeName: "first", //tab 默认显示第一个
      activeIndex: "0", //tab 内容默认显示第一个

      category: [], //当前所有栏目
      modList: [], //模型列表
      params: {
        //接口入参
        pid: 0,
        seo_title: "",
        seo_keywords: "",
        seo_description: "",
        name: "",
        pinyin: "",
        path: "",
        mid: "0",
        description: "",
        url: "",
        sort: 0,
        type: "0",
        target: "0",
        status: "0",
      },
      paramsRules: {
        //校验规则
        name: [
          { required: true, message: "请输入栏目名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "名称长度在 2 到 10 个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },

  computed: {},
  watch: {
    "params.name": function (newv, oldv) {
      this.params.pinyin = pinyin(newv, { toneType: "none" }).replace(
        /\s+/g,
        ""
      );
      let path = this.params.path;
      let pathArr = path.split("/");
      pathArr.length = pathArr.length - 1;
      pathArr.push(this.params.pinyin);
      this.params.path = pathArr.join("/");
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.modelList();
    this.query();
    this.findById();
  },

  methods: {
    handleClick(tab) {
      this.activeIndex = tab.index;
    },

    //查询
    async query() {
      try {
        let res = await find();
        if (res.code === 200) {
          let data = res.data;
          let ids = treeById(this.id, data);
          if (ids.length > 1) {
            ids.length = ids.length - 1;
          }
          this.categorySelected = ids;
          let end = addLabelValue(tree(data));
          this.category = [...end];
        }
      } catch (error) {
        console.log(error);
      }
    },

    //模型列表
    async modelList() {
      try {
        let res = await list(this.cur);
        if (res.code === 200) {
          this.modList = res.data.list.map((item) => {
            item.id = item.id.toString();
            return item;
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    //查
    async findById() {
      try {
        let res = await findId(this.id);
        if (res.code === 200) {
          this.params = res.data;
        }
      } catch (error) {
        console.error(error);
      }
    },

    handleChange(e) {
      if (e[0] != -1) {
        this.params.pid = e[e.length - 1];
      }
    },

    //更新基本信息
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
      this.params.path = this.allPath;
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
<style scoped></style>
