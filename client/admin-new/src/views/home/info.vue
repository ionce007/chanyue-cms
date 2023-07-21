<template>
  <div class="pd-10">
    <el-row :gutter="20">
      <el-col class="mb-20" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card>
          <h1 class="mb-20">禅悦cms历史进程</h1>
          <el-timeline>
            <el-timeline-item center timestamp="2022/6/12" placement="top">
              <h4>第四次重构（chanyuecms）</h4>
              <p>基于express mysql knex开发第三版</p>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/10/1" placement="top">
              <h4>第三次重构（eggcms）</h4>
              <p>基于egg mysql Sequelize重构</p>
            </el-timeline-item>
            <el-timeline-item center timestamp="2018/4/2" placement="top">
              <h4>第二次重构（koacms）</h4>
              <p>基于koa2 mysql重构</p>
            </el-timeline-item>
            <el-timeline-item timestamp="2015/6/2" placement="top">
              <h4>第一次构想</h4>
              <p>基于express mongoDB开发第一版cms</p>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>

      <el-col class="mb-20" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="info c-9ca4bf">
          <p class="f-16 mb-5">
            技术架构：nodejs v18.16.0 express4+ mysql-5.6/5.7
          </p>
          <p class="f-16 mb-5">
            前端架构：vite4.0 vue3 element-plus pinia axios
          </p>
          <p class="f-16 mb-5">程序版本：v.1.0.2</p>
          <p class="f-16 mb-5">程序路径：{{ dirname }}</p>
          <p class="f-16 mb-5">发布时间：2023-07-21</p>
          <p class="f-16 mb-5">独立开发：明空</p>
          <p class="f-16 mb-5">UI界面：16号</p>
          <p class="f-16 mb-5 row">联系微信：yanyutao2014</p>
          <p class="f-16 mb-5">
            <a class="c-9ca4bf" href="http://www.chanyue.top" target="_blank"
              >禅悦内容管理系统：&copy; www.chanyue.top</a
            >
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { tongji } from "@/api/article.js";
import { runEnv } from "@/api/site.js";
export default {
  name: "home-info",
  data: () => {
    return {
      data: {
        month: 0,
        quarter: 0,
        today: 0,
        week: 0,
        year: 0,
        yesterday: 0,
        message: 0,
      },
      dirname: "",
      loading: true,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.tongji();
    this.runEnv();
  },

  methods: {
    async tongji() {
      try {
        let res = await tongji();
        if (res.code === 200) {
          this.data = res.data;
          this.loading = false;
          this.articleNum();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async runEnv() {
      try {
        let res = await runEnv();
        const { code, data } = res;
        if (code === 200) {
          this.dirname = data.dirname;
        }
      } catch (error) {
        console.log(error);
      }
    },

    articleNum() {
      const data = [
        {
          type: "昨日",
          num: this.data.yesterday,
        },
        {
          type: "今天",
          sales: this.data.today,
        },
        {
          type: "7天",
          sales: this.data.week,
        },
        {
          type: "30天",
          sales: this.data.month,
        },
        {
          type: "一个季度",
          sales: this.data.quarter,
        },
        {
          type: "一年",
          sales: this.data.year,
        },
        {
          type: "留言总数",
          sales: this.data.message,
        },
      ];
    },
  },
};
</script>
<style scoped>
#article {
  height: 320px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 0 14px hsla(0, 0%, 93.3%, 0.5);
  border-radius: 4px;
  padding: 35px 25px 30px;
}

.info {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 0 14px hsla(0, 0%, 93.3%, 0.5);
  border-radius: 4px;
  padding: 25px;
}

.c-9ca4bf {
  color: #9ca4bf;
}
</style>
