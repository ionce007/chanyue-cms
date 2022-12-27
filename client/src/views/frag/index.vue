<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="18">
      <el-input
        class="mr-10 w-auto"
        placeholder="请输入内容"
        :suffix-icon="Search"
        clearable
        @clear="search"
        v-model="keywords"
      ></el-input>
      <el-button type="primary" @click="search" round>搜索</el-button>
    </el-col>

    <router-link class="c-fff add-btn" to="/frag/add">新增</router-link>
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
    <el-table-column prop="mark" label="标识"></el-table-column>
    <el-table-column prop="createdAt" label="发布时间">
      <template #default="scope">{{ scope.row.createdAt }}</template>
    </el-table-column>
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
      hide-on-single-page
    ></el-pagination>
  </el-row>
</template>

<script>
import { Delete, Edit, View, Search } from "@element-plus/icons-vue";
import { search, del } from "../../api/frag.js";

export default {
  name: "frag-index",
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
      keywords: "",
      tableData: [],
      multipleSelection: [],
      count: 0,
      cur: 1,
    };
  },
  computed: {},
  created() {
    this.search();
  },
  methods: {
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
      this.cur = e;
      this.search();
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
      this.$router.push({ name: "frag-edit", params: { id: id } });
    },

    //删除
    async handleDel(e) {
      let id = e.id;
      try {
        let res = await del(id);
        if (res.code === 200) {
          this.$message({
            message: "文章删除成功 ^_^",
            type: "success",
          });
          this.search();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped></style>
