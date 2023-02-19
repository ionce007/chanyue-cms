<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="18">
      <el-input
        class="mr-10 w-auto"
        placeholder="请输入内容"
        :suffix-icon="Search"
        v-model="keywords"
      ></el-input>
      <el-button type="primary" @click="search" round>搜索</el-button>
      <el-button @click="clearSearch" round>清空</el-button>
    </el-col>

    <router-link class="c-fff add-btn" to="/page/add">新增</router-link>
  </el-row>

  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    row-key="id"
    size="small"
    @selection-change="handleSelectionChange"
    v-loading="loading"
  >
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="id" label="编号" width="60"></el-table-column>
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="name" label="所属栏目" width="80"></el-table-column>
    <!-- <el-table-column prop="pv" label="浏览次数"></el-table-column> -->
    <el-table-column prop="createdAt" label="发布时间" width="160">
      <template #default="scope">{{ scope.row.createdAt }}</template>
    </el-table-column>
    <el-table-column prop="status" label="状态" width="60">
      <template #default="scope">{{
        scope.row.status == 0 ? "显示" : "隐藏"
      }}</template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="scope">
        <el-button
          :icon="View"
          circle
          @click="handleClick(scope.row)"
        ></el-button>
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
  <el-row type="flex" class="mt-20" justify="space-between">
    <div style="margin-top: 20px">
      批量操作：
      <el-button @click="delSome">删除</el-button>
    </div>
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
import { search, del } from "../../api/page.js";

export default {
  name: "page-index",
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
      loading: true,
    };
  },
  computed: {},
  created() {
    this.search();
  },
  methods: {
    //清空搜索
    clearSearch() {
      this.keywords = "";
      this.tableData = [];
      this.multipleSelection = [];
      this.count = 0;
      this.cur = 1;
      this.search();
    },

    //查询
    async search() {
      try {
        let res = await search(this.cur, this.keywords);
        if (res.code === 200) {
          this.tableData = [...res.data.list];
          this.count = res.data.count;
          this.loading = false;
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

    //全选
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    //选择
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    //编辑
    toEdit(e) {
      let id = e.id;
      this.$router.push({ name: "page-edit", params: { id: id } });
    },

    delSome() {
      let ids = this.multipleSelection.map((item) => {
        return item.id;
      });

      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await del(ids.join(","));
          if (res.code === 200) {
            this.$message({
              message: "删除成功 ^_^",
              type: "success",
            });
            this.search();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
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
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.el-input {
  width: auto !important;
}
</style>
