import http from "../utils/http";
import { api } from "../config/api";

//文章列表
export let list = (model_id, cur = 1) => {
  return http({
    url: `${api.API_URL}/api/field/list?cur=${cur}&model_id=${model_id}`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${api.API_URL}/api/field/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${api.API_URL}/api/field/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${api.API_URL}/api/field/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${api.API_URL}/api/field/detail?id=${id}`,
    method: "get",
  });
};
