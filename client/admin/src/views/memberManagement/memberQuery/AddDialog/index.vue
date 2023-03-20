<template>
  <CmDialog v-model="modelValue" :dialogTitle="title" @closed="closed">
    <el-form
      :model="dataForm"
      label-width="120px"
      ref="ruleFormRef"
      :rules="rules"
      class="my-form"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="等级" prop="gradeId">
            <el-select v-model="dataForm.gradeId" placeholder="请选择">
              <el-option label="普通会员" value="1" />
              <el-option label="钻石会员" value="2" />
              <el-option label="黑卡会员" value="3" />
              <el-option label="超级卡" value="4" />
              <el-option label="青铜会员" value="5" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称" prop="vipName">
            <el-input v-model="dataForm.vipName" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="会员号" prop="vipId">
            <el-input v-model="dataForm.vipId" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="dataForm.phone" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别" prop="sexy">
            <el-select v-model="dataForm.gradeId" placeholder="请选择">
              <el-option label="男" value="1" />
              <el-option label="女" value="2" />
              <el-option label="未知" value="3" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="身份证号" prop="certno">
            <el-input v-model="dataForm.certno" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="生日" prop="birth">
            <el-date-picker
              v-model="dataForm.birth"
              type="date"
              placeholder="请选择"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="通讯地址" prop="addr">
            <el-input v-model="dataForm.addr" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="会员状态" prop="status">
            <el-select v-model="dataForm.status" placeholder="请选择">
              <el-option label="启用" value="1" />
              <el-option label="禁用" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注信息" prop="memo">
            <el-input v-model="dataForm.memo" placeholder="请输入" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed" round>关闭</el-button>
        <el-button type="primary" @click="submitClick" round>保存</el-button>
      </span>
    </template>
  </CmDialog>
</template>

<script>
import CmDialog from "@/views/memberManagement/components/cmDialog.vue";
import { defineComponent, reactive, ref, toRefs } from "vue";
import { create } from "@/api/member.js";
import { ElMessage } from "element-plus";
export default defineComponent({
  model: {
    prop: "visible",
    event: "closed",
  },
  components: { CmDialog },
  props: {
    visible: { type: Boolean, default: false },
    title: { type: Boolean, default: "新增会员" },
    modelValue: { type: Boolean, default: false },
  },
  setup(props, context) {
    const state = reactive({
      dataForm: {
        gradeId: "1",
        vipName: "",
        gradeId: "",
        phone: "",
        sexy: "",
        certno: "",
        addr: "",
        status: "1",
        memo: "",
        vipId: "",
      },
      rules: {
        gradeId: [{ required: true, message: "请选择等级", trigger: "change" }],
        vipName: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
        ],
      },
    });
    const ruleFormRef = ref(null);
    const closed = () => {
      ruleFormRef.value.resetFields();
      context.emit("update:modelValue", false);
    };

    const submitClick = () => {
      ruleFormRef.value.validate((valid, fields) => {
        if (valid) {
          const params = {
            ...state.dataForm,
          };
          create(params).then((res) => {
            if (res.code === 200) {
              ElMessage.success("新增成功");
              context.emit("search");
              closed();
            }
          });
          console.log(state.dataForm);
        }
      });
    };

    return {
      ...toRefs(state),
      closed,
      submitClick,
      ruleFormRef,
    };
  },
});
</script>

<style scoped>
.my-form {
}

.el-select,
:deep(.el-input) {
  width: 100%;
}
</style>
