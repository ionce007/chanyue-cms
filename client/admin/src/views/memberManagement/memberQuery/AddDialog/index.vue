<template>
  <CmDialog v-model="modelValue" :dialogTitle="title" @closed="closed">
    <el-form
      :model="dataForm"
      label-width="120px"
      ref="ruleFormRef"
      :rules="rules"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="等级" prop="gradeId">
            <el-input v-model="dataForm.gradeId" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称" prop="storeName">
            <el-input v-model="dataForm.storeName" placeholder="请输入" />
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
            <el-input v-model="dataForm.sexy" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="身份证号" prop="certno">
            <el-input v-model="dataForm.certno" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="生日" prop="birth">
            <el-input v-model="dataForm.birth" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="通讯地址" prop="addr">
            <el-input v-model="dataForm.addr" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="会员状态" prop="status">
            <el-input v-model="dataForm.status" placeholder="请输入" />
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
        gradeId: "",
        storeName: "",
        gradeId: "",
        phone: "",
        sexy: "",
        certno: "",
        addr: "",
        status: "",
        memo: "",
        vipId: "",
      },
      rules: {
        gradeId: [{ required: true, message: "请选择等级", trigger: "change" }],
        storeName: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
        ],
      },
    });

    const closed = () => {
      context.emit("update:modelValue", false);
    };
    const ruleFormRef = ref(null);
    const submitClick = () => {
      ruleFormRef.value.validate((valid, fields) => {
        if (valid) {
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
