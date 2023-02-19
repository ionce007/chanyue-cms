<template>
  <el-container>
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <!-- logo -->
      <div class="logo row space-b">
        <img class="ml-20" src="../../assets/img/logo.png" alt />
        <h1 class="logo-h1" v-if="!isCollapse">ChanYue-cms</h1>
      </div>
      <!-- 导航 -->
      <asideMenu :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <!--top-->
        <div class="ys-admin-top">
          <div class="row space-b pl-20 pr-20">
            <div class="row align-c">
              <span @click="togleCollapse">
                <el-icon class="mr-8 pos-r t-4">
                  <Fold v-show="!isCollapse" />
                  <Expand v-show="isCollapse" />
                </el-icon>
              </span>

              <crumbs></crumbs>
            </div>

            <p class="c-333">
              <a class="c-a1a3aa f-14" href="/" target="_blank">
                <i class="el-icon-monitor mr-3"></i>网站
              </a>
              <span class="ml-4 f-14">{{ username }}</span>
              <el-tooltip content="退出" placement="bottom" effect="light">
                <el-icon
                  class="ml-4 pointer pos-r t-2 f-20 el-icon-warning-outline"
                  @click="quit"
                >
                  <SwitchButton />
                </el-icon>
              </el-tooltip>
            </p>
          </div>
        </div>
      </el-header>
      <!--main-->
      <el-main>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Delete, Expand, Fold, SwitchButton } from "@element-plus/icons-vue";
import asideMenu from "../../components/menu.vue";
import { getCookie, setCookie } from "../../utils/tools";

import crumbs from "../../components/crumbs.vue";

export default {
  name: "home-index",
  components: {
    asideMenu,
    Expand,
    Fold,
    SwitchButton,
    crumbs,
  },
  setup() {
    return {
      Expand,
      Fold,
      Delete,
    };
  },
  data: () => {
    return {
      isCollapse: false,
      username: "",
    };
  },
  computed: {},
  watch: {
    $route(to) {
      to.query && to.query.transitionName;
    },
  },
  created() {
    this.queryUserInfo();
  },
  methods: {
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    queryUserInfo() {
      this.username = getCookie("username");
    },

    quit() {
      setCookie("token", "");
      this.$router.push({ name: "login-in" });
    },
  },
};
</script>
<style lang="less" scoped>
.ys-admin-top {
  border-bottom: 1px solid #f8f8f8;
  box-shadow: 0 2px 4px #f2f2f2;
  background: #fff;
}

.el-container {
  background: #f2f2f2;
  height: 100vh;
}

.el-main {
  background: #fff;
  margin: 10px;
  border-radius: 6px;
}

.el-main::-webkit-scrollbar-track-piece {
  background-color: #f8f8f8;
}

.el-main::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  border-radius: 1px;
}

.el-main::-webkit-scrollbar-thumb {
  //滚动条的设置
  background-color: #dddddd;
  background-clip: padding-box;
  min-height: 28px;
}

.el-main::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}

.el-icon-s-fold {
  cursor: pointer;
}

.el-icon-s-fold:hover {
  color: #1890ff;
}

.el-icon {
  font-size: 16px;
  color: #1890ff;
}

.el-aside {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(29, 35, 41, 0.05) 2px 0px 8px 0px;
  min-height: 100vh;
  z-index: 1;
  transition: width 0.5s;
}

.logo {
  box-shadow: rgba(0, 21, 41, 0.05) 0px 1px 0px;
  padding: 0px;
  background: #ffffff;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  height: 64px;

  .logo-h1 {
    color: #1890ff;
    margin-left: 5px;
    font-family: lighter;
  }
}

.el-header {
  line-height: 60px;
  padding: 0;
}

.pointer {
  cursor: pointer;
  color: #1890ff;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-enter {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-leave {
  opacity: 0;
}
</style>
