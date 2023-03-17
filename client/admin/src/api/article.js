import http from "../utils/http";
import { api } from "../config/api";

//文章列表
export let search = (cur, keyword = "", cid = 0) => {
  return http({
    url: `${api.API_URL}/api/article/search?cur=${cur}&pageSize=10&keyword=${keyword}&cid=${cid}`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/article/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${api.API_URL}/api/article/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/article/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${api.API_URL}/api/article/detail?id=${id}`,
    method: "get",
  });
};

export let findField = (cid) => {
  return http({
    url: `${api.API_URL}/api/article/findField?cid=${cid}`,
    method: "get",
  });
};

export let tongji = () => {
  return http({
    url: `${api.API_URL}/api/article/tongji`,
    method: "get",
  });
};
