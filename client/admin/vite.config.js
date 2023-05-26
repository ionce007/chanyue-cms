import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacyPlugin from "@vitejs/plugin-legacy";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacyPlugin({
      targets: ["> 1%, last 1 version, ie >= 11"], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"], // 面向IE11时需要此插件
    }),
    // del({
    //   targets: "../server/app/public/admin/",
    //   force: true,
    // }),
    copy({
      targets: [{ src: "dist/*", dest: "../../server/app/public/admin" }],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist", //输出路径
    assetsDir: "assets", //静态资源的存放路径
    manifest: false,
    chunkSizeWarningLimit: 200, // chunk 大小警告的限制
    cssCodeSplit: true,
    target: "es2015", // 默认 "modules"
    rollupOptions: {
      // input: {
      //   1: path.resolve(__dirname, "./src/index.html"),
      // },
      output: {
        // 最小化拆分包
        manualChunks(id) {
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
      },
      minify: "esbuild",
      terserOptions: {
        // compress: {
        //     drop_console: false, //去掉console
        //     drop_debugger: false, // 去掉debugger
        // },
      },
    },
  },
  base: "./", // 生产环境下的公共路径
  outDir: "dist",
  filenameHashing: true, //文件名哈希
  lintOnSave: true,
  //服务器配置
  server: {
    host: "0.0.0.0",
    port: "3000",
    open: true, // 浏览器自动打开
    https: false, // 是否开启 https
    ssr: false, // 服务端渲染
    strictPort: true, //端口占用，自动尝试下一个端口
    //代理配置
    proxy: {
      "/api": {
        target: "http://localhost:81/api", // api接口代理,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/public": {
        target: "http://localhost:81/public", // 上传图片代理,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/public/, ""),
      },
    },
    hmr: {
      overlay: false, //报错不显示在页面上
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        //additionalData: '@import "./src/assets/style/global.less";',
        javascriptEnabled: true,
      },
    },
  },
});
