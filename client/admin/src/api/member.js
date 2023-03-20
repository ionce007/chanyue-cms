import http from "../utils/http";
import { api } from "../config/api";

//查 所有栏目
export let find = () => {
  return http({
    url: `${api.API_URL}/api/member/find`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/member/create`,
    method: "post",
    data: opt,
  });
};

//栏目详情
export let findId = (id) => {
  return http({
    url: `${api.API_URL}/api/member/findId?id=${id}`,
    method: "get",
  });
};

//判断是否有子栏目
export let findSubId = (id) => {
  return http({
    url: `${api.API_URL}/api/member/findSubId?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/member/update`,
    method: "post",
    data: opt,
  });
};

export let destory = (id) => {
  return http({
    url: `${api.API_URL}/api/member/delete?id=${id}`,
    method: "get",
  });
};

export let search = (key) => {
  return http({
    url: `${api.API_URL}/api/member/search?q=${key}`,
    method: "get",
  });
};
