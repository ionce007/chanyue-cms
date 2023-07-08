<template>
  <!-- 无子目录 -->
  <template v-for="(item, index) of data" :key="index">
    <!-- 有子目录 -->

    <el-sub-menu
      v-if="item?.children?.length > 0 && item?.meta?.isShow"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component v-if="item.meta" :is="item.meta.icon"></component>
        </el-icon>
        <span @click="goto(item)">{{ item?.meta?.title }}</span>
      </template>
      <SidebarItem :data="item.children"></SidebarItem>
    </el-sub-menu>

    <!-- 无子目录 -->
    <el-menu-item v-else :index="item.path" @click="goto(item)">
      <el-icon>
        <component v-if="item.meta" :is="item.meta.icon"></component>
      </el-icon>
      <template #title>{{ item?.meta?.title }}</template>
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    goto(item) {
      // 跳转到指定路由
      if (item?.children?.length > 0) {
        return false;
      } else {
        this.$router.push({
          path: item.path,
          query: item.query,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.ico-nav {
  width: 40px;
  height: 40px;
  border-radius: 15px;
  box-shadow: inset 0px 0px 5px #f2f2f2;
  padding: 4px;
  display: inline-block;
  margin-right: 5px;
  img {
    width: 100%;
  }
}
</style>
