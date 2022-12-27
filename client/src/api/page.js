import http from "../utils/http";
import { api } from "../config/api";

//文章列表
export let search = (cur, keyword = "") => {
  return http({
    url: `${api.API_URL}/api/page/search?cur=${cur}&pageSize=10&keyword=${keyword}`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/page/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${api.API_URL}/api/page/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/page/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${api.API_URL}/api/page/detail?id=${id}`,
    method: "get",
  });
};
