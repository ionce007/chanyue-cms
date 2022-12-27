import http from "../utils/http";
import { api } from "../config/api";

//文章列表
export let list = (cur) => {
  return http({
    url: `${api.API_URL}/api/message/list?cur=${cur}&pageSize=10`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/message/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${api.API_URL}/api/message/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/message/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${api.API_URL}/api/message/detail?id=${id}`,
    method: "get",
  });
};
