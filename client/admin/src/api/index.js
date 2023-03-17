import http from "../utils/http";
import { api } from "../config/api";

/**
 * @description 登录
 * @param {*} param
 */
export let login = ({ username, password }) => {
  return http({
    url: `${api.API_URL}/api/admin/login`,
    method: "post",
    data: {
      username,
      password,
    },
  });
};

/**
 * @description 注册
 * @param {*} param
 */
export let create = ({ username, password }) => {
  return http({
    url: `${api.API_URL}/api/auth/admin/create`,
    method: "post",
    data: {
      username,
      password,
    },
  });
};

//验证码
export let captcha = (ver) => {
  return http({
    url: `${api.API_URL}/api/captcha?v=${ver}`,
    method: "get",
  });
};

//检测验证码
export let checkCaptcha = (captcha) => {
  return http({
    url: `${api.API_URL}/api/checkCaptcha`,
    method: "post",
    data: {
      captcha,
    },
  });
};
