import http from "../utils/http";
import { api } from "../config/api";
//文章列表
export let search = (cur, keyword = "", pageSize = 10) => {
  return http({
    url: `${api.API_URL}/api/tag/search?cur=${cur}&pageSize=${pageSize}&keyword=${keyword}`,
    method: "get",
  });
};

//文章列表
export let list = (cur) => {
  return http({
    url: `${api.API_URL}/api/tag/list?cur=${cur}&pageSize=10`,
    method: "get",
  });
};

export let has = (path) => {
  return http({
    url: `${api.API_URL}/api/tag/has?path=${path}`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/tag/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${api.API_URL}/api/tag/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/tag/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${api.API_URL}/api/tag/detail?id=${id}`,
    method: "get",
  });
};
