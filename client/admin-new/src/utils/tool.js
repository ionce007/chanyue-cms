import Cookies from "js-cookie";

export const setTitle = (title) => {
  window.document.title = `${title}-禅悦管理系统` || "禅悦管理系统";
};

export const setCookie = (tokenName = "token", token) => {
  Cookies.set(tokenName, token);
};

export const getCookie = (tokenName = "token") => {
  return Cookies.get(tokenName);
};

//无限极分类 适配 element-ui组件
export let addLabelValue = (arr) => {
  for (let item of arr) {
    item["label"] = item["name"];
    item["value"] = item["id"];
    if (item.children) {
      addLabelValue(item.children);
    }
  }
  return arr;
};

// 无限极分类tree
export let tree = (arr, pid = 0, leval = 1) => {
  let tmp = [];
  arr.forEach((item, index) => {
    if (item.pid == pid) {
      item.leval = leval;
      item.children = tree(arr, item.id, leval + 1);
      tmp.push(item);
    }
  });
  return tmp;
};

//返回id父级所有栏目
export let treeById = (id, source) => {
  const arr = [];
  let findId = (id, source) => {
    for (let i = 0, item; i < source.length; i++) {
      item = source[i];
      if (item.id == id) {
        arr.unshift(item.id);
        if (item.pid != 0) {
          findId(item.pid, source);
        }
      }
    }
  };
  findId(id, source);
  return arr;
};

// html过滤出图片
export let getImgUrlFromStr = (str) => {
  let imgReg = /<img.*?(?:>|\/>)/gi; //匹配出图片img标签
  // eslint-disable-next-line no-useless-escape
  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i; //匹配出图片src属性
  let arr = str.match(imgReg);
  let imgArr = [];
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      let src = arr[i].match(srcReg);
      if (src[1]) {
        imgArr.push(src[1]);
      }
    }
  }
  return imgArr;
};

// 过滤 html标签
export let filterHtml = (str) => {
  return str.replace(/<[^>]*>/g, "");
};

// 过滤 body标签
export let filterBody = (str) => {
  var result = /<body[^>]*>([\s\S]*)<\/body>/.exec(str);
  if (result && result.length === 2) return result[1];
  return str;
};
