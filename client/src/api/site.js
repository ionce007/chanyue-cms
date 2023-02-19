import http from "../utils/http";
import { api } from "../config/api";

/**
 * @description 网站基本信息
 */
export let siteInfo = () => {
  return http({
    url: `${api.API_URL}/api/site/find`,
    method: "get",
  });
};

//更新基本信息
export let updateInfo = ({ id, name, domain, email, icp, code }) => {
  return http({
    url: `${api.API_URL}/api/site/updateInfo`,
    method: "post",
    data: {
      id,
      name,
      domain,
      email,
      icp,
      code,
    },
  });
};

//更新seo
export let updateSeo = ({ id, title, keywords, description }) => {
  return http({
    url: `${api.API_URL}/api/site/updateSeo`,
    method: "post",
    data: {
      id,
      title,
      keywords,
      description,
    },
  });
};

/**
 * @description 运行环境
 */
export let runEnv = () => {
  return http({
    url: `${api.API_URL}/api/site/runEnv`,
    method: "get",
  });
};
