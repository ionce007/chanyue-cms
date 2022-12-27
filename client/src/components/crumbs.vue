<template>
  <div class="crumbs">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <a href="javascript:;">{{ $route.matched[0].meta.title }}</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(level, index) in this.levelList"
        :key="index"
        :to="level.path"
      >
        {{ level.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "crumbs",
  props: {
    isShow: {
      type: Boolean,
      default: true, //默认值为true 显示
    },
  },
  data() {
    return {
      levelList: [],
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to,from)
      // 思路：判断meta中level为几，就把它放在第几个
      // 注意：存放到localStorage中的数据格式最好统一，我在这里把它统一成了数组的格式
      // levelList最终的格式要为：[{name:"xx",path:"xx",breadNum:"xx"}]
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      // 1.获取当前的name,path,level
      var newName = this.$route.meta.title;
      var newPath = this.$route.fullPath;
      var newBreadNum = this.$route.meta.level;

      // 2.获取前一页存下的name,path,level
      var routerInfo =
        JSON.parse(window.localStorage.getItem("routerInfo")) || [];
      this.levelList = routerInfo;

      // 3.判断是否是第一层，即初始位置，如果是第一层，分两种情况
      if (this.$route.meta.level === 1) {
        // 3.1 localStorage有值，那么this.levelList不是空值，说明是由上一个主路由进来的，需要清空之前localStorage的值，并且重新赋值给levelList
        if (this.levelList.length != 0) {
          localStorage.removeItem("routerInfo");
          this.levelList = [];
        }
        // 3.2 localStorage没有值，说明就是第一次进主路由，直接赋值
        this.levelList.push({
          name: newName,
          path: newPath,
          level: newBreadNum,
        });
        // 按照数组格式的方式存放
        window.localStorage.setItem(
          "routerInfo",
          JSON.stringify(this.levelList)
        );
      } else {
        // 4.level不等于1时，那么this.levalList一定不是空值，判断获取到的这个level在数组中是否存在
        var islevel = false;
        for (var i = 0; i < this.levelList.length; i++) {
          if (this.levelList[i].level == newBreadNum) {
            // return true; // 为true时表示数组内已存在 false表示不存在
            islevel = true;
            break; //在这里不用return，return会终止循环
          }
        }

        // 4.1 如果存在，说明是所有路由展示已经完（或者是展示了前面几个，然后点击面包屑），点击面包屑上其中的一个标签
        //就要删掉这个后面的所有值，并且将点击所获得的的这个值存进this.levalList数组中
        if (islevel) {
          //删除点击的后面所有信息，localStorage中的数据也要删除（这里的删除是截取，而不是完全删除），然后将该信息添加进去
          //要注意的是，这里的变化还有可能是点击面包屑时产生的，其他地方通常是通过路由跳转得到的
          // 注意这里splice的用法，如果直接写在localStorage.setItem 中，得到的值是被截取的值，而不是截取后的值
          routerInfo.splice(newBreadNum, routerInfo.length - newBreadNum);
          window.localStorage.setItem("routerInfo", JSON.stringify(routerInfo));
        } else {
          // 4.2 如果不存在，说明是按照顺序进行的,如一级跳到二级，再从二级跳到三级
          //把它存到localStorage中，并把值给this.leavalList数组
          this.levelList.push({
            name: newName,
            path: newPath,
            level: newBreadNum,
          });
          window.localStorage.setItem(
            "routerInfo",
            JSON.stringify(this.levelList)
          );
        }
      }
    },
  },

  created() {
    this.getBreadcrumb();
  },
};
</script>

<style scoped lang="less"></style>
