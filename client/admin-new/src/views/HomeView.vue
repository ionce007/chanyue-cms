<template>
  <div>
    <p>数据：{{ count }}</p>
    <button @click="handleClick">修改状态数据</button>
  </div>
</template>

<script setup>
import { mainStore } from "@/stores/counter.js"; //导入状态仓库
import { storeToRefs } from "pinia";
const store = mainStore(); //实例化仓库
// 解构并使数据具有响应式
const { count } = storeToRefs(store);
function handleClick() {
  // count.value++;
  store.$patch((state) => {
    state.title = "hello 摩诃";
    state.count++;
  });
}
</script>
