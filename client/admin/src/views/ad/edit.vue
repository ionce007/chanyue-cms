<template>
  <div class="mr-10 ml-10 mb-20">
    <el-form
      ref="params"
      :model="params"
      :rules="paramsRules"
      label-width="84px"
      class
    >
      <div>
        <el-form-item label="广告名称" prop="title">
          <el-input v-model="params.title" placeholder="请输入汉字"></el-input>
        </el-form-item>

        <el-form-item label="广告链接">
          <el-input v-model="params.link"></el-input>
        </el-form-item>

        <el-form-item label="广告标识" prop="mark">
          <el-input v-model="params.mark" disabled></el-input>
        </el-form-item>

        <el-form-item label="广告平台">
          <el-radio v-model="params.platform" label="1">PC</el-radio>
          <el-radio v-model="params.platform" label="2">H5</el-radio>
        </el-form-item>

        <el-form-item label="广告位置">
          <el-checkbox-group v-model="params.position" @change="handleAttr">
            <el-checkbox label="1">首页</el-checkbox>
            <el-checkbox label="2">频道页</el-checkbox>
            <el-checkbox label="3">列表页</el-checkbox>
            <el-checkbox label="4">文章页</el-checkbox>
            <el-checkbox label="5">单页</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="图片链接">
          <el-input v-model="params.imgUrl"></el-input>
        </el-form-item>

        <el-form-item label="广告图片">
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            :on-success="upload"
            :show-file-list="false"
            :before-upload="beforeUpload"
          >
            <el-image
              style="width: 100%"
              v-if="params.imgUrl"
              :src="params.imgUrl"
            />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-date-picker
            v-model="params.createdAt"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="是否显示">
          <el-radio v-model="params.status" label="1">发布</el-radio>
          <el-radio v-model="params.status" label="2">不发布</el-radio>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { update, detail } from "../../api/ad.js";
import { Plus } from "@element-plus/icons-vue";
export default {
  name: "ad-edit",
  data: () => {
    return {
      params: {
        //接口入参
        id: 0,
        title: "",
        mark: "",
        imgUrl: "",
        link: "",
        platform: "",
        position: [1, 2],
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "1",
      },
      disabled: false,
      paramsRules: {
        //校验规则
        title: [
          { required: true, message: "请输入栏目名称", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "名称长度在 2 到 50 个字符之间",
            trigger: "blur",
          },
        ],
        mark: [
          { required: true, message: "请输入栏目名称", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "名称长度在 2 到 50 个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {
    Plus,
  },
  async mounted() {},

  async created() {
    this.params.id = this.$route.params.id;
    await this.detail(); // 文章详情
  },
  methods: {
    // 文章详情
    async detail() {
      try {
        let res = await detail(this.params.id);
        if (res.code === 200) {
          let params = res.data;
          params.position = params.position.split(",");
          params.platform = params.status.toString();
          params.status = params.status.toString();
          params.updatedAt = new Date(params.createdAt);
          this.params = params;
        }
      } catch (error) {
        console.error(error);
      }
    },

    handleAttr(e) {
      console.log("e-->", e);
    },

    beforeUpload(rawFile) {
      if (rawFile.size / 1024 / 1024 > 2) {
        this.$message("上传文件必须小于1M");
        return false;
      }
    },

    //上传缩略图
    upload(res) {
      if (res.code === 200) {
        this.params.imgUrl = res.data.path;
      }
    },

    //新增
    async update() {
      try {
        let params = { ...this.params };
        params.position = params.position.toString();
        let res = await update(params);
        if (res.code) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
          this.$router.go(-1);
        }
      } catch (error) {
        console.log(error);
      }
    },

    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.update();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style></style>
