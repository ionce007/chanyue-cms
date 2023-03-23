import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

//组件扩展名称
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import copy from "rollup-plugin-copy";

export default ({ mode }) => {
  console.log("mode--->", mode);
  return defineConfig({
    plugins: [
      vue(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      copy({
        targets: [{ src: "dist/*", dest: "../../server/app/public/member" }],
      }),
      VueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@styles/variables.scss";`,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "dist", //输出路径
      assetsDir: "assets", //静态资源的存放路径
      manifest: false,
      sourcemap: true,
      minify: "terser", // 混淆器,terser构建后文件体积更小
      chunkSizeWarningLimit: 200, // chunk 大小警告的限制
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      target: "es2015", // 默认 "modules"
      rollupOptions: {
        // input: {
        //   1: path.resolve(__dirname, "./src/index.html"),
        // },
        output: {
          // 最小化拆分包
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
          entryFileNames: `assets/js/[name].js`,
          chunkFileNames: `assets/js/[name].js`,
          assetFileNames: `assets/[ext]/[name].[ext]`,
          // chunkFileNames: (chunkInfo) => {
          //   const facadeModuleId = chunkInfo.facadeModuleId
          //     ? chunkInfo.facadeModuleId.split("/")
          //     : [];
          //   const fileName =
          //     facadeModuleId[facadeModuleId.length - 2] || "[name]";
          //   return `js/${fileName}/[name].[hash].js`;
          // },
        },
        minify: "esbuild",
        terserOptions: {
          compress: {
            drop_console: false, // 去掉console
            drop_debugger: true, // 去掉debugger
          },
        },
      },
    },

    base: "./", // 生产环境下的公共路径
    filenameHashing: true, //文件名哈希
    lintOnSave: true,

    //服务器配置
    server: {
      host: "0.0.0.0",
      port: "3000",
      open: "index.html#/", // 浏览器自动打开 关闭false
      https: false, // 是否开启 https
      ssr: false, // 服务端渲染
      strictPort: true, //端口占用，自动尝试下一个端口
      //代理配置
      proxy: {
        "/member": {
          target: "http://localhost:81/member", // 会员接口,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/member/, ""),
        },
        "/order": {
          target: "http://localhost:81/order", // 订单接口,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/order/, ""),
        },
      },
      hmr: {
        overlay: false, //报错不显示在页面上
      },
    },
  });
};
