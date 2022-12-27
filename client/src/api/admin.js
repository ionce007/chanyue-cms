import http from "../utils/http";
import { api } from "../config/api";

//文章列表
export let list = (cur) => {
  return http({
    url: `${api.API_URL}/api/admin/list?cur=${cur}&pageSize=10`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/admin/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${api.API_URL}/api/admin/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/admin/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${api.API_URL}/api/admin/detail?id=${id}`,
    method: "get",
  });
};
