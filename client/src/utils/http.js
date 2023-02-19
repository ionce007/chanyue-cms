// wiki https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";
import { getCookie, setCookie } from "../utils/tools";
import { ElMessage } from "element-plus";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.crossDomain = true; //设置cross跨域 并设置访问权限
axios.defaults.withCredentials = true; //允许跨域携带cookie信息

// 创建axios实例
const http = axios.create({
  baseURL: "/", // api的base_url
  timeout: 5000, // 请求超时时间
});

// request拦截器
http.interceptors.request.use(
  (config) => {
    config.headers["auth"] = getCookie("token") || "";
    //拦截放行
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// respone拦截器
http.interceptors.response.use(
  (response) => {
    const data = response.data;

    if (data.code === 0) {
      console.log("data->", data);
      if (data.msg.name == "TokenExpiredError") {
        ElMessage.success("登录失效，请重新登录");
      } else {
        ElMessage.success(data.msg);
      }
      setCookie("token", "");
      location.href = location.origin + location.pathname + "#/login";
      return;
    }
    //拦截放行
    return Promise.resolve(data);
  },
  (error) => {
    console.warn(error);
    return Promise.reject(error);
  }
);

export default http;
