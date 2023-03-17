<template>
  <div>
    <main class="main">
      <el-row :gutter="20">
        <el-col class="mb-20" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="info c-9ca4bf">
            <p class="f-16 mb-5">
              技术架构：nodejs v16.16.0+ express mysql-5.7 vue3 element-plus
            </p>
            <p class="f-16 mb-5">程序版本：v.1.0.1</p>
            <p class="f-16 mb-5">程序路径：{{ dirname }}</p>
            <p class="f-16 mb-5">发布时间：2023-02-19</p>
            <p class="f-16 mb-5">开发人员：明空</p>
            <p class="f-16 mb-5">UI设计师：16号</p>
            <p class="f-16 mb-5 row">联系微信：yanyutao2014</p>
            <p class="f-16 mb-5">
              <a class="c-9ca4bf" href="http://www.chanyue.top" target="_blank"
                >禅悦内容管理系统：&copy; www.chanyue.top</a
              >
            </p>
          </div>
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
import { tongji } from "../../api/article.js";
import { runEnv } from "../../api/site.js";
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
