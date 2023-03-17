<template>
  <div>
    <el-row type="flex" justify="end">
      <router-link class="c-fff add-btn" to="/ad/add">新增</router-link>
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
      <el-table-column prop="id" label="编号" width="60"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="mark" label="标识"></el-table-column>
      <el-table-column prop="platform" label="平台">
        <template #default="scope">
          <span v-if="scope.row.platform.includes('1')">PC</span>
          <span v-if="scope.row.platform.includes('2')">H5</span>
        </template>
      </el-table-column>
      <el-table-column prop="position" label="位置">
        <template #default="scope">
          <span class="mr-5" v-if="scope.row.position.includes('1')">首页</span>
          <span class="mr-5" v-if="scope.row.position.includes('2')"
            >频道页</span
          >
          <span class="mr-5" v-if="scope.row.position.includes('3')">列表</span>
          <span class="mr-5" v-if="scope.row.position.includes('4')">详情</span>
          <span class="mr-5" v-if="scope.row.position.includes('5')">单页</span>
        </template>
      </el-table-column>

      <el-table-column prop="createdAt" label="发布时间" width="160">
        <template #default="scope">{{ scope.row.createdAt }}</template>
      </el-table-column>

      <el-table-column prop="status" label="状态">
        <template #default="scope">
          {{ scope.row.status == 1 ? "显示" : "隐藏" }}</template
        >
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
  </div>
</template>

<script>
import { Delete, Edit } from "@element-plus/icons-vue";
import { search, del } from "../../api/ad.js";
export default {
  name: "ad-index",
  setup() {
    return {
      Edit,
      Delete,
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

    //跳转到编辑
    toEdit(e) {
      let id = e.id;
      this.$router.push({ name: "ad-edit", params: { id: id } });
    },

    //删除文章
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
<style scoped></style>
