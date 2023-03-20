<template>
  <div class="my-page">
    <el-card shadow="never">
      <el-form
        :inline="true"
        :model="dataForm"
        class="demo-form-inline"
        ref="formRef"
      >
        <el-form-item label="会员ID">
          <el-input v-model="dataForm.vipId" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dataForm.phone" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会员等级">
          <el-select v-model="dataForm.level" placeholder="请选择">
            <el-option label="普通会员" value="1" />
            <el-option label="钻石会员" value="2" />
            <el-option label="黑卡会员" value="3" />
            <el-option label="超级卡" value="4" />
            <el-option label="青铜会员" value="5" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="dataForm.status" placeholder="请选择">
            <el-option label="启用" value="1" />
            <el-option label="禁用" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="default" @click="reset" round>重置</el-button>
          <el-button type="primary" @click="search" round>查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card shadow="never" class="mg-tp12 card-box">
      <template #header>
        <div class="card-header">
          <span>会员列表</span>
          <el-button type="primary" @click="addClick" round>新增</el-button>
        </div>
      </template>
      <el-table :data="tableData" style="width: 100%" v-loading="loading">
        <el-table-column type="index" width="55" label="序号" />
        <el-table-column label="会员ID" prop="vipId" width="180" />
        <el-table-column label="名称" prop="vipName" />
        <el-table-column label="手机号" prop="phone" width="180" />
        <el-table-column label="会员等级" prop="gradeId" width="180" />
        <el-table-column label="身份证号" prop="certno" />
        <el-table-column label="生日" prop="birth" width="180" />
        <el-table-column label="通讯地址" prop="addr" width="180" />
        <el-table-column label="会员状态" prop="status" />
        <el-table-column label="备注信息" prop="memo" />
      </el-table>
      <el-pagination
        class="mg-tp12"
        :page-sizes="[15, 50, 100, 200]"
        v-model:current-page="pageNum"
        :page-size="pageSize"
        small="small"
        layout="sizes,total, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>

    <AddDialog
      v-model="isAddVisible"
      title="新增会员"
      @search="search"
    ></AddDialog>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import AddDialog from "./AddDialog/index.vue";
import { find} from "@/api/member.js";
export default defineComponent({
  components: { AddDialog },
  setup() {
    const state = reactive({
      dataForm: {
        gradeId: "",
        vipName: "",
        vipId: "",
        phone: "",
        sexy: "",
        certno: "",
        birth: "",
        addr: "",
        status: "",
        memo: "",
      },
      tableData:[],
      pageSize: 15,
      pageNum: 1,
      total: 0,
      loading: false,
      isAddVisible: false,
    });

    const formRef = ref(null);
    const search = async () => {
      state.loading = true;
      const queryString = Object.keys(state.dataForm)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
              state.dataForm[key]
            )}`
        )
        .join("&");
      let res = await find(queryString);
      if (res.code === 200) {
        state.tableData = res.data;
        state.loading = false;
      }
    };

    const reset = () => {
      formRef.value.resetFields();
    };
    const handleSizeChange = (val) => {
      state.pageSize = val.pageSize;
    };

    const handleCurrentChange = (val) => {
      state.pageNum = val.pageNum;
    };

    const addClick = () => {
      state.isAddVisible = true;
    };

    return {
      formRef,
      search,
      ...toRefs(state),
      reset,
      handleSizeChange,
      handleCurrentChange,
      addClick,
    };
  },
});
</script>

<style scoped>
.mg-tp12 {
  margin-top: 12px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  position: relative;
}
.card-header :deep(span) {
  margin-left: 12px;
}
.card-header::before {
  content: "";
  display: none;
  height: 16px;
  width: 3px;
  background-color: #1b65b9;
  margin-right: 5px;
  margin-top: -3px;
  display: inline-block;
  margin-right: 4px;
  width: 6px;
  position: absolute;
}

:deep(.el-table) {
  height: calc(100vh - 400px);
}

.card-box :deep(.el-card__body) {
  padding: 5px 10px;
}
</style>
