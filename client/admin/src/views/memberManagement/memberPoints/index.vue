<template>
  <div class="my-page">
    <el-card shadow="never">
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        ref="formRef"
      >
        <el-form-item label="会员ID">
          <el-input v-model="formInline.vipId" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formInline.phone" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会员等级">
          <el-select v-model="formInline.level" placeholder="请选择">
            <el-option label="普通会员" value="1" />
            <el-option label="钻石会员" value="2" />
            <el-option label="黑卡会员" value="3" />
            <el-option label="超级卡" value="4" />
            <el-option label="青铜会员" value="5" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.status" placeholder="请选择">
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
    <el-card shadow="never" class="mg-tp12">
      <template #header>
        <div class="card-header">
          <span>会员列表</span>
          <el-button type="primary" round>新增</el-button>
        </div>
      </template>
      <el-table :data="tableData" style="width: 100%" v-loading="loading">
        <el-table-column type="index" width="55" label="序号" />
        <el-table-column label="会员ID" prop="memberId" width="180" />
        <el-table-column label="头像" prop="avater" width="180" />
        <el-table-column label="名称" prop="name" />
        <el-table-column label="手机号" prop="phone" width="180" />
        <el-table-column label="会员等级" prop="level" width="180" />
        <el-table-column label="余额" prop="extra" />
        <el-table-column label="积分" prop="total" width="180" />
        <el-table-column label="注册时间" prop="time" width="180" />
        <el-table-column label="活跃时间" prop="activeTime" />
        <el-table-column label="状态" prop="status" />
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
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
export default defineComponent({
  setup() {
    const tableData = [...Array(10)].fill({
      memberId: "123",
      avater: "12",
      name: "32",
      phone: "34235",
      level: "656",
      extra: "45654",
      total: "456",
      time: "456",
      activeTime: "1312",
      status: "123",
    });
    const state = reactive({
      formInline: {
        vipId: "",
        phone: "",
        level: "",
        status: "",
      },
      tableData,
      pageSize: 15,
      pageNum: 1,
      total: 100,
      loading: false,
    });

    const formRef = ref(null);
    const search = () => {
      state.loading = true;
      let timer = setTimeout(() => {
        state.loading = false;
        clearTimeout(timer);
      }, 1500);
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

    return {
      formRef,
      search,
      ...toRefs(state),
      reset,
      handleSizeChange,
      handleCurrentChange,
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
}
</style>
