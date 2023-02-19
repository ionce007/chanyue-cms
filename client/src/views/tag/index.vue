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
    <router-link class="c-fff add-btn" to="/tag/add">新增</router-link>
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
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column prop="path" label="标识"></el-table-column>

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
import { search, del } from "../../api/tag.js";

export default {
  name: "tag-index",
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
      if (to.name == "tag-index") {
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
        name: "tag-index",
        query: { cur: 1, cid: 0, keywords: "" },
      });
    },

    doSearch() {
      this.$router.replace({
        name: "tag-index",
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
      this.$router.push({ name: "tag-edit", params: { id: id } });
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
