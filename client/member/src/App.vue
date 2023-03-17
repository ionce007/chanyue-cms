<template>
  <router-view v-slot="{ Component }" :key="$route.fullPath">
    <transition name="fade" mode="in-out">
      <keep-alive v-if="$route?.meta?.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </transition>
  </router-view>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="less">
.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
}
</style>
