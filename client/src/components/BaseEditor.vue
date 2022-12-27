<template>
  <div>
    <div style="border: 1px solid #ccc; margin-top: 10px">
      <Toolbar
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :defaultConfig="editorConfig"
        :mode="mode"
        v-model="content"
        style="height: 400px; overflow-y: hidden"
        @onCreated="handleCreated"
        @onChange="handleChange"
      />
    </div>
    <div class="source" v-if="sourceFlag" @click="toggleSource">
      <textarea
        v-model="content"
        autofocus="true"
        class="content"
        @click.stop=""
      ></textarea>
    </div>
  </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css";
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { Boot } from "@wangeditor/editor";
import { getCookie } from "../utils/tools";
// 导入事件总线
import emitter from "../utils/eventbus.js";
//自定义查看源码
try {
  class MyButtonMenu {
    constructor() {
      (this.title = "源码"), (this.tag = "button");
    }
    getValue() {
      return "";
    }
    isActive() {
      return false;
    }
    isDisabled() {
      return false;
    }
    exec(editor) {
      console.log(editor);
      emitter.emit("toggle");
    }
  }
  const menuConf = {
    key: "source", // menu key ，唯一。注册之后，需通过 toolbarKeys 配置到工具栏
    factory() {
      return new MyButtonMenu();
    },
  };
  Boot.registerMenu(menuConf);
} catch (error) {
  console.log(error);
}

export default {
  components: { Editor, Toolbar },
  props: ["content"],
  setup(props, { emit }) {
    // 编辑器实例，必须用 shallowRef，重要！
    const editorRef = shallowRef();

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      emitter.on("toggle", () => {
        toggleSource();
      });
    });

    //配置自定义源码位置
    const toolbarConfig = {
      insertKeys: {
        index: 0,
        keys: "source",
      },
    };

    const editorConfig = {
      placeholder: "请输入内容...",
      MENU_CONF: {
        uploadImage: {
          server: "/api/upload",
          // 自定义增加 http  header
          headers: {
            auth: getCookie("token") || "",
          },
          customInsert(res, insertFn) {
            console.log(res);
            insertFn(res.link, "", "");
          },
        },
      },
    };

    // 组件销毁时，也及时销毁编辑器，重要！
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    // 编辑器回调函数
    const handleCreated = (editor) => {
      console.log("created", editor);
      editorRef.value = editor; // 记录 editor 实例，重要！
    };

    const handleChange = (editor) => {
      emit("setContent", editor.getHtml());
    };

    const sourceFlag = ref(false);

    const toggleSource = () => {
      sourceFlag.value = !sourceFlag.value;
    };

    return {
      editorRef,
      mode: "default",
      toolbarConfig,
      editorConfig,
      sourceFlag,
      handleCreated,
      handleChange,
      toggleSource,
    };
  },
};
</script>

<style scoped>
.source {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  top: 0;
  left: 0;
}

.content {
  width: 80%;
  height: 90%;
  margin: 3% auto;
  line-height: 24px;
  padding: 20px;
  font-family: emoji;
  background: #fff;
  border-radius: 6px;
  box-shadow: 2px 2px 2px #fff;
}
</style>
