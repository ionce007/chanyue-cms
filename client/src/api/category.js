import http from "../utils/http";
import { api } from "../config/api";

//查 所有栏目
export let find = () => {
  return http({
    url: `${api.API_URL}/api/category/find`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/category/create`,
    method: "post",
    data: opt,
  });
};

//栏目详情
export let findId = (id) => {
  return http({
    url: `${api.API_URL}/api/category/findId?id=${id}`,
    method: "get",
  });
};

//判断是否有子栏目
export let findSubId = (id) => {
  return http({
    url: `${api.API_URL}/api/category/findSubId?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/category/update`,
    method: "post",
    data: opt,
  });
};

export let destory = (id) => {
  return http({
    url: `${api.API_URL}/api/category/delete?id=${id}`,
    method: "get",
  });
};

export let search = (key) => {
  return http({
    url: `${api.API_URL}/api/category/search?q=${key}`,
    method: "get",
  });
};
