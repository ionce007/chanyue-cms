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
      label-width="100px"
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

        <el-form-item label="内容属性">
          <el-checkbox-group v-model="params.attr" @change="handleAttr">
            <el-checkbox label="1">头条</el-checkbox>
            <el-checkbox label="2">推荐</el-checkbox>
            <el-checkbox label="3">轮播</el-checkbox>
            <el-checkbox label="4">热门</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="tag标签">
          <el-select-v2
            v-model="params.tag_id"
            :options="taglist"
            placeholder="Please select"
            style="width: 240px"
            multiple
            filterable
            remote
            :remote-method="searchTag"
          />
        </el-form-item>

        <!-- 
          field_cname   中文名称 varchar 60
          field_ename   英文名称 varchar 60
          field_type    
          from表单类型 
          1单行文本（varchar）
          2.多行文本 
          text 3.下拉菜单 
          text 4.单选 
          text 5.多选 
          6.时间和日期
          field_default  字段配置 男 女
          field_values   默认值可选 255
          field_sort     字段顺序
          -->

        <el-form-item label="内容摘要">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="params.description"
          ></el-input>
        </el-form-item>

        <el-form-item label="缩略图">
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            :on-success="upload"
            :show-file-list="false"
            :before-upload="beforeUpload"
          >
            <el-image style="width: 100%" v-if="params.img" :src="params.img" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
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
        <el-form-item label="短标题" prop="name">
          <el-input v-model="params.short_title"></el-input>
        </el-form-item>

        <el-form-item label="其它栏目">
          <div class="w-640">
            <el-checkbox-group v-model="params.sub_cid" @change="handleSubCid">
              <el-checkbox
                v-for="(item, index) in cateList"
                :key="index"
                :label="item.value"
                >{{ item.label }}</el-checkbox
              >
            </el-checkbox-group>
            <p class="tips">(可选发布到其它栏目)</p>
          </div>
        </el-form-item>

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
        <el-form-item label="外链跳转">
          <el-input v-model="params.link" max="120"></el-input>
        </el-form-item>

        <!-- 
          field_cname   中文名称 varchar 60
          field_ename   英文名称 varchar 60
          field_type    
          from表单类型 1单行文本（varchar）
          2.多行文本 
          text 3.下拉菜单 
          text 4.单选 
          text 5.多选 
          6.时间和日期
          field_default  默认值可选 255
          field_values   字段配置 男 女
          field_sort     字段顺序
          -->
        <el-form-item
          :label="item.field_cname"
          v-for="(item, index) of field"
          :key="index"
        >
          <el-input
            v-model="item.field_values"
            max="120"
            v-if="item.field_type === '1'"
          ></el-input>
          <el-input
            type="textarea"
            :rows="3"
            v-else-if="item.field_type === '2'"
            placeholder="请输入内容"
            v-model="item.field_values"
          ></el-input>
          <el-input
            type="textarea"
            :rows="3"
            v-else
            placeholder="请输入内容"
            autosize="false"
            v-model="item.field_values"
          ></el-input>
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
import { create, findField } from "../../api/article.js";
import { search } from "../../api/tag.js";
import Vue3Tinymce from "@jsdawn/vue3-tinymce";
import { tinymceSet } from "../../config/tinymce.js";
import { Plus } from "@element-plus/icons-vue";
import {
  addLabelValue,
  getImgUrlFromStr,
  filterHtml,
  filterBody,
  tree,
} from "../../utils/tools.js";

export default {
  name: "article-add",
  components: {
    Vue3Tinymce,
    Plus,
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
      taglist: [],
      params: {
        //接口入参
        cid: 0,
        sub_cid: [],
        title: "",
        short_title: "",
        tag_id: "",
        attr: [],
        seo_title: "",
        seo_keywords: "",
        seo_description: "",
        source: "",
        author: "",
        description: "",
        img: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "禅悦",
        status: "0",
        pv: 0,
        link: "",
      },

      field: [], //字段列表

      dialogImageUrl: "",
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
      cur: 1,
      keywords: "",
    };
  },
  computed: {},
  mounted() {},
  created() {
    this.query();
    this.searchTag();
  },
  unmounted() {},
  methods: {
    handleClick(tab) {
      this.activeIndex = tab.index;
    },

    setContent(article) {
      this.params.content = article;
    },

    //查询标签
    async searchTag(keywords) {
      try {
        let res = await search(this.cur, keywords);
        if (res.code === 200) {
          let arr = [];
          res.data.list.forEach((item) => {
            arr.push({
              label: item.name,
              value: item.id,
            });
          });

          this.taglist = arr;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //查询
    async query() {
      try {
        let res = await find();
        if (res.code === 200) {
          let dataTree = addLabelValue(tree(res.data));
          let data = addLabelValue(res.data);
          this.cateList = data;
          this.category = [...dataTree];
        }
      } catch (error) {
        console.log(error);
      }
    },

    //选择栏目
    handleChange(e) {
      console.log(e);
      if (e[0] != -1) {
        this.params.cid = e[e.length - 1];
        this.findField(this.params.cid);
      } else {
        this.field = [];
      }
    },

    handleAttr(e) {
      console.log("e-->", e);
    },

    handleSubCid(e) {
      console.log("e-->", e);
    },

    beforeUpload(rawFile) {
      if (rawFile.size / 1024 / 1024 > 2) {
        this.$message("上传文件必须小于1M");
        return false;
      }
    },
    //上传缩略图
    upload(res) {
      if (res.code === 200) {
        this.params.img = res.data.path;
      }
    },

    //查询
    async findField(cid) {
      try {
        let res = await findField(cid);
        if (res.code === 200) {
          this.field = res.data.fields;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //新增
    async create() {
      try {
        let params = { ...this.params };
        params.attr = params.attr.toString();
        params.sub_cid = params.sub_cid.toString();
        params.tag_id = params.tag_id.toString();
        //判断是否有缩略图
        if (!params.img) {
          params.img = getImgUrlFromStr(params.content)[0];
        }
        //提取255字符作为文章描述
        if (!params.description) {
          params.description = filterHtml(params.content).substr(0, 255);
        }
        //处理模型字段信息
        let fieldParams = {};
        this.field.map((item) => {
          fieldParams[item.field_ename] = item.field_values;
        });

        let res = await create({
          defaultParams: params,
          fieldParams: fieldParams,
        });
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
          this.create();
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
