<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="18">
      <el-input
        class="mr-10 w-auto"
        placeholder="请输入内容"
        :suffix-icon="Search"
        clearable
        @clear="clearSearch"
        v-model="keywords"
      ></el-input>
      <el-button type="primary" @click="search" round>搜索</el-button>
    </el-col>
    <router-link class="c-fff add-btn" to="/case/add">新增</router-link>
  </el-row>

  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    row-key="id"
    size="small"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="id" label="编号"></el-table-column>
    <el-table-column prop="title" label="名称"></el-table-column>
    <el-table-column prop="introduction" label="介绍"></el-table-column>
    <el-table-column prop="android_qrcode_image" label="安卓二维码"></el-table-column>
    <el-table-column prop="color" label="颜色"></el-table-column>
    <el-table-column prop="image" label="图片"></el-table-column>
    <el-table-column prop="industry" label="行业"></el-table-column>
    <el-table-column prop="info_status" label="状态"></el-table-column>
    <el-table-column prop="ios_qrcode_image" label="苹果二维码"></el-table-column>
    <el-table-column prop="keywords" label="关键字"></el-table-column>
    <el-table-column prop="link" label="链接"></el-table-column>
    <el-table-column prop="logo_image" label="LOGO"></el-table-column>
    <el-table-column prop="web_qrcode_image" label="网页二维码"></el-table-column>
    <el-table-column prop="wechat_qrcode_image" label="微信二维码"></el-table-column>

    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-button :icon="Edit" circle @click="toEdit(scope.row)"></el-button>
        <el-button
          :icon="Delete"
          circle
          @click="handleDel(scope.row)"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分页 -->
  <el-row type="flex" class="mt-20 align-c" justify="center">
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :pager-size="10"
      :total="count"
      v-model:currentPage="cur"
      hide-on-single-page
    ></el-pagination>
  </el-row>
</template>

<script>
import { Delete, Edit, View, Search } from "@element-plus/icons-vue";
import { search, del } from "../../api/case.js";

export default {
  name: "case-index",
  setup() {
    return {
      Edit,
      Delete,
      View,
      Search,
    };
  },
  data: () => {
    return {
      tableData: [],
      multipleSelection: [],
      count: 0,
      cur: 1,
      keywords: "",
    };
  },
  computed: {},
  created() {
    let { cur = 1, keywords = "" } = this.$route.query;

    this.cur = +cur;
    this.keywords = keywords;

    this.search();
  },
  watch: {
    $route(to, from) {
      if (to.name == "case-index") {
        let { cur, keywords } = to.query;
        this.cur = +cur;
        this.keywords = keywords;
        this.search();
      }
    },
  },
  methods: {
    //清空搜索
    clearSearch() {
      this.$router.replace({
        name: "case-index",
        query: { cur: 1, cid: 0, keywords: "" },
      });
    },

    doSearch() {
      this.$router.replace({
        name: "case-index",
        query: { cur: this.cur, keywords: this.keywords },
      });

      this.search();
    },
    //查询
    async search() {
      try {
        let res = await search(this.cur, this.keywords);
        if (res.code === 200) {
          this.tableData = [...res.data.list];
          this.count = res.data.count;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //翻页
    handleCurrentChange(e) {
      this.cur = +e;
      this.doSearch();
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    toEdit(e) {
      let id = e.id;
      this.$router.push({ name: "case-edit", params: { id: id } });
    },

    //删除
    async handleDel(e) {
      let id = e.id;
      try {
        let res = await del(id);
        if (res.code === 200) {
          this.$message({
            message: "删除成功 ^_^",
            type: "success",
          });
          this.search();
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped></style>
