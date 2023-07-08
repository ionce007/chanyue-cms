import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/components/layout/index.vue";
import HomeView from "../views/home/info.vue";

export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/test/index.vue"),
    meta: {
      title: "404",
    },
  },
];

// 看作是异步获取路由 通过路由拦截来动态吧这块追加进去
export const asyncRoutes = [
  {
    path: "/home",
    name: "home-info",
    component: "@/views/home/info.vue",
    meta: {
      title: "网站信息",
      icon: "DataLine",
      role: ["admin"],
    },
  },
  {
    path: "/sys",
    name: "home-sys",
    icon: "Setting",
    component: "@/views/home/sys.vue",
    meta: {
      title: "系统设置",
      icon: "location",
      role: ["editor"],
    },
  },
  {
    path: "/category",
    name: "category-index",
    icon: "setting",
    component: "@/views/category/index.vue",
    meta: {
      title: "栏目管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "category-add",
        icon: "setting",
        component: "@/views/category/add.vue",
        meta: {
          title: "栏目管理-新增",
          icon: "location",
          isShow: false,
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "category-edit",
        icon: "setting",
        component: "@/views/category/edit.vue",
        meta: {
          title: "页面管理-更新",
          icon: "location",
          isShow: false,
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/article",
    name: "article-index",
    icon: "setting",
    component: "@/views/article/index.vue",
    meta: {
      title: "文章管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "article-add",
        icon: "setting",
        component: "@/views/article/add.vue",
        meta: {
          title: "文章管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "article-edit",
        icon: "setting",
        component: "@/views/article/edit.vue",
        meta: {
          title: "文章管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/model",
    name: "model-index",
    icon: "setting",
    component: "@/views/model/index.vue",
    meta: {
      title: "模型管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "model-add",
        icon: "setting",
        component: "@/views/model/add.vue",
        meta: {
          title: "模型管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "model-edit",
        icon: "setting",
        component: "@/views/model/edit.vue",
        meta: {
          title: "模型管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/field",
    name: "field-index",
    icon: "setting",
    component: "@/views/field/index.vue",
    meta: {
      title: "字段管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "field-add",
        icon: "setting",
        component: "@/views/field/add.vue",
        meta: {
          title: "字段管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit",
        name: "field-edit",
        icon: "setting",
        component: "@/views/field/edit.vue",
        meta: {
          title: "字段管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/ad",
    name: "ad-index",
    icon: "setting",
    component: "@/views/ad/index.vue",
    meta: {
      title: "广告管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "ad-add",
        icon: "setting",
        component: "@/views/ad/add.vue",
        meta: {
          title: "广告管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit",
        name: "ad-edit",
        icon: "setting",
        component: "@/views/ad/edit.vue",
        meta: {
          title: "广告管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/page",
    name: "page-index",
    icon: "setting",
    component: "@/views/page/index.vue",
    meta: {
      title: "页面管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "page-add",
        icon: "setting",
        component: "@/views/page/add.vue",
        meta: {
          title: "页面管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "page-edit",
        icon: "setting",
        component: "@/views/page/edit.vue",
        meta: {
          title: "页面管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/friendlink",
    name: "friendlink-index",
    icon: "setting",
    component: "@/views/friendlink/index.vue",
    meta: {
      title: "友情链接",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "friendlink-add",
        icon: "setting",
        component: "@/views/friendlink/add.vue",
        meta: {
          title: "友情链接-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "friendlink-edit",
        icon: "setting",
        component: "@/views/friendlink/edit.vue",
        meta: {
          title: "友情链接-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/message",
    name: "message-index",
    icon: "setting",
    component: "@/views/message/index.vue",
    meta: {
      title: "消息管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "message-add",
        icon: "setting",
        component: "@/views/message/add.vue",
        meta: {
          title: "消息管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "message-edit",
        icon: "setting",
        component: "@/views/message/edit.vue",
        meta: {
          title: "消息管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/admin",
    name: "admin-index",
    icon: "setting",
    component: "@/views/admin/index.vue",
    meta: {
      title: "管理员列表",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "admin-add",
        icon: "setting",
        component: "@/views/admin/add.vue",
        meta: {
          title: "管理员列表-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "message-edit",
        icon: "setting",
        component: "@/views/admin/edit.vue",
        meta: {
          title: "管理员列表-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/frag",
    name: "frag-index",
    icon: "setting",
    component: "@/views/frag/index.vue",
    meta: {
      title: "碎片管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "frag-add",
        icon: "setting",
        component: "@/views/frag/add.vue",
        meta: {
          title: "碎片管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "frag-edit",
        icon: "setting",
        component: "@/views/frag/edit.vue",
        meta: {
          title: "碎片管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },

  {
    path: "/tag",
    name: "tag-index",
    icon: "setting",
    component: "@/views/tag/index.vue",
    meta: {
      title: "标签管理",
      icon: "location",
      role: ["admin"],
    },
    children: [
      {
        path: "add",
        name: "tag-add",
        icon: "setting",
        component: "@/views/tag/add.vue",
        meta: {
          title: "标签管理-新增",
          icon: "location",
          role: ["admin"],
        },
      },
      {
        path: "edit/:id",
        name: "tag-edit",
        icon: "setting",
        component: "@/views/tag/edit.vue",
        meta: {
          title: "标签管理-更新",
          icon: "location",
          role: ["admin"],
        },
      },
    ],
  },
];

//导出最终路由
export const routes = constantRoutes;

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

/**
 * 路由拦截
 * 1.用户登录之后，通过pinia在存储用户角色和token
 * 2.通过路由和角色过滤出对应角色的路由，然后动态添加到路由上面
 * router.beforeEach(async (to, from, next)
 */

import { userStore } from "@/stores/user";
router.beforeEach(async (to, from) => {
  const user = userStore();
  if (user.token) {
    //已登录
    if (to.path === "/login") {
      //已登录直接进入首页
      return { path: "/" };
    } else {
      //校验token是否正确或者过期
      if (user.userInfo) {
        //刷新页面后，这个就没有了，然后动态添加路由，刷新重定向路由
        return true;
      } else {
        //然后动态添加路由，刷新重定向路由
        const role = await user.getUserInfo();
        //根据获取菜单
        await user.getMenuList();
        //根据用户角色role，和菜单生成路由
        const accessRoutes = user.getAccessRoutes(role);
        //添加路由
        accessRoutes.forEach((route) => {
          router.addRoute("Layout", route);
        });
        //触发重定向
        return to.fullPath;
      }
    }
  } else {
    //没登录
    if (to.path === "/login") {
      return true; //放行
    } else {
      return { path: "/login", query: { redirect: to.fullPath } };
    }
  }
});
export default router;
