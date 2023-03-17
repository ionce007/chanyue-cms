module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 37.5 : 75;
      },
      //rootValue: 75, // 根据设计图尺寸写，PC端设计图是1920，就写192
      propList: ["*", "!border"], // 除 border 外所有px 转 rem
      unitPrecision: 5, //最多小数位数;
      selectorBlackList: [/^\.van-/, /^\.mescroll/, ".norem"], //忽略.van-和.mescroll开头的类名;
      replace: true,
      mediaQuery: false, //允许在媒体查询中转换px
      minPixelValue: 2, //设置要替换的最小像素值
    },
  },
};
