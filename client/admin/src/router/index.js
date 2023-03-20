import { createRouter, createWebHashHistory } from "vue-router";
import { setTitle, getCookie } from "../utils/tools";

const routes = [
  {
    path: "/login",
    name: "login-in",
    meta: {
      title: "登录",
      auth: false,
    },

    component: () => import("../views/login.vue"),
  },

  {
    path: "",
    name: "home-index",
    meta: {
      title: "首页",
      auth: false,
      level: 1,
    },
    redirect: {
      name: "home-info",
    },
    component: () => import("../views/home/Home.vue"),
    children: [
      {
        path: "/",
        name: "home-info",
        meta: {
          title: "网站信息",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/home/info.vue"),
      },
      {
        path: "/sys",
        name: "home-sys",
        meta: {
          title: "系统设置",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/home/sys.vue"),
      },
      {
        path: "/category",
        name: "category-index",
        meta: {
          title: "栏目管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/category/index.vue"),
      },
      {
        path: "/category/add",
        name: "category-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/category/add.vue"),
      },
      {
        path: "/category/edit/:id",
        name: "category-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/category/edit.vue"),
      },

      {
        path: "/article",
        name: "article-index",
        meta: {
          title: "文章管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/article/index.vue"),
      },
      {
        path: "/article/add",
        name: "article-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/article/add.vue"),
      },
      {
        path: "/article/edit/:id",
        name: "article-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/article/edit.vue"),
      },

      {
        path: "/model",
        name: "model-index",
        meta: {
          title: "模型管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/model/index.vue"),
      },
      {
        path: "/model/add",
        name: "model-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/model/add.vue"),
      },
      {
        path: "/model/edit/:id",
        name: "model-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/model/edit.vue"),
      },

      {
        path: "/field",
        name: "field-index",
        meta: {
          title: "字段管理",
          auth: false,
          icon: "",
          level: 3,
        },
        component: () => import("../views/field/index.vue"),
      },
      {
        path: "/field/add",
        name: "field-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 4,
        },
        component: () => import("../views/field/add.vue"),
      },
      {
        path: "/field/edit",
        name: "field-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 4,
        },
        component: () => import("../views/field/edit.vue"),
      },
      {
        path: "/ad",
        name: "ad-index",
        meta: {
          title: "广告管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/ad/index.vue"),
      },
      {
        path: "/ad/add",
        name: "ad-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/ad/add.vue"),
      },
      {
        path: "/ad/edit/:id",
        name: "ad-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/ad/edit.vue"),
      },

      {
        path: "/page",
        name: "page-index",
        meta: {
          title: "页面管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/page/index.vue"),
      },
      {
        path: "/page/add",
        name: "page-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/page/add.vue"),
      },
      {
        path: "/page/edit/:id",
        name: "page-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/page/edit.vue"),
      },

      {
        path: "/friendlink",
        name: "friendlink-index",
        meta: {
          title: "友情链接",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/friendlink/index.vue"),
      },
      {
        path: "/friendlink/add",
        name: "friendlink-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/friendlink/add.vue"),
      },
      {
        path: "/friendlink/edit/:id",
        name: "friendlink-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/friendlink/edit.vue"),
      },

      {
        path: "/message",
        name: "message-index",
        meta: {
          title: "消息管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/message/index.vue"),
      },
      {
        path: "/message/add",
        name: "message-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
        },
        component: () => import("../views/message/add.vue"),
      },
      {
        path: "/message/edit/:id",
        name: "message-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/message/edit.vue"),
      },

      {
        path: "/admin",
        name: "admin-index",
        meta: {
          title: "管理员列表",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/admin/index.vue"),
      },
      {
        path: "/admin/add",
        name: "admin-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/admin/add.vue"),
      },
      {
        path: "/admin/edit/:id",
        name: "admin-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/admin/edit.vue"),
      },

      {
        path: "/frag",
        name: "frag-index",
        meta: {
          title: "碎片管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/frag/index.vue"),
      },
      {
        path: "/frag/add",
        name: "frag-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/frag/add.vue"),
      },
      {
        path: "/frag/edit/:id",
        name: "frag-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/frag/edit.vue"),
      },

      {
        path: "/tag",
        name: "tag-index",
        meta: {
          title: "标签管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () => import("../views/tag/index.vue"),
      },
      {
        path: "/tag/add",
        name: "tag-add",
        meta: {
          title: "新增",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/tag/add.vue"),
      },
      {
        path: "/tag/edit/:id",
        name: "tag-edit",
        meta: {
          title: "更新",
          auth: false,
          icon: "",
          level: 2,
        },
        component: () => import("../views/tag/edit.vue"),
      },
      {
        path: "/memberQuery",
        name: "memberQuery",
        meta: {
          title: "会员管理",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () =>
          import("../views/memberManagement/memberQuery/index.vue"),
      },
      {
        path: "/memberPoints",
        name: "memberPoints",
        meta: {
          title: "会员积分",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () =>
          import("../views/memberManagement/memberPoints/index.vue"),
      },
      {
        path: "/menberLevels",
        name: "menberLevels",
        meta: {
          title: "会员等级",
          auth: false,
          icon: "",
          level: 1,
        },
        component: () =>
          import("../views/memberManagement/menberLevels/index.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () => import("../components/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//路由守卫
router.beforeEach(async (to, from, next) => {
  //设置页面标题
  to.meta && setTitle(to.meta.title);
  //判断是否登录
  const token = getCookie();

  if (token) {
    if (to.name === "login-in") {
      next({
        name: "home-index",
      });
    } else {
      next();
    }
  } else {
    if (to.name === "login-in") {
      next();
    } else {
      next({
        name: "login-in",
      });
    }
  }
});

/**
 * 1.导航被触发
 * 2.在失活得组件（即将离开得页面组件）里面调用离开守卫 beforeRouteLeave
 * 3.调用全局得前置守卫 beforeEach
 * 4.在重用得组件里面调用beforeRouteUpdate
 * 5.调用路由独享得守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活得组件（即将进入得页面组件）里调用beforeRouteEnter
 * 8.调用全局得解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局得后置守卫 afterEach
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router;
