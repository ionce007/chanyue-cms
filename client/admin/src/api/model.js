import http from "../utils/http";
import { api } from "../config/api";

//文章列表
export let list = (cur = 1) => {
  return http({
    url: `${api.API_URL}/api/model/list?cur=${cur}`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/model/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id, table_name) => {
  return http({
    url: `${api.API_URL}/api/model/delete`,
    method: "post",
    data: {
      id,
      table_name,
    },
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/model/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${api.API_URL}/api/model/detail?id=${id}`,
    method: "get",
  });
};

//判断模型是否被使用
export let hasUse = (id) => {
  return http({
    url: `${api.API_URL}/api/model/hasUse?id=${id}`,
    method: "get",
  });
};
