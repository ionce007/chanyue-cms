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

    <router-link class="c-fff add-btn" to="/category/add">新增</router-link>
  </el-row>

  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    row-key="id"
    size="small"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    @selection-change="handleSelectionChange"
    v-loading="loading"
  >
    <el-table-column type="selection"></el-table-column>

    <el-table-column prop="id" label="编号"></el-table-column>

    <el-table-column prop="name" label="名称"></el-table-column>

    <el-table-column prop="type" label="类型">
      <template #default="scope">
        <p v-if="scope.row.type == 0">栏目</p>
        <p v-else>单页</p>
      </template>
    </el-table-column>

    <el-table-column prop="sort" label="排序">
      <template #default="scope">{{ scope.row.sort }}</template>
    </el-table-column>

    <el-table-column prop="status" label="状态">
      <template #default="scope">
        <p v-if="scope.row.status == 0">显示</p>
        <p v-else>隐藏</p>
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="操作" width="160">
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
</template>

<script>
import { Delete, Edit, View, Search } from "@element-plus/icons-vue";
import { findSubId, destory, search } from "../../api/category.js";
import { tree, addLabelValue } from "../../utils/tools.js";

export default {
  name: "category-index",
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
      keywords: "", //关键词
      loading: true,
      tableData: [],
      multipleSelection: [],
    };
  },
  computed: {},
  created() {
    this.search();
  },
  methods: {
    //清空
    clearSearch() {
      this.keywords = "";
      this.tableData = [];
      this.multipleSelection = [];
      this.search();
    },

    //查询
    async search() {
      try {
        const q = this.keywords;
        let res = await search(q);
        if (res.code === 200) {
          let data = tree(res.data);
          console.log("data->", data);
          this.tableData = addLabelValue(data);

          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //全选和反选
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
      this.$router.push({ name: "category-edit", params: { id: id } });
    },

    //查询是否有子栏目
    async hasChild(id) {
      try {
        let res = await findSubId(id);
        if (res.code === 200) {
          if (res.data.length > 0) {
            return true;
          } else {
            return false;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    //删除
    async del(id) {
      try {
        let res = await destory(id);
        if (res.code === 200) {
          this.$message({
            message: "删除成功 ^_^",
            type: "success",
          });
          this.clearSearch();
        }
      } catch (error) {
        console.log(error);
      }
    },

    delSome() {},

    //删除栏目  还需要判断是否当前栏目下面有文章？
    handleDel(e) {
      let id = e.id;
      let has = this.hasChild(id);
      //判断是否有子栏目
      if (has.length > 0) {
        this.$message({
          message: "我下面还有栏目啊 ^_^",
          type: "success",
        });
        return false;
      } else {
        this.del(id);
      }
    },
  },
};
</script>

<style></style>
