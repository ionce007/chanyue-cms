<template>
  <el-row>
    <el-col>
      <el-menu
        router
        unique-opened
        :default-active="active"
        :collapse="isCollapse"
        :collapse-transition="false"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/">
          <el-icon class="el-icon-s-data">
            <DataLine />
          </el-icon>
          <template #title>网站说明</template>
        </el-menu-item>

        <el-sub-menu index="2">
          <template #title>
            <el-icon class="el-icon-setting">
              <Setting />
            </el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="/sys">网站设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon class="el-icon-menu">
              <Menu />
            </el-icon>
            <span>内容管理</span>
          </template>
          <el-menu-item index="/category"> 栏目管理 </el-menu-item>
          <el-menu-item index="/page"> 页面管理 </el-menu-item>
          <el-menu-item index="/article?cur=1&keywords=&cid=0">
            文章管理
          </el-menu-item>
          <el-menu-item index="/tag?cur=1&keywords="> 标签管理 </el-menu-item>
          <el-menu-item index="/frag"> 碎片管理 </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon class="el-icon-s-operation">
              <Operation />
            </el-icon>
            <span>功能管理</span>
          </template>
          <el-menu-item index="/model"> 扩展模型 </el-menu-item>
          <el-menu-item index="/friendlink"> 友情链接 </el-menu-item>
          <el-menu-item index="/ad"> 广告管理 </el-menu-item>
          <el-menu-item index="/message"> 留言管理 </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon class="el-icon-bank-card">
              <CreditCard />
            </el-icon>
            <span>管理员</span>
          </template>
          <el-menu-item index="/admin"> 管理员列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon class="el-icon-bank-card">
              <CreditCard />
            </el-icon>
            <span>会员管理</span>
          </template>
          <el-menu-item index="/memberQuery"> 会员查询</el-menu-item>
          <el-menu-item index="/menberLevels"> 会员等级</el-menu-item>
          <el-menu-item index="/memberPoints"> 会员积分</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {
  DataLine,
  Setting,
  Menu,
  Operation,
  CreditCard,
} from "@element-plus/icons-vue";
export default {
  components: {
    DataLine,
    Setting,
    Menu,
    Operation,
    CreditCard,
  },
  data() {
    return {
      active: "",
    };
  },
  props: {
    collapse: {
      type: Boolean,
      default: false, // 默认不折叠
    },
  },

  computed: {
    isCollapse() {
      return this.collapse;
    },
    toggleButton() {
      if (this.isCollapse) {
        return "minMargin";
      } else {
        return "maxMargin";
      }
    },
  },
  mounted() {
    this.active = `/${this.$route.path.split("/")[1]}`;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style scoped>
.el-menu {
  border-right: 0;
}

.el-sub-menu.is-opened .el-sub-menu__icon-arrow {
  color: #1890ff;
  font-weight: lighter;
}

.el-menu-item.is-active {
  color: #1890ff;
}

.el-sub-menu.is-opened span {
  color: #1890ff;
}

.el-sub-menu.is-opened .el-icon {
  color: #1890ff;
}

.el-sub-menu .el-icon {
  color: #909399;
  font-size: 14px;
}

/* .el-sub-menu.is-opened [class^="el-icon-"] {
  color: #1890ff;
} */
.el-sub-menu .el-menu-item {
  padding: 0 48px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
